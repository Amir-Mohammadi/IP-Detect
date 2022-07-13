using IpDetect.Models;

namespace IpDetect.Services
{
    public interface IipDetectService
    {
        public Task<ipDetail> GetIP();
    }
}
