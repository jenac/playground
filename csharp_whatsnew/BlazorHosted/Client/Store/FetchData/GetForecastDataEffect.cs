using Blazor.Fluxor;
using BlazorHosted.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Blazor;
using System.Net.Http;
using Microsoft.AspNetCore.Components;

namespace BlazorHosted.Client.Store.FetchData
{
    public class GetForecastDataEffect : Effect<GetForecastDataAction>
    {
        private readonly HttpClient Http;

        public GetForecastDataEffect(HttpClient httpClient)
        {
            Http = httpClient;
        }

        protected async override Task HandleAsync(GetForecastDataAction action, IDispatcher dispatcher)
        {
            try
            {
                WeatherForecast[] forecasts =
                    await this.Http.GetJsonAsync<WeatherForecast[]>("WeatherForecast");
                dispatcher.Dispatch(new GetForecastDataSuccessAction(forecasts));
            }
            catch (Exception e)
            {
                dispatcher.Dispatch(new GetForecastDataFailedAction(errorMessage: e.Message));
            }
        }
    }
}
