using System;
using System.Linq;

namespace WhatsNewCs70
{
    public class TuplesTricks
    {
        public static void Demo()
        {
            (string Alpha, string Beta) namedLetters = ("a", "b");
            Console.WriteLine($"{namedLetters.Alpha}, {namedLetters.Beta}");

            var alphabetStart = (Alpha: "a", Beta: "b");
            Console.WriteLine($"{alphabetStart.Alpha}, {alphabetStart.Beta}");
        }
    }
}