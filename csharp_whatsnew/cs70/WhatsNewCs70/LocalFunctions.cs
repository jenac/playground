using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WhatsNewCs70
{
    public class LocalFunctions
    {
        public static void Demo()
        {
            var chars = AlphabetSubset3('c', 'm');
            foreach(var c in chars) {
                Console.Write(c);
            }
            Console.WriteLine("*");
        }
        public static IEnumerable<char> AlphabetSubset3(char start, char end)
        {
            if (start < 'a' || start > 'z')
                throw new ArgumentOutOfRangeException(paramName: nameof(start), message: "start must be a letter");
            if (end < 'a' || end > 'z')
                throw new ArgumentOutOfRangeException(paramName: nameof(end), message: "end must be a letter");

            if (end <= start)
                throw new ArgumentException($"{nameof(end)} must be greater than {nameof(start)}");

            return alphabetSubsetImplementation();

            IEnumerable<char> alphabetSubsetImplementation()
            {
                for (var c = start; c < end; c++)
                    yield return c;
            }
        }

        //also works in async 
        // public Task<string> PerformLongRunningWork(string address, int index, string name)
        // {
        //     if (string.IsNullOrWhiteSpace(address))
        //         throw new ArgumentException(message: "An address is required", paramName: nameof(address));
        //     if (index < 0)
        //         throw new ArgumentOutOfRangeException(paramName: nameof(index), message: "The index must be non-negative");
        //     if (string.IsNullOrWhiteSpace(name))
        //         throw new ArgumentException(message: "You must supply a name", paramName: nameof(name));

        //     return longRunningWorkImplementation();

        //     async Task<string> longRunningWorkImplementation()
        //     {
        //         var interimResult = await FirstWork(address);
        //         var secondResult = await SecondStep(index, name);
        //         return $"The results are {interimResult} and {secondResult}. Enjoy.";
        //     }
        // }
    }
}