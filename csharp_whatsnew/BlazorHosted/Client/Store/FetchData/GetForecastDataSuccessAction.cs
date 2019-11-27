using BlazorHosted.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.FetchData
{
    public class GetForecastDataSuccessAction
    {
        public WeatherForecast[] WeatherForecasts { get; private set; }

        public GetForecastDataSuccessAction(WeatherForecast[] weatherForecasts)
        {
            WeatherForecasts = weatherForecasts;
        }
    }
}
