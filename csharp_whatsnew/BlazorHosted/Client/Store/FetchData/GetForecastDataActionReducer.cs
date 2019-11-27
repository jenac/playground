using Blazor.Fluxor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.FetchData
{
    public class GetForecastDataActionReducer : Reducer<FetchDataState, GetForecastDataAction>
    {
        public override FetchDataState Reduce(FetchDataState state, GetForecastDataAction action)
        {
            return new FetchDataState(
                isLoading: true,
                errorMessage: null,
                forecasts: null);
        }
    }
}
