using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhatsNewCs60;
using WhatsNewCs70;


namespace dotnet_console
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("C# 6.0");
            var studuent = new Student("Chen");
            Console.WriteLine(studuent.LastName);
            Console.WriteLine(studuent.FirstName);
            Console.WriteLine(studuent.GetFullName());
            studuent.ChangeName("No");
            studuent.Grades.ToList().ForEach( g => Console.WriteLine($"Grades: {g}"));
            studuent.RunNameOf();
            Console.WriteLine("--------------------");
            AwaitInCatchAndFinally.MakeRequestAndLogFailures().Wait();
            Console.WriteLine("--------------------");
            var obj = new InitializeAssociativeCollectionsUsingIndexers();
            obj.PrintAll();
            Console.WriteLine("--------------------");
            Task.Run(ImproveOverload.DoThings).Wait(); //now allowed in C#6, same as following
            Task.Run(() => ImproveOverload.DoThings()).Wait(); 
            Console.WriteLine("********************");
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
