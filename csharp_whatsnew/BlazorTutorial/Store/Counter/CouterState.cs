using System;

namespace BlazorTutorial.Store.Counter
{
    public class CounterState
    {
        public int CurrentCount { get; set; }

        [Obsolete("Used for deserialization only")]
        public CounterState() {}
        
        public CounterState(int currentCount) 
        {
            CurrentCount = currentCount;
        }

    }
}