using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Domain.Interfaces
{
    public interface IBus
    {

        Task<bool> SendMessage<T>(T message, string senderQueueName);
    }
}
