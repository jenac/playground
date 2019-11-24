using Microsoft.AspNetCore.Authorization;

namespace BlazorTutorial.Authorization 
{
    public class EmailRequirement : IAuthorizationRequirement
    {
        public string EmailSuffix { get; }

        public EmailRequirement(string emailSuffix)
        {
            EmailSuffix = emailSuffix;
        }

    }
}