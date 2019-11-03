using System;
using System.Collections.Generic;
using System.Text;

namespace WhatsNewCs70
{
    public class PatternMatching
    {
        public static void Demo() {
            IEnumerable<int> sub = new List<int> {1, 2, 3, -18};
            var sum = SumPositiveNumbers(new List<object> {
                0, 2, 3, -1, sub, 0
            });
            Console.WriteLine($"sum={sum}");
            var added = Add(new List<object> {
                0, 2, 3, "-1", "sub", 0, "how"
            });
            Console.WriteLine(added);
        }
        public static string Add(IEnumerable<object> sequence) {
            int sum = 0;
            var sb = new StringBuilder();
            foreach(var item in sequence) {
                if (item is int number) {
                    sum+= number;
                } else if ( item is string str) {
                    sb.Append(str);
                }
            }
            return $"sum={sum}, string={sb.ToString()}";
        }
        public static int SumPositiveNumbers(IEnumerable<object> sequence)
        {
            int sum = 0;
            foreach (var i in sequence)
            {
                switch (i)
                {
                    case 0:
                        break;
                    case IEnumerable<int> childSequence:
                        {
                            foreach (var item in childSequence)
                                sum += (item > 0) ? item : 0;
                            break;
                        }
                    case int n when n > 0:
                        sum += n;
                        break;
                    case null:
                        Console.WriteLine("Null found in sequence");
                        break;
                    default:
                        Console.WriteLine("Unrecognized type");
                        break;
                }
            }
            return sum;
        }
    }
}