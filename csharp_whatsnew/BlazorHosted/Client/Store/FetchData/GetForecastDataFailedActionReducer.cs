using Blazor.Fluxor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.FetchData
{
    public class GetForecastDataFailedActionReducer : Reducer<FetchDataState, GetForecastDataFailedAction>
    {
        public override FetchDataState Reduce(FetchDataState state, GetForecastDataFailedAction action)
        {
            return new FetchDataState(
                isLoading: false,
                errorMessage: action.ErrorMessage,
                forecasts: null);
        }
    }
}
