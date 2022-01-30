using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Test.Helper;
using Test.Models.MuscleDb;
using Test.Models.UserDb;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews().AddNewtonsoftJson(options=>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson
    (options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
builder.Services.AddScoped<JwtService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<MuscleContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<UserContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("UserConnection")));
builder.Services.AddSwaggerGen();
//Enable CORS
builder.Services.AddCors(c =>
    c.AddPolicy("AllowOrigin", options => options
        .SetIsOriginAllowed(_=>true)
        // .AllowAnyOrigin()
        .AllowAnyMethod().AllowAnyHeader().AllowCredentials().SetIsOriginAllowedToAllowWildcardSubdomains()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    
    //Enable CORS
    app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod()
        .SetIsOriginAllowed(_ => true)
        .AllowCredentials());
    // ().AllowAnyOrigin());
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

app.UseRouting();

app.Run();