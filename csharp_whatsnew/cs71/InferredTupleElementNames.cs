using System;

namespace cs71
{
    public class InferredTupleElementNames
    {
        public static void Demo()
        {
            int count = 5;
            string label = "Colors used in the map";
            //old way
            // var pair = (count: count, label: label);
            //cs71 way
            var pair = (count, label); 
            Console.WriteLine($"count={pair.count}, label={pair.label}");
        }
    }
}