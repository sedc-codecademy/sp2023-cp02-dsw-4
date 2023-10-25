namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Subcategory : BaseEntity
    {
        public string Name { get; set; }
        public string Image { get; set; }

        // Properties for relations
        public string CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<Product> Products { get; set; }


    }
}
