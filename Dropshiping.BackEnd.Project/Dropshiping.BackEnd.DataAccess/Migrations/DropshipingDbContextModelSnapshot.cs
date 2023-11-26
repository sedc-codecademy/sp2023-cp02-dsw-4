﻿// <auto-generated />
using System;
using Dropshiping.BackEnd.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    [DbContext(typeof(DropshipingDbContext))]
    partial class DropshipingDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Category", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Image = "Image",
                            Name = "Category1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Color", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Colors");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Name = "Black"
                        },
                        new
                        {
                            Id = "2",
                            Name = "White"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Manufacturer", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Manufacturers");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Image = "Image",
                            Name = "Manufacturer1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Order", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CardHolder")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CardNumber")
                        .HasColumnType("int");

                    b.Property<int>("CardType")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ExpirationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Note")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PaymentStatus")
                        .HasColumnType("int");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,4)");

                    b.Property<DateTime>("PurchasedTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("SecurityCode")
                        .HasColumnType("int");

                    b.Property<decimal>("Shipping")
                        .HasColumnType("decimal(18,4)");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Orders");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Address = "address",
                            CardNumber = 0,
                            CardType = 0,
                            City = "Skopje",
                            ExpirationDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PaymentStatus = 2,
                            PhoneNumber = 123123,
                            PostalCode = "1000",
                            Price = 1000m,
                            PurchasedTime = new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3934),
                            SecurityCode = 0,
                            Shipping = 0m,
                            Status = 1
                        },
                        new
                        {
                            Id = "2",
                            Address = "address",
                            CardNumber = 0,
                            CardType = 0,
                            City = "Ohrid",
                            ExpirationDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PaymentStatus = 2,
                            PhoneNumber = 123123,
                            PostalCode = "12345",
                            Price = 3000m,
                            PurchasedTime = new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3980),
                            SecurityCode = 0,
                            Shipping = 150m,
                            Status = 1
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.OrderItem", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProductSizeId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductSizeId");

                    b.ToTable("OrderItems");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            OrderId = "1",
                            ProductSizeId = "1",
                            Quantity = 1
                        },
                        new
                        {
                            Id = "2",
                            OrderId = "2",
                            ProductSizeId = "4",
                            Quantity = 3
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Product", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DateOfCreation")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<int>("Discount")
                        .HasColumnType("int");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ManufacturerId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,4)");

                    b.Property<int>("Searches")
                        .HasColumnType("int");

                    b.Property<string>("SubcategoryId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("ManufacturerId");

                    b.HasIndex("SubcategoryId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            DateOfCreation = new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3315),
                            Description = "description",
                            Discount = 50,
                            Image = "Image",
                            ManufacturerId = "1",
                            Name = "Product1",
                            Price = 1000m,
                            Searches = 5,
                            SubcategoryId = "1"
                        },
                        new
                        {
                            Id = "2",
                            DateOfCreation = new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3433),
                            Description = "description",
                            Discount = 0,
                            Image = "Image",
                            ManufacturerId = "1",
                            Name = "Product2",
                            Price = 500m,
                            Searches = 0,
                            SubcategoryId = "1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ColorId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProductId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("SizeId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Stock")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ColorId");

                    b.HasIndex("ProductId");

                    b.HasIndex("SizeId");

                    b.ToTable("ProductSizes");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            ColorId = "1",
                            ProductId = "1",
                            SizeId = "1",
                            Stock = 10
                        },
                        new
                        {
                            Id = "2",
                            ColorId = "2",
                            ProductId = "1",
                            SizeId = "1",
                            Stock = 15
                        },
                        new
                        {
                            Id = "3",
                            ColorId = "2",
                            ProductId = "1",
                            SizeId = "2",
                            Stock = 5
                        },
                        new
                        {
                            Id = "4",
                            ColorId = "1",
                            ProductId = "2",
                            SizeId = "1",
                            Stock = 30
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Rating", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Cons")
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("ProductId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Pros")
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<int>("Rate")
                        .HasColumnType("int");

                    b.Property<string>("Review")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Ratings");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Date = new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(4140),
                            ProductId = "1",
                            Rate = 5,
                            UserId = "1"
                        },
                        new
                        {
                            Id = "2",
                            Date = new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(4181),
                            ProductId = "2",
                            Rate = 4,
                            UserId = "1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Size", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Sizes");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Name = "S"
                        },
                        new
                        {
                            Id = "2",
                            Name = "M"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Subcategory", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CategoryId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Subcategories");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            CategoryId = "1",
                            Description = "description",
                            Image = "Image",
                            Name = "SubCategory1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.Card", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CardHolder")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<long>("CardNumber")
                        .HasColumnType("bigint");

                    b.Property<int>("CardStatus")
                        .HasColumnType("int");

                    b.Property<int>("CardType")
                        .HasColumnType("int");

                    b.Property<string>("ExpirationDate")
                        .IsRequired()
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)");

                    b.Property<int>("SecurityCode")
                        .HasColumnType("int");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Cards");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            CardHolder = "Ana B",
                            CardNumber = 4111111111111111L,
                            CardStatus = 1,
                            CardType = 1,
                            ExpirationDate = "05/25",
                            SecurityCode = 123,
                            UserId = "1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.Subscriber", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Subscribers");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Email = "Test",
                            FirstName = "Test",
                            LastName = "Test",
                            Password = "Test",
                            Role = 1,
                            Username = "Test"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.UserOrder", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("UserId");

                    b.ToTable("UserOrders");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            OrderId = "1",
                            UserId = "1"
                        },
                        new
                        {
                            Id = "2",
                            OrderId = "2",
                            UserId = "1"
                        });
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.OrderItem", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Order", "Order")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", "ProductSize")
                        .WithMany("OrderItems")
                        .HasForeignKey("ProductSizeId");

                    b.Navigation("Order");

                    b.Navigation("ProductSize");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Product", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Manufacturer", "Manufacturer")
                        .WithMany("Products")
                        .HasForeignKey("ManufacturerId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Subcategory", "Subcategory")
                        .WithMany("Products")
                        .HasForeignKey("SubcategoryId");

                    b.Navigation("Manufacturer");

                    b.Navigation("Subcategory");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Color", "Color")
                        .WithMany("ProductSizes")
                        .HasForeignKey("ColorId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Product", "Product")
                        .WithMany("ProductSizes")
                        .HasForeignKey("ProductId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Size", "Size")
                        .WithMany("ProductSizes")
                        .HasForeignKey("SizeId");

                    b.Navigation("Color");

                    b.Navigation("Product");

                    b.Navigation("Size");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Rating", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Product", "Product")
                        .WithMany("Ratings")
                        .HasForeignKey("ProductId");

                    b.HasOne("Dropshiping.BackEnd.Domain.UserModels.User", "User")
                        .WithMany("Ratings")
                        .HasForeignKey("UserId");

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Subcategory", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Category", "Category")
                        .WithMany("Subcategories")
                        .HasForeignKey("CategoryId");

                    b.Navigation("Category");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.Card", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.UserModels.User", "User")
                        .WithMany("Cards")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.UserOrder", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Order", "Order")
                        .WithMany("UserOrders")
                        .HasForeignKey("OrderId");

                    b.HasOne("Dropshiping.BackEnd.Domain.UserModels.User", "User")
                        .WithMany("UserOrders")
                        .HasForeignKey("UserId");

                    b.Navigation("Order");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Category", b =>
                {
                    b.Navigation("Subcategories");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Color", b =>
                {
                    b.Navigation("ProductSizes");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Manufacturer", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Order", b =>
                {
                    b.Navigation("OrderItems");

                    b.Navigation("UserOrders");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Product", b =>
                {
                    b.Navigation("ProductSizes");

                    b.Navigation("Ratings");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", b =>
                {
                    b.Navigation("OrderItems");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Size", b =>
                {
                    b.Navigation("ProductSizes");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Subcategory", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.User", b =>
                {
                    b.Navigation("Cards");

                    b.Navigation("Ratings");

                    b.Navigation("UserOrders");
                });
#pragma warning restore 612, 618
        }
    }
}
