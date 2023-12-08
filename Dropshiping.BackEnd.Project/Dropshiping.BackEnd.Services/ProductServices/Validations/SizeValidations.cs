using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class SizeValidations
    {
        public static void ValidateSize(this SizeDto sizeDto)
        {
            if (string.IsNullOrEmpty(sizeDto.Name))
            {
                throw new ArgumentException("Size Name is required");
            }
            if (sizeDto.Name.Length > 50)
            {
                throw new ArgumentException("Size Name should be less than 50 characters");
            }
        }
    }
}
