using System;

namespace WhatsNewCs70
{
    public class InlineOutVar
    {
        public static void ParseAsIntDemo(string input)
        {
            //good
            if (int.TryParse(input, out int result))
                Console.WriteLine($"{result}: {result.GetType()}");
            else
                Console.WriteLine("Could not parse input");

            //always "Could not parse input"
            if (int.TryParse(input, out var answer))
                Console.WriteLine(answer);
            else
                Console.WriteLine("Could not parse input"); 
        }
    }
}