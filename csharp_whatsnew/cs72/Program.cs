using System;

namespace cs72
{
    class Program
    {
        static void Main(string[] args)
        {
            //Leading underscores in numeric literals
            int binaryValue = 0b_0101_0101;
            Console.WriteLine($"binaryValue={binaryValue}");

            //Conditional ref expressions
            int[] arr = null;
            var otherArr = new int[] {1,2,3};
            ref var r = ref (arr != null ? ref arr[0] : ref otherArr[0]);
            Console.WriteLine($"r={r}");
            r = 100;
            foreach(var i in otherArr) {
                Console.WriteLine(i);
            }
        }
    }
}
