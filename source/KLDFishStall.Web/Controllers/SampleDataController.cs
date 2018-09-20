using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KLDFishStall.Web.Model;
using KLDFishStall.Web.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace KLDFishStall.Web.Controllers
{
    //[Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private ICommonService _commonService = null;

        public SampleDataController(ICommonService commonService)
        {
            _commonService = commonService;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            return _commonService.WeatherForecasts();
        }
    }
}
