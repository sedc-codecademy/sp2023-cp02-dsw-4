using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess
{
    public class DropshipingDbContext : DbContext
    {
        public DropshipingDbContext(DbContextOptions options): base(options)
        {

        }

        // Tables
        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> Subcategories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<ProductSize> ProductSizes { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Subscriber> Subscribers { get; set; }
        public DbSet<UserOrder> UserOrders { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Card> Cards { get; set; }


        // OnModel
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Category
            modelBuilder.Entity<Category>()
                .Property(x => x.Name)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<Category>()
                .Property(x => x.Image)
                .IsRequired();

            // Subcategory
            modelBuilder.Entity<Subcategory>()
                .Property(x => x.Name)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<Subcategory>()
                .Property(x => x.Image)
                .IsRequired();

            // Product
            modelBuilder.Entity<Product>()
                .Property(x => x.Name)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<Product>()
                .Property(x => x.Price)
                .HasColumnType("decimal(18,4)")
                .IsRequired();

            modelBuilder.Entity<Product>()
                .Property(x => x.Description)
                .HasMaxLength(250);

            modelBuilder.Entity<Product>()
                .Property(x => x.Discount)
                .HasColumnType("decimal(18,4)");

            modelBuilder.Entity<Product>()
                .Property(x => x.Image)
                .IsRequired();

            // Size
            modelBuilder.Entity<Size>()
                .Property(x => x.Name)
                .HasMaxLength(50)
                .IsRequired();

            // ProductSize
            modelBuilder.Entity<ProductSize>()
                .Property(x => x.Stock)
                .IsRequired();

            // OrderItem

            modelBuilder.Entity<OrderItem>()
                .Property(x => x.Quantity)
                .IsRequired();

            //Order
            modelBuilder.Entity<Order>()
                .Property(x => x.Price)
                .HasColumnType("decimal(18,4)");
            
            // User
            modelBuilder.Entity<User>()
                .Property(x => x.FirstName)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.LastName)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Username)
                .HasMaxLength(25)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Password)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Email)
                .HasMaxLength(50)
                .IsRequired();

            // Configure relations ........

            // For nesting category,sub,product

            modelBuilder.Entity<Category>()
                        .HasMany(c => c.Subcategories)
                        .WithOne(s => s.Category)
                        .HasForeignKey(s => s.CategoryId); 

            modelBuilder.Entity<Subcategory>()
                .HasMany(s => s.Products)
                .WithOne(p => p.Subcategory)
                .HasForeignKey(p => p.SubcategoryId);

            // For Product/User business wise

            modelBuilder.Entity<Product>()
                .HasMany(ps => ps.ProductSizes)
                .WithOne(p => p.Product)
                .HasForeignKey(ps => ps.ProductId);

            modelBuilder.Entity<ProductSize>()
                .HasOne(ps => ps.Size)
                .WithMany(s => s.ProductSizes)
                .HasForeignKey(ps => ps.SizeId);

            modelBuilder.Entity<OrderItem>()
                .HasOne(oi => oi.ProductSize)
                .WithMany(ps => ps.OrderItems)
                .HasForeignKey(oi => oi.ProductSizeId);

            modelBuilder.Entity<Order>()
                .HasMany(oi => oi.OrderItems)
                .WithOne(o => o.Order)
                .HasForeignKey(oi => oi.OrderId);

            modelBuilder.Entity<UserOrder>()
                .HasOne(uo => uo.Order)
                .WithMany(o => o.UserOrders)
                .HasForeignKey(uo => uo.OrderId);

            modelBuilder.Entity<User>()
                .HasMany(u => u.UserOrders)
                .WithOne(uo => uo.User)
                .HasForeignKey(uo => uo.UserId);

            modelBuilder.Entity<User>()
                .HasMany(u => u.Ratings)
                .WithOne(ra => ra.User)
                .HasForeignKey(ra => ra.UserId);

            modelBuilder.Entity<User>()
                .HasMany(u => u.Cards)
                .WithOne(c => c.User)
                .HasForeignKey(c => c.UserId);
        }
    }
}
