using Microsoft.AspNetCore.Mvc;
using QrTerstDB.Helper.QrCodeGen;
using QrTerstDB.Models;
using QrTerstDB.Views.ViewModel;
using System.Diagnostics;
using QrTerstDB.Data;
using QrTerstDB;
using Microsoft.Data.SqlClient;
using QRCoder;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
namespace QrTerstDB.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IQrCodeGen qrcodegen;
        private readonly IConfiguration configuration;

        public HomeController(ILogger<HomeController> logger, IQrCodeGen qrcodeges, IConfiguration configuration)
        {
            _logger = logger;
            this.qrcodegen = qrcodeges;
            this.configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(string text, Student student)
        {
            if (string.IsNullOrEmpty(text))
                return BadRequest("Text parameter is required.");

            try
            {
                string connectionStr = configuration.GetConnectionString("DefaultConnection");

                using (SqlConnection connection = new SqlConnection(connectionStr))
                {
                    connection.Open();

                    string query = $"SELECT first_name  FROM Students WHERE {text} = @identification_code";

                    SqlCommand cmd = new SqlCommand(query, connection);

                    cmd.Parameters.AddWithValue("@identification_code", student.identification_code);

                    SqlDataReader reader = cmd.ExecuteReader();
                    if (!reader.HasRows)
                    {
                        return NotFound("Student not found.");
                    }

                    while (reader.Read())
                    {
                        student.first_name = reader["first_name"].ToString();
                    }

                    reader.Close();

                    byte[] qrCodeAsBytes = qrcodegen.GenQr(student.first_name);
                    string qrCodeAsImgBase64 = $"data:image/png;base64,{Convert.ToBase64String(qrCodeAsBytes)}";

                    GenerateQrViewModels qrModel = new GenerateQrViewModels();
                    qrModel.QrCodeImgUrl = qrCodeAsImgBase64;

                    return View(qrModel);
                }
            }
            catch (Exception ex)
            {
                // Log exception
                return BadRequest("An error occurred while processing your request.");
            }
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
