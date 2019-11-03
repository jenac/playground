using System;
using System.Threading.Tasks;


namespace cs71
{
    class Program
    {
        //traditional way
        // static int Main()
        // {
        //     return DoAsyncWork().GetAwaiter().GetResult();
        // }

        //cs71 way
        // static async Task<int> Main() {
        //     return await DoAsyncWork();
        // }

        //cs71 if no return value
        static async Task Main()
        {
            Console.WriteLine("C# 7.1");
            await DoAsyncWork();
            Console.WriteLine("--------------------");
            DefaultLiteral.Demo();
            Console.WriteLine("--------------------");
            InferredTupleElementNames.Demo();
        }

        static async Task<int> DoAsyncWork()
        {
            await Task.Delay(100);
            Console.WriteLine("got the int");
            return 5;
        }


    }
}
