using System;
using System.Threading.Tasks;

namespace WhatsNewCs60
{
    public class ImproveOverload
    {
        public static Task DoThings()
        {
            Console.WriteLine("Doing Things");
            return Task.FromResult(0);
        }
    }
}