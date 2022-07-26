using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.Extensions.Logging;
using Seed.Application.Interfaces;
using Seed.Dto;
using System;
using System.Threading.Tasks;

namespace FunctionBusConsumer
{
    public class ProcessBusMessage
    {

        private readonly ISampleTypeApplicationService _app;
        public ProcessBusMessage(ISampleTypeApplicationService app)
        {
            this._app = app;
        }


        [FunctionName("ProcessBusMessage")]
        [ExponentialBackoffRetry(5, "00:00:04", "00:15:00")]
        public Task Run(
        [ServiceBusTrigger("SampleType", Connection = "BusCns")]
        string myQueueItem,
        int deliveryCount,
        DateTime enqueuedTimeUtc,
        string messageId,
        ILogger log,
        [SignalR(HubName = "notification", ConnectionStringSetting = "HubCns")] IAsyncCollector<SignalRMessage> signalRMessages)
        {

            log.LogInformation($"C# ServiceBus queue trigger function processed message: {myQueueItem}");
            log.LogInformation($"EnqueuedTimeUtc={enqueuedTimeUtc}");
            log.LogInformation($"DeliveryCount={deliveryCount}");
            log.LogInformation($"MessageId={messageId}");

            var message= System.Text.Json.JsonSerializer.Deserialize<SampleTypeDtoSpecialized>(myQueueItem, new System.Text.Json.JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
            
            var returnModel = this._app.Save(message).Result;


            return signalRMessages.AddAsync(
                new SignalRMessage
                {
                    UserId = message.UserId,
                    Target = "ClientNotificationMethod",
                    Arguments = new[] { "SampleType", "SampleType processado com Sucesso." }
                });

        }
    }
}
