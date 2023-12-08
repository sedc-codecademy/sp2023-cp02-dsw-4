namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public string Image { get; set; }
        public string Icon { get; set; }
        public virtual ICollection<Subcategory> Subcategories { get; set; }
    }
}
