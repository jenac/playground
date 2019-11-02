using System;

namespace WhatsNewCs70
{
    public class ExpressionMembersExample : IDisposable
    {
        public static void Demo() {
            using (var example = new ExpressionMembersExample("new label")){
                Console.WriteLine($"example.Label={example.Label}");
            }
        }

        public void Dispose() => Console.Error.WriteLine("Disposed!");
        
        // Expression-bodied constructor
        public ExpressionMembersExample(string label) => this.Label = label;

        // Expression-bodied finalizer
        ~ExpressionMembersExample() => Console.Error.WriteLine("Finalized!");

        private string label;

        // Expression-bodied get / set accessors.
        public string Label
        {
            get => label;
            set => this.label = value ?? "Default label";
        }
    }
}