using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using System.Diagnostics;

namespace SomeIdea
{
    [TestClass]
    public class LinqVsLoop
    {
        [TestMethod]
        public void Performance()
        {
            var array = Enumerable.Range(0, 1000000).ToArray();
            var swLoop = new Stopwatch();
            int coutLoop = 0;
            swLoop.Start();
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i] % 2 == 0)
                    coutLoop++;
            }
            swLoop.Stop();
            var swLinq = new Stopwatch();
            swLinq.Start();
            int countLinq = array.Where(i => (i % 2 == 0)).Count();
            swLinq.Stop();

            
            Assert.IsTrue(countLinq == coutLoop);
            Console.WriteLine("Linq" + swLinq.Elapsed.TotalMilliseconds);
            Console.WriteLine("Loop" + swLoop.Elapsed.TotalMilliseconds);

        }
    }
}
