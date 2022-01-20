using Microsoft.AspNetCore.Mvc;
using Test.Helper;
using Test.Models.MuscleDb;
using Test.Models.UserModels;
using Test.Models.WebModels;

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
        Response.Cookies.Append("jwt", jwt, new CookieOptions {HttpOnly = true});

        return CreatedAtAction("Login", new {id = user.Id}, user);
    }

    [HttpGet("user")]
    public IActionResult User()
    {
        try
        {
            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
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