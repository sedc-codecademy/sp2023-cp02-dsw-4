﻿using Dropshiping.BackEnd.DataAccess;
using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Services.ProductServices.Implementation;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.UserServices.Implementation;
using Dropshiping.BackEnd.Services.UserServices.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Dropshiping.BackEnd.Helpers
{
    public static class DependencyInjectionHelpers
    {
        // Inject Configuration string
        public static void InjectDbContext(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DropshipingDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("Default"));
            });
        }

        //Repositories
        public static void InjectRepositories(IServiceCollection services)
        {

            // Product menagment Repositories
            services.AddTransient<IRepository<Category>, CategoryRepository>();
            services.AddTransient<IRepository<Subcategory>, SubcategoryRepository>();
            services.AddTransient<IRepository<Manufacturer>, ManufacturerRepository>();
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<IRepository<OrderItem>, OrderitemRepository>();
            services.AddTransient<IRepository<Rating>, RatingRepository>();
            services.AddTransient<IRepository<Size>, Repository<Size>>();
            services.AddTransient<IRepository<Color>, Repository<Color>>();
            services.AddTransient<IRepository<ProductSize>, ProductSizeRepository>();
            services.AddTransient<IRepository<Subscriber>, Repository<Subscriber>>();
            services.AddTransient<IRepository<Order>, OrderRepository>();


            // User Repository
            services.AddTransient<IUserRepository,UserRepository> ();
            services.AddTransient<IRepository<UserOrder>, UserOrderRepository>();
            services.AddTransient<IRepository<Card>, CardRepository>();
            
        }

        //Services
        public static void InjectService(IServiceCollection services)
        {

            // Product menagment Services
            services.AddTransient<ICategoryService, CategoryService>();
            services.AddTransient<ISubcategoryService, SubcategoryService>();
            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<IManufacturerService, ManufacturerService>();
            services.AddTransient<IRatingService, RatingService>();
            services.AddTransient<ISubscriberService, SubscriberService>();
            services.AddTransient<ISizeService, SizeServices>();
            services.AddTransient<IColorService, ColorServices> ();
            services.AddTransient<IProductSizeService, ProductSizeService>();
            services.AddTransient<IOrderitemService, OrderitemService>();
            services.AddTransient<IOrderService, OrderService>();

            // User Services
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserOrderService, UserOrderService>();
            services.AddTransient<ICardService, CardService>();
        }

    }
}