
using Blazor.Fluxor;

namespace BlazorTutorial.Store.Counter
{
    public class IncrementCouterReducer : Reducer<CounterState, IncrementCouterAction>
    {
        public override CounterState Reduce(CounterState state, IncrementCouterAction action)
        {
            return new CounterState(state.CurrentCount + 1);
        }
    }
}