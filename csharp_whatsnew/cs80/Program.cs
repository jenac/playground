using System;
using System.Threading.Tasks;

namespace cs80
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("C# 8.0");
            ReadonlyMembers.Demo();
            Console.WriteLine("--------------------");
            SwitchExpressions.Demo();
            Console.WriteLine("--------------------");
            PropertyPatterns.Demo();
            Console.WriteLine("--------------------");
            TuplePatterns.Demo();
            Console.WriteLine("--------------------");
            PositionalPatterns.Demo();
            Console.WriteLine("--------------------");
            UsingDeclarations.Demo();
            Console.WriteLine("--------------------");
            StaticLocalFunctions.Demo();
            Console.WriteLine("--------------------");
            await AsynchronousStreams.Demo();
            Console.WriteLine("--------------------");
            IndicesAndRanges.Demo();
            Console.WriteLine("--------------------");
            NullCoalescingAssignment.Demo();
        }
    }
}
