using QRCoder;
namespace QrCodeGenerator.Helper.QrCodeGen
{
    public interface IQrCodeGen
    {
        public byte[] GenQr(string text);
    }
}
