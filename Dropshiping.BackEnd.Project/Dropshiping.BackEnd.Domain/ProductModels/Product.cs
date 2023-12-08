namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public int Discount { get; set; }
        public string Image { get; set; }

        public DateTime DateOfCreation { get; set; }

        public int Searches { get; set; }
      
        public virtual Subcategory Subcategory { get; set; }
        public string SubcategoryId { get; set; }

        public virtual Manufacturer Manufacturer { get; set; }
        public string ManufacturerId { get; set; }

        public virtual ICollection<ProductSize> ProductSizes { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }

    }
}

        
    
