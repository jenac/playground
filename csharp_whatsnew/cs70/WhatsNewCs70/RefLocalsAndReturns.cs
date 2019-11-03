using System;

namespace WhatsNewCs70
{
    public class RefLocalsAndReturns
    {
        public static void Demo() {
            var matrix = new int[,] {
                {1, 2, 4},
                {4, 42, 6},
                {7, 8, 9},
            };
            ref var item = ref Find(matrix, (val) => val == 42);
            Console.WriteLine($"find {item} in the matrix");
            item = 24;
            Console.WriteLine($"founded was assigned with value {matrix[1, 1]}");
        }
        public static ref int Find(int[,] matrix, Func<int, bool> predicate)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
                for (int j = 0; j < matrix.GetLength(1); j++)
                    if (predicate(matrix[i, j]))
                        return ref matrix[i, j];
            throw new InvalidOperationException("Not found");
        }
    }
}