using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using static System.Math;

namespace WhatsNewCs60
{
    public class Student : HasFullName
    {
        //readonly property can be only set by constructor
        public string LastName { get; }

        //Expression-bodied readonly properties
        public string FirstName => "TheFirstname";

        //Auto-property initializers
        public ICollection<double> Grades { get; } = new List<double>() { 4.5, 4.0, 4.9 };

        public Student(string readonlyLastName)
        {
            LastName = readonlyLastName;
        }
        public void ChangeName(string newLastName)
        {
            Console.WriteLine("LastName is readonly, can only be set in constructor");
            // Generates CS0200: Property or indexer cannot be assigned to -- it is read only
            // LastName = newLastName;
        }

        //Expression-bodied function members
        public string GetFullName() => $"{FirstName} {LastName}";

        public double GetPI()
        {
            return PI;
        }

        //nameof expression
        public void RunNameOf()
        {
            Console.WriteLine($"nameof {nameof(LastName)}");
        }

        //Null-conditional
        // var first = person?.FirstName;
        // first = person?.FirstName ?? "Unspecified";

        public static async Task<string> MakeRequest()
        {
            using (HttpClient client = new HttpClient())
            {
                var stringTask = client.GetStringAsync("https://docs.microsoft.com/en-us/dotnet/about/");
                try
                {
                    var responseText = await stringTask;
                    return responseText;
                }
                //Exception filters
                catch (System.Net.Http.HttpRequestException e) when (e.Message.Contains("301"))
                {
                    return "Site Moved";
                }
            }
        }
    }
}