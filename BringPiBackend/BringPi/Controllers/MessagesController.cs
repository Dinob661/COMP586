using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BringPi.Models;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        readonly ApiContext context;

        public MessagesController(ApiContext context)
        {
            this.context = context;
        }

        public IEnumerable<BringPi.Models.Messages> Get()
        {
            return context.Messages;
        }


        //this returns message when searching for name
        [HttpGet("{userName}")]
        public IEnumerable<BringPi.Models.Messages> Get(string userName)
        {
            return context.Messages.Where(message => message.Owner == userName);
        }

        //post message to DB
        [HttpPost]
        public BringPi.Models.Messages Post([FromBody] BringPi.Models.Messages message)
        {
            var dbMessage = context.Messages.Add(message).Entity;
            context.SaveChanges();
            return dbMessage;
        }
    }
}