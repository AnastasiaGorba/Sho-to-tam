using QRCoder;
namespace QrCodeGenerator.Helper.QrCodeGen
{
    public class QrCodeGen : IQrCodeGen
    {
        public byte[] GenQr(string text)
        {
            byte[] QR = new byte[0];
            if (!string.IsNullOrEmpty(text))
            {
                QRCodeGenerator codeGenerator = new QRCodeGenerator();
                QRCodeData data = codeGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q);
                BitmapByteQRCode bitmap = new BitmapByteQRCode(data);
                QR = bitmap.GetGraphic(20);
            }
            return QR;
        }
    }
}
