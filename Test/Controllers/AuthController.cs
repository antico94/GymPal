using Microsoft.AspNetCore.Mvc;
using Test.Helper;
using Test.Models.GymData;
using Test.Models.MuscleDb;
using Test.Models.Token;
using Test.Models.UserDb;
using Test.Models.UserModels;
using Test.Models.WebModels;
using static Microsoft.AspNetCore.Authentication.Cookies.CookieAuthenticationDefaults;

namespace Test.Controllers;

[Route("api")]
[ApiController]
public class AuthController : Controller
{
    private readonly UserContext _repository;
    private readonly JwtService _jwtService;

    public AuthController(UserContext repository, JwtService jwtService)
    {
        _repository = repository;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterWebModel dto)
    {
        try
        {
            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };

            _repository.Users.Add(user);
            await _repository.SaveChangesAsync();
            
            var userProfile = new UserProfile
            {
                UserId = user.Id,
                DateJoined = DateTime.Now,
                Name = dto.Name,
                Description = "No description yet"
            };

            _repository.Profiles.Add(userProfile);
            await _repository.SaveChangesAsync();

            return CreatedAtAction("Register", new {id = user.Id}, user);
        }
        catch (Exception e)
        {
            return BadRequest(new
            {
                message = "The email is already in our database."
            });
        }
    }

    [HttpPost("login")]
    public IActionResult Login(LoginWebModel dto)
    {
        var user = _repository.Users.FirstOrDefault(u => u.Email == dto.Email);

        if (user == null)
        {
            return BadRequest(new {message = "Invalid Credentials"});
        }

        if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
        {
            return BadRequest(new {message = "Invalid Credentials"});
        }


        var jwt = _jwtService.Generate(user.Id);
        
        Dictionary<string, string> dataReturned = new Dictionary<string, string>();
        dataReturned.Add("jwt", jwt);
        dataReturned.Add("Name", user.Name);
        
        return Ok(new
        {
            data = dataReturned
        });
    }

    [HttpPost("user")]
    public IActionResult GetUser(JwtTokenModel jwt)
    {
        try
        {
            var token = _jwtService.Verify(jwt.Jwt);
            int userId = int.Parse(token.Issuer);
            var user = _repository.Users.FirstOrDefault(u => u.Id == userId);
            return Ok(user);
        }
        catch (Exception e)
        {
            return Unauthorized(new
            {
                message = e.ToString()
            });
        }
    }


    [HttpPost("setProfile")]
    public async Task<IActionResult> CompleteProfile(UserProfile profile)
    {
        var userProfile = _repository.Profiles.FirstOrDefault(u => u.UserId == profile.UserId);
        if (userProfile != null)
        {
            userProfile.Name = profile.Name;
            userProfile.Description = profile.Description;
            userProfile.Height = profile.Height;
            userProfile.Weight = profile.Weight;
            userProfile.BenchPressRecord = profile.BenchPressRecord;
            userProfile.CardioRecord = profile.CardioRecord;
        }

        await _repository.SaveChangesAsync();

        return Ok(new
        {
            message = "Updated Profile Successfully"
        });
    }

    [HttpPost("logout")]
    public IActionResult LogOut()
    {
        Response.Cookies.Delete("jwt");
        return Ok(new
        {
            message = "success"
        });
    }
}