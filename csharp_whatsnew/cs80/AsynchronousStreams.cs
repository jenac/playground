using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace cs80
{
    public class AsynchronousStreams
    {
        public static async Task Demo()
        {
            await foreach (var number in GenerateSequence())
            {
                Console.WriteLine(number);
            }
        }
        public static async IAsyncEnumerable<int> GenerateSequence()
        {
            for (int i = 0; i < 20; i++)
            {
                await Task.Delay(100);
                yield return i;
            }
        }
    }
}