using System;

namespace cs80
{
    public class StaticLocalFunctions
    {
        public static void Demo() {
            Console.WriteLine($"5+7={M()}");
        }
        public static int M()
        {
            int y = 5;
            int x = 7;
            return Add(x, y);

            static int Add(int left, int right) => left + right;
        }
    }
}