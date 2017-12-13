using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using BringPi.Models;

namespace MessageBoardBackend.Controllers
{
    //this is where I allow updating records for user.
    public class EditProfileData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        readonly ApiContext context;

        public UsersController(ApiContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id)
        {
            var user = context.Users.SingleOrDefault(u => u.Id == id);

            if (user == null)
                return NotFound("User not found");

            return Ok(user);
        }

        [Authorize]
        [HttpGet("me")]
        public ActionResult Get()
        {
            return Ok(GetSecureUser());
        }


        //this edits the user information
        [Authorize]
        [HttpPost("me")]
        public ActionResult Post([FromBody] EditProfileData profileData)
        {
            var user = GetSecureUser();

            user.FirstName = profileData.FirstName ?? user.FirstName;
            user.LastName = profileData.LastName ?? user.LastName;
            user.Email = profileData.Email ?? user.Email;
            user.Password = profileData.Password ?? user.Password;

            context.SaveChanges();

            return Ok(user);
        }

        // DELETE 
        [Authorize]
        [HttpDelete("me")]
        public ActionResult Delete()
        {
            var user = GetSecureUser();
            context.Remove(user);
            context.SaveChanges();
            return Ok(user);
        }

            //this returns user ID for editing user
            BringPi.Models.Users GetSecureUser()
        {
            var id = HttpContext.User.Claims.First().Value;
            return context.Users.SingleOrDefault(u => u.Id == id);
        }
    }
}