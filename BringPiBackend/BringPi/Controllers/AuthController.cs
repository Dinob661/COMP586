using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BringPi.Models;

namespace MessageBoardBackend.Controllers
{
    // This info is what is sent to the front end in the packet
    public class JwtPacket
    {
        public string Token { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
    }

    // This info comes from the front end to varify user
    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        readonly ApiContext context;

        public AuthController(ApiContext context)
        {
            this.context = context;
        }
        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginData loginData)
        {
            var user = context.Users.SingleOrDefault(u => u.Email == loginData.Email && u.Password == loginData.Password);

            if (user == null)
                return NotFound("email or password incorrect");

            return Ok(CreateJwtPacket(user));
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody]BringPi.Models.Users user)
        {
            //add info from packet to DB
            context.Users.Add(user);
            //save changes
            context.SaveChanges();

            return CreateJwtPacket(user);
        }

        JwtPacket CreateJwtPacket(BringPi.Models.Users user)
        {
            var origin = user.Id;

            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("this is the secret phrase"));

            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
            };

            var jwt = new JwtSecurityToken(claims: claims, signingCredentials: signingCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JwtPacket() { Token = encodedJwt, UserName = user.UserName, FirstName = user.FirstName, LastName = user.LastName, Id = origin};

        }
    }
}