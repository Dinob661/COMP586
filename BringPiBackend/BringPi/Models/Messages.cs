using System;
using System.Collections.Generic;

namespace BringPi.Models
{
    public partial class Messages
    {
        public string MessageId { get; set; }
        public string OwnerId { get; set; }
        public string Owner { get; set; }
        public string Text { get; set; }
        public string Date { get; set; }

        public Users OwnerNavigation { get; set; }
    }
}
