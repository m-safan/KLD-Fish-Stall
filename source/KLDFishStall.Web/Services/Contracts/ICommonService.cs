using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KLDFishStall.Web.Model;

namespace KLDFishStall.Web.Services.Contracts
{
    public interface ICommonService
    {
        IEnumerable<WeatherForecast> WeatherForecasts();
    }
}
