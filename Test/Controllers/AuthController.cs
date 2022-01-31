using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Tasks;
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
    public async Task<IActionResult> CompleteProfile(UserProfileWebModel webModel)
    {
        var userProfile = _repository.Profiles.FirstOrDefault(u => u.UserId == webModel.UserId);
        
        if (userProfile == null)
            return BadRequest(new
            {
                message = "Ceva e in neregula cu webmodel."
            });
        
        var bmi = Utils.Utils.CalculateBmiValue(webModel.Weight, webModel.Height);
        var bodyFatPercentage = Utils.Utils.CalculateBodyFatPercentage(bmi, webModel.Gender, webModel.Age);
        userProfile.Name = webModel.Name;
        userProfile.Description = webModel.Description;
        userProfile.Height = webModel.Height;
        userProfile.Weight = webModel.Weight;
        userProfile.Gender = webModel.Gender;
        userProfile.BMI = bmi;
        userProfile.BMIIndex = Utils.Utils.CalculateBmiIndex(bmi);
        userProfile.BodyFat = bodyFatPercentage;
        userProfile.BodyFatIndex = Utils.Utils.CalculateBodyFatIndex(bodyFatPercentage, webModel.Gender);
        userProfile.Age = webModel.Age;
        await _repository.SaveChangesAsync();

        return Ok(new
        {
            message = "Updated Profile Successfully"
        });
    }
}