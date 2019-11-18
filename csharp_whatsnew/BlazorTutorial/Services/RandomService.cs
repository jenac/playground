using System;

namespace BlazorTutorial.Services 
{
    public class RandomService 
    {
        public Guid RandomId { get; } = Guid.NewGuid();

    }
}