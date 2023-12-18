namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class RegisterUserDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; } 
        public string ConfirmationPassword {  get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }  
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Image { get; set; }
      
    }
}
