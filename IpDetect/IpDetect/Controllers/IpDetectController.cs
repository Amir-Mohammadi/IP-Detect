using IpDetect.Models;
using IpDetect.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace IpDetect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IpDetectController : ControllerBase
    {
        public readonly IipDetectService _repository;
        public IpDetectController(IipDetectService repository)
        {
            _repository = repository;
        }
         
        [HttpGet]
        [Route("GetIp")]
        public async Task<ipDetail> GetIpAddress()
        {
            var getIp = await _repository.GetIP();
            return getIp;
        }
    }
}
