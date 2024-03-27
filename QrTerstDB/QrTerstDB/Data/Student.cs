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
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string midle_name { get; set; }
        public int dormintory_number { get; set; }
        public int room_number { get; set; }
        public long phone_number { get; set; }
        public DateTime date { get; set; }

        public string identification_code { get; set; }
        private readonly ApplicationDbContext applicationDbContext;
        public Student ()
        {

        }

        public Student(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }
    }
}
