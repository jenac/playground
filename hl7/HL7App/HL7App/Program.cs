using NHapi.Base.Parser;
using NHapi.Model.V23.Message;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HL7App
{
    class Program
    {
        static void Main(string[] args)
        {
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.

            
            var oru01 = parse("ORU_01.hl7");
            var oru02 = parse("ORU_02.hl7");
            var oru03 = parse("ORU_03.hl7");
            Console.WriteLine("Hello World!");
            Console.ReadKey();

            // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
        }

        static ORU_R01 parse(string path)
        {

            string text = File.ReadAllText(path);
            var pipeParser = new PipeParser();
            var message = pipeParser.Parse(text);

            var oru = message as ORU_R01;
            return oru;
        }
    }
}
