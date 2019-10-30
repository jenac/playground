using System;
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
            Console.WriteLine("Hello World!");
        }
    }
}
