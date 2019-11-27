using Blazor.Fluxor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.FetchData
{
    public class GetForecastDataSuccessActionReducer : Reducer<FetchDataState, GetForecastDataSuccessAction>
    {
        public override FetchDataState Reduce(FetchDataState state, GetForecastDataSuccessAction action)
        {
            return new FetchDataState(
                isLoading: false,
                errorMessage: null,
                forecasts: action.WeatherForecasts);
        }
    }
}
