using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedJsons : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "0cb68ba1-a203-4c5c-b995-e8dfe9f95af3");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "0d30b618-e954-4001-8d99-2c47bef531de");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "322461cd-e2cc-4bc9-b1f3-174240fa0dc1");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "42c15340-1696-45a0-a744-34a46cc2bb90");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "48194f27-74df-4764-bcef-8fb3513f83dd");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "508fc379-2d29-4a66-855f-a0e810a6fc34");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "52333943-729e-4be6-9e01-20739d33a9df");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "552e3d7e-5a98-422a-a5c4-afe207559f28");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "555a9851-7bc4-48a7-a525-c940926ef3a5");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "5ca1b7d1-a88a-4867-a2f4-e49ec4864ffb");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "5d5dcfbe-49f5-4823-9816-8210de69d15b");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "679ca905-a697-4636-91d5-390cc026baf4");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "906ea1dc-fd94-4c3f-aa50-47b4809ac1f5");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "97e368d0-f837-4433-ac9a-2401b7ebb1c1");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "9f4153de-b626-457b-a40f-4832875676f7");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b3c5e142-d76d-4d4e-bbf5-29b87eadca58");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b982a318-96f0-464b-a430-b54693e7867b");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "bea8b20c-b76c-4d4b-81af-61704f1903a2");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "efd8f20c-576f-42bc-9070-dec2bb323edc");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "f0586fbe-1bd2-459f-93a0-7af7b72ce3dd");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "fd8d3619-1a03-4b01-a1f5-f8051c5a5fcc");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ff542cb3-3b6d-41c9-bf2a-eb6508d7280f");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ffd76b68-7a3f-48d2-be3b-54243147bfca");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "autoaccessories",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/autoaccsmall.jpg", "/imgs/categories/autoacc.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "beauty",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/beautysmall.jpg", "/imgs/categories/beauty.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "homeandgarden",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/homesmall.jpg", "/imgs/categories/home.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "menswear",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/mens-Wearsmall.jpg", "/imgs/categories/mensWear.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "sports",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/sportssmall.jpg", "/imgs/categories/sports.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "technology",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/technologysmall.jpg", "/imgs/categories/technology.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "womenswear",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "/imgs/categories/womens-Wearsmall.jpg", "/imgs/categories/womens-Wear.jpg" });

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autobosch",
                column: "Image",
                value: "/imgs/manufacturers/bosch.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autocraft",
                column: "Image",
                value: "/imgs/manufacturers/covercraft.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autogarmin",
                column: "Image",
                value: "/imgs/manufacturers/garmin-1.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "automichelin",
                column: "Image",
                value: "/imgs/manufacturers/michelin.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autopioneer",
                column: "Image",
                value: "/imgs/manufacturers/pioneer.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautydove",
                column: "Image",
                value: "/imgs/manufacturers/dove.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautyestee",
                column: "Image",
                value: "/imgs/manufacturers/este.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautygarnier",
                column: "Image",
                value: "/imgs/manufacturers/garnier.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautyloreal",
                column: "Image",
                value: "/imgs/manufacturers/loreal.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautyolay",
                column: "Image",
                value: "/imgs/manufacturers/olay.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handbehr",
                column: "Image",
                value: "/imgs/manufacturers/behr.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handdepot",
                column: "Image",
                value: "/imgs/manufacturers/homedepot.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handgdecker",
                column: "Image",
                value: "/imgs/manufacturers/black-decker-2.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handikea",
                column: "Image",
                value: "/imgs/manufacturers/ikea.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handlowes",
                column: "Image",
                value: "/imgs/manufacturers/lowes.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "mensadidas",
                column: "Image",
                value: "/imgs/manufacturers/adidas.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "mensclarks",
                column: "Image",
                value: "/imgs/manufacturers/clarks.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "menshugo",
                column: "Image",
                value: "/imgs/manufacturers/hugo.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "mensnike",
                column: "Image",
                value: "/imgs/manufacturers/nike.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "menstom",
                column: "Image",
                value: "/imgs/manufacturers/tom.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsmizuno",
                column: "Image",
                value: "/imgs/manufacturers/mizuno.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsnorth",
                column: "Image",
                value: "/imgs/manufacturers/northface.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportspuma",
                column: "Image",
                value: "/imgs/manufacturers/puma.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsrebook",
                column: "Image",
                value: "/imgs/manufacturers/reebok.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsuarmour",
                column: "Image",
                value: "/imgs/manufacturers/underarmour.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techapple",
                column: "Image",
                value: "/imgs/manufacturers/apple.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techlg",
                column: "Image",
                value: "/imgs/manufacturers/lg.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "technokia",
                column: "Image",
                value: "/imgs/manufacturers/nokia.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techsamsung",
                column: "Image",
                value: "/imgs/manufacturers/samsung.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techsony",
                column: "Image",
                value: "/imgs/manufacturers/sony.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techxiaomi",
                column: "Image",
                value: "/imgs/manufacturers/xiaomi.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womenschanel",
                column: "Image",
                value: "/imgs/manufacturers/chanel-1.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womenshm",
                column: "Image",
                value: "/imgs/manufacturers/h-m.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womensprada",
                column: "Image",
                value: "/imgs/manufacturers/prada.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womensvictoria",
                column: "Image",
                value: "/imgs/manufacturers/victoria.jpg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womenszara",
                column: "Image",
                value: "/imgs/manufacturers/zara.jpg");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 445, DateTimeKind.Local).AddTicks(7445));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 445, DateTimeKind.Local).AddTicks(7486));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "3",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 445, DateTimeKind.Local).AddTicks(7488));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "4",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 445, DateTimeKind.Local).AddTicks(7489));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "5",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 445, DateTimeKind.Local).AddTicks(7491));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "013053e6-4e6b-4093-bb2a-4f5e007c44ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3311));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "01b41576-5f8d-475f-88e8-122cd7e15b5c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3712));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "022e2163-a617-4324-b06a-ff80415bdf06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3465));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "03b07a62-e987-4544-90b8-5955bc6051a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2760));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "051cd50e-5497-4c17-9a03-f094f96a76b3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3169));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05d827ba-e6ed-4159-be96-04f2b71d27cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3205));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e4932f-b86e-40de-bc3a-d6edb461d109",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3097));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e6aed2-3e6d-430e-ba53-3108182378d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2943));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "06ff5983-84f7-4999-a812-9d21117478dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3191));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0754cac8-5d4b-4bb6-94fd-d8d15d4d1a5e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3600));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "07ea471c-8970-4ebc-a242-255ef39de930",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3333));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0806ff69-ba2a-46d8-b828-d63cc6ccd01d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3399));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3751));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08c0f380-042b-44ad-8f5b-c6a0fdb89089",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3373));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08ca6a32-41a7-4317-8148-a58e733854e7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3366));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a2dafad-ef52-42b1-b760-b2f160f09e25",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3555));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a54bf68-791b-4573-aabf-583db9e83e05",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3409));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a87621f-3066-4df1-ad90-4161cbd17b9c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3007));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ac71d91-25ae-4d53-8a11-4118494224e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3036));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ad310e2-48e2-4f76-a9cf-635c0384925c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3025));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0bea072a-0e26-48d0-9357-44cf35e056d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3115));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0de7b3ef-6a40-469f-a17a-2a9a663a4312",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3305));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e2160fc-e95f-4d9d-89a6-dce377ae7b34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3330));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e428c6f-64b3-41be-ab7d-b4031dc430cf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3299));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e46225d-54e0-46bd-93ca-3226d3fe157e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3593));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3630));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "100a3b8d-61bc-47a3-9520-a37bbe2abc0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3626));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10c930ed-f326-48da-a571-6889262104ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3703));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10fbc819-c0b3-4a97-8999-f44840827446",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3689));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "12e13234-2da4-475f-89ce-3b16125da53c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3183));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1324bca3-1eb0-4db9-a069-c33322753cf6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3628));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13bee259-e388-4b18-8700-ecd3a0844858",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2939));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13ed769d-2c43-47fd-9525-27eb52505e51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3534));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "15b1e745-03cb-4873-892d-18a1dfc16fe2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3215));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "162db9c7-dc26-4427-929f-f06891adf285",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3280));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16672559-004b-47c0-8a4f-9f55fc129785",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3768));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16a06882-a2f4-43e5-afda-590971c6152e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3619));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16fdfb87-f4ee-4567-9904-af3164f203d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3802));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3088));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ad70921-3eaa-4272-b7d2-e3aec90862c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3428));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1b6a9dbf-01b9-47b7-a7c8-3df7fd89da4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3659));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3723));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1eb4379a-a87b-441d-bd49-af2bea052b50",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2945));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ed9876d-fa08-4fb3-8dc7-261d1225548c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3139));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fa012e8-c124-46c4-a390-0a0d8ff118fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3459));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fd49222-be5c-442a-ba8d-6d0d902be8df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2836));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fe6f99d-afa0-47b5-ac53-8f7a0b36264b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3119));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "20855d33-7fba-4408-aa81-67c85af2b3aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3223));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "21364990-c2e4-4598-a617-5286281f1885",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3069));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "215eb3c6-55fc-4c2d-9746-6c9c6a012326",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3065));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "218db5cc-3555-4c1c-af09-d69f7ca1f4ae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3549));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22342ce7-d548-4040-8a95-4ce837e0e8bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3294));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22921046-fc72-4dca-b4d8-23fb82b2c417",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3344));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "23c0f84f-f9cd-4d1f-912b-d83d574b1c0c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3691));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "25a35a75-b84a-4556-97c4-faf1c32e4c90",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3207));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "262c138c-f65d-4528-bd40-e54a28712b2a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3160));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "264db346-d6cd-42bd-8710-934d194ffe21",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3054));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "270f8981-0025-4016-9d4b-d962522ebcdd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3450));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2819ed17-0637-49e8-a797-04616be7e636",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3641));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "288a2013-d786-41fe-b4b9-a56c3a8e4187",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3130));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "28ad32de-e0aa-4454-a802-c756b4b0d8e1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3649));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a52ebff-9687-4309-8d9c-c32a585243d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3765));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a67a875-ec48-4295-9159-5021d48ef30c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3588));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b265092-ee4f-490f-b7e9-0e8290d51c93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2884));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3106));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c163753-69b0-46d6-8f04-615b334a1ece",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3462));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c8676d4-55be-4090-ad12-9b66b88d188a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3753));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2cbfd742-d03e-44a5-bf0e-6bf1709e0599",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3525));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d373ea8-695f-47cc-8ee8-2f672eef7609",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3382));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3095));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d7e1567-2863-4073-ba87-1c09cd435400",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3369));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2e0a563c-03ef-456c-8bfc-c9e14283a5b9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2841));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2eea9eb3-dbda-4069-b09b-70d1e802c715",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2920));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f7e55f3-2fc1-43a0-8ed1-d8d092fe51da",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3445));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f8ce754-9e39-478d-b8a3-69b0d672e2eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3701));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "306df296-d233-4795-bb9c-6a5bb8ba1422",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3506));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "31d084b6-e885-4b46-b517-f2d9df72ab61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3761));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "324b72d9-f597-4c3d-9490-a90225002406",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3553));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "34bafd74-3e1c-4bf3-a832-270b4481eb8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3208));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "35744787-3044-46a3-a613-126b4387419b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2997));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3606ba10-ae01-4789-a1b4-1e17bae8b384",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3174));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3748));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38212e7c-d4f5-4729-a6ac-220340ba4ad0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3237));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "385adbbf-3523-461e-8235-1d0ae0a0a752",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3014));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38f15679-ddd3-40ce-a148-5ddf31317f78",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3685));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3750));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "393f691e-1ec3-4d6f-bba2-0c9e0ae624c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3395));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a59b15b-2817-4432-be8a-097e614a243a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3132));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3720));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3b3fbb68-f41e-4ac3-b9ef-93c59630e68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3666));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3571));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3d39d7a3-8d8f-42c7-9f91-880a53a6a380",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2953));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3e9f2e08-4819-4f98-add8-f94ea8909ef3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3359));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3f34d9bb-8858-45ab-ab66-7653cf4b4632",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3099));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "41d72b4e-f572-4292-a90b-9c2ce51cce60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3323));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "42157d88-51ec-4a4a-a283-7951c56376ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3111));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4266b4ca-1999-48c7-9a1c-94b82f5bdecc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3235));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "43ba262d-15c7-4936-9bf5-eb9a06c0ee3d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3004));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "45784ea5-0041-4bf1-9c23-2e93657963fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3165));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "457d29fc-301b-4aa1-9337-610cd0144a9d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3746));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4778333f-2513-45ef-9b15-4a7ddb56ba16",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2929));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3785));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4833de13-c027-4f25-ae67-ba6a8117282a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3805));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3733));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3060));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4ab262eb-a388-4218-a411-f7c0cbfbc083",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3664));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3093));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4cadf79f-bf8c-468c-b766-e4211e828330",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3351));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4dea614b-430c-4abd-a648-74226675ee09",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3241));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4fc49f4b-3338-437e-9172-c5b2d061cb66",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3591));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3787));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50f7e18f-a606-4935-95aa-2679cfa37999",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3732));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5116b20c-3b9c-42ae-875f-788bf14ea028",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3108));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "537e4172-3dee-41e8-97cd-27edc38bb2ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3271));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3744));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5498c1a5-f773-4bcc-8acb-10794c36694c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3136));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "554ad846-8a31-43ae-a36b-6b5e329da7d9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3675));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3388));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3782));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58c9836c-3d54-4eaa-ab98-142a9023502b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3227));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58e26c93-1bdd-4ff1-aac7-761f71bd2ea2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3045));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3658));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a22f585-6379-4fcb-8059-736aee703ea3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3804));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a5d00df-2745-4f6b-a7a6-40a93c3efb15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2865));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a9847e1-4d55-419b-aefc-a298fb196d7c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3582));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3714));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c1b8585-54c8-4aa4-8659-bd7b6491ad6c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3348));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c2635b2-1577-4eb0-89ba-9a6a2a330f02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3646));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cd7422b-2901-46d5-987a-a2bdcce54223",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3376));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cf1420d-b916-4694-b1c9-c67ab7188033",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3693));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5d90c324-ec2e-4272-a1c7-15007b491bcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3637));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da5d9d9-03f0-4b26-aa19-d0037d0a1e0b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3102));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2832));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e2b1649-ccef-48f0-af29-04480659a698",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3319));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e38bece-7184-4889-9c94-ffebf7b2579d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3363));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e528195-7626-4d59-bcec-93838a587789",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3439));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5f0f89ae-2136-4509-a334-951cfe495cd7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3730));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60003e1d-68de-4f7a-937c-f636ab2b798d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3611));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60f4d55e-af8d-4b62-92bd-15c4f08fde39",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3198));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61829cb1-3692-4664-8727-d54f6bcc2a4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3085));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3737));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61c6f600-1ea9-4a55-8df8-79ee71b6b4ad",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2931));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61dd1f5e-bb22-45f8-a9c3-ffc5663f144f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3411));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "623cf00a-bc37-4b40-b008-47c4936ee0fb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3239));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62a66a93-cf80-4632-8cba-7126c7c996c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3377));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62e37b49-e838-41e2-84fa-64881c97c6a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3255));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6393507c-0aeb-45d1-93e6-a468f61084f7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2938));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "642f96e1-f879-4a87-8c34-b976d4c2d14d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3186));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "644ed6f5-1d49-46c8-8d4c-623bb5f44f06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3309));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6584ca3b-6f76-4237-a581-296624842641",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3318));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "65a11451-4f8f-4224-8628-ae1407974f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3291));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "679b396d-e17e-40f1-a79d-6d9c4838c36a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3623));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "690d1d22-2bbd-4f27-9549-58862b320685",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3728));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3755));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "698fe90c-e0a0-429a-846c-5e1cdd62dbf9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3635));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69cee78d-ba2e-4f14-ac65-6c50ea481778",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3273));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69f88fc8-31ed-4dcc-b19a-e75731a2b47f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3595));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6a6e57ac-0995-4317-9a98-f52b0a3786a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3511));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b7a7571-1a41-4feb-9d88-134a97007fcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3262));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b897bf1-077d-47ed-b8d0-84abcc0d29a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2950));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6bac2be5-1291-45b4-a5d8-9d106c807e99",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3562));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6c073e2c-3343-4fb4-a948-86dc83eb0af9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3662));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fa2b4f4-b767-4ac6-b22d-e50edf9438ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3385));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fd73a11-7250-4291-b706-281c40efefcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2877));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3777));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7067fe71-d0d0-4adb-b4b8-ee4891a74a1c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3126));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "712b1ac6-a732-45c4-94b7-2dbeb5c904bc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3354));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7447366f-649c-450a-ae99-c759057f8d8e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3027));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3721));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74be1b8d-a0b0-4788-89e3-9aa8476841fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3029));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "761b9633-ff86-4626-9563-ae92284f60ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3083));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "766ce0e4-60a1-4a63-8dd4-771f30de7041",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3696));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "76fd81bd-c9e8-4348-9411-0323ca0ee333",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3469));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "798629fb-9751-4d2f-a8fd-fedfa6b57c02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3710));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7ab36f6d-9c59-4aff-97c9-e406fc9b5ea5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3152));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7acf8f89-addb-4b53-80c9-c6f798020a11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3230));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7b4f6627-3fc9-4aae-9a3d-fbae4463936e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2934));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7cd3b4c0-7252-4873-b986-71e313667e8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3356));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d129827-9823-4468-88e3-e6ef5c05487f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3704));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d4de95c-aef1-4a5c-b7e2-2f1d793c2862",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3112));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7fb1b26c-5bf9-459b-b8d0-647929818374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3212));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "809d8ffc-8fdf-4d04-a3cd-a1489c440c92",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3056));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "810bbb00-b104-4b11-ab99-6f91b730029e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3157));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8173d005-a54a-4589-9775-ef8e7eb88a7d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3604));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3792));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3770));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82f8f9bc-6d8f-4fc1-9626-c342dce64bbc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3300));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85af39fc-10c2-4016-867f-78bda66d6990",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3486));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85cea852-e6fa-4e82-865b-0924b36713f2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3633));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8600635d-9264-4273-8906-75915a2396d0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3779));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86a47d55-c068-4cb0-b813-93234cc2600e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3118));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ec62c0-1363-43ca-b330-b2ee9df5c0a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3247));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ffc244-8e3b-4a16-be97-47a5e372291e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3580));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "870cff3a-4782-475f-abde-062a33cd95a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "888b70f7-d256-4890-8dfd-31f0dd9864c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3015));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "88e8459e-4d19-4386-bce5-84b901685bb5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3615));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "896e2b2d-b43a-4d2a-8eaa-59c1a6fb0762",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3075));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8a722b88-6df3-4664-ab61-390cd0e28645",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3296));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8b2bffe2-34d8-4ede-b2bd-16cfc25601d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3504));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8bda082a-7153-41bc-b04a-bde246de6877",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3390));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3601));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c559d76-c84a-4144-b6b8-259d896a97cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3741));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c5fde29-0da8-44de-9dc3-769698d9fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3176));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8d0d1487-da7c-49b0-8812-0acb418f6d04",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3543));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8de2c19f-6dc2-461b-a5a1-8acf2e3eca2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3443));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8e7e2151-0881-40e4-a21e-7536467e74a9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3393));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8ee1a5b3-784f-4fe9-a5b4-e0c86991c2a0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3492));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9020264a-3348-4e4b-97c1-3463074c5e5f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3809));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9104c7e9-0646-4d84-831b-72215d9393ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3680));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "910a7763-e37d-4d64-a0e2-61a5a76804dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3361));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9122246d-052a-4105-8c7e-605ff07a45b2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3698));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "93e47b26-b2ed-44e3-b3f4-0519a8381d93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3578));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "969d452a-fb83-4dde-a5e6-677d1f915912",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3668));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "96c9fe94-aa22-4efd-8526-1bf2f064ad48",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3189));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98857751-85f1-4921-b8a5-27f228ca295d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3456));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98912a2c-bf1d-4cfa-a605-fc3c2b4c2cc4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3342));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99adbca1-5e84-4b5d-977e-c33e8c56a57a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3403));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99b652b9-77db-4989-a8a9-d0cad2c61976",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3401));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9a1ef502-733c-40e6-8273-867971ae16d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3540));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9bb4cc0f-b72b-4bce-969e-a442a2e47f07",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3617));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9d833dbe-06a0-482f-a841-c902c2ca4012",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3453));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9db7c84e-94fd-4e3f-8a9b-726b557a93eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3313));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9eabd2ca-d4c5-4c8b-8b56-e88d77ccd4bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3430));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9efe4fca-e34c-4824-9bc7-4bc31d10a7b7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3163));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9f5f2a19-15bc-4057-a288-d1e88abfd16e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3473));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a071b643-8c74-4f62-86ca-2f506ff71c89",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3040));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a0f4efbb-56a3-4c5b-9bd5-4a0c15d29a61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3670));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a12803da-c155-431b-973f-0fb18133495d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3499));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3772));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3718));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1ead742-c2eb-44ae-85fe-bd97a79e5141",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3249));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2d10892-0ebf-4db4-80d9-5d240b325295",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3672));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2ec9b8a-7a25-41cb-89f3-0cf7e89410e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3047));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3797));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a36dc640-54d2-4b02-a01b-11841693f736",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3481));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a3fd8116-9e1d-40c0-90b2-ba89eda95906",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3653));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4442552-fcbc-4767-9bcc-38c4172ce456",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2941));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4c9eeff-59dc-446d-909d-27e90053284b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3196));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5a886da-209b-4bd3-a532-5e9ef25c7026",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3181));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3726));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a69bec07-9985-4829-aa84-f7b92ea5eaac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2936));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a6e0066b-0bf9-43f9-b4a3-f12bbeb6ddae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3193));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a70a2e02-8a15-466e-b651-351845673b73",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3252));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a769be06-7364-42b4-ae43-f4e743dc7cd0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3302));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a8764e34-1e34-46ce-9597-3add5a802a03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3773));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a9488c66-4662-457c-9cc0-c5d34298f352",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3143));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab02e0d7-8890-4385-8dcb-4421ca0c8bb6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3067));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab363f5c-ce22-4689-9789-ff1bcc9e1d69",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3170));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "abc0945a-9294-4463-b11f-e881c4a57194",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3141));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "aca3ee92-8f53-4c95-bf6f-63b7c8273f51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3276));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ad22c7f1-37a6-406f-9342-add77fd17234",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3146));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "addf303c-15d4-4456-8ff5-97e9fc568f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3022));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af6f8587-30eb-4838-b1a5-efcb688390a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3002));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af97e70f-98ed-455d-9db8-ff39d255e175",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2863));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b097c96c-048a-4f83-b9fe-706d5a3296db",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3122));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0a36dae-6181-4455-82ac-a919fff997be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3586));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0e9542f-d95e-4102-9fb4-118d1f821e2f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2838));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b1675b86-526f-4bdd-8106-2827be31c8cd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3565));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b17dd04c-c864-48d6-a6a2-aceed9e53a02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3676));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4267088-0d92-40cb-a03f-9730aaa1fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3148));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3756));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4cc6cd5-16c1-4e65-8dfc-647d19f2560e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3172));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b60b2054-fe4d-4dfb-87d7-862e48faa272",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3038));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6891273-10bd-47ca-a139-27955175dfee",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3725));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3780));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6bfa026-b6ed-4a81-b4c2-636ef1b81376",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2965));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b760bf11-5ee0-4f02-b476-a95b233d3812",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3563));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b7b23326-9dc3-4fa2-b6b6-c296be64caa0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3339));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2851));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b94d575c-d197-4a2b-8b05-961f549af20d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3412));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b962aa74-832a-4417-9941-100f0328322f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3425));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9f6f25c-5573-4555-bc54-a5131d4a2b4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3031));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9fbad4e-cf40-48ca-8a0c-0a468ddd27e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3489));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ba248d16-acf6-4294-a1da-7bd81bf5e967",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3009));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb45a351-8caf-454c-acac-8afe9d2d7374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3321));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb72eb62-6f41-4c7d-aad4-93941e42dd68",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3020));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bbeec1bf-5326-4616-8653-5ec68c4fb37b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2923));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bcd6600f-ee89-4185-87c2-a48afb18070a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3368));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd35fa6e-7868-4e62-ad87-79829aedb100",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3063));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3621));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bde7aff0-c7b5-48fc-9180-d3314fe0699f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3253));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3784));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0f4bf1-696e-4cc1-b89a-2531aa82e7e2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3694));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c50b46-e3fe-4c79-8352-0a211e7a0870",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3315));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c80075-e62c-44cf-8ad7-0f9e4c6de40d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3154));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c312bba1-24b3-4561-ac77-e6845526a5b5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3478));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3179d21-1741-4d68-9281-62cb8eabf58b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3800));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3ab8002-f2d1-416e-bf81-35eec16134a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3285));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e0861d-1921-4971-84e4-7cf829ebbb37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3381));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e2a961-1479-4fd4-8f36-cd299e496d4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3530));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c4c0a113-144d-4f61-8349-edbf046fb32a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3794));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7119e78-24e6-401a-b199-3b6845df17f3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3051));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c74e9cd9-8e2c-4fba-b981-384224c57174",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3775));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7834aa3-42f4-47eb-94b0-61a7c71f119e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3244));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7c0c3bf-4646-4fee-82d3-816014e51d11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3049));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c86690f4-9702-44cb-a900-129d2e3ad99f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2840));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8adafdb-7d5e-47cc-8bd0-267f50224cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3260));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8dd9cd1-9fb1-4036-8527-01d4df8bbeed",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3484));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c9182801-e964-42b5-b8d2-bdc6396d7677",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3407));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c932eb6c-34be-469b-b2e3-b298d08b8e86",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3546));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c935236b-6cb3-493c-874d-09b5d9961c34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3079));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca1d73fb-7574-4c2e-bf0d-6e020b064b28",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3127));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca421101-f4c9-456f-989d-2ed5cfc87da4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3699));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca5e28a0-fb51-4972-8059-300ef3c3444b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3475));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cbbb3345-ee8a-4b55-8eb3-8f01e78f09c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3397));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cc8f4a1b-c7fd-4e48-adf1-8b8113e6419f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3283));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd2d914e-5873-4356-9989-1cd93c1fb04a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3522));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd4c6e36-0fbe-417c-a83d-737defa6d36d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3538));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cdab4e47-7b03-4833-89d5-fe602a9e9558",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2955));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3766));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0722930-e054-433b-9fc3-2928b8e06ace",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2882));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3758));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d15202ef-72f5-4a8a-b7d0-ab7f1d8b14f1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3574));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d1559be9-4fae-4855-801b-d088886d4f3a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3221));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d2711937-d17e-4be6-bad9-d5532a34288b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3577));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d3b5d0af-297a-42b0-aade-279a51f3542e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3417));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d416f8d5-26a2-4c4d-87ba-2c5acecccc77",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3652));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d48dd083-5901-47bd-98c7-72fd01c7e481",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3716));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d50cb6e4-3eea-4421-adaf-fb11e9f1def6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3346));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5613ac9-0c78-4869-9bf8-66877adfc306",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3760));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d578e99d-086c-4f8c-af98-6c823d605d5b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3219));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5a19b81-af8e-4539-9ce5-a487a929810b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3011));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d62efc95-bc43-41d1-bb0e-417003349616",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3739));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3799));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d88a15c6-dd91-4337-9585-a45a331b6c87",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3567));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d89d7946-6753-45e7-b094-5d050a265d1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3707));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d9c90e83-72b6-460f-8e07-3337ab878eaf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3681));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa3c78e-a3be-4894-b685-c3f41ca92003",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3496));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa8dd3e-41e9-45b4-9651-19bd9796b4aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3058));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db894224-e132-4289-9c3b-b3d629204850",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3177));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db9950ed-5ae4-481d-9541-a9cf957da348",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3150));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbf166c8-91b7-48c3-999b-cba45fdbaec1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3091));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3789));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dc24ecb6-993e-4f3d-b89a-35378cd261d5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3678));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "de2ea13d-b216-41d2-b341-60182487738b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3134));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "decc1764-3970-4b82-9c01-d8380b19d313",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3034));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "defb4623-4df5-4b58-84e3-fe8016598539",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3337));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "df350e74-0d9f-4b51-a42c-c6614ce3558b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3687));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e0abceff-17f3-4244-8887-7a7a27e64a12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3334));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e32ad0d7-cf89-4e1f-81e7-d331d534eb1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3645));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e3c66d98-7589-4e69-8536-a41a79d713c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3518));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e53e3f4f-185d-4b53-a54f-03ada71e1d38",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3000));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e670fc37-95a1-4888-8d87-7f3dac3fbdc0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3077));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e6dfecee-1ffe-4a36-ac59-c183606b6218",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2880));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e72f4279-4d1c-49ea-9ccb-9cc8027726ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3179));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e77c09bd-4195-44bd-a8ff-e617ba5952fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3307));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e7b3822e-3e00-4717-8f49-4a924d1f1af6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3655));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e876b05c-3d86-4421-a4e0-e857933f11c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3201));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e8ad636f-f434-4649-8c22-728dd28d9814",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3683));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e98a1b74-7f7a-4add-a282-199dc34120e4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3514));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ea488074-4c36-47f4-b664-e9cda4250dde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3790));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eb9d8d41-727d-45b1-94a3-aac67fbeaabb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2854));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ec7caaac-3acc-4e33-b44f-d9246988fe17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3124));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ed14e83d-f3f1-4076-9ae5-4d8e49228d26",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3433));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eda99703-0611-4cd9-8f29-4c1e83978b37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3017));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef408df0-6877-4fea-a517-84ca2e67b019",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3225));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef429ea8-025b-4475-b348-17fab65ee9a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3103));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "efd1e2db-9b36-4ec8-8520-58d0ca85abde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3287));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3742));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1b3f4cb-d222-44ad-a6cf-1ab3089cdd97",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3211));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1c88c2d-8433-471b-abf9-b59f9a530e37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3043));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f25c6022-40d9-4039-8d38-8b8bbebba68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3597));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f351bbc7-d6bd-4356-9824-ba4e4b4789eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3081));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f372726b-105f-4af7-bf1d-edad558a7c91",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3643));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3807));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3795));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3763));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f743b312-b58a-4b4b-a2c4-ceaff31fdd15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3258));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f778be19-5ee8-4282-b842-b05f4ab343f6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3584));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f8ae5b26-dbb2-4baa-b052-93fb19488b00",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3089));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "faa67f45-3870-400c-add8-841489087883",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3203));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fadecfd0-03cd-462b-be1f-6c68cc9d2659",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3217));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fc7809c8-a01f-428a-ace9-af8ec9ba3a7b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3414));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fcd352df-4c09-403d-b320-ad20518faf0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3327));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe07bf5c-7ec9-4b18-a66d-fd71becdeedd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(2875));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe1a49f9-36a1-477b-be87-edb573326e03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3810));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff269c57-2916-4536-a976-02864ffe9a5d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3735));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff519d70-6019-46e1-b0b4-277a90b832e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3420));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffa08eea-3cf4-4d5a-8d1e-c4581b562d74",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3232));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffe0ed0b-2a3b-4dac-8b38-fc0b7ebd7a14",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 12, 2, 56, 22, 438, DateTimeKind.Local).AddTicks(3437));

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "Id", "Cons", "Date", "ProductId", "Pros", "Rate", "Review", "UserId" },
                values: new object[,]
                {
                    { "087c7d12-fd6f-4a4d-8da7-f7edf4dd84fe", "Expensive, average battery life.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4308), "690d1d22-2bbd-4f27-9549-58862b320685", "Nice display, powerful processor.", 3, "Good phone, but not worth the high price tag.", "3" },
                    { "08f09f3d-2b5f-46ea-ae54-53947b9bc774", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4324), "f0dd3651-99f3-4bac-abb3-8492b32d71ba", "", 4, "", "3" },
                    { "0cbdbc17-3590-492c-851b-e8175d967f50", "Poor battery optimization.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4312), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Good performance, nice design.", 3, "Disappointing battery life despite the promising features.", "5" },
                    { "2086eea3-a885-494d-a7b4-a62f7bcaa7af", "Lacks some camera finesse.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4313), "50f7e18f-a606-4935-95aa-2679cfa37999", "Speedy performance, smooth interface.", 4, "Fast and reliable. Great performance overall.", "6" },
                    { "2c037559-751c-469c-958a-be64036d7348", "Slightly bulky, UI can be overwhelming.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4307), "690d1d22-2bbd-4f27-9549-58862b320685", "Fantastic camera, gorgeous display.", 2, "Exceptional features, especially the camera setup.", "2" },
                    { "3478edbf-2cf5-4823-a260-e1f51a4ef538", "Average display quality, a bit heavy to carry around.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4277), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Excellent performance, good battery life, sleek design.", 4, "Great laptop overall. It runs smoothly and handles multitasking effortlessly.", "1" },
                    { "4b4ddc86-b92a-4f34-ad63-1fc394509a11", "High price tag.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4299), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Smooth performance, sleek design.", 4, "Top-notch quality as expected from Apple. Love the user experience.", "7" },
                    { "6c5d4146-77b3-45ab-b55b-7407506af692", "Average camera quality.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4315), "50f7e18f-a606-4935-95aa-2679cfa37999", "Sleek design, good display.", 1, "Solid phone, but expected more for the price.", "7" },
                    { "700bfbfa-30ba-47ed-9e4a-6181735694fe", "Pricey, limited ports.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4297), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Superb performance, stunning display, long-lasting battery.", 1, "Absolute powerhouse! Great for creative work and heavy tasks.", "6" },
                    { "7dcdbfb3-20eb-4700-bdea-c93d63de86bc", "Hefty price, heavy to carry.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4304), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Superb camera, powerful performance.", 5, "Stunning device! Camera quality is unmatched.", "10" },
                    { "8aea76f2-1b43-42ab-82ad-5a4cce0030a9", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4302), "b6891273-10bd-47ca-a139-27955175dfee", "", 2, "", "9" },
                    { "8f2177e2-8058-4d3b-8768-565bca2248a9", "Overheats quickly, noisy fan.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4296), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Good display, responsive keyboard.", 3, "Had high hopes, but disappointed with the heating issues.", "5" },
                    { "9f475849-6205-46d0-b227-dfea73af4591", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4300), "1cdfeeae-13d4-40d4-9a70-60916ea4ba17", "", 5, "", "8" },
                    { "ad6103e7-b382-4ba9-9fa4-9ba96c977eab", "Slightly expensive.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4310), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Outstanding camera, clean UI.", 5, "Incredible camera capabilities and a smooth user experience.", "4" },
                    { "b0d52518-9312-4ebb-81a0-da494f5fd825", "Laggy performance, below-average battery.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4292), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "", 2, "Not impressed with this model. Slow processing and poor battery life.", "3" },
                    { "b3773232-6649-40a5-8920-44b2e4811ee5", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4319), "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab", "", 5, "", "10" },
                    { "b5bd3285-6972-40e8-a164-144a29e52056", "Average battery life.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4305), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Great display, smooth interface.", 4, "Impressive phone, but the battery drains quickly.", "1" },
                    { "ca499a24-3b81-4834-b6cc-22b52e98a875", "Mediocre build quality, average speakers.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4290), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Affordable price, decent performance.", 3, "Decent laptop for everyday use. Gets the job done without any major issues.", "2" },
                    { "cf6f0558-631a-4de5-a7a3-e841106679fd", "Average battery life.", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4294), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Sleek design, fast processing, lightweight.", 5, "Love the design and performance. Works like a charm!", "4" },
                    { "d76f6fb3-d6b0-4bd4-8fa9-14c184f823aa", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4316), "4878b254-2d40-4128-b9ac-a4109ea1b1ca", "", 2, "", "8" },
                    { "e16b6ce9-7852-40b2-a4d8-5658d46a14ef", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4322), "8c559d76-c84a-4144-b6b8-259d896a97cc", "", 1, "", "2" },
                    { "ed71a1be-ea92-4699-bf92-84b67a666641", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4321), "d62efc95-bc43-41d1-bb0e-417003349616", "", 2, "", "1" },
                    { "fafb86b0-5856-411b-9002-abe208bef6f4", "", new DateTime(2023, 12, 12, 2, 56, 22, 446, DateTimeKind.Local).AddTicks(4318), "ff269c57-2916-4536-a976-02864ffe9a5d", "", 4, "", "9" }
                });

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
                column: "Image",
                value: "/imgs/subCategories/storage.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
                column: "Image",
                value: "/imgs/subCategories/pc.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "0fc1779f-8256-402b-bfce-aa7938a7dce0",
                column: "Image",
                value: "/imgs/subCategories/homebath.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "10884d4e-343f-43f8-9094-2c2e12f072ef",
                column: "Image",
                value: "/imgs/subCategories/mats.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
                column: "Image",
                value: "/imgs/subCategories/beds.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "1ba269cb-5d2b-4975-be75-0979930cb10e",
                column: "Image",
                value: "/imgs/subCategories/watches.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "21010f6a-2891-4fc9-969f-4886c993e95c",
                column: "Image",
                value: "/imgs/subCategories/kitchen.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
                column: "Image",
                value: "/imgs/subCategories/sun.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
                column: "Image",
                value: "/imgs/subCategories/sweater.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "24ffe98a-3970-4226-9895-bc0267f73cef",
                column: "Image",
                value: "/imgs/subCategories/camping.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
                column: "Image",
                value: "/imgs/subCategories/purse.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "2986c60e-1876-4c73-84be-95855807a23e",
                column: "Image",
                value: "/imgs/subCategories/boots.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
                column: "Image",
                value: "/imgs/subCategories/tools.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
                column: "Image",
                value: "/imgs/subCategories/suit.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
                column: "Image",
                value: "/imgs/subCategories/teams.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
                column: "Image",
                value: "/imgs/subCategories/wellness.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
                column: "Image",
                value: "/imgs/subCategories/printer.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "413916b7-99d7-4d46-bd9b-86169ca97373",
                column: "Image",
                value: "/imgs/subCategories/golf.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
                column: "Image",
                value: "/imgs/subCategories/cleaningkit.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "4c9db19d-87b1-4380-846c-62547aeeb2de",
                column: "Image",
                value: "/imgs/subCategories/tops.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "50292d51-a80b-40e0-ab12-47e7557cedb8",
                column: "Image",
                value: "/imgs/subCategories/proffcamera.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
                column: "Image",
                value: "/imgs/subCategories/skin.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
                column: "Image",
                value: "/imgs/subCategories/fjeans.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "57dcef31-e8c0-429f-8dea-0089afcbf945",
                column: "Image",
                value: "/imgs/subCategories/handheld.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "58b31959-1232-453f-b631-6411be333ed3",
                column: "Image",
                value: "/imgs/subCategories/vr.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
                column: "Image",
                value: "/imgs/subCategories/chargers.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "67447359-bb55-4510-a696-06207f11625b",
                column: "Image",
                value: "/imgs/subCategories/mensgroom.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
                column: "Image",
                value: "/imgs/subCategories/fsweater.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
                column: "Image",
                value: "/imgs/subCategories/style.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
                column: "Image",
                value: "/imgs/subCategories/bicycle.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "7cf5b026-3725-4149-8602-1a0f65da4bd0",
                column: "Image",
                value: "/imgs/subCategories/homestorage.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "7d214c1c-09ac-4645-b389-16e146c4e9d2",
                column: "Image",
                value: "/imgs/subCategories/lights.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
                column: "Image",
                value: "/imgs/subCategories/pets.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "86f9eabb-c453-4c95-bef2-e7538df76294",
                column: "Image",
                value: "/imgs/subCategories/decor.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
                column: "Image",
                value: "/imgs/subCategories/furniture.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8cec5cb9-b7ac-480d-9c60-899307478643",
                column: "Image",
                value: "/imgs/subCategories/gym.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8d12a370-ad82-4c33-a99a-006b040abbe2",
                column: "Image",
                value: "/imgs/subCategories/fragrance.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
                column: "Image",
                value: "/imgs/subCategories/work.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
                column: "Image",
                value: "/imgs/subCategories/audiovideo.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "95448f8a-49ea-4930-b91f-193892a687e8",
                column: "Image",
                value: "/imgs/subCategories/shirt.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
                column: "Image",
                value: "/imgs/subCategories/hometools.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a201ef9c-3206-4449-8eab-86ed6e2220a9",
                column: "Image",
                value: "/imgs/subCategories/accesories.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
                column: "Image",
                value: "/imgs/subCategories/dress.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
                column: "Image",
                value: "/imgs/subCategories/skirt.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
                column: "Image",
                value: "/imgs/subCategories/hoodie.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
                column: "Image",
                value: "/imgs/subCategories/scooter.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
                column: "Image",
                value: "/imgs/subCategories/personal.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
                column: "Image",
                value: "/imgs/subCategories/carlight.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
                column: "Image",
                value: "/imgs/subCategories/seatcover.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
                column: "Image",
                value: "/imgs/subCategories/apparel.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
                column: "Image",
                value: "/imgs/subCategories/makeup.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c05c19eb-f67b-48f3-b4ca-922326df53ff",
                column: "Image",
                value: "/imgs/subCategories/foot.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
                column: "Image",
                value: "/imgs/subCategories/garden.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
                column: "Image",
                value: "/imgs/subCategories/dressshirt.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c8e24060-a3cc-4909-a295-a20490698732",
                column: "Image",
                value: "/imgs/subCategories/bath.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
                column: "Image",
                value: "/imgs/subCategories/phone.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d3022cd3-e081-41f5-a7a9-06375898811e",
                column: "Image",
                value: "/imgs/subCategories/water.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d3e3c11b-809b-4d22-98f8-58333377b784",
                column: "Image",
                value: "/imgs/subCategories/cover.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d821754f-9e4d-4758-b162-52f0fee2d7f9",
                column: "Image",
                value: "/imgs/subCategories/airfreshener.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
                column: "Image",
                value: "/imgs/subCategories/winter.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "dcc14cf4-623e-46a5-b993-06722b09a093",
                column: "Image",
                value: "/imgs/subCategories/mount.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "e1adeac0-4152-4a32-a789-ca9a2c99921b",
                column: "Image",
                value: "/imgs/subCategories/cap.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "e666d9e6-3f05-410e-b93d-457a71cf0123",
                column: "Image",
                value: "/imgs/subCategories/active.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
                column: "Image",
                value: "/imgs/subCategories/jeans.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
                column: "Image",
                value: "/imgs/subCategories/jacket.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
                column: "Image",
                value: "/imgs/subCategories/consoles.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
                column: "Image",
                value: "/imgs/subCategories/carcharger.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "f01b6cc6-1917-40ff-9344-184e978a68d8",
                column: "Image",
                value: "/imgs/subCategories/hair.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "f641cfb0-5506-46ee-bb60-0c8150df3585",
                column: "Image",
                value: "/imgs/subCategories/jackets.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "fc160538-ed47-4b02-8ff9-32addec8b3a6",
                column: "Image",
                value: "/imgs/subCategories/pants.jpg");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "087c7d12-fd6f-4a4d-8da7-f7edf4dd84fe");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "08f09f3d-2b5f-46ea-ae54-53947b9bc774");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "0cbdbc17-3590-492c-851b-e8175d967f50");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2086eea3-a885-494d-a7b4-a62f7bcaa7af");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2c037559-751c-469c-958a-be64036d7348");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "3478edbf-2cf5-4823-a260-e1f51a4ef538");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "4b4ddc86-b92a-4f34-ad63-1fc394509a11");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "6c5d4146-77b3-45ab-b55b-7407506af692");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "700bfbfa-30ba-47ed-9e4a-6181735694fe");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "7dcdbfb3-20eb-4700-bdea-c93d63de86bc");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "8aea76f2-1b43-42ab-82ad-5a4cce0030a9");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "8f2177e2-8058-4d3b-8768-565bca2248a9");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "9f475849-6205-46d0-b227-dfea73af4591");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ad6103e7-b382-4ba9-9fa4-9ba96c977eab");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b0d52518-9312-4ebb-81a0-da494f5fd825");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b3773232-6649-40a5-8920-44b2e4811ee5");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b5bd3285-6972-40e8-a164-144a29e52056");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ca499a24-3b81-4834-b6cc-22b52e98a875");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "cf6f0558-631a-4de5-a7a3-e841106679fd");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "d76f6fb3-d6b0-4bd4-8fa9-14c184f823aa");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "e16b6ce9-7852-40b2-a4d8-5658d46a14ef");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ed71a1be-ea92-4699-bf92-84b67a666641");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "fafb86b0-5856-411b-9002-abe208bef6f4");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "autoaccessories",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/MBQ2gD9/autoaccsmall.jpg", "https://i.ibb.co/m4tvvf8/autoacc.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "beauty",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/gV2npD1/beautysmall.jpg", "https://i.ibb.co/WytydBV/beauty.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "homeandgarden",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/w645hqv/homesmall.jpg", "https://i.ibb.co/n6ycm1s/home.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "menswear",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/2WTFYC7/mens-Wearsmall.jpg", "https://i.ibb.co/3W6cbRJ/mensWear.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "sports",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/C1r0BQV/sportssmall.jpg", "https://i.ibb.co/bNfN5BQ/sports.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "technology",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/XZh7XLg/technologysmall.jpg", "https://i.ibb.co/MS3CdYh/technology.jpg" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "womenswear",
                columns: new[] { "Icon", "Image" },
                values: new object[] { "https://i.ibb.co/CVWfwSW/womens-Wearsmall.jpg", "https://i.ibb.co/QKK7cVn/womens-Wear.jpg" });

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autobosch",
                column: "Image",
                value: "https://ibb.co/5rkgx0S");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autocraft",
                column: "Image",
                value: "https://ibb.co/kg3kHN0");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autogarmin",
                column: "Image",
                value: "https://ibb.co/JmGJdzt");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "automichelin",
                column: "Image",
                value: "https://ibb.co/G2TTLVD");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "autopioneer",
                column: "Image",
                value: "https://ibb.co/tY11zrN");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautydove",
                column: "Image",
                value: "https://ibb.co/r4fx2cN");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautyestee",
                column: "Image",
                value: "https://ibb.co/4FR5Tr2");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautygarnier",
                column: "Image",
                value: "https://ibb.co/Hxzgd7M");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautyloreal",
                column: "Image",
                value: "https://ibb.co/d5DfKc1");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "beautyolay",
                column: "Image",
                value: "https://ibb.co/Wtkzv9t");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handbehr",
                column: "Image",
                value: "https://ibb.co/PhrHy45");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handdepot",
                column: "Image",
                value: "https://ibb.co/jRdKrDB");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handgdecker",
                column: "Image",
                value: "https://ibb.co/LYNZ19y");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handikea",
                column: "Image",
                value: "https://ibb.co/S75K0fj");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "handlowes",
                column: "Image",
                value: "https://ibb.co/y4RD3r5");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "mensadidas",
                column: "Image",
                value: "https://ibb.co/bWp0hfY");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "mensclarks",
                column: "Image",
                value: "https://ibb.co/cQkvh6g");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "menshugo",
                column: "Image",
                value: "https://ibb.co/VMWn6PR");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "mensnike",
                column: "Image",
                value: "https://ibb.co/bbrp9RM");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "menstom",
                column: "Image",
                value: "https://ibb.co/GMyPGrb");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsmizuno",
                column: "Image",
                value: "https://ibb.co/xjGyLwR");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsnorth",
                column: "Image",
                value: "https://ibb.co/VqyrynX");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportspuma",
                column: "Image",
                value: "https://ibb.co/b6YTxvw");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsrebook",
                column: "Image",
                value: "https://ibb.co/XXWwqzf");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "sportsuarmour",
                column: "Image",
                value: "https://ibb.co/xJnF2dg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techapple",
                column: "Image",
                value: "https://ibb.co/PxHqDDF");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techlg",
                column: "Image",
                value: "https://ibb.co/xFr4K1c");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "technokia",
                column: "Image",
                value: "https://ibb.co/NYWqrjv");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techsamsung",
                column: "Image",
                value: "https://ibb.co/6BKY2FC");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techsony",
                column: "Image",
                value: "https://ibb.co/gyWGcc1");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "techxiaomi",
                column: "Image",
                value: "https://ibb.co/vkvRrwg");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womenschanel",
                column: "Image",
                value: "https://ibb.co/R60gmNc");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womenshm",
                column: "Image",
                value: "https://ibb.co/dBdyMLZ");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womensprada",
                column: "Image",
                value: "https://ibb.co/ZffnnDK");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womensvictoria",
                column: "Image",
                value: "https://ibb.co/1mKyxFX");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "Id",
                keyValue: "womenszara",
                column: "Image",
                value: "https://ibb.co/SmwKDhq");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 70, DateTimeKind.Local).AddTicks(2110));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 70, DateTimeKind.Local).AddTicks(2154));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "3",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 70, DateTimeKind.Local).AddTicks(2155));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "4",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 70, DateTimeKind.Local).AddTicks(2157));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "5",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 70, DateTimeKind.Local).AddTicks(2159));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "013053e6-4e6b-4093-bb2a-4f5e007c44ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4110));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "01b41576-5f8d-475f-88e8-122cd7e15b5c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4856));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "022e2163-a617-4324-b06a-ff80415bdf06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4426));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "03b07a62-e987-4544-90b8-5955bc6051a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2917));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "051cd50e-5497-4c17-9a03-f094f96a76b3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3801));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05d827ba-e6ed-4159-be96-04f2b71d27cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3893));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e4932f-b86e-40de-bc3a-d6edb461d109",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3149));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e6aed2-3e6d-430e-ba53-3108182378d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3018));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "06ff5983-84f7-4999-a812-9d21117478dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3856));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0754cac8-5d4b-4bb6-94fd-d8d15d4d1a5e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4661));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "07ea471c-8970-4ebc-a242-255ef39de930",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4152));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0806ff69-ba2a-46d8-b828-d63cc6ccd01d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4282));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4952));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08c0f380-042b-44ad-8f5b-c6a0fdb89089",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4224));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08ca6a32-41a7-4317-8148-a58e733854e7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4212));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a2dafad-ef52-42b1-b760-b2f160f09e25",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4573));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a54bf68-791b-4573-aabf-583db9e83e05",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4300));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a87621f-3066-4df1-ad90-4161cbd17b9c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3043));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ac71d91-25ae-4d53-8a11-4118494224e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3076));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ad310e2-48e2-4f76-a9cf-635c0384925c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3063));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0bea072a-0e26-48d0-9357-44cf35e056d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3167));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0de7b3ef-6a40-469f-a17a-2a9a663a4312",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4098));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e2160fc-e95f-4d9d-89a6-dce377ae7b34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4147));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e428c6f-64b3-41be-ab7d-b4031dc430cf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4082));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e46225d-54e0-46bd-93ca-3226d3fe157e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4647));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4715));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "100a3b8d-61bc-47a3-9520-a37bbe2abc0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4708));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10c930ed-f326-48da-a571-6889262104ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4842));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10fbc819-c0b3-4a97-8999-f44840827446",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4817));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "12e13234-2da4-475f-89ce-3b16125da53c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3840));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1324bca3-1eb0-4db9-a069-c33322753cf6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4712));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13bee259-e388-4b18-8700-ecd3a0844858",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3013));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13ed769d-2c43-47fd-9525-27eb52505e51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4536));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "15b1e745-03cb-4873-892d-18a1dfc16fe2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3918));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "162db9c7-dc26-4427-929f-f06891adf285",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4048));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16672559-004b-47c0-8a4f-9f55fc129785",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4987));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16a06882-a2f4-43e5-afda-590971c6152e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4690));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16fdfb87-f4ee-4567-9904-af3164f203d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5067));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3137));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ad70921-3eaa-4272-b7d2-e3aec90862c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4339));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1b6a9dbf-01b9-47b7-a7c8-3df7fd89da4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4766));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4878));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1eb4379a-a87b-441d-bd49-af2bea052b50",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3020));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ed9876d-fa08-4fb3-8dc7-261d1225548c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3197));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fa012e8-c124-46c4-a390-0a0d8ff118fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4414));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fd49222-be5c-442a-ba8d-6d0d902be8df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2961));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fe6f99d-afa0-47b5-ac53-8f7a0b36264b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3172));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "20855d33-7fba-4408-aa81-67c85af2b3aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3933));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "21364990-c2e4-4598-a617-5286281f1885",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3120));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "215eb3c6-55fc-4c2d-9746-6c9c6a012326",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3115));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "218db5cc-3555-4c1c-af09-d69f7ca1f4ae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4565));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22342ce7-d548-4040-8a95-4ce837e0e8bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4074));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22921046-fc72-4dca-b4d8-23fb82b2c417",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4177));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "23c0f84f-f9cd-4d1f-912b-d83d574b1c0c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4820));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "25a35a75-b84a-4556-97c4-faf1c32e4c90",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3897));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "262c138c-f65d-4528-bd40-e54a28712b2a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3788));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "264db346-d6cd-42bd-8710-934d194ffe21",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3098));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "270f8981-0025-4016-9d4b-d962522ebcdd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4402));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2819ed17-0637-49e8-a797-04616be7e636",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4733));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "288a2013-d786-41fe-b4b9-a56c3a8e4187",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3188));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "28ad32de-e0aa-4454-a802-c756b4b0d8e1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4748));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a52ebff-9687-4309-8d9c-c32a585243d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4980));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a67a875-ec48-4295-9159-5021d48ef30c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4640));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b265092-ee4f-490f-b7e9-0e8290d51c93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2995));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3158));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c163753-69b0-46d6-8f04-615b334a1ece",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4419));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c8676d4-55be-4090-ad12-9b66b88d188a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4955));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2cbfd742-d03e-44a5-bf0e-6bf1709e0599",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4529));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d373ea8-695f-47cc-8ee8-2f672eef7609",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4244));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3146));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d7e1567-2863-4073-ba87-1c09cd435400",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4220));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2e0a563c-03ef-456c-8bfc-c9e14283a5b9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2971));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2eea9eb3-dbda-4069-b09b-70d1e802c715",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2997));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f7e55f3-2fc1-43a0-8ed1-d8d092fe51da",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4399));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f8ce754-9e39-478d-b8a3-69b0d672e2eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4839));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "306df296-d233-4795-bb9c-6a5bb8ba1422",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4494));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "31d084b6-e885-4b46-b517-f2d9df72ab61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4974));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "324b72d9-f597-4c3d-9490-a90225002406",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4570));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "34bafd74-3e1c-4bf3-a832-270b4481eb8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3902));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "35744787-3044-46a3-a613-126b4387419b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3034));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3606ba10-ae01-4789-a1b4-1e17bae8b384",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3818));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4945));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38212e7c-d4f5-4729-a6ac-220340ba4ad0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3966));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "385adbbf-3523-461e-8235-1d0ae0a0a752",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3050));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38f15679-ddd3-40ce-a148-5ddf31317f78",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4810));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4948));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "393f691e-1ec3-4d6f-bba2-0c9e0ae624c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4273));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a59b15b-2817-4432-be8a-097e614a243a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3190));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4870));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3b3fbb68-f41e-4ac3-b9ef-93c59630e68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4779));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4596));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3d39d7a3-8d8f-42c7-9f91-880a53a6a380",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3025));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3e9f2e08-4819-4f98-add8-f94ea8909ef3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4200));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3f34d9bb-8858-45ab-ab66-7653cf4b4632",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3151));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "41d72b4e-f572-4292-a90b-9c2ce51cce60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4138));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "42157d88-51ec-4a4a-a283-7951c56376ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3163));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4266b4ca-1999-48c7-9a1c-94b82f5bdecc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3962));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "43ba262d-15c7-4936-9bf5-eb9a06c0ee3d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3041));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "45784ea5-0041-4bf1-9c23-2e93657963fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3797));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "457d29fc-301b-4aa1-9337-610cd0144a9d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4940));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4778333f-2513-45ef-9b15-4a7ddb56ba16",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3002));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5027));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4833de13-c027-4f25-ae67-ba6a8117282a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5077));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4904));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3106));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4ab262eb-a388-4218-a411-f7c0cbfbc083",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4772));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3144));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4cadf79f-bf8c-468c-b766-e4211e828330",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4189));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4dea614b-430c-4abd-a648-74226675ee09",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3975));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4fc49f4b-3338-437e-9172-c5b2d061cb66",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4644));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5030));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50f7e18f-a606-4935-95aa-2679cfa37999",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4900));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5116b20c-3b9c-42ae-875f-788bf14ea028",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3161));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "537e4172-3dee-41e8-97cd-27edc38bb2ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4034));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4932));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5498c1a5-f773-4bcc-8acb-10794c36694c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3194));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "554ad846-8a31-43ae-a36b-6b5e329da7d9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4791));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4257));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5019));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58c9836c-3d54-4eaa-ab98-142a9023502b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3944));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58e26c93-1bdd-4ff1-aac7-761f71bd2ea2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3085));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4764));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a22f585-6379-4fcb-8059-736aee703ea3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5071));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a5d00df-2745-4f6b-a7a6-40a93c3efb15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2982));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a9847e1-4d55-419b-aefc-a298fb196d7c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4626));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4859));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c1b8585-54c8-4aa4-8659-bd7b6491ad6c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4185));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c2635b2-1577-4eb0-89ba-9a6a2a330f02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4743));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cd7422b-2901-46d5-987a-a2bdcce54223",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4228));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cf1420d-b916-4694-b1c9-c67ab7188033",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4824));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5d90c324-ec2e-4272-a1c7-15007b491bcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4725));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da5d9d9-03f0-4b26-aa19-d0037d0a1e0b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3154));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2957));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e2b1649-ccef-48f0-af29-04480659a698",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4129));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e38bece-7184-4889-9c94-ffebf7b2579d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4207));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e528195-7626-4d59-bcec-93838a587789",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4390));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5f0f89ae-2136-4509-a334-951cfe495cd7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4897));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60003e1d-68de-4f7a-937c-f636ab2b798d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4671));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60f4d55e-af8d-4b62-92bd-15c4f08fde39",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3878));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61829cb1-3692-4664-8727-d54f6bcc2a4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3134));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4911));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61c6f600-1ea9-4a55-8df8-79ee71b6b4ad",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3004));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61dd1f5e-bb22-45f8-a9c3-ffc5663f144f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4304));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "623cf00a-bc37-4b40-b008-47c4936ee0fb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3970));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62a66a93-cf80-4632-8cba-7126c7c996c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4232));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62e37b49-e838-41e2-84fa-64881c97c6a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4007));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6393507c-0aeb-45d1-93e6-a468f61084f7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3011));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "642f96e1-f879-4a87-8c34-b976d4c2d14d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3847));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "644ed6f5-1d49-46c8-8d4c-623bb5f44f06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4106));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6584ca3b-6f76-4237-a581-296624842641",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4125));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "65a11451-4f8f-4224-8628-ae1407974f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4070));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "679b396d-e17e-40f1-a79d-6d9c4838c36a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4700));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "690d1d22-2bbd-4f27-9549-58862b320685",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4894));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4959));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "698fe90c-e0a0-429a-846c-5e1cdd62dbf9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4722));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69cee78d-ba2e-4f14-ac65-6c50ea481778",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4039));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69f88fc8-31ed-4dcc-b19a-e75731a2b47f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4651));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6a6e57ac-0995-4317-9a98-f52b0a3786a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4501));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b7a7571-1a41-4feb-9d88-134a97007fcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4024));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b897bf1-077d-47ed-b8d0-84abcc0d29a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3023));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6bac2be5-1291-45b4-a5d8-9d106c807e99",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4578));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6c073e2c-3343-4fb4-a948-86dc83eb0af9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4769));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fa2b4f4-b767-4ac6-b22d-e50edf9438ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4247));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fd73a11-7250-4291-b706-281c40efefcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2987));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5004));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7067fe71-d0d0-4adb-b4b8-ee4891a74a1c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3183));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "712b1ac6-a732-45c4-94b7-2dbeb5c904bc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4192));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7447366f-649c-450a-ae99-c759057f8d8e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3065));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4875));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74be1b8d-a0b0-4788-89e3-9aa8476841fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3068));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "761b9633-ff86-4626-9563-ae92284f60ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3132));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "766ce0e4-60a1-4a63-8dd4-771f30de7041",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4830));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "76fd81bd-c9e8-4348-9411-0323ca0ee333",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4433));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "798629fb-9751-4d2f-a8fd-fedfa6b57c02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4852));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7ab36f6d-9c59-4aff-97c9-e406fc9b5ea5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3770));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7acf8f89-addb-4b53-80c9-c6f798020a11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3953));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7b4f6627-3fc9-4aae-9a3d-fbae4463936e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3007));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7cd3b4c0-7252-4873-b986-71e313667e8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4197));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d129827-9823-4468-88e3-e6ef5c05487f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4846));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d4de95c-aef1-4a5c-b7e2-2f1d793c2862",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3166));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7fb1b26c-5bf9-459b-b8d0-647929818374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3912));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "809d8ffc-8fdf-4d04-a3cd-a1489c440c92",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3101));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "810bbb00-b104-4b11-ab99-6f91b730029e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3783));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8173d005-a54a-4589-9775-ef8e7eb88a7d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4668));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5044));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4990));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82f8f9bc-6d8f-4fc1-9626-c342dce64bbc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4090));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85af39fc-10c2-4016-867f-78bda66d6990",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4455));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85cea852-e6fa-4e82-865b-0924b36713f2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4719));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8600635d-9264-4273-8906-75915a2396d0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5010));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86a47d55-c068-4cb0-b813-93234cc2600e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3170));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ec62c0-1363-43ca-b330-b2ee9df5c0a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3986));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ffc244-8e3b-4a16-be97-47a5e372291e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4622));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "870cff3a-4782-475f-abde-062a33cd95a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4729));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "888b70f7-d256-4890-8dfd-31f0dd9864c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3053));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "88e8459e-4d19-4386-bce5-84b901685bb5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4682));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "896e2b2d-b43a-4d2a-8eaa-59c1a6fb0762",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3122));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8a722b88-6df3-4664-ab61-390cd0e28645",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4077));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8b2bffe2-34d8-4ede-b2bd-16cfc25601d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4488));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8bda082a-7153-41bc-b04a-bde246de6877",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4261));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4665));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c559d76-c84a-4144-b6b8-259d896a97cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4919));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c5fde29-0da8-44de-9dc3-769698d9fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3823));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8d0d1487-da7c-49b0-8812-0acb418f6d04",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4552));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8de2c19f-6dc2-461b-a5a1-8acf2e3eca2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4393));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8e7e2151-0881-40e4-a21e-7536467e74a9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4265));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8ee1a5b3-784f-4fe9-a5b4-e0c86991c2a0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4469));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9020264a-3348-4e4b-97c1-3463074c5e5f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5086));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9104c7e9-0646-4d84-831b-72215d9393ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4801));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "910a7763-e37d-4d64-a0e2-61a5a76804dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4203));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9122246d-052a-4105-8c7e-605ff07a45b2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4833));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "93e47b26-b2ed-44e3-b3f4-0519a8381d93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4613));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "969d452a-fb83-4dde-a5e6-677d1f915912",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4781));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "96c9fe94-aa22-4efd-8526-1bf2f064ad48",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3851));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98857751-85f1-4921-b8a5-27f228ca295d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4410));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98912a2c-bf1d-4cfa-a605-fc3c2b4c2cc4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4174));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99adbca1-5e84-4b5d-977e-c33e8c56a57a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4289));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99b652b9-77db-4989-a8a9-d0cad2c61976",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4285));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9a1ef502-733c-40e6-8273-867971ae16d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4549));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9bb4cc0f-b72b-4bce-969e-a442a2e47f07",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4686));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9d833dbe-06a0-482f-a841-c902c2ca4012",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4407));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9db7c84e-94fd-4e3f-8a9b-726b557a93eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4114));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9eabd2ca-d4c5-4c8b-8b56-e88d77ccd4bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4347));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9efe4fca-e34c-4824-9bc7-4bc31d10a7b7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3793));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9f5f2a19-15bc-4057-a288-d1e88abfd16e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4437));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a071b643-8c74-4f62-86ca-2f506ff71c89",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3081));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a0f4efbb-56a3-4c5b-9bd5-4a0c15d29a61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4784));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a12803da-c155-431b-973f-0fb18133495d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4482));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4993));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4866));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1ead742-c2eb-44ae-85fe-bd97a79e5141",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3990));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2d10892-0ebf-4db4-80d9-5d240b325295",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4787));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2ec9b8a-7a25-41cb-89f3-0cf7e89410e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3087));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5054));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a36dc640-54d2-4b02-a01b-11841693f736",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4446));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a3fd8116-9e1d-40c0-90b2-ba89eda95906",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4759));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4442552-fcbc-4767-9bcc-38c4172ce456",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3015));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4c9eeff-59dc-446d-909d-27e90053284b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3871));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5a886da-209b-4bd3-a532-5e9ef25c7026",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3837));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4889));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a69bec07-9985-4829-aa84-f7b92ea5eaac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3009));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a6e0066b-0bf9-43f9-b4a3-f12bbeb6ddae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3867));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a70a2e02-8a15-466e-b651-351845673b73",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3994));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a769be06-7364-42b4-ae43-f4e743dc7cd0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4095));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a8764e34-1e34-46ce-9597-3add5a802a03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4996));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a9488c66-4662-457c-9cc0-c5d34298f352",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3201));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab02e0d7-8890-4385-8dcb-4421ca0c8bb6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3117));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab363f5c-ce22-4689-9789-ff1bcc9e1d69",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3806));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "abc0945a-9294-4463-b11f-e881c4a57194",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3199));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "aca3ee92-8f53-4c95-bf6f-63b7c8273f51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4044));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ad22c7f1-37a6-406f-9342-add77fd17234",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3204));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "addf303c-15d4-4456-8ff5-97e9fc568f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3060));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af6f8587-30eb-4838-b1a5-efcb688390a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3038));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af97e70f-98ed-455d-9db8-ff39d255e175",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2980));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b097c96c-048a-4f83-b9fe-706d5a3296db",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3178));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0a36dae-6181-4455-82ac-a919fff997be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4637));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0e9542f-d95e-4102-9fb4-118d1f821e2f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2964));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b1675b86-526f-4bdd-8106-2827be31c8cd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4588));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b17dd04c-c864-48d6-a6a2-aceed9e53a02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4794));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4267088-0d92-40cb-a03f-9730aaa1fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3205));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4963));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4cc6cd5-16c1-4e65-8dfc-647d19f2560e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3812));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b60b2054-fe4d-4dfb-87d7-862e48faa272",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3078));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6891273-10bd-47ca-a139-27955175dfee",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4884));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5016));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6bfa026-b6ed-4a81-b4c2-636ef1b81376",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3030));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b760bf11-5ee0-4f02-b476-a95b233d3812",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4582));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b7b23326-9dc3-4fa2-b6b6-c296be64caa0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4170));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2974));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b94d575c-d197-4a2b-8b05-961f549af20d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4310));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b962aa74-832a-4417-9941-100f0328322f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4333));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9f6f25c-5573-4555-bc54-a5131d4a2b4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3071));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9fbad4e-cf40-48ca-8a0c-0a468ddd27e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4460));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ba248d16-acf6-4294-a1da-7bd81bf5e967",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3046));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb45a351-8caf-454c-acac-8afe9d2d7374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4133));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb72eb62-6f41-4c7d-aad4-93941e42dd68",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3058));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bbeec1bf-5326-4616-8653-5ec68c4fb37b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3000));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bcd6600f-ee89-4185-87c2-a48afb18070a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4216));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd35fa6e-7868-4e62-ad87-79829aedb100",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3109));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4697));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bde7aff0-c7b5-48fc-9180-d3314fe0699f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4000));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5023));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0f4bf1-696e-4cc1-b89a-2531aa82e7e2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4827));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c50b46-e3fe-4c79-8352-0a211e7a0870",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4120));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c80075-e62c-44cf-8ad7-0f9e4c6de40d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3775));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c312bba1-24b3-4561-ac77-e6845526a5b5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4443));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3179d21-1741-4d68-9281-62cb8eabf58b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5062));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3ab8002-f2d1-416e-bf81-35eec16134a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4060));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e0861d-1921-4971-84e4-7cf829ebbb37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4241));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e2a961-1479-4fd4-8f36-cd299e496d4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4532));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c4c0a113-144d-4f61-8349-edbf046fb32a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5048));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7119e78-24e6-401a-b199-3b6845df17f3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3092));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c74e9cd9-8e2c-4fba-b981-384224c57174",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5001));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7834aa3-42f4-47eb-94b0-61a7c71f119e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3981));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7c0c3bf-4646-4fee-82d3-816014e51d11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3090));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c86690f4-9702-44cb-a900-129d2e3ad99f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2970));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8adafdb-7d5e-47cc-8bd0-267f50224cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4020));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8dd9cd1-9fb1-4036-8527-01d4df8bbeed",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4452));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c9182801-e964-42b5-b8d2-bdc6396d7677",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4296));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c932eb6c-34be-469b-b2e3-b298d08b8e86",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4557));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c935236b-6cb3-493c-874d-09b5d9961c34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3127));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca1d73fb-7574-4c2e-bf0d-6e020b064b28",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3186));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca421101-f4c9-456f-989d-2ed5cfc87da4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4836));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca5e28a0-fb51-4972-8059-300ef3c3444b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4440));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cbbb3345-ee8a-4b55-8eb3-8f01e78f09c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4277));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cc8f4a1b-c7fd-4e48-adf1-8b8113e6419f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4053));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd2d914e-5873-4356-9989-1cd93c1fb04a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4526));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd4c6e36-0fbe-417c-a83d-737defa6d36d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4545));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cdab4e47-7b03-4833-89d5-fe602a9e9558",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3028));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4984));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0722930-e054-433b-9fc3-2928b8e06ace",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2993));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4967));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d15202ef-72f5-4a8a-b7d0-ab7f1d8b14f1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4600));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d1559be9-4fae-4855-801b-d088886d4f3a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3930));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d2711937-d17e-4be6-bad9-d5532a34288b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4605));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d3b5d0af-297a-42b0-aade-279a51f3542e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4322));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d416f8d5-26a2-4c4d-87ba-2c5acecccc77",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4754));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d48dd083-5901-47bd-98c7-72fd01c7e481",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4863));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d50cb6e4-3eea-4421-adaf-fb11e9f1def6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4181));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5613ac9-0c78-4869-9bf8-66877adfc306",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4971));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d578e99d-086c-4f8c-af98-6c823d605d5b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3926));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5a19b81-af8e-4539-9ce5-a487a929810b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3048));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d62efc95-bc43-41d1-bb0e-417003349616",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4915));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5059));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d88a15c6-dd91-4337-9585-a45a331b6c87",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4592));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d89d7946-6753-45e7-b094-5d050a265d1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4849));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d9c90e83-72b6-460f-8e07-3337ab878eaf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4804));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa3c78e-a3be-4894-b685-c3f41ca92003",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4472));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa8dd3e-41e9-45b4-9651-19bd9796b4aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3103));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db894224-e132-4289-9c3b-b3d629204850",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3827));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db9950ed-5ae4-481d-9541-a9cf957da348",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3740));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbf166c8-91b7-48c3-999b-cba45fdbaec1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3141));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5034));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dc24ecb6-993e-4f3d-b89a-35378cd261d5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4798));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "de2ea13d-b216-41d2-b341-60182487738b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3193));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "decc1764-3970-4b82-9c01-d8380b19d313",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3073));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "defb4623-4df5-4b58-84e3-fe8016598539",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4166));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "df350e74-0d9f-4b51-a42c-c6614ce3558b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4813));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e0abceff-17f3-4244-8887-7a7a27e64a12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4157));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e32ad0d7-cf89-4e1f-81e7-d331d534eb1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4740));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e3c66d98-7589-4e69-8536-a41a79d713c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4521));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e53e3f4f-185d-4b53-a54f-03ada71e1d38",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3036));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e670fc37-95a1-4888-8d87-7f3dac3fbdc0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3125));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e6dfecee-1ffe-4a36-ac59-c183606b6218",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2990));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e72f4279-4d1c-49ea-9ccb-9cc8027726ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3832));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e77c09bd-4195-44bd-a8ff-e617ba5952fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4101));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e7b3822e-3e00-4717-8f49-4a924d1f1af6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4761));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e876b05c-3d86-4421-a4e0-e857933f11c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3883));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e8ad636f-f434-4649-8c22-728dd28d9814",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4807));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e98a1b74-7f7a-4add-a282-199dc34120e4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4516));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ea488074-4c36-47f4-b664-e9cda4250dde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5040));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eb9d8d41-727d-45b1-94a3-aac67fbeaabb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2977));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ec7caaac-3acc-4e33-b44f-d9246988fe17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3181));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ed14e83d-f3f1-4076-9ae5-4d8e49228d26",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4352));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eda99703-0611-4cd9-8f29-4c1e83978b37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3055));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef408df0-6877-4fea-a517-84ca2e67b019",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3939));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef429ea8-025b-4475-b348-17fab65ee9a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3156));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "efd1e2db-9b36-4ec8-8520-58d0ca85abde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4065));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4926));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1b3f4cb-d222-44ad-a6cf-1ab3089cdd97",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3906));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1c88c2d-8433-471b-abf9-b59f9a530e37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3084));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f25c6022-40d9-4039-8d38-8b8bbebba68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4657));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f351bbc7-d6bd-4356-9824-ba4e4b4789eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3129));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f372726b-105f-4af7-bf1d-edad558a7c91",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4736));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5083));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5051));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4977));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f743b312-b58a-4b4b-a2c4-ceaff31fdd15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4014));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f778be19-5ee8-4282-b842-b05f4ab343f6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4632));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f8ae5b26-dbb2-4baa-b052-93fb19488b00",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3139));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "faa67f45-3870-400c-add8-841489087883",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3888));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fadecfd0-03cd-462b-be1f-6c68cc9d2659",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3922));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fc7809c8-a01f-428a-ace9-af8ec9ba3a7b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4318));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fcd352df-4c09-403d-b320-ad20518faf0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4143));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe07bf5c-7ec9-4b18-a66d-fd71becdeedd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2985));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe1a49f9-36a1-477b-be87-edb573326e03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5091));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff269c57-2916-4536-a976-02864ffe9a5d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4908));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff519d70-6019-46e1-b0b4-277a90b832e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4328));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffa08eea-3cf4-4d5a-8d1e-c4581b562d74",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3957));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffe0ed0b-2a3b-4dac-8b38-fc0b7ebd7a14",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4386));

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "Id", "Cons", "Date", "ProductId", "Pros", "Rate", "Review", "UserId" },
                values: new object[,]
                {
                    { "0cb68ba1-a203-4c5c-b995-e8dfe9f95af3", "Average camera quality.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8116), "50f7e18f-a606-4935-95aa-2679cfa37999", "Sleek design, good display.", 1, "Solid phone, but expected more for the price.", "7" },
                    { "0d30b618-e954-4001-8d99-2c47bef531de", "Overheats quickly, noisy fan.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8098), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Good display, responsive keyboard.", 3, "Had high hopes, but disappointed with the heating issues.", "5" },
                    { "322461cd-e2cc-4bc9-b1f3-174240fa0dc1", "Poor battery optimization.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8113), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Good performance, nice design.", 3, "Disappointing battery life despite the promising features.", "5" },
                    { "42c15340-1696-45a0-a744-34a46cc2bb90", "Pricey, limited ports.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8100), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Superb performance, stunning display, long-lasting battery.", 1, "Absolute powerhouse! Great for creative work and heavy tasks.", "6" },
                    { "48194f27-74df-4764-bcef-8fb3513f83dd", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8103), "1cdfeeae-13d4-40d4-9a70-60916ea4ba17", "", 5, "", "8" },
                    { "508fc379-2d29-4a66-855f-a0e810a6fc34", "High price tag.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8101), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Smooth performance, sleek design.", 4, "Top-notch quality as expected from Apple. Love the user experience.", "7" },
                    { "52333943-729e-4be6-9e01-20739d33a9df", "Average display quality, a bit heavy to carry around.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8053), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Excellent performance, good battery life, sleek design.", 4, "Great laptop overall. It runs smoothly and handles multitasking effortlessly.", "1" },
                    { "552e3d7e-5a98-422a-a5c4-afe207559f28", "Slightly bulky, UI can be overwhelming.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8109), "690d1d22-2bbd-4f27-9549-58862b320685", "Fantastic camera, gorgeous display.", 2, "Exceptional features, especially the camera setup.", "2" },
                    { "555a9851-7bc4-48a7-a525-c940926ef3a5", "Average battery life.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8107), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Great display, smooth interface.", 4, "Impressive phone, but the battery drains quickly.", "1" },
                    { "5ca1b7d1-a88a-4867-a2f4-e49ec4864ffb", "Expensive, average battery life.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8110), "690d1d22-2bbd-4f27-9549-58862b320685", "Nice display, powerful processor.", 3, "Good phone, but not worth the high price tag.", "3" },
                    { "5d5dcfbe-49f5-4823-9816-8210de69d15b", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8104), "b6891273-10bd-47ca-a139-27955175dfee", "", 2, "", "9" },
                    { "679ca905-a697-4636-91d5-390cc026baf4", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8124), "f0dd3651-99f3-4bac-abb3-8492b32d71ba", "", 4, "", "3" },
                    { "906ea1dc-fd94-4c3f-aa50-47b4809ac1f5", "Mediocre build quality, average speakers.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8093), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Affordable price, decent performance.", 3, "Decent laptop for everyday use. Gets the job done without any major issues.", "2" },
                    { "97e368d0-f837-4433-ac9a-2401b7ebb1c1", "Average battery life.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8096), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Sleek design, fast processing, lightweight.", 5, "Love the design and performance. Works like a charm!", "4" },
                    { "9f4153de-b626-457b-a40f-4832875676f7", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8120), "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab", "", 5, "", "10" },
                    { "b3c5e142-d76d-4d4e-bbf5-29b87eadca58", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8123), "8c559d76-c84a-4144-b6b8-259d896a97cc", "", 1, "", "2" },
                    { "b982a318-96f0-464b-a430-b54693e7867b", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8122), "d62efc95-bc43-41d1-bb0e-417003349616", "", 2, "", "1" },
                    { "bea8b20c-b76c-4d4b-81af-61704f1903a2", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8119), "ff269c57-2916-4536-a976-02864ffe9a5d", "", 4, "", "9" },
                    { "efd8f20c-576f-42bc-9070-dec2bb323edc", "Hefty price, heavy to carry.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8106), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Superb camera, powerful performance.", 5, "Stunning device! Camera quality is unmatched.", "10" },
                    { "f0586fbe-1bd2-459f-93a0-7af7b72ce3dd", "Slightly expensive.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8112), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Outstanding camera, clean UI.", 5, "Incredible camera capabilities and a smooth user experience.", "4" },
                    { "fd8d3619-1a03-4b01-a1f5-f8051c5a5fcc", "Lacks some camera finesse.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8114), "50f7e18f-a606-4935-95aa-2679cfa37999", "Speedy performance, smooth interface.", 4, "Fast and reliable. Great performance overall.", "6" },
                    { "ff542cb3-3b6d-41c9-bf2a-eb6508d7280f", "Laggy performance, below-average battery.", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8095), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "", 2, "Not impressed with this model. Slow processing and poor battery life.", "3" },
                    { "ffd76b68-7a3f-48d2-be3b-54243147bfca", "", new DateTime(2023, 12, 11, 18, 14, 51, 71, DateTimeKind.Local).AddTicks(8117), "4878b254-2d40-4128-b9ac-a4109ea1b1ca", "", 2, "", "8" }
                });

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "04dba8ac-a3ed-41a6-a268-3c984bd3ac6c",
                column: "Image",
                value: "https://i.ibb.co/CtRnL6X/storage.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "0bd71a9c-6fe9-4bff-897c-4e96ee59974e",
                column: "Image",
                value: "https://i.ibb.co/qNNKfH1/pc.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "0fc1779f-8256-402b-bfce-aa7938a7dce0",
                column: "Image",
                value: "https://ibb.co/4SVq1fp");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "10884d4e-343f-43f8-9094-2c2e12f072ef",
                column: "Image",
                value: "https://i.ibb.co/r37hXMh/mats.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "19c1e093-d6a4-4af9-ad6d-3b5111a034d6",
                column: "Image",
                value: "https://ibb.co/3z373CN");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "1ba269cb-5d2b-4975-be75-0979930cb10e",
                column: "Image",
                value: "https://i.ibb.co/1Lqgz2C/watches.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "21010f6a-2891-4fc9-969f-4886c993e95c",
                column: "Image",
                value: "https://ibb.co/JFLvFs9");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "248bc1e7-e25c-4d19-b1d8-ab1105938ed0",
                column: "Image",
                value: "https://ibb.co/zQf91Jz");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "24b62ef4-3d30-4f01-b621-1a849edc5f5e",
                column: "Image",
                value: "https://ibb.co/4SwkM0b");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "24ffe98a-3970-4226-9895-bc0267f73cef",
                column: "Image",
                value: "https://i.ibb.co/4JzxPwz/camping.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "28bbdaaa-7997-4cf5-9336-0da1b3fc8026",
                column: "Image",
                value: "https://ibb.co/fqf6MYB");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "2986c60e-1876-4c73-84be-95855807a23e",
                column: "Image",
                value: "https://ibb.co/YtL8bTC");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "29a045e0-76cd-4fa8-9dd1-12a72fbac60b",
                column: "Image",
                value: "https://ibb.co/rbwH7PZ");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "2ec55d9f-c9dd-49c8-af86-10b7fd4f7dd3",
                column: "Image",
                value: "https://ibb.co/7tNBbCc");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "2fcef4d6-0f0a-490b-9b12-57ad0eb0bc9a",
                column: "Image",
                value: "https://i.ibb.co/MfwV7gN/teams.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "31f30e8e-d7c3-43f7-8c57-eb00ae8b997a",
                column: "Image",
                value: "https://ibb.co/1spKD80");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "3edffd71-09a8-4fdb-a59e-add7c7ceb538",
                column: "Image",
                value: "https://i.ibb.co/NW783cv/printer.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "413916b7-99d7-4d46-bd9b-86169ca97373",
                column: "Image",
                value: "https://i.ibb.co/188fh2P/golf.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "4931c0cf-16e5-4d7f-88a4-a8af12dfe902",
                column: "Image",
                value: "https://i.ibb.co/nn3xsnV/cleaningkit.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "4c9db19d-87b1-4380-846c-62547aeeb2de",
                column: "Image",
                value: "https://ibb.co/Bw4y01C");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "50292d51-a80b-40e0-ab12-47e7557cedb8",
                column: "Image",
                value: "https://i.ibb.co/2c9SwMx/proffcamera.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "54e5097e-6dcb-46fc-963d-24cc8a8372b1",
                column: "Image",
                value: "https://ibb.co/n3gQb0S");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "56feed6d-93a3-4ff1-a28b-bba8337a2ade",
                column: "Image",
                value: "https://ibb.co/Kj2mJLk");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "57dcef31-e8c0-429f-8dea-0089afcbf945",
                column: "Image",
                value: "https://i.ibb.co/s9QBSrV/handheld.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "58b31959-1232-453f-b631-6411be333ed3",
                column: "Image",
                value: "https://i.ibb.co/Lt61Vy9/vr.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "60c7be7d-55fe-4bff-8b8a-bd8c1c22f15a",
                column: "Image",
                value: "https://i.ibb.co/8zsJJfN/chargers.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "67447359-bb55-4510-a696-06207f11625b",
                column: "Image",
                value: "https://ibb.co/7nHsXDj");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "68fda0af-4632-4bf5-94bc-cb18f8aef5f9",
                column: "Image",
                value: "https://ibb.co/cgtktkp");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "73b4c13c-0a3b-41bb-97f9-3a7a4fd632db",
                column: "Image",
                value: "https://i.ibb.co/1fXzvRz/style.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "7407db30-6510-4b5e-8e1e-0e8e72e78f2f",
                column: "Image",
                value: "https://i.ibb.co/Jx091Qt/bicycle.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "7cf5b026-3725-4149-8602-1a0f65da4bd0",
                column: "Image",
                value: "https://ibb.co/rtf6zdZ");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "7d214c1c-09ac-4645-b389-16e146c4e9d2",
                column: "Image",
                value: "https://ibb.co/hYxJm3s");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "84dd11a8-db4d-4302-aca9-fbeb00ddaf9b",
                column: "Image",
                value: "https://ibb.co/gdZ0GBs");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "86f9eabb-c453-4c95-bef2-e7538df76294",
                column: "Image",
                value: "https://ibb.co/HhWSdvt");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8c9ac156-d7ef-46a5-b4da-0983fdc00f1a",
                column: "Image",
                value: "https://ibb.co/hHcnQH3");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8cec5cb9-b7ac-480d-9c60-899307478643",
                column: "Image",
                value: "https://i.ibb.co/RjsTXz7/gym.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8d12a370-ad82-4c33-a99a-006b040abbe2",
                column: "Image",
                value: "https://ibb.co/R7Kjv2w");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8f1d8954-e266-49a4-a7a5-2ac1f8620aeb",
                column: "Image",
                value: "https://ibb.co/RQ1DZLy");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "8f50d06c-cf95-442e-bebe-8a9e1311b9e5",
                column: "Image",
                value: "https://i.ibb.co/Jsgp4nm/audiovideo.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "95448f8a-49ea-4930-b91f-193892a687e8",
                column: "Image",
                value: "https://ibb.co/Tty2prS");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a1a8c3ea-7e6a-419c-aae3-75b17a577752",
                column: "Image",
                value: "https://ibb.co/MMn3FTF");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a201ef9c-3206-4449-8eab-86ed6e2220a9",
                column: "Image",
                value: "https://i.ibb.co/BN1260Q/accesories.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a2bb30f6-be86-4e1c-b58f-e1599b8e30c3",
                column: "Image",
                value: "https://ibb.co/Ky45JRy");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "a39cf50b-b311-468e-8e43-eefb0ef53fe2",
                column: "Image",
                value: "https://ibb.co/5rtVCG0");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "af8cd7b9-683a-48d9-8be4-25eb2237ee39",
                column: "Image",
                value: "https://ibb.co/F58SbD2");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "b29fd5c9-ea24-4d83-bf97-fc355f8c672c",
                column: "Image",
                value: "https://i.ibb.co/YPSxW42/scooter.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "b4294426-52a9-4ec8-9e9f-2efe6fe14489",
                column: "Image",
                value: "https://ibb.co/SwNCh1w");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "b90e4c77-7c78-43b5-b8a8-9f25c6c6b24c",
                column: "Image",
                value: "https://i.ibb.co/mR9yvh2/carlight.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "ba523e6e-32cb-43a5-be44-734bd769aaa2",
                column: "Image",
                value: "https://i.ibb.co/b23dX0V/seatcover.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "bdfb4f4e-c9ae-4590-a62b-f491e4aea479",
                column: "Image",
                value: "https://i.ibb.co/T0VM9df/apparel.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "bf567f6d-aac6-4b7e-8abb-a3f830378df3",
                column: "Image",
                value: "https://ibb.co/8bmbkcm");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c05c19eb-f67b-48f3-b4ca-922326df53ff",
                column: "Image",
                value: "https://ibb.co/bHRqbhB");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c5f4fad6-1726-4b2b-a449-fcbd1002023c",
                column: "Image",
                value: "https://ibb.co/LRJfjj5");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c886c2eb-fc04-4d2a-8c9e-1cb71bbac941",
                column: "Image",
                value: "https://ibb.co/hLWjyxf");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "c8e24060-a3cc-4909-a295-a20490698732",
                column: "Image",
                value: "https://ibb.co/8DBLgT9");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "cfc36e75-7f0b-4c4d-a4d9-a2d25f81b467",
                column: "Image",
                value: "https://i.ibb.co/thRm3T5/phone.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d3022cd3-e081-41f5-a7a9-06375898811e",
                column: "Image",
                value: "https://i.ibb.co/zN01DbK/water.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d3e3c11b-809b-4d22-98f8-58333377b784",
                column: "Image",
                value: "https://i.ibb.co/cxV9PCR/cover.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d821754f-9e4d-4758-b162-52f0fee2d7f9",
                column: "Image",
                value: "https://i.ibb.co/s1jGGWJ/airfreshener.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "d9c023b9-ead8-4a2c-8acb-68ee100831d3",
                column: "Image",
                value: "https://i.ibb.co/7pSm5qS/winter.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "dcc14cf4-623e-46a5-b993-06722b09a093",
                column: "Image",
                value: "https://i.ibb.co/hDYPK7v/mount.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "e1adeac0-4152-4a32-a789-ca9a2c99921b",
                column: "Image",
                value: "https://ibb.co/vVwGgd1");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "e666d9e6-3f05-410e-b93d-457a71cf0123",
                column: "Image",
                value: "https://ibb.co/VQxqmnS");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "e72f789f-3032-43b1-bb90-1faacbaa6c9c",
                column: "Image",
                value: "https://ibb.co/MfrkVRj");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "eac02249-e78d-4f89-b949-7b2bacdbfd2a",
                column: "Image",
                value: "https://ibb.co/dLbySwc");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "edb2e61a-ca1e-413d-a3a1-4bac24da99bf",
                column: "Image",
                value: "https://i.ibb.co/pdmMks2/consoles.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "ee83fee6-33fc-4509-b462-3fb11cc8e6a1",
                column: "Image",
                value: "https://i.ibb.co/h7zNfZn/carcharger.jpg");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "f01b6cc6-1917-40ff-9344-184e978a68d8",
                column: "Image",
                value: "https://ibb.co/B2NrcW7");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "f641cfb0-5506-46ee-bb60-0c8150df3585",
                column: "Image",
                value: "https://ibb.co/JyrLLSG");

            migrationBuilder.UpdateData(
                table: "Subcategories",
                keyColumn: "Id",
                keyValue: "fc160538-ed47-4b02-8ff9-32addec8b3a6",
                column: "Image",
                value: "https://ibb.co/grVvTFy");
        }
    }
}
