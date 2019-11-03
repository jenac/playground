using System;
using System.Linq;
using System.Threading.Tasks;
using WhatsNewCs60;

namespace cs60
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
        }
    }
}
