using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;

namespace FunctionBusConsumer
{
    public static class ServiceBusQueueTrigger
    {
        [FunctionName("ServiceBusQueueTriggerCSharp")]
        public static void Run(
        [ServiceBusTrigger("SampleType", Connection = "BusCns")]
        string myQueueItem,
        Int32 deliveryCount,
        DateTime enqueuedTimeUtc,
        string messageId,
        ILogger log)
        //[SignalRConnectionInfo(HubName = "notification", ConnectionStringSetting = "Endpoint=https://hubseed.service.signalr.net;AccessKey=dGzRwhvMIKaa5xr97d0745LPyPVu/Gp7C1T2YKmCbDw=;Version=1.0;")] IAsyncCollector<SignalRMessage> signalRMessages)
        {

            log.LogInformation($"C# ServiceBus queue trigger function processed message: {myQueueItem}");
            log.LogInformation($"EnqueuedTimeUtc={enqueuedTimeUtc}");
            log.LogInformation($"DeliveryCount={deliveryCount}");
            log.LogInformation($"MessageId={messageId}");


            //return signalRMessages.AddAsync(
            //    new SignalRMessage
            //    {
            //        Target = "newMessage",
            //        Arguments = new[] { "SampleType processado com Sucesso." }
            //    });

        }
    }
}
