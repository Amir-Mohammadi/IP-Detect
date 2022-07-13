using IpDetect.Models;
using Newtonsoft.Json;

namespace IpDetect.Services
{
    public class ipDetectService : IipDetectService
    {
        public async Task<ipDetail> GetIP()
        {
            string accessKey = "6d3030cb7bad443a24fd5925dca9c018";
            string url = "http://api.ipstack.com/";
            string currentIp = "https://ip.seeip.org";

            var ipDetect = "";

            using (var client = new HttpClient())
            {
                HttpResponseMessage response = client.GetAsync(currentIp).Result;

                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadAsStringAsync().Result;


                    HttpResponseMessage responseIp = client.GetAsync(url + result + "?access_key=" + accessKey).Result;
                    if (responseIp.IsSuccessStatusCode)
                    {
                        ipDetect = responseIp.Content.ReadAsStringAsync().Result;
                    }
                }


                var ipModel = JsonConvert.DeserializeObject<ipDetail>(ipDetect);

                return ipModel;
            }
        }
    }
}

