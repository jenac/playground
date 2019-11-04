using System;

namespace cs80
{
    public class PropertyPatterns
    {
        public static void Demo()
        {
            var mi = new Address { State="MI"};
            var price = 1000.0M;
            var waTax = ComputeSalesTax(mi, price);
            Console.WriteLine($"state={mi.State} with price={price}, tax={waTax}");
        }

        public static decimal ComputeSalesTax(Address location, decimal salePrice) => location switch
        {
            { State: "WA" } => salePrice * 0.06M,
            { State: "MN" } => salePrice * 0.75M,
            { State: "MI" } => salePrice * 0.05M,
            // other cases removed for brevity...
            _ => 0M
        };
    }

    public class Address
    {
        public string State { get; set; }
    }
}