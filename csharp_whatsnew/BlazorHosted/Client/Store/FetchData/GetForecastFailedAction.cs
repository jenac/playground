using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.FetchData
{
    public class GetForecastDataFailedAction
    {
        public string ErrorMessage { get; private set; }

        public GetForecastDataFailedAction(string errorMessage)
        {
            ErrorMessage = errorMessage;
        }
    }
}
