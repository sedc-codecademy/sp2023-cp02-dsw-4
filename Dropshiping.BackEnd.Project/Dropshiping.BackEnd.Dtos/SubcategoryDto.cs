using Dropshiping.BackEnd.Domain;

namespace Dropshiping.BackEnd.Dtos
{
    public class SubcategoryDto : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
    }
}
