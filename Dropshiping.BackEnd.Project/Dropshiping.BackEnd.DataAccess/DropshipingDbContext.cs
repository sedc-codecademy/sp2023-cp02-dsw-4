using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text;
using XSystem.Security.Cryptography;
using static System.Net.Mime.MediaTypeNames;

namespace Dropshiping.BackEnd.DataAccess
{
    public class DropshipingDbContext : DbContext
    {
        public DropshipingDbContext(DbContextOptions options) : base(options)
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

            modelBuilder.Entity<Category>()
                .Property(x => x.Icon)
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

            modelBuilder.Entity<Order>()
                .Property(x => x.City)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder.Entity<Order>()
                .Property(x => x.Address)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<Order>()
                .Property(x => x.PostalCode)
                .HasMaxLength(10)
                .IsRequired();

            modelBuilder.Entity<Order>()
                .Property(x => x.PhoneNumber)
                .HasMaxLength(15)
                .IsRequired();

            modelBuilder.Entity<Order>()
                .Property(x => x.Note)
                .HasMaxLength(250);


            // User
            modelBuilder.Entity<User>()
                .Property(x => x.FirstName)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.LastName)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Username)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Password)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Email)
                .HasMaxLength(25)
                .IsRequired();

            modelBuilder.Entity<Card>()
                .Property(x => x.CardStatus)
                .IsRequired();

            modelBuilder.Entity<Card>()
                .Property(x => x.CardType)
                .IsRequired();
            modelBuilder.Entity<Card>()
                .Property(x => x.CardNumber)
                .IsRequired();

            modelBuilder.Entity<Card>()
                .Property(x => x.CardHolder)
                .HasMaxLength(20)
                .IsRequired();

            modelBuilder.Entity<Card>()
                .Property(x => x.ExpirationDate)
                .HasMaxLength(5)
                .IsRequired();

            modelBuilder.Entity<Card>()
                .Property(x => x.SecurityCode)
                .IsRequired();

            //phonenumber min 11 - max15
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

            string currentDirectory = Directory.GetCurrentDirectory();

            //Categories

            string categoryFilePath = Path.Combine(currentDirectory, "JsonData/categories.json");
            var categoriesData = File.ReadAllText(categoryFilePath);
            var categories = JsonConvert.DeserializeObject<List<Category>>(categoriesData);

            if (categories != null)
            {
                modelBuilder.Entity<Category>().HasData(categories.ToList());
            }


            //Subcategories

            string subcategoryFilePath = Path.Combine(currentDirectory, "JsonData/subcategories.json");
            var subcategoriesData = File.ReadAllText(subcategoryFilePath);
            var subcategories = JsonConvert.DeserializeObject<List<Subcategory>>(subcategoriesData);

            if (subcategories != null)
            {
                modelBuilder.Entity<Subcategory>().HasData(subcategories.ToList());
            }

            //Manufacturers

            string manufacturerFilePath = Path.Combine(currentDirectory, "JsonData/manufacturers.json");
            var manufacturersData = File.ReadAllText(manufacturerFilePath);
            var manufacturers = JsonConvert.DeserializeObject<List<Manufacturer>>(manufacturersData);

            if (manufacturers != null)
            {
                modelBuilder.Entity<Manufacturer>().HasData(manufacturers.ToList());
            }

            //Products
            string productsFilePath = Path.Combine(currentDirectory, "JsonData/products.json");
            var productsData = File.ReadAllText(productsFilePath);
            var products = JsonConvert.DeserializeObject<List<Product>>(productsData);
            

            if (products != null)
            {
                products.ForEach(x => x.DateOfCreation = DateTime.Now);
                modelBuilder.Entity<Product>().HasData(products.ToList());
            }

            //Sizes

            string sizesFilePath = Path.Combine(currentDirectory, "JsonData/sizes.json");
            var sizesData = File.ReadAllText(sizesFilePath);
            var sizes = JsonConvert.DeserializeObject<List<Size>>(sizesData);

            if (sizes != null)
            {
                modelBuilder.Entity<Size>().HasData(sizes.ToList());
            }

            // Colors

            string colorsFilePath = Path.Combine(currentDirectory, "JsonData/colors.json");
            var colorsData = File.ReadAllText(colorsFilePath);
            var colors = JsonConvert.DeserializeObject<List<Color>>(colorsData);

            if (colors != null)
            {
                modelBuilder.Entity<Color>().HasData(colors.ToList());
            }


            //ProductSizes

            string productsizesFilePath = Path.Combine(currentDirectory, "JsonData/productSizes.json");
            var productsizesData = File.ReadAllText(productsizesFilePath);
            var productsizes = JsonConvert.DeserializeObject<List<ProductSize>>(productsizesData);

            if (productsizes != null)
            {
                modelBuilder.Entity<ProductSize>().HasData(productsizes.ToList());
            }

            //Orders
            string ordersFilePath = Path.Combine(currentDirectory, "JsonData/orders.json");
            var ordersData = File.ReadAllText(ordersFilePath);
            var orders = JsonConvert.DeserializeObject<List<Order>>(ordersData);

            if (orders != null)
            {
                orders.ForEach(x => x.PurchasedTime = DateTime.Now);
                modelBuilder.Entity<Order>().HasData(orders.ToList());
            }

            //OrderItems

            string orderItemsFilePath = Path.Combine(currentDirectory, "JsonData/orderItems.json");
            var orderItemsData = File.ReadAllText(orderItemsFilePath);
            var orderItems = JsonConvert.DeserializeObject<List<OrderItem>>(orderItemsData);

            if (orderItems != null)
            {
                modelBuilder.Entity<OrderItem>().HasData(orderItems.ToList());
            }


            //Users
            string GenerateHashPassword(string password)
            {
                MD5CryptoServiceProvider md5CryptoServiceProvider = new MD5CryptoServiceProvider();

                byte[] passwordBytes = Encoding.ASCII.GetBytes(password);

                byte[] hash = md5CryptoServiceProvider.ComputeHash(passwordBytes);

                string hashedPAssword = Convert.ToHexString(hash);

                return hashedPAssword;
            }

            string usersFilePath = Path.Combine(currentDirectory, "JsonData/users.json");
            var usersData = File.ReadAllText(usersFilePath);
            var users = JsonConvert.DeserializeObject<List<User>>(usersData);

            if (users != null)
            {
                users.ForEach(x => x.Password = GenerateHashPassword(x.Password));
                modelBuilder.Entity<User>().HasData(users.ToList());
            }

            //Ratings

            string ratingsFilePath = Path.Combine(currentDirectory, "JsonData/ratings.json");
            var ratingsData = File.ReadAllText(ratingsFilePath);
            var ratings = JsonConvert.DeserializeObject<List<Rating>>(ratingsData);

            if (ratings != null)
            {
                ratings.ForEach(x => x.Date = DateTime.Now);
                modelBuilder.Entity<Rating>().HasData(ratings.ToList());
            }

            //UserOrders

            string userordersFilePath = Path.Combine(currentDirectory, "JsonData/userOrders.json");
            var userordersData = File.ReadAllText(userordersFilePath);
            var userorders = JsonConvert.DeserializeObject<List<UserOrder>>(userordersData);

            if (userorders != null)
            {
                modelBuilder.Entity<UserOrder>().HasData(userorders.ToList());
            }


            //Cards
            string cardsFilePath = Path.Combine(currentDirectory, "JsonData/cards.json");
            var cardsData = File.ReadAllText(cardsFilePath);
            var cards = JsonConvert.DeserializeObject<List<Card>>(cardsData);

            if (cards != null)
            {
                modelBuilder.Entity<Card>().HasData(cards.ToList());
            }

            //Subscribers

            string subscribersFilePath = Path.Combine(currentDirectory, "JsonData/subscribers.json");
            var subscribersData = File.ReadAllText(subscribersFilePath);
            var subscribers = JsonConvert.DeserializeObject<List<Subscriber>>(subscribersData);

            if (subscribers != null)
            {
                modelBuilder.Entity<Subscriber>().HasData(subscribers.ToList());
            }
        }

    }
}
