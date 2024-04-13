using QRCoder;
namespace QrTerstDB.Helper.QrCodeGen
{
    public interface IQrCodeGen
    {
        public byte[] GenQr(string text);
    }
}
