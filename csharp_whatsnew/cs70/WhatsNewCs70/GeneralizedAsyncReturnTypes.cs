using System;
using System.Threading.Tasks;

namespace WhatsNewCs70{
    /*
    Returning a Task object from async methods can introduce performance bottlenecks in certain paths. 
    Task is a reference type, so using it means allocating an object. 
    In cases where a method declared with the async modifier returns a cached result, or completes synchronously, 
    the extra allocations can become a significant time cost in performance critical sections of code. 
    It can become costly if those allocations occur in tight loops.

    The new language feature means that async method return types aren't limited to Task, Task<T>, and void. T
    he returned type must still satisfy the async pattern, meaning a GetAwaiter method must be accessible. 
    As one concrete example, the ValueTask type has been added to the .NET framework to make use of this new language feature:
    */    
    
    public class GeneralizedAsyncReturnTypes {
        public static void Demo() {
            var s = FuncHere().Result;
            Console.WriteLine($"Got {s}");
        }
        public static async ValueTask<int> FuncHere()
        {
            await Task.Delay(100);
            return 5;
        }
    }
}