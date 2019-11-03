using System;

namespace WhatsNewCs70
{
    public class UnpackDestruct
    {
        public class Point
        {
            public Point(double x, double y)
                => (X, Y) = (x, y);

            public double X { get; }
            public double Y { get; }

            public void Deconstruct(out double x, out double y) =>
                (x, y) = (X, Y);
        }

        public static void Demo() {
            var p = new Point(3.14, 2.71);
            (double X, double Y) = p;
            Console.WriteLine($"x={X}, y={Y}");
        }
    }
}