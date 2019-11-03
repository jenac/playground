using System;

namespace WhatsNewCs70
{
    public class ThrowExpressions
    {
        class InternalClass
        {
            private string name;
            public string Name
            {
                get => name;
                set => name = value ??
                    throw new ArgumentNullException(paramName: nameof(value), message: "Name cannot be null");
            }

            public DateTime ToDateTime(IFormatProvider provider) => throw new InvalidCastException("Conversion to a DateTime is not supported.");
        }

        public static void Demo()
        {
            try
            {
                DisplayFirstNumber(new string[] { "12", "123" });
                DisplayFirstNumber(new string[] { });
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            try {
                var okObj = new InternalClass();
                okObj.Name = "haha";
                Console.WriteLine(okObj.Name);
                okObj.Name = null; //this will cause exception
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            try {
                var exObj = new InternalClass();
                exObj.ToDateTime(null); //this will also cause exception
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
        private static void DisplayFirstNumber(string[] args)
        {
            string arg = args.Length >= 1 ? args[0] :
                                       throw new ArgumentException("You must supply an argument");
            if (Int64.TryParse(arg, out var number))
                Console.WriteLine($"You entered {number:F0}");
            else
                Console.WriteLine($"{arg} is not a number.");

        }
    }
}