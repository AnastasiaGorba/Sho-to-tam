using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Identity;
using QrTerstDB;
namespace QrTerstDB.Data
{
    public class Student
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string MiddleName { get; set; }
        public string identification_code { get; set; }
        private readonly ApplicationDbContext applicationDbContext;

        public Student(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }
        public Student()
        {

        }

        public string GetStudById(string id)
        {
            var contact = 0;
            if (contact == null)
            {
                return "not found";
            }
            return contact.ToString();
        }
    }
}
