﻿// <auto-generated />
using System;
using Dropshiping.BackEnd.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    [DbContext(typeof(DropshipingDbContext))]
    [Migration("20230920155447_InitialMigration")]
    partial class InitialMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Order", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Note")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PaymentStatus")
                        .HasColumnType("int");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,4)");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Orderitem", b =>
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

                    b.ToTable("Orderitems");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Product", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Description")
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<decimal>("Discount")
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("RegoinId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("SubcategoryId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RegoinId");

                    b.HasIndex("SubcategoryId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProductId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("SizeId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Stock")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("SizeId");

                    b.ToTable("ProductSizes");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Raiting", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProductId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Rate")
                        .HasColumnType("int");

                    b.Property<string>("Review")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Raitings");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Region", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Shipping")
                        .HasColumnType("decimal(18,4)");

                    b.HasKey("Id");

                    b.ToTable("Regions");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Size", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Sizes");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Subcategory", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CategoryId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Subcategories");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.Card", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CardHolder")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CardNumber")
                        .HasColumnType("int");

                    b.Property<DateTime>("ExpirationDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("SecurityCode")
                        .HasColumnType("int");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Card");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.UserModels.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.HasKey("Id");

                    b.ToTable("Users");
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
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Orderitem", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Order", "Order")
                        .WithMany("Orderitems")
                        .HasForeignKey("OrderId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", "ProductSize")
                        .WithMany("Orderitems")
                        .HasForeignKey("ProductSizeId");

                    b.Navigation("Order");

                    b.Navigation("ProductSize");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Product", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Region", "Region")
                        .WithMany("Products")
                        .HasForeignKey("RegoinId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Subcategory", "Subcategory")
                        .WithMany("Products")
                        .HasForeignKey("SubcategoryId");

                    b.Navigation("Region");

                    b.Navigation("Subcategory");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Product", "Product")
                        .WithMany("ProductSizes")
                        .HasForeignKey("ProductId");

                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Size", "Size")
                        .WithMany("ProductSizes")
                        .HasForeignKey("SizeId");

                    b.Navigation("Product");

                    b.Navigation("Size");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Raiting", b =>
                {
                    b.HasOne("Dropshiping.BackEnd.Domain.ProductModels.Product", "Product")
                        .WithMany("Raitings")
                        .HasForeignKey("ProductId");

                    b.HasOne("Dropshiping.BackEnd.Domain.UserModels.User", "User")
                        .WithMany("Raitings")
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
                        .WithMany("Userorders")
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

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Order", b =>
                {
                    b.Navigation("Orderitems");

                    b.Navigation("Userorders");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Product", b =>
                {
                    b.Navigation("ProductSizes");

                    b.Navigation("Raitings");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.ProductSize", b =>
                {
                    b.Navigation("Orderitems");
                });

            modelBuilder.Entity("Dropshiping.BackEnd.Domain.ProductModels.Region", b =>
                {
                    b.Navigation("Products");
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

                    b.Navigation("Raitings");

                    b.Navigation("UserOrders");
                });
#pragma warning restore 612, 618
        }
    }
}