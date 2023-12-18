using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class ColorValidations
    {
        public static void ValidateColor(this ColorDto colorDto)
        {
            if (string.IsNullOrEmpty(colorDto.Name))
            {
                throw new ArgumentException("Color Name is required");
            }
            if (colorDto.Name.Length > 50)
            {
                throw new ArgumentException("Color Name should be less than 50 characters");
            }
        }
    }
}
