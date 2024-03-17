using Microsoft.AspNetCore.Mvc;
using QrCodeGenerator.Helper.QrCodeGen;
using QrCodeGenerator.Models;
using QrCodeGenerator.ViewModel;
using System.Diagnostics;

namespace QrCodeGenerator.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IQrCodeGen qrcodegen;

        public HomeController(ILogger<HomeController> logger, IQrCodeGen qrcodeges)
        {
            _logger = logger;
            this.qrcodegen = qrcodeges;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(string text)
        {
            if (string.IsNullOrEmpty(text)) 
                return BadRequest();
             
            byte[] QrCodeAsBytes = qrcodegen.GenQr(text);
            string QrCodeAsImgBase64 = $"data:image/png;base64,{Convert.ToBase64String(QrCodeAsBytes)}";

            GenerateQrViewModels qrmodels = new GenerateQrViewModels();
            qrmodels.QrCodeImgUrl = QrCodeAsImgBase64;
            return View(qrmodels);
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
