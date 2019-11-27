using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorHosted.Client.Store.Counter
{
    public class CounterState
    {
        public int ClickCount { get; private set; }

        public CounterState(int clickCount)
        {
            ClickCount = clickCount;
        }
    }
}
