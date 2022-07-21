using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;

namespace FunctionBusConsumer
{
    public static class GetAzureSignalRConnection
    {
        [FunctionName("negotiate")]
        public static SignalRConnectionInfo Negotiate(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            [SignalRConnectionInfo(HubName = "notification", ConnectionStringSetting = "HubCns")] SignalRConnectionInfo connectionInfo)
        {
            return connectionInfo;
        }
    }
}