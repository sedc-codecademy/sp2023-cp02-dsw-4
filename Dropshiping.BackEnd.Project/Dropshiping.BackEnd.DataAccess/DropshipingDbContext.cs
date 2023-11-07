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
                .Property(x => x.Description)
                .HasMaxLength(250)
                .IsRequired();

            modelBuilder.Entity<Product>()
                .Property(x => x.Image)
                .IsRequired();

            modelBuilder.Entity<Product>()
                .Property(x => x.Price)
                .HasColumnType("decimal(18,4)")
                .IsRequired();

            modelBuilder.Entity<Product>()
                .Property(x => x.DateOfCreation)
                .IsRequired();


            // Rating
            modelBuilder.Entity<Rating>()
               .Property(x => x.Rate)
               .IsRequired();

            modelBuilder.Entity<Rating>()
               .Property(x => x.Date)
               .IsRequired();

            modelBuilder.Entity<Rating>()
                .Property(x => x.Review)
                .HasMaxLength(500);

            modelBuilder.Entity<Rating>()
                .Property(x => x.Pros)
                .HasMaxLength(250);

            modelBuilder.Entity<Rating>()
                .Property(x => x.Cons)
                .HasMaxLength(250);

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
            modelBuilder.Entity<Order>()
                .Property(x => x.Shipping)
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

            modelBuilder.Entity<Manufacturer>()
                .HasMany(s => s.Products)
                .WithOne(p => p.Manufacturer)
                .HasForeignKey(p => p.ManufacturerId);

            // For Product/User business wise

            modelBuilder.Entity<Product>()
                .HasMany(p => p.ProductSizes)
                .WithOne(ps => ps.Product)
                .HasForeignKey(ps => ps.ProductId);

            modelBuilder.Entity<Product>()
                .HasMany(p => p.Ratings)
                .WithOne(r => r.Product)
                .HasForeignKey(r => r.ProductId);

            modelBuilder.Entity<ProductSize>()
                .HasOne(ps => ps.Size)
                .WithMany(s => s.ProductSizes)
                .HasForeignKey(ps => ps.SizeId);

            modelBuilder.Entity<ProductSize>()
                .HasOne(ps => ps.Color)
                .WithMany(c => c.ProductSizes)
                .HasForeignKey(ps => ps.ColorId);

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

            //Seeding
            modelBuilder.Entity<Category>().HasData(
                new Category
                {
                    Id = "1",
                    Name = "Category1",
                    Image ="Image"
                });

            modelBuilder.Entity<Subcategory>().HasData(
                new Subcategory
                {
                    Id = "1",
                    Name = "SubCategory1",
                    Description = "description",
                    Image = "Image",
                    CategoryId = "1"
                });
            modelBuilder.Entity<Manufacturer>().HasData(
                new Manufacturer
                {
                    Id = "1",
                    Name = "Manufacturer1",
                    Image = "Image",
                });
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = "1",
                    Name = "Product1",
                    Description = "description",
                    Image = "Image",
                    Price = 1000,
                    DateOfCreation = DateTime.Now,
                    Discount = 50,
                    Searches = 5,
                    ManufacturerId = "1",
                    SubcategoryId = "1",
                });
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = "2",
                    Name = "Product2",
                    Description = "description",
                    Image = "Image",
                    Price = 500,
                    DateOfCreation = DateTime.Now,
                    Discount = 0,
                    Searches = 0,
                    ManufacturerId = "1",
                    SubcategoryId = "1",
                });
            modelBuilder.Entity<Size>().HasData(
                new Size
                {
                    Id = "1",
                    Name = "S",
                });
            modelBuilder.Entity<Size>().HasData(
               new Size
               {
                   Id = "2",
                   Name = "M",
               });
            modelBuilder.Entity<Color>().HasData(
               new Color
               {
                   Id = "1",
                   Name = "Black",
               });
            modelBuilder.Entity<Color>().HasData(
               new Color
               {
                   Id = "2",
                   Name = "White",
               });
            modelBuilder.Entity<ProductSize>().HasData(
               new ProductSize
               {
                   Id = "1",
                   Stock = 10,
                   SizeId = "1",
                   ProductId = "1",
                   ColorId = "1",
               });
            modelBuilder.Entity<ProductSize>().HasData(
               new ProductSize
               {
                   Id = "2",
                   Stock = 15,
                   SizeId = "1",
                   ProductId = "1",
                   ColorId = "2",
               });
            modelBuilder.Entity<ProductSize>().HasData(
               new ProductSize
               {
                   Id = "3",
                   Stock = 5,
                   SizeId = "2",
                   ProductId = "1",
                   ColorId = "2",
               });
            modelBuilder.Entity<ProductSize>().HasData(
               new ProductSize
               {
                   Id = "4",
                   Stock = 30,
                   SizeId = "1",
                   ProductId = "2",
                   ColorId = "1",
               });
            modelBuilder.Entity<Order>().HasData(
               new Order
               {
                   Id = "1",
                   PurchasedTime = DateTime.Now,
                   Address = "address",
                   PostalCode = "1000",
                   City = "Skopje",
                   PhoneNumber = 123123,
                   Status = Enums.StatusEnum.Purchased,
                   PaymentStatus = Enums.PaymentStatusEnum.PayingOnDelivery,
                   Shipping = 0,
                   Price = 1000,

               });
            modelBuilder.Entity<Order>().HasData(
               new Order
               {
                   Id = "2",
                   PurchasedTime = DateTime.Now,
                   Address = "address",
                   PostalCode = "12345",
                   City = "Ohrid",
                   PhoneNumber = 123123,
                   Status = Enums.StatusEnum.Purchased,
                   PaymentStatus = Enums.PaymentStatusEnum.PayingOnDelivery,
                   Shipping = 150,
                   Price = 3000,

               });
            modelBuilder.Entity<OrderItem>().HasData(
               new OrderItem
               {
                   Id = "1",
                   Quantity = 1,
                   ProductSizeId = "1",
                   OrderId = "1",
               });
            modelBuilder.Entity<OrderItem>().HasData(
               new OrderItem
               {
                   Id = "2",
                   Quantity = 3,
                   ProductSizeId = "4",
                   OrderId = "2",
               });
            modelBuilder.Entity<User>().HasData(
               new User
               {
                   Id = "1",
                   FirstName = "Test",
                   LastName = "Test",
                   Username = "Test",
                   Password = "Test",
                   Email = "Test",
                   Role = Enums.RoleEnum.User,

               });
            modelBuilder.Entity<Rating>().HasData(
               new Rating
               {
                   Id = "1",
                   Rate = Enums.RateEnum.Five,
                   Date = DateTime.Now,
                   ProductId = "1",
                   UserId = "1",
                   
               });
            modelBuilder.Entity<Rating>().HasData(
               new Rating
               {
                   Id = "2",
                   Rate = Enums.RateEnum.Four,
                   Date = DateTime.Now,
                   ProductId = "2",
                   UserId = "1",
               });
        }




    }
}
