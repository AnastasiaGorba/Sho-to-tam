using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GurNetQr.Models
{
    public class Student
    {
        [Key]
        public int student_id { get; set; }                                             
        public int dormitory_number { get; set; }
        [NotMapped]
        public DateTime paid_until { get; set; }
        public int room_number { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string phone_number { get; set; } = "";
        [Column(TypeName = "varchar(50)")]
        public string first_name { get; set; } = "";
        [Column(TypeName = "varchar(50)")]
        public string last_name { get; set; } = "";
        [Column(TypeName = "nvarchar(16)")]
        public string midle_name { get; set; } = "";

        [Column(TypeName = "varchar(50)")]
        public string identification_code { get; set; } = " ";
    }
}
