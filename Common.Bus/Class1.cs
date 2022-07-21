using Azure.Messaging.ServiceBus;
using Common.Domain.Base;
using Common.Domain.Interfaces;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace Common.Bus
{
    public class Bus : IBus
    {
        private ConfigBusSettingsBase _configBus;

        public Bus(IOptions<ConfigBusSettingsBase> configBus) 
        {
            this._configBus = configBus.Value;
        }
        public async Task<bool> SendMessage<T>(T message,string  senderQueueName)
        {

            var cns = this._configBus.DefaultCns;
            var client = new ServiceBusClient(cns);
            var sender = client.CreateSender(senderQueueName);

            var json = JsonSerializer.Serialize(message, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            });
            var msg = new ServiceBusMessage(json)
            {
                ContentType = "application/json"
            };
            await sender.SendMessageAsync(msg);

            return true;
        }
    }
}