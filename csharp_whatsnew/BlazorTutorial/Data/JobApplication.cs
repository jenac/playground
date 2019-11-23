using System;
using System.ComponentModel.DataAnnotations;
namespace BlazorTutorial.Data
{
    public class JobApplication
    {
        [Required]
        public string FullName { get; set; }
        [StringLength(500, ErrorMessage="Don't write too long!")]
        public string Description { get; set; }
        [Required]
        [Range(100000, 150000, ErrorMessage="10000~15000, please")]
        public int SalaryExpectation { get; set; }
        [Required]
        public bool DoesOpenSource { get; set; }
        [Required]
        public DateTime Availability { get; set; }
    }
}