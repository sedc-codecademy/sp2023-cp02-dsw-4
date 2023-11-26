using System.Text;
using Dropshiping.BackEnd.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace Dropshiping.BackEnd.Project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Ineject Configuration String - SQL server
            DipendencyInjectionHelpers.InjectDbContext(builder.Services, builder.Configuration);

            //Inject Repository
            DipendencyInjectionHelpers.InjectRepositories(builder.Services);

            //Inject Service
            DipendencyInjectionHelpers.InjectService(builder.Services);


            //builder.Services.AddAuthentication(x =>
            //{
            //    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(x =>
            //{
            //    x.RequireHttpsMetadata = false;
            //    //caches the token so that we can access it during the request lifetime
            //    x.SaveToken = true;
            //    x.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidateAudience = false,
            //        ValidateIssuer = false,
            //        //Check if the expiration time has passes
            //        ValidateLifetime = true,
            //        //Token musth have an expiration time
            //        RequireExpirationTime = true,
            //        //should be sto to true to validate the key
            //        ValidateIssuerSigningKey = true,
            //        // set the time buffer for client-server difference. default is 300 sec
            //        ClockSkew = TimeSpan.Zero,
            //        IssuerSigningKey = new SymmetricSecurityKey
            //        (Encoding.ASCII.GetBytes(builder.Configuration["AppSettings:SecretKey"]))
            //    };
            //});


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}