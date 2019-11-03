using System;
using WhatsNewCs70;

namespace cs70
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("C# 7.0");
            InlineOutVar.ParseAsIntDemo("123");
            InlineOutVar.ParseAsIntDemo("123.09");
            InlineOutVar.ParseAsIntDemo("waht?");
            Console.WriteLine("--------------------");
            TuplesTricks.Demo();
            Console.WriteLine("--------------------");
            UnpackDestruct.Demo();
            Console.WriteLine("--------------------");
            DiscardWithTuple.Demo();
            Console.WriteLine("--------------------");
            PatternMatching.Demo();
            Console.WriteLine("--------------------");
            RefLocalsAndReturns.Demo();
            Console.WriteLine("--------------------");
            LocalFunctions.Demo();
            Console.WriteLine("--------------------");
            ExpressionMembersExample.Demo();
            GC.Collect();
            Console.WriteLine("--------------------");
            ThrowExpressions.Demo();
            Console.WriteLine("--------------------");
            GeneralizedAsyncReturnTypes.Demo();
            Console.WriteLine("--------------------");
            NewNumericLiteral.Demo();
        }
    }
}
