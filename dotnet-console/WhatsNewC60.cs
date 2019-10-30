
using System;

namespace WhatsNewC60
{
    public class Student
    {
        public string LastName { get; }

        public Student(string readonlyLastName) {
            LastName = readonlyLastName;
        }
        public void ChangeName(string newLastName)
        {
            Console.WriteLine("LastName is readonly, can only be set in constructor");
            // Generates CS0200: Property or indexer cannot be assigned to -- it is read only
            // LastName = newLastName;
        }
    }
}