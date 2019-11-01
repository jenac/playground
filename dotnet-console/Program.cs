using System;
using System.Linq;
using WhatsNewC60;

namespace dotnet_console
{
    class Program
    {
        static void Main(string[] args)
        {
            var studuent = new Student("Chen");
            Console.WriteLine(studuent.LastName);
            studuent.ChangeName("No");
            studuent.Grades.ToList().ForEach( g => Console.WriteLine($"Grades: {g}"));
            Console.WriteLine("Hello World!");
        }
    }
}
