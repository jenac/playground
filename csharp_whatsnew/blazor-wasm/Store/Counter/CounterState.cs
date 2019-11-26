using System;

namespace blazor_wasm.Client.Store.Counter
{
	public class CounterState
	{
		public int ClickCount { get; private set; }

        [Obsolete("Used for deserialization only")]
        public CounterState() {}
		public CounterState(int clickCount)
		{
			ClickCount = clickCount;
		}
	}
}