using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Dtos.UserDtos;
using XSystem.Security.Cryptography;

namespace Dropshiping.BackEnd.Services.UserServices.Validations
{
    public static class UserValidations
    {
        public static void ValidateNewUser(this RegisterUserDto registerUserDto)
        {
            if (string.IsNullOrEmpty(registerUserDto.FirstName))
            {
                throw new ArgumentException("FirstName is required");
            }
            if (string.IsNullOrEmpty(registerUserDto.LastName))
            {
                throw new ArgumentException("LastName is required");
            }
            if (string.IsNullOrEmpty(registerUserDto.Username))
            {
                throw new ArgumentException("Username is required");
            }
            if (string.IsNullOrEmpty(registerUserDto.Password))
            {
                throw new ArgumentException("Password is required");
            }
            if (string.IsNullOrEmpty(registerUserDto.Email))
            {
                throw new ArgumentException("Email is required");
            }
            if (registerUserDto.Password != registerUserDto.ConfirmationPassword)
            {
                throw new InvalidDataException("Password and ConfirmationPassword must match.");
            }
            if (registerUserDto.FirstName.Length > 50)
            {
                throw new InvalidDataException("FirstName canot have more then 50 chars.");
            }
            if (registerUserDto.LastName.Length > 50)
            {
                throw new InvalidDataException("LastName canot have more then 50 chars.");
            }
            if (registerUserDto.Password.Length > 50)
            {
                throw new InvalidDataException("Password canot have more then 50 chars.");
            }
            if (registerUserDto.Email.Length > 50)
            {
                throw new InvalidDataException("Email canot have more then 50 chars.");
            }
            if (registerUserDto.Username.Length > 25)
            {
                throw new InvalidDataException("Username canot have more then 25 chars.");
            }
            if (!string.IsNullOrEmpty(registerUserDto.PhoneNumber) && (registerUserDto.PhoneNumber.Length < 9 || registerUserDto.PhoneNumber.Length > 14))
            {
                throw new InvalidDataException("Invalid phone number");
            }
            if (!string.IsNullOrEmpty(registerUserDto.Address) && (registerUserDto.Address.Length < 5 || registerUserDto.Address.Length > 30))
            {
                throw new InvalidDataException("Invalid address");
            }
            if (!string.IsNullOrEmpty(registerUserDto.City) && (registerUserDto.City.Length < 4 || registerUserDto.City.Length > 30))
            {
                throw new InvalidDataException("Invalid city name");
            }
            if (!string.IsNullOrEmpty(registerUserDto.PostalCode) && registerUserDto.PostalCode.Length != 4)
            {
                throw new InvalidDataException("Invalid postal code");
            }

        }

        public static void ValidateUpdateUser(this RegisterUserDto registerUserDto)
        {
            if (registerUserDto.Password != registerUserDto.ConfirmationPassword)
            {
                throw new InvalidDataException("Password and ConfirmationPassword must match.");
            }
            if (registerUserDto.FirstName.Length > 50)
            {
                throw new InvalidDataException("FirstName cannot have more then 50 chars.");
            }
            if (registerUserDto.LastName.Length > 50)
            {
                throw new InvalidDataException("LastName cannot have more then 50 chars.");
            }
            if (registerUserDto.Password.Length > 50)
            {
                throw new InvalidDataException("Password cannot have more then 50 chars.");
            }
            if (registerUserDto.Email.Length > 50)
            {
                throw new InvalidDataException("Email cannot have more then 50 chars.");
            }
            if (registerUserDto.Username.Length > 25)
            {
                throw new InvalidDataException("Username cannot have more then 25 chars.");
            }
            if (!string.IsNullOrEmpty(registerUserDto.PhoneNumber) && (registerUserDto.PhoneNumber.Length < 9 || registerUserDto.PhoneNumber.Length > 14))
            {
                throw new InvalidDataException("Invalid phone number");
            }
            if (!string.IsNullOrEmpty(registerUserDto.Address) && (registerUserDto.Address.Length < 5 || registerUserDto.Address.Length > 30))
            {
                throw new InvalidDataException("Invalid address");
            }
            if (!string.IsNullOrEmpty(registerUserDto.City) && (registerUserDto.City.Length < 4 || registerUserDto.City.Length > 30))
            {
                throw new InvalidDataException("Invalid city name");
            }
            if (!string.IsNullOrEmpty(registerUserDto.PostalCode) && registerUserDto.PostalCode.Length != 4)
            {
                throw new InvalidDataException("Invalid postal code");
            }
        }
    }

}
