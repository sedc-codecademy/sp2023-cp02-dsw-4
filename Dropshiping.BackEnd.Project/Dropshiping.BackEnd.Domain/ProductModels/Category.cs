namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public string Image { get; set; }

        // Properties for relations
        public virtual ICollection<Subcategory> Subcategories { get; set; }
    }
}
