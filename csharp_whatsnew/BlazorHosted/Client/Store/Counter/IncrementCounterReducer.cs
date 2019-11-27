using Blazor.Fluxor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.Counter
{
    public class IncrementCounterReducer : Reducer<CounterState, IncrementCounterAction>
    {
        public override CounterState Reduce(CounterState state, IncrementCounterAction action) =>
            new CounterState(state.ClickCount + 1);
    }
}
