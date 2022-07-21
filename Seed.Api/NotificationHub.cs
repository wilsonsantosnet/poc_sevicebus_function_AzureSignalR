using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Seed.Api
{
    public class NotificationHub : Hub
    {
        private readonly IHubContext<NotificationHub> _canalDeNotificacao;
        public NotificationHub(IHubContext<NotificationHub> canalDeNotificacao )
        {
            _canalDeNotificacao = canalDeNotificacao;
        }
        public async Task SendMessage(string user, string message)
        {
            //await Clients.All.SendAsync("ReceiveMessage", user, message);
            await _canalDeNotificacao.Clients.All.SendAsync("ClientNotificationMethod", user, message);
        }
    }
}
