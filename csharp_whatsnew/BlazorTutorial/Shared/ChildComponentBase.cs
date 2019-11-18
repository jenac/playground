using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using BlazorTutorial.Services;

namespace BlazorTutorial.Shared
{
    public class ChildComponentBase : ComponentBase
    {

        [Inject]
        protected RandomService RandomService { get; set; }
        protected bool DarkThemeOn;
        protected string AlertTheme => DarkThemeOn ? "dark" : "light";

        [Parameter]
        public RenderFragment ChildContent { get; set; }

        protected override void OnInitialized()
        {
            DarkThemeOn = true;
        }
    }


}
