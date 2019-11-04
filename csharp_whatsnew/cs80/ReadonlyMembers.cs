using System;
namespace cs80
{
    public class ReadonlyMembers
    {
        public static void Demo()
        {
            var p = new Point();
            p.X = 1.1D;
            p.Y = 2.2D;
            Console.WriteLine(p.ToString());
        }

        //You can apply the readonly modifier to members of a struct. It indicates that the member doesn't modify state.
        public struct Point //change to class will cause compile error
        {
            public double X { get; set; }
            public double Y { get; set; }

            public readonly double Distance => Math.Sqrt(X * X + Y * Y);

            public readonly override string ToString() =>
                $"({X}, {Y}) is {Distance} from the origin";

            //the following will cause error, since it change state.
            // public readonly void Translate(int xOffset, int yOffset)
            // {
            //     X += xOffset;
            //     Y += yOffset;
            // }
        }


    }
}