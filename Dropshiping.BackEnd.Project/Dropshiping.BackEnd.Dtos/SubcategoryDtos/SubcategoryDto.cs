using Dropshiping.BackEnd.Domain;

namespace Dropshiping.BackEnd.Dtos.SubcategoryDtos
{
    public class SubcategoryDto
    {
        public string Id { get; set; }  
        public string Name { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
    }
}
