
using System;
using System.Collections.Generic;

namespace WhatsNewC60
{
    public class Student
    {
        //readonly property can be only set by constructor
        public string LastName { get; }

        //Auto-property initializers
        public ICollection<double> Grades { get; } = new List<double>() {4.5, 4.0, 4.9};
        
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