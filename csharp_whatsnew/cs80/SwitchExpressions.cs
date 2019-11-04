using System;

namespace cs80
{
    public class SwitchExpressions
    {
        public static void Demo()
        {
            Console.WriteLine(FromRainbow(Rainbow.Indigo).ToString());
            Console.WriteLine(FromRainbow(Rainbow.Blue).ToString());
            Console.WriteLine(FromRainbow(Rainbow.Orange).ToString());
            Console.WriteLine(FromRainbow(Rainbow.Green).ToString());
        }

        public enum Rainbow
        {
            Red,
            Orange,
            Yellow,
            Green,
            Blue,
            Indigo,
            Violet
        }

        public static RGBColor FromRainbow(Rainbow colorBand) => colorBand switch
        {
            Rainbow.Red    => new RGBColor(0xFF, 0x00, 0x00),
            Rainbow.Orange => new RGBColor(0xFF, 0x7F, 0x00),
            Rainbow.Yellow => new RGBColor(0xFF, 0xFF, 0x00),
            Rainbow.Green  => new RGBColor(0x00, 0xFF, 0x00),
            Rainbow.Blue   => new RGBColor(0x00, 0x00, 0xFF),
            Rainbow.Indigo => new RGBColor(0x4B, 0x00, 0x82),
            Rainbow.Violet => new RGBColor(0x94, 0x00, 0xD3),
            _              => throw new ArgumentException(message: "invalid enum value", paramName: nameof(colorBand)),
        };
    }

    public class RGBColor
    {
        private int r;
        private int g;
        private int b;

        public RGBColor(int v1, int v2, int v3)
        {
            this.r = v1;
            this.g = v2;
            this.b = v3;
        }

        public override string ToString(){
            return $"r={r}, g={g}, b={b}";
        }
    }
}