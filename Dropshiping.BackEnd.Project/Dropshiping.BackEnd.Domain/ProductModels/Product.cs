namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public decimal Discount { get; set; }
        public string Image { get; set; }

        public DateTime CreateTime { get; set; }

        // Its calculated from Raiting Table interaction // when ICollection<Raiting> Raitings its populated
        public decimal Rating
        {
            get
            {
                // Handle the case where there are no ratings to avoid division by zero.
                if (Ratings == null || Ratings.Count == 0)
                {
                    return 0;
                }
                // Calculate the average rating
                decimal sum = Ratings.Sum(r => (int)r.Rate); //'Rate' is the property representing the rating

                return sum / Ratings.Count;
            }
        }

        // Properties for relations
        public virtual Subcategory Subcategory { get; set; }
        public string SubcategoryId { get; set; }

        public virtual Manufacturer Manufacturer { get; set; }
        public string ManufacturerId { get; set; }

        public virtual ICollection<ProductSize> ProductSizes { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}

        
    
