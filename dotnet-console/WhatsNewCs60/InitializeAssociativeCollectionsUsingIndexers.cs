using System;
using System.Collections.Generic;
using System.Linq;

namespace WhatsNewCs60
{
    public class InitializeAssociativeCollectionsUsingIndexers
    {
        //Initialize associative collections using indexers
        private Dictionary<int, string> messages = new Dictionary<int, string>
        {
            { 404, "Page not Found"},
            { 302, "Page moved, but left a forwarding address."},
            { 500, "The web server can't come out to play today."}
        };

        private Dictionary<int, string> webErrors = new Dictionary<int, string>
        {
            [404] = "Page not Found",
            [302] = "Page moved, but left a forwarding address.",
            [500] = "The web server can't come out to play today."
        };

        public void PrintAll() {
            foreach( var key in messages.Keys) {
                Console.WriteLine($"{key} = {messages[key]}");
            }
            foreach( var key in webErrors.Keys) {
                Console.WriteLine($"{key} = {webErrors[key]}");
            }
        }
    }
}