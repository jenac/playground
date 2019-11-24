using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Blazored.LocalStorage;
using Blazored.SessionStorage;
using BlazorTutorial.Data;
using Microsoft.AspNetCore.Components;

namespace BlazorTutorial.Services
{
    public class VisitTrackingService 
    {
        private const string StorageKey = "visits";

        private readonly NavigationManager _navigationManager;
        private readonly ISessionStorageService _sessionStorageService;
        private readonly ILocalStorageService _localStorageService;

        public VisitTrackingService(NavigationManager navigationManager, ISessionStorageService sessionStorageService, ILocalStorageService localStorageService) {
           _navigationManager = navigationManager;
           _sessionStorageService = sessionStorageService;
           _localStorageService = localStorageService; 
        }

        public async Task<List<PageVisit>> GetSessionVisistsAsync()
        {
            return await _sessionStorageService.GetItemAsync<List<PageVisit>>(StorageKey);
        }

        public async Task<List<PageVisit>> GetLocalVisitsAsync()
        {
            return await _localStorageService.GetItemAsync<List<PageVisit>>(StorageKey);
        }

        public async Task TrackingVisitInSession() 
        {
            var visits = await GetSessionVisistsAsync()?? new List<PageVisit>();
            visits.Insert(0, new PageVisit
                {
                    Url = _navigationManager.Uri,
                    DateTime = DateTime.UtcNow
                });
            await _sessionStorageService.SetItemAsync(StorageKey, visits);
        }

        public async Task TrackingVisitInLocal() 
        {
            var visits = await GetLocalVisitsAsync()?? new List<PageVisit>();
            visits.Insert(0, new PageVisit
                {
                    Url = _navigationManager.Uri,
                    DateTime = DateTime.UtcNow
                });
            await _localStorageService.SetItemAsync(StorageKey, visits);
        }
    }
}