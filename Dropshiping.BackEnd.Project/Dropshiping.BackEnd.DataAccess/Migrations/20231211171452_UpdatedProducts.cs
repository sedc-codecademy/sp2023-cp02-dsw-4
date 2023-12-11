using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "0e9f9eae-77af-4e5b-8a97-1e8aed0f66cb");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1170e861-00d8-48c8-b24b-c05d42d8fbef");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1369e104-2fda-4ddc-885b-aaa5b94f4a0f");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "213469ec-b2d2-4858-96e4-6050ad5efd71");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "3436a6f0-0a9d-4f6d-882e-e044b28bf536");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "34721059-9f4a-4f21-b45a-dfdfe494ea87");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "415bdbea-adc7-4ffb-874d-d668e226f123");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "7d53546c-ffae-4998-9c0f-bdd7b12cb1f9");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "932a2997-8483-4365-8765-07ff4d15bd5c");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "96b45543-4cb4-4fc5-a8d2-bec9f55d8353");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "99eb3237-deb9-4f48-9b4b-bb783b3d5071");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "a4bf2347-a19b-40d3-8222-2b1c429a5fc4");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "a6a8cc03-739e-42e5-a492-17d2c9192fb8");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b4ef46d1-fc72-4799-afba-b34c80d502db");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "b83550dd-8847-4c4a-8c84-de8de56bf002");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "bbccd453-6169-4965-b08a-0c5f661cf212");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "cc28e4f2-82eb-4a82-ab68-71ba33d50aa6");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "cda00a86-97ae-466f-937f-85643383796e");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "d0163348-32a8-41f0-afb0-f4bb6b6cb4f7");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "db1ca182-80a4-4a2a-ae21-2047c26a9541");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "e803aee5-bd7a-4de8-b8fc-e24c081c256c");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ee14b94c-bb16-4114-8988-27df2e2b516e");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "fd30bc29-daba-4107-b75b-a896fb6b9d79");

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
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4110), 0, 899m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "01b41576-5f8d-475f-88e8-122cd7e15b5c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4856), 0, 699m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "022e2163-a617-4324-b06a-ff80415bdf06",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4426), 34m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "03b07a62-e987-4544-90b8-5955bc6051a3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2917), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "051cd50e-5497-4c17-9a03-f094f96a76b3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3801), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05d827ba-e6ed-4159-be96-04f2b71d27cc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3893), 0, 44m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e4932f-b86e-40de-bc3a-d6edb461d109",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3149), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e6aed2-3e6d-430e-ba53-3108182378d1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3018), 0, 18m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "06ff5983-84f7-4999-a812-9d21117478dc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3856), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0754cac8-5d4b-4bb6-94fd-d8d15d4d1a5e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4661), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "07ea471c-8970-4ebc-a242-255ef39de930",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4152), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0806ff69-ba2a-46d8-b828-d63cc6ccd01d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4282), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4952), 0, 349m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08c0f380-042b-44ad-8f5b-c6a0fdb89089",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4224), 0, 34m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08ca6a32-41a7-4317-8148-a58e733854e7",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4212), 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a2dafad-ef52-42b1-b760-b2f160f09e25",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4573), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a54bf68-791b-4573-aabf-583db9e83e05",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4300), 0, 299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a87621f-3066-4df1-ad90-4161cbd17b9c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3043), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ac71d91-25ae-4d53-8a11-4118494224e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3076), 0, 899m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ad310e2-48e2-4f76-a9cf-635c0384925c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3063), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0bea072a-0e26-48d0-9357-44cf35e056d4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3167), 0, 6m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0de7b3ef-6a40-469f-a17a-2a9a663a4312",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4098), 0, 799m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e2160fc-e95f-4d9d-89a6-dce377ae7b34",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4147), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e428c6f-64b3-41be-ab7d-b4031dc430cf",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4082), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e46225d-54e0-46bd-93ca-3226d3fe157e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4647), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4715), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "100a3b8d-61bc-47a3-9520-a37bbe2abc0f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4708), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10c930ed-f326-48da-a571-6889262104ca",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4842), 21, 179m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10fbc819-c0b3-4a97-8999-f44840827446",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4817), 0, 850m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "12e13234-2da4-475f-89ce-3b16125da53c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3840), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1324bca3-1eb0-4db9-a069-c33322753cf6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4712), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13bee259-e388-4b18-8700-ecd3a0844858",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3013), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13ed769d-2c43-47fd-9525-27eb52505e51",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4536), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "15b1e745-03cb-4873-892d-18a1dfc16fe2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3918), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "162db9c7-dc26-4427-929f-f06891adf285",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4048), 0, 45m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16672559-004b-47c0-8a4f-9f55fc129785",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4987), 17, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16a06882-a2f4-43e5-afda-590971c6152e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4690), 0, 34m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16fdfb87-f4ee-4567-9904-af3164f203d6",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5067), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3137), 6, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ad70921-3eaa-4272-b7d2-e3aec90862c2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4339), 0, 8m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1b6a9dbf-01b9-47b7-a7c8-3df7fd89da4e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4766), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4878), 6, 699m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1eb4379a-a87b-441d-bd49-af2bea052b50",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3020), 6, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ed9876d-fa08-4fb3-8dc7-261d1225548c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3197), 0, 8m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fa012e8-c124-46c4-a390-0a0d8ff118fa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4414), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fd49222-be5c-442a-ba8d-6d0d902be8df",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2961), 3, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fe6f99d-afa0-47b5-ac53-8f7a0b36264b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3172), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "20855d33-7fba-4408-aa81-67c85af2b3aa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3933), 0, 54m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "21364990-c2e4-4598-a617-5286281f1885",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3120), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "215eb3c6-55fc-4c2d-9746-6c9c6a012326",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3115), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "218db5cc-3555-4c1c-af09-d69f7ca1f4ae",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4565), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22342ce7-d548-4040-8a95-4ce837e0e8bb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4074), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22921046-fc72-4dca-b4d8-23fb82b2c417",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4177), 0, 24m });

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
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3897), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "262c138c-f65d-4528-bd40-e54a28712b2a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3788), 4, 44m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "264db346-d6cd-42bd-8710-934d194ffe21",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3098), 2, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "270f8981-0025-4016-9d4b-d962522ebcdd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4402), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2819ed17-0637-49e8-a797-04616be7e636",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4733), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "288a2013-d786-41fe-b4b9-a56c3a8e4187",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3188), 0, 7m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "28ad32de-e0aa-4454-a802-c756b4b0d8e1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4748), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a52ebff-9687-4309-8d9c-c32a585243d1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4980), 13, 179m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a67a875-ec48-4295-9159-5021d48ef30c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4640), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b265092-ee4f-490f-b7e9-0e8290d51c93",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2995), 0, 119m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3158), 21, 11m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c163753-69b0-46d6-8f04-615b334a1ece",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4419), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c8676d4-55be-4090-ad12-9b66b88d188a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4955), 0, 499m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2cbfd742-d03e-44a5-bf0e-6bf1709e0599",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4529), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d373ea8-695f-47cc-8ee8-2f672eef7609",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4244), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3146), 13, 4m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d7e1567-2863-4073-ba87-1c09cd435400",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4220), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2e0a563c-03ef-456c-8bfc-c9e14283a5b9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2971), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2eea9eb3-dbda-4069-b09b-70d1e802c715",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2997), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f7e55f3-2fc1-43a0-8ed1-d8d092fe51da",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4399), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f8ce754-9e39-478d-b8a3-69b0d672e2eb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4839), 0, 1299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "306df296-d233-4795-bb9c-6a5bb8ba1422",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4494), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "31d084b6-e885-4b46-b517-f2d9df72ab61",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4974), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "324b72d9-f597-4c3d-9490-a90225002406",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4570), 8, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "34bafd74-3e1c-4bf3-a832-270b4481eb8b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3902), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "35744787-3044-46a3-a613-126b4387419b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3034), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3606ba10-ae01-4789-a1b4-1e17bae8b384",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3818), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4945), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38212e7c-d4f5-4729-a6ac-220340ba4ad0",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3966), 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "385adbbf-3523-461e-8235-1d0ae0a0a752",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3050), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38f15679-ddd3-40ce-a148-5ddf31317f78",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4810), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4948), 0, 449m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "393f691e-1ec3-4d6f-bba2-0c9e0ae624c3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4273), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a59b15b-2817-4432-be8a-097e614a243a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3190), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4870), 11, 799m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3b3fbb68-f41e-4ac3-b9ef-93c59630e68d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4779), 0, 299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4596), 13, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3d39d7a3-8d8f-42c7-9f91-880a53a6a380",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3025), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3e9f2e08-4819-4f98-add8-f94ea8909ef3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4200), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3f34d9bb-8858-45ab-ab66-7653cf4b4632",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3151), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "41d72b4e-f572-4292-a90b-9c2ce51cce60",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4138), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "42157d88-51ec-4a4a-a283-7951c56376ef",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3163), 3, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4266b4ca-1999-48c7-9a1c-94b82f5bdecc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3962), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "43ba262d-15c7-4936-9bf5-eb9a06c0ee3d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3041), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "45784ea5-0041-4bf1-9c23-2e93657963fc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3797), 21, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "457d29fc-301b-4aa1-9337-610cd0144a9d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4940), 4, 699m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4778333f-2513-45ef-9b15-4a7ddb56ba16",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3002), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5027), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4833de13-c027-4f25-ae67-ba6a8117282a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5077), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4904), 8, 399m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3106), 12, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4ab262eb-a388-4218-a411-f7c0cbfbc083",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4772), 14, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3144), 7, 6m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4cadf79f-bf8c-468c-b766-e4211e828330",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4189), 0, 25m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4dea614b-430c-4abd-a648-74226675ee09",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3975), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4fc49f4b-3338-437e-9172-c5b2d061cb66",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4644), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5030), 0, 249m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50f7e18f-a606-4935-95aa-2679cfa37999",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4900), 0, 999m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5116b20c-3b9c-42ae-875f-788bf14ea028",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3161), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "537e4172-3dee-41e8-97cd-27edc38bb2ac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4034), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4932), 0, 499m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5498c1a5-f773-4bcc-8acb-10794c36694c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3194), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "554ad846-8a31-43ae-a36b-6b5e329da7d9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4791), 0, 399m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4257), 21, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5019), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58c9836c-3d54-4eaa-ab98-142a9023502b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3944), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58e26c93-1bdd-4ff1-aac7-761f71bd2ea2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3085), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4764), 13, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a22f585-6379-4fcb-8059-736aee703ea3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5071), 4, 25m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a5d00df-2745-4f6b-a7a6-40a93c3efb15",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2982), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a9847e1-4d55-419b-aefc-a298fb196d7c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4626), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4859), 3, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c1b8585-54c8-4aa4-8659-bd7b6491ad6c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4185), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c2635b2-1577-4eb0-89ba-9a6a2a330f02",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4743), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cd7422b-2901-46d5-987a-a2bdcce54223",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4228), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cf1420d-b916-4694-b1c9-c67ab7188033",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4824), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5d90c324-ec2e-4272-a1c7-15007b491bcb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4725), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da5d9d9-03f0-4b26-aa19-d0037d0a1e0b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3154), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2957), 4, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e2b1649-ccef-48f0-af29-04480659a698",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4129), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e38bece-7184-4889-9c94-ffebf7b2579d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4207), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e528195-7626-4d59-bcec-93838a587789",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4390), 44m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5f0f89ae-2136-4509-a334-951cfe495cd7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4897), 0, 1099m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60003e1d-68de-4f7a-937c-f636ab2b798d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4671), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60f4d55e-af8d-4b62-92bd-15c4f08fde39",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3878), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61829cb1-3692-4664-8727-d54f6bcc2a4f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3134), 17, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4911), 0, 1299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61c6f600-1ea9-4a55-8df8-79ee71b6b4ad",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3004), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61dd1f5e-bb22-45f8-a9c3-ffc5663f144f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4304), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "623cf00a-bc37-4b40-b008-47c4936ee0fb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3970), 9, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62a66a93-cf80-4632-8cba-7126c7c996c4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4232), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62e37b49-e838-41e2-84fa-64881c97c6a7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4007), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6393507c-0aeb-45d1-93e6-a468f61084f7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3011), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "642f96e1-f879-4a87-8c34-b976d4c2d14d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3847), 0, 34m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "644ed6f5-1d49-46c8-8d4c-623bb5f44f06",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4106), 0, 699m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6584ca3b-6f76-4237-a581-296624842641",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4125), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "65a11451-4f8f-4224-8628-ae1407974f1e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4070), 4, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "679b396d-e17e-40f1-a79d-6d9c4838c36a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4700), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "690d1d22-2bbd-4f27-9549-58862b320685",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4894), 0, 1199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4959), 0, 499m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "698fe90c-e0a0-429a-846c-5e1cdd62dbf9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4722), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69cee78d-ba2e-4f14-ac65-6c50ea481778",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4039), 4, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69f88fc8-31ed-4dcc-b19a-e75731a2b47f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4651), 20, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6a6e57ac-0995-4317-9a98-f52b0a3786a2",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4501), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b7a7571-1a41-4feb-9d88-134a97007fcc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4024), 8, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b897bf1-077d-47ed-b8d0-84abcc0d29a7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3023), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6bac2be5-1291-45b4-a5d8-9d106c807e99",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4578), 0, 119m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6c073e2c-3343-4fb4-a948-86dc83eb0af9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4769), 14, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fa2b4f4-b767-4ac6-b22d-e50edf9438ea",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4247), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fd73a11-7250-4291-b706-281c40efefcb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2987), 15, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5004), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7067fe71-d0d0-4adb-b4b8-ee4891a74a1c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3183), 0, 4m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "712b1ac6-a732-45c4-94b7-2dbeb5c904bc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4192), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7447366f-649c-450a-ae99-c759057f8d8e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3065), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4875), 0, 1499m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74be1b8d-a0b0-4788-89e3-9aa8476841fa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3068), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "761b9633-ff86-4626-9563-ae92284f60ea",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3132), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "766ce0e4-60a1-4a63-8dd4-771f30de7041",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4830), 3, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "76fd81bd-c9e8-4348-9411-0323ca0ee333",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4433), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "798629fb-9751-4d2f-a8fd-fedfa6b57c02",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4852), 2, 599m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7ab36f6d-9c59-4aff-97c9-e406fc9b5ea5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3770), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7acf8f89-addb-4b53-80c9-c6f798020a11",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3953), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7b4f6627-3fc9-4aae-9a3d-fbae4463936e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3007), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7cd3b4c0-7252-4873-b986-71e313667e8b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4197), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d129827-9823-4468-88e3-e6ef5c05487f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4846), 0, 399m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d4de95c-aef1-4a5c-b7e2-2f1d793c2862",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3166), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7fb1b26c-5bf9-459b-b8d0-647929818374",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3912), 0, 34m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "809d8ffc-8fdf-4d04-a3cd-a1489c440c92",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3101), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "810bbb00-b104-4b11-ab99-6f91b730029e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3783), 7, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8173d005-a54a-4589-9775-ef8e7eb88a7d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4668), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5044), 0, 299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4990), 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82f8f9bc-6d8f-4fc1-9626-c342dce64bbc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4090), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85af39fc-10c2-4016-867f-78bda66d6990",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4455), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85cea852-e6fa-4e82-865b-0924b36713f2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4719), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8600635d-9264-4273-8906-75915a2396d0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5010), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86a47d55-c068-4cb0-b813-93234cc2600e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3170), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ec62c0-1363-43ca-b330-b2ee9df5c0a7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3986), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ffc244-8e3b-4a16-be97-47a5e372291e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4622), 13, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "870cff3a-4782-475f-abde-062a33cd95a2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4729), 6, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "888b70f7-d256-4890-8dfd-31f0dd9864c3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3053), 0, 7m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "88e8459e-4d19-4386-bce5-84b901685bb5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4682), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "896e2b2d-b43a-4d2a-8eaa-59c1a6fb0762",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3122), 13, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8a722b88-6df3-4664-ab61-390cd0e28645",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4077), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8b2bffe2-34d8-4ede-b2bd-16cfc25601d4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4488), 11, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8bda082a-7153-41bc-b04a-bde246de6877",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4261), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4665), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c559d76-c84a-4144-b6b8-259d896a97cc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4919), 4, 1799m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c5fde29-0da8-44de-9dc3-769698d9fb8f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3823), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8d0d1487-da7c-49b0-8812-0acb418f6d04",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4552), 0, 54m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8de2c19f-6dc2-461b-a5a1-8acf2e3eca2d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4393), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8e7e2151-0881-40e4-a21e-7536467e74a9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4265), 6, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8ee1a5b3-784f-4fe9-a5b4-e0c86991c2a0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4469), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9020264a-3348-4e4b-97c1-3463074c5e5f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5086), 5, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9104c7e9-0646-4d84-831b-72215d9393ef",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4801), 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "910a7763-e37d-4d64-a0e2-61a5a76804dc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4203), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9122246d-052a-4105-8c7e-605ff07a45b2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4833), 0, 529m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "93e47b26-b2ed-44e3-b3f4-0519a8381d93",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4613), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "969d452a-fb83-4dde-a5e6-677d1f915912",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4781), 0, 1899m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "96c9fe94-aa22-4efd-8526-1bf2f064ad48",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3851), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98857751-85f1-4921-b8a5-27f228ca295d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4410), 3, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98912a2c-bf1d-4cfa-a605-fc3c2b4c2cc4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4174), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99adbca1-5e84-4b5d-977e-c33e8c56a57a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4289), 0, 119m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99b652b9-77db-4989-a8a9-d0cad2c61976",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4285), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9a1ef502-733c-40e6-8273-867971ae16d6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4549), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9bb4cc0f-b72b-4bce-969e-a442a2e47f07",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4686), 7, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9d833dbe-06a0-482f-a841-c902c2ca4012",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4407), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9db7c84e-94fd-4e3f-8a9b-726b557a93eb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4114), 0, 349m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9eabd2ca-d4c5-4c8b-8b56-e88d77ccd4bb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4347), 9, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9efe4fca-e34c-4824-9bc7-4bc31d10a7b7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3793), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9f5f2a19-15bc-4057-a288-d1e88abfd16e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4437), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a071b643-8c74-4f62-86ca-2f506ff71c89",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3081), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a0f4efbb-56a3-4c5b-9bd5-4a0c15d29a61",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4784), 0, 2499m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a12803da-c155-431b-973f-0fb18133495d",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4482), 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4993), 0, 899m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4866), 0, 999m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1ead742-c2eb-44ae-85fe-bd97a79e5141",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3990), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2d10892-0ebf-4db4-80d9-5d240b325295",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4787), 0, 599m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2ec9b8a-7a25-41cb-89f3-0cf7e89410e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3087), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5054), 7 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a36dc640-54d2-4b02-a01b-11841693f736",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4446), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a3fd8116-9e1d-40c0-90b2-ba89eda95906",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4759), 2, 599m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4442552-fcbc-4767-9bcc-38c4172ce456",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3015), 12, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4c9eeff-59dc-446d-909d-27e90053284b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3871), 8, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5a886da-209b-4bd3-a532-5e9ef25c7026",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3837), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4889), 0, 1299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a69bec07-9985-4829-aa84-f7b92ea5eaac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3009), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a6e0066b-0bf9-43f9-b4a3-f12bbeb6ddae",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3867), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a70a2e02-8a15-466e-b651-351845673b73",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3994), 20, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a769be06-7364-42b4-ae43-f4e743dc7cd0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4095), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a8764e34-1e34-46ce-9597-3add5a802a03",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4996), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a9488c66-4662-457c-9cc0-c5d34298f352",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3201), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab02e0d7-8890-4385-8dcb-4421ca0c8bb6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3117), 0, 10m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab363f5c-ce22-4689-9789-ff1bcc9e1d69",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3806), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "abc0945a-9294-4463-b11f-e881c4a57194",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3199), 0, 4m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "aca3ee92-8f53-4c95-bf6f-63b7c8273f51",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4044), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ad22c7f1-37a6-406f-9342-add77fd17234",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3204), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "addf303c-15d4-4456-8ff5-97e9fc568f1e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3060), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af6f8587-30eb-4838-b1a5-efcb688390a6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3038), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af97e70f-98ed-455d-9db8-ff39d255e175",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2980), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b097c96c-048a-4f83-b9fe-706d5a3296db",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3178), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0a36dae-6181-4455-82ac-a919fff997be",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4637), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0e9542f-d95e-4102-9fb4-118d1f821e2f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2964), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b1675b86-526f-4bdd-8106-2827be31c8cd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4588), 0, 179m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b17dd04c-c864-48d6-a6a2-aceed9e53a02",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4794), 0, 799m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4267088-0d92-40cb-a03f-9730aaa1fb8f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3205), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4963), 299m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4cc6cd5-16c1-4e65-8dfc-647d19f2560e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3812), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b60b2054-fe4d-4dfb-87d7-862e48faa272",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3078), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6891273-10bd-47ca-a139-27955175dfee",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4884), 599m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5016), 3, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6bfa026-b6ed-4a81-b4c2-636ef1b81376",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3030), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b760bf11-5ee0-4f02-b476-a95b233d3812",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4582), 3, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b7b23326-9dc3-4fa2-b6b6-c296be64caa0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4170), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2974), 16, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b94d575c-d197-4a2b-8b05-961f549af20d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4310), 0, 15m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b962aa74-832a-4417-9941-100f0328322f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4333), 0, 2m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9f6f25c-5573-4555-bc54-a5131d4a2b4f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3071), 0, 249m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9fbad4e-cf40-48ca-8a0c-0a468ddd27e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4460), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ba248d16-acf6-4294-a1da-7bd81bf5e967",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3046), 0, 5m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb45a351-8caf-454c-acac-8afe9d2d7374",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4133), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb72eb62-6f41-4c7d-aad4-93941e42dd68",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3058), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bbeec1bf-5326-4616-8653-5ec68c4fb37b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3000), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bcd6600f-ee89-4185-87c2-a48afb18070a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4216), 5, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd35fa6e-7868-4e62-ad87-79829aedb100",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3109), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4697), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bde7aff0-c7b5-48fc-9180-d3314fe0699f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4000), 14, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5023), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0f4bf1-696e-4cc1-b89a-2531aa82e7e2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4827), 7, 699m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c50b46-e3fe-4c79-8352-0a211e7a0870",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4120), 15, 249m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c80075-e62c-44cf-8ad7-0f9e4c6de40d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3775), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c312bba1-24b3-4561-ac77-e6845526a5b5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4443), 21, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3179d21-1741-4d68-9281-62cb8eabf58b",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5062), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3ab8002-f2d1-416e-bf81-35eec16134a3",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4060), 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e0861d-1921-4971-84e4-7cf829ebbb37",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4241), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e2a961-1479-4fd4-8f36-cd299e496d4e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4532), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c4c0a113-144d-4f61-8349-edbf046fb32a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5048), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7119e78-24e6-401a-b199-3b6845df17f3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3092), 0, 8m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c74e9cd9-8e2c-4fba-b981-384224c57174",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5001), 20, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7834aa3-42f4-47eb-94b0-61a7c71f119e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3981), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7c0c3bf-4646-4fee-82d3-816014e51d11",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3090), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c86690f4-9702-44cb-a900-129d2e3ad99f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2970), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8adafdb-7d5e-47cc-8bd0-267f50224cd6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4020), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8dd9cd1-9fb1-4036-8527-01d4df8bbeed",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4452), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c9182801-e964-42b5-b8d2-bdc6396d7677",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4296), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c932eb6c-34be-469b-b2e3-b298d08b8e86",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4557), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c935236b-6cb3-493c-874d-09b5d9961c34",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3127), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca1d73fb-7574-4c2e-bf0d-6e020b064b28",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3186), 8m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca421101-f4c9-456f-989d-2ed5cfc87da4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4836), 0, 47m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca5e28a0-fb51-4972-8059-300ef3c3444b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4440), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cbbb3345-ee8a-4b55-8eb3-8f01e78f09c4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4277), 0, 16m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cc8f4a1b-c7fd-4e48-adf1-8b8113e6419f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4053), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd2d914e-5873-4356-9989-1cd93c1fb04a",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4526), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd4c6e36-0fbe-417c-a83d-737defa6d36d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4545), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cdab4e47-7b03-4833-89d5-fe602a9e9558",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3028), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4984), 0, 199m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0722930-e054-433b-9fc3-2928b8e06ace",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2993), 8, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4967), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d15202ef-72f5-4a8a-b7d0-ab7f1d8b14f1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4600), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d1559be9-4fae-4855-801b-d088886d4f3a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3930), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d2711937-d17e-4be6-bad9-d5532a34288b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4605), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d3b5d0af-297a-42b0-aade-279a51f3542e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4322), 21, 7m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d416f8d5-26a2-4c4d-87ba-2c5acecccc77",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4754), 0, 399m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d48dd083-5901-47bd-98c7-72fd01c7e481",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4863), 0, 179m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d50cb6e4-3eea-4421-adaf-fb11e9f1def6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4181), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5613ac9-0c78-4869-9bf8-66877adfc306",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4971), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d578e99d-086c-4f8c-af98-6c823d605d5b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3926), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5a19b81-af8e-4539-9ce5-a487a929810b",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3048), 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d62efc95-bc43-41d1-bb0e-417003349616",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4915), 0, 699m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5059), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d88a15c6-dd91-4337-9585-a45a331b6c87",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4592), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d89d7946-6753-45e7-b094-5d050a265d1e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4849), 0, 749m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d9c90e83-72b6-460f-8e07-3337ab878eaf",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4804), 0, 799m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa3c78e-a3be-4894-b685-c3f41ca92003",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4472), 3, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa8dd3e-41e9-45b4-9651-19bd9796b4aa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3103), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db894224-e132-4289-9c3b-b3d629204850",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3827), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db9950ed-5ae4-481d-9541-a9cf957da348",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3740), 0, 79m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbf166c8-91b7-48c3-999b-cba45fdbaec1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3141), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5034), 0, 399m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dc24ecb6-993e-4f3d-b89a-35378cd261d5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4798), 0, 349m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "de2ea13d-b216-41d2-b341-60182487738b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3193), 13, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "decc1764-3970-4b82-9c01-d8380b19d313",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3073), 0, 599m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "defb4623-4df5-4b58-84e3-fe8016598539",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4166), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "df350e74-0d9f-4b51-a42c-c6614ce3558b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4813), 2, 349m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e0abceff-17f3-4244-8887-7a7a27e64a12",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4157), 0, 24m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e32ad0d7-cf89-4e1f-81e7-d331d534eb1d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4740), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e3c66d98-7589-4e69-8536-a41a79d713c7",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4521), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e53e3f4f-185d-4b53-a54f-03ada71e1d38",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3036), 5, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e670fc37-95a1-4888-8d87-7f3dac3fbdc0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3125), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e6dfecee-1ffe-4a36-ac59-c183606b6218",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2990), 0, 129m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e72f4279-4d1c-49ea-9ccb-9cc8027726ac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3832), 0, 99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e77c09bd-4195-44bd-a8ff-e617ba5952fc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4101), 0, 499m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e7b3822e-3e00-4717-8f49-4a924d1f1af6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4761), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e876b05c-3d86-4421-a4e0-e857933f11c2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3883), 15, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e8ad636f-f434-4649-8c22-728dd28d9814",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4807), 15, 1599m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e98a1b74-7f7a-4add-a282-199dc34120e4",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4516), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ea488074-4c36-47f4-b664-e9cda4250dde",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5040), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eb9d8d41-727d-45b1-94a3-aac67fbeaabb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2977), 0, 69m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ec7caaac-3acc-4e33-b44f-d9246988fe17",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3181), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ed14e83d-f3f1-4076-9ae5-4d8e49228d26",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4352), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eda99703-0611-4cd9-8f29-4c1e83978b37",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3055), 0, 14m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef408df0-6877-4fea-a517-84ca2e67b019",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3939), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef429ea8-025b-4475-b348-17fab65ee9a2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3156), 0, 12m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "efd1e2db-9b36-4ec8-8520-58d0ca85abde",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4065), 0, 34m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4926), 0, 449m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1b3f4cb-d222-44ad-a6cf-1ab3089cdd97",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3906), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1c88c2d-8433-471b-abf9-b59f9a530e37",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3084), 0, 9m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f25c6022-40d9-4039-8d38-8b8bbebba68d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4657), 0, 89m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f351bbc7-d6bd-4356-9824-ba4e4b4789eb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3129), 20, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f372726b-105f-4af7-bf1d-edad558a7c91",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4736), 0, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5083), 7, 19m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5051), 0 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4977), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f743b312-b58a-4b4b-a2c4-ceaff31fdd15",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4014), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f778be19-5ee8-4282-b842-b05f4ab343f6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4632), 0, 44m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f8ae5b26-dbb2-4baa-b052-93fb19488b00",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3139), 0, 8m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "faa67f45-3870-400c-add8-841489087883",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3888), 0, 39m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fadecfd0-03cd-462b-be1f-6c68cc9d2659",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3922), 0, 49m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fc7809c8-a01f-428a-ace9-af8ec9ba3a7b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4318), 0, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fcd352df-4c09-403d-b320-ad20518faf0f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4143), 2, 29m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe07bf5c-7ec9-4b18-a66d-fd71becdeedd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(2985), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe1a49f9-36a1-477b-be87-edb573326e03",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(5091), 0, 59m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff269c57-2916-4536-a976-02864ffe9a5d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4908), 7, 799m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff519d70-6019-46e1-b0b4-277a90b832e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4328), 0, 4m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffa08eea-3cf4-4d5a-8d1e-c4581b562d74",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(3957), 0, 149m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffe0ed0b-2a3b-4dac-8b38-fc0b7ebd7a14",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 18, 14, 51, 62, DateTimeKind.Local).AddTicks(4386), 0, 29m });

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 398, DateTimeKind.Local).AddTicks(6108));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 398, DateTimeKind.Local).AddTicks(6189));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "3",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 398, DateTimeKind.Local).AddTicks(6191));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "4",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 398, DateTimeKind.Local).AddTicks(6193));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "5",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 398, DateTimeKind.Local).AddTicks(6195));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "013053e6-4e6b-4093-bb2a-4f5e007c44ca",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8313), 28, 899.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "01b41576-5f8d-475f-88e8-122cd7e15b5c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8935), 15, 699.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "022e2163-a617-4324-b06a-ff80415bdf06",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8567), 34.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "03b07a62-e987-4544-90b8-5955bc6051a3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7566), 10, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "051cd50e-5497-4c17-9a03-f094f96a76b3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8047), 22, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05d827ba-e6ed-4159-be96-04f2b71d27cc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8137), 4, 44.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e4932f-b86e-40de-bc3a-d6edb461d109",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7922), 2, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e6aed2-3e6d-430e-ba53-3108182378d1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7722), 28, 18.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "06ff5983-84f7-4999-a812-9d21117478dc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8093), 4, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0754cac8-5d4b-4bb6-94fd-d8d15d4d1a5e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8738), 6, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "07ea471c-8970-4ebc-a242-255ef39de930",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8350), 26, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0806ff69-ba2a-46d8-b828-d63cc6ccd01d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8468), 1, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9015), 3, 349.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08c0f380-042b-44ad-8f5b-c6a0fdb89089",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8421), 22, 34.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08ca6a32-41a7-4317-8148-a58e733854e7",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8409), 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a2dafad-ef52-42b1-b760-b2f160f09e25",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8670), 18, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a54bf68-791b-4573-aabf-583db9e83e05",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8486), 27, 299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a87621f-3066-4df1-ad90-4161cbd17b9c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7766), 25, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ac71d91-25ae-4d53-8a11-4118494224e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7821), 25, 899.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ad310e2-48e2-4f76-a9cf-635c0384925c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7800), 18, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0bea072a-0e26-48d0-9357-44cf35e056d4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7958), 7, 6.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0de7b3ef-6a40-469f-a17a-2a9a663a4312",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8300), 12, 799.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e2160fc-e95f-4d9d-89a6-dce377ae7b34",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8346), 14, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e428c6f-64b3-41be-ab7d-b4031dc430cf",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8289), 19, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e46225d-54e0-46bd-93ca-3226d3fe157e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8726), 25, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8781), 13, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "100a3b8d-61bc-47a3-9520-a37bbe2abc0f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8769), 17, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10c930ed-f326-48da-a571-6889262104ca",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8920), 16, 179.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10fbc819-c0b3-4a97-8999-f44840827446",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8890), 11, 850.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "12e13234-2da4-475f-89ce-3b16125da53c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8079), 15, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1324bca3-1eb0-4db9-a069-c33322753cf6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8777), 28, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13bee259-e388-4b18-8700-ecd3a0844858",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7714), 12, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13ed769d-2c43-47fd-9525-27eb52505e51",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8643), 2, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "15b1e745-03cb-4873-892d-18a1dfc16fe2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8157), 11, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "162db9c7-dc26-4427-929f-f06891adf285",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8260), 28, 45.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16672559-004b-47c0-8a4f-9f55fc129785",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9053), 28, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16a06882-a2f4-43e5-afda-590971c6152e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8759), 26, 34.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16fdfb87-f4ee-4567-9904-af3164f203d6",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9123), 22 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7903), 18, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ad70921-3eaa-4272-b7d2-e3aec90862c2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8514), 19, 8.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1b6a9dbf-01b9-47b7-a7c8-3df7fd89da4e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8829), 5, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8960), 19, 699.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1eb4379a-a87b-441d-bd49-af2bea052b50",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7726), 5, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ed9876d-fa08-4fb3-8dc7-261d1225548c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7999), 26, 8.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fa012e8-c124-46c4-a390-0a0d8ff118fa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8560), 24, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fd49222-be5c-442a-ba8d-6d0d902be8df",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7636), 19, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fe6f99d-afa0-47b5-ac53-8f7a0b36264b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7967), 17, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "20855d33-7fba-4408-aa81-67c85af2b3aa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8176), 18, 54.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "21364990-c2e4-4598-a617-5286281f1885",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7876), 28, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "215eb3c6-55fc-4c2d-9746-6c9c6a012326",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7868), 6, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "218db5cc-3555-4c1c-af09-d69f7ca1f4ae",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8663), 9, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22342ce7-d548-4040-8a95-4ce837e0e8bb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8280), 9, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22921046-fc72-4dca-b4d8-23fb82b2c417",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8371), 25, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "23c0f84f-f9cd-4d1f-912b-d83d574b1c0c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8894));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "25a35a75-b84a-4556-97c4-faf1c32e4c90",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8141), 22, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "262c138c-f65d-4528-bd40-e54a28712b2a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8035), 14, 44.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "264db346-d6cd-42bd-8710-934d194ffe21",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7851), 30, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "270f8981-0025-4016-9d4b-d962522ebcdd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8544), 6, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2819ed17-0637-49e8-a797-04616be7e636",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8798), 30, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "288a2013-d786-41fe-b4b9-a56c3a8e4187",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7985), 3, 7.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "28ad32de-e0aa-4454-a802-c756b4b0d8e1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8812), 18, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a52ebff-9687-4309-8d9c-c32a585243d1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9044), 6, 179.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a67a875-ec48-4295-9159-5021d48ef30c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8718), 21, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b265092-ee4f-490f-b7e9-0e8290d51c93",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7685), 8, 119.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7939), 27, 11.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c163753-69b0-46d6-8f04-615b334a1ece",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8564), 28, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c8676d4-55be-4090-ad12-9b66b88d188a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9021), 26, 499.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2cbfd742-d03e-44a5-bf0e-6bf1709e0599",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8636), 19 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d373ea8-695f-47cc-8ee8-2f672eef7609",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8437), 6, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7919), 30, 4.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d7e1567-2863-4073-ba87-1c09cd435400",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8417), 8, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2e0a563c-03ef-456c-8bfc-c9e14283a5b9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7650), 30, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2eea9eb3-dbda-4069-b09b-70d1e802c715",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7688), 26, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f7e55f3-2fc1-43a0-8ed1-d8d092fe51da",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8539), 12, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f8ce754-9e39-478d-b8a3-69b0d672e2eb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8916), 25, 1299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "306df296-d233-4795-bb9c-6a5bb8ba1422",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8613), 20, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "31d084b6-e885-4b46-b517-f2d9df72ab61",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9038), 15, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "324b72d9-f597-4c3d-9490-a90225002406",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8666), 18, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "34bafd74-3e1c-4bf3-a832-270b4481eb8b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8145), 7, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "35744787-3044-46a3-a613-126b4387419b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7750), 15, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3606ba10-ae01-4789-a1b4-1e17bae8b384",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8058), 24, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9008), 2, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38212e7c-d4f5-4729-a6ac-220340ba4ad0",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8200), 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "385adbbf-3523-461e-8235-1d0ae0a0a752",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7777), 15, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38f15679-ddd3-40ce-a148-5ddf31317f78",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8882), 12, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9011), 17, 449.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "393f691e-1ec3-4d6f-bba2-0c9e0ae624c3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8460), 25, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a59b15b-2817-4432-be8a-097e614a243a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7989), 8, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8953), 2, 799.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3b3fbb68-f41e-4ac3-b9ef-93c59630e68d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8840), 18, 299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8687), 15, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3d39d7a3-8d8f-42c7-9f91-880a53a6a380",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7735), 27, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3e9f2e08-4819-4f98-add8-f94ea8909ef3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8397), 30, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3f34d9bb-8858-45ab-ab66-7653cf4b4632",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7926), 7, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "41d72b4e-f572-4292-a90b-9c2ce51cce60",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8338), 23, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "42157d88-51ec-4a4a-a283-7951c56376ef",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7949), 12, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4266b4ca-1999-48c7-9a1c-94b82f5bdecc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8196), 10, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "43ba262d-15c7-4936-9bf5-eb9a06c0ee3d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7762), 13, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "45784ea5-0041-4bf1-9c23-2e93657963fc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8043), 15, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "457d29fc-301b-4aa1-9337-610cd0144a9d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9005), 25, 699.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4778333f-2513-45ef-9b15-4a7ddb56ba16",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7695), 19, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9085), 15, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4833de13-c027-4f25-ae67-ba6a8117282a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9131), 15, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8981), 11, 399.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7861), 6, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4ab262eb-a388-4218-a411-f7c0cbfbc083",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8836), 21, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7915), 29, 6.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4cadf79f-bf8c-468c-b766-e4211e828330",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8384), 17, 25.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4dea614b-430c-4abd-a648-74226675ee09",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8208), 7, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4fc49f4b-3338-437e-9172-c5b2d061cb66",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8722), 27, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9090), 2, 249.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50f7e18f-a606-4935-95aa-2679cfa37999",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8977), 30, 999.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5116b20c-3b9c-42ae-875f-788bf14ea028",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7945), 19, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "537e4172-3dee-41e8-97cd-27edc38bb2ac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8248), 29, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9002), 27, 499.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5498c1a5-f773-4bcc-8acb-10794c36694c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7996), 12, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "554ad846-8a31-43ae-a36b-6b5e329da7d9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8858), 24, 399.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8449), 3, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9080), 12, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58c9836c-3d54-4eaa-ab98-142a9023502b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8184), 14, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58e26c93-1bdd-4ff1-aac7-761f71bd2ea2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7836), 17, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8826), 7, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a22f585-6379-4fcb-8059-736aee703ea3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9128), 21, 25.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a5d00df-2745-4f6b-a7a6-40a93c3efb15",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7664), 2, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a9847e1-4d55-419b-aefc-a298fb196d7c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8706), 28, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8939), 12, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c1b8585-54c8-4aa4-8659-bd7b6491ad6c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8380), 22, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c2635b2-1577-4eb0-89ba-9a6a2a330f02",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8808), 27, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cd7422b-2901-46d5-987a-a2bdcce54223",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8424), 2, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cf1420d-b916-4694-b1c9-c67ab7188033",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8897), 11, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5d90c324-ec2e-4272-a1c7-15007b491bcb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8792), 18, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da5d9d9-03f0-4b26-aa19-d0037d0a1e0b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7930), 24, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7627), 26, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e2b1649-ccef-48f0-af29-04480659a698",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8329), 30, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e38bece-7184-4889-9c94-ffebf7b2579d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8405), 3, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e528195-7626-4d59-bcec-93838a587789",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8531), 44.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5f0f89ae-2136-4509-a334-951cfe495cd7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8973), 17, 1099.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60003e1d-68de-4f7a-937c-f636ab2b798d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8749), 23, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60f4d55e-af8d-4b62-92bd-15c4f08fde39",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8126), 11, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61829cb1-3692-4664-8727-d54f6bcc2a4f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7900), 21, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8988), 9, 1299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61c6f600-1ea9-4a55-8df8-79ee71b6b4ad",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7699), 6, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61dd1f5e-bb22-45f8-a9c3-ffc5663f144f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8490), 21, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "623cf00a-bc37-4b40-b008-47c4936ee0fb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8203), 6, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62a66a93-cf80-4632-8cba-7126c7c996c4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8429), 12, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62e37b49-e838-41e2-84fa-64881c97c6a7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8230), 25, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6393507c-0aeb-45d1-93e6-a468f61084f7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7710), 23, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "642f96e1-f879-4a87-8c34-b976d4c2d14d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8083), 1, 34.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "644ed6f5-1d49-46c8-8d4c-623bb5f44f06",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8309), 12, 699.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6584ca3b-6f76-4237-a581-296624842641",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8325), 8, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "65a11451-4f8f-4224-8628-ae1407974f1e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8276), 24, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "679b396d-e17e-40f1-a79d-6d9c4838c36a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8766), 23, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "690d1d22-2bbd-4f27-9549-58862b320685",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8970), 30, 1199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9024), 11, 499.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "698fe90c-e0a0-429a-846c-5e1cdd62dbf9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8788), 8, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69cee78d-ba2e-4f14-ac65-6c50ea481778",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8252), 18, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69f88fc8-31ed-4dcc-b19a-e75731a2b47f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8730), 23, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6a6e57ac-0995-4317-9a98-f52b0a3786a2",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8617), 27 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b7a7571-1a41-4feb-9d88-134a97007fcc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8242), 4, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b897bf1-077d-47ed-b8d0-84abcc0d29a7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7730), 19, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6bac2be5-1291-45b4-a5d8-9d106c807e99",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8673), 5, 119.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6c073e2c-3343-4fb4-a948-86dc83eb0af9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8833), 1, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fa2b4f4-b767-4ac6-b22d-e50edf9438ea",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8444), 7, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fd73a11-7250-4291-b706-281c40efefcb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7675), 7, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9069), 25, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7067fe71-d0d0-4adb-b4b8-ee4891a74a1c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7977), 7, 4.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "712b1ac6-a732-45c4-94b7-2dbeb5c904bc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8388), 20, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7447366f-649c-450a-ae99-c759057f8d8e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7803), 14, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8956), 7, 1499.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74be1b8d-a0b0-4788-89e3-9aa8476841fa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7808), 7, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "761b9633-ff86-4626-9563-ae92284f60ea",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7897), 6, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "766ce0e4-60a1-4a63-8dd4-771f30de7041",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8904), 4, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "76fd81bd-c9e8-4348-9411-0323ca0ee333",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8572), 6, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "798629fb-9751-4d2f-a8fd-fedfa6b57c02",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8931), 12, 599.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7ab36f6d-9c59-4aff-97c9-e406fc9b5ea5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8024), 20, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7acf8f89-addb-4b53-80c9-c6f798020a11",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8188), 24, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7b4f6627-3fc9-4aae-9a3d-fbae4463936e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7703), 27, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7cd3b4c0-7252-4873-b986-71e313667e8b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8393), 15, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d129827-9823-4468-88e3-e6ef5c05487f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8923), 16, 399.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d4de95c-aef1-4a5c-b7e2-2f1d793c2862",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7954), 18, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7fb1b26c-5bf9-459b-b8d0-647929818374",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8153), 16, 34.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "809d8ffc-8fdf-4d04-a3cd-a1489c440c92",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7854), 9, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "810bbb00-b104-4b11-ab99-6f91b730029e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8031), 20, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8173d005-a54a-4589-9775-ef8e7eb88a7d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8746), 22, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9102), 20, 299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9057), 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82f8f9bc-6d8f-4fc1-9626-c342dce64bbc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8292), 29, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85af39fc-10c2-4016-867f-78bda66d6990",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8593), 25, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85cea852-e6fa-4e82-865b-0924b36713f2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8784), 13, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8600635d-9264-4273-8906-75915a2396d0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9072), 9, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86a47d55-c068-4cb0-b813-93234cc2600e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7962), 18, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ec62c0-1363-43ca-b330-b2ee9df5c0a7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8215), 29, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ffc244-8e3b-4a16-be97-47a5e372291e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8704), 17, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "870cff3a-4782-475f-abde-062a33cd95a2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8795), 21, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "888b70f7-d256-4890-8dfd-31f0dd9864c3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7781), 23, 7.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "88e8459e-4d19-4386-bce5-84b901685bb5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8753), 21, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "896e2b2d-b43a-4d2a-8eaa-59c1a6fb0762",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7879), 19, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8a722b88-6df3-4664-ab61-390cd0e28645",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8284), 8, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8b2bffe2-34d8-4ede-b2bd-16cfc25601d4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8610), 4, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8bda082a-7153-41bc-b04a-bde246de6877",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8453), 2, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8743), 18, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c559d76-c84a-4144-b6b8-259d896a97cc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8995), 11, 1799.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c5fde29-0da8-44de-9dc3-769698d9fb8f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8062), 28, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8d0d1487-da7c-49b0-8812-0acb418f6d04",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8656), 28, 54.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8de2c19f-6dc2-461b-a5a1-8acf2e3eca2d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8535), 1, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8e7e2151-0881-40e4-a21e-7536467e74a9",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8457), 15, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8ee1a5b3-784f-4fe9-a5b4-e0c86991c2a0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8599), 26, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9020264a-3348-4e4b-97c1-3463074c5e5f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9137), 4, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9104c7e9-0646-4d84-831b-72215d9393ef",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8869), 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "910a7763-e37d-4d64-a0e2-61a5a76804dc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8401), 22, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9122246d-052a-4105-8c7e-605ff07a45b2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8909), 23, 529.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "93e47b26-b2ed-44e3-b3f4-0519a8381d93",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8700), 26, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "969d452a-fb83-4dde-a5e6-677d1f915912",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8843), 28, 1899.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "96c9fe94-aa22-4efd-8526-1bf2f064ad48",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8087), 25, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98857751-85f1-4921-b8a5-27f228ca295d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8552), 19, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98912a2c-bf1d-4cfa-a605-fc3c2b4c2cc4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8366), 13, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99adbca1-5e84-4b5d-977e-c33e8c56a57a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8479), 16, 119.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99b652b9-77db-4989-a8a9-d0cad2c61976",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8475), 2, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9a1ef502-733c-40e6-8273-867971ae16d6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8650), 22, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9bb4cc0f-b72b-4bce-969e-a442a2e47f07",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8756), 6, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9d833dbe-06a0-482f-a841-c902c2ca4012",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8548), 2, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9db7c84e-94fd-4e3f-8a9b-726b557a93eb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8316), 28, 349.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9eabd2ca-d4c5-4c8b-8b56-e88d77ccd4bb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8521), 14, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9efe4fca-e34c-4824-9bc7-4bc31d10a7b7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8039), 12, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9f5f2a19-15bc-4057-a288-d1e88abfd16e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8576), 28, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a071b643-8c74-4f62-86ca-2f506ff71c89",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7828), 29, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a0f4efbb-56a3-4c5b-9bd5-4a0c15d29a61",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8847), 27, 2499.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a12803da-c155-431b-973f-0fb18133495d",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8606), 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9060), 22, 899.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8949), 22, 999.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1ead742-c2eb-44ae-85fe-bd97a79e5141",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8219), 17, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2d10892-0ebf-4db4-80d9-5d240b325295",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8854), 2, 599.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2ec9b8a-7a25-41cb-89f3-0cf7e89410e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7839), 14, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9112), 20 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a36dc640-54d2-4b02-a01b-11841693f736",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8587), 1, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a3fd8116-9e1d-40c0-90b2-ba89eda95906",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8819), 19, 599.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4442552-fcbc-4767-9bcc-38c4172ce456",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7718), 17, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4c9eeff-59dc-446d-909d-27e90053284b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8101), 24, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5a886da-209b-4bd3-a532-5e9ef25c7026",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8074), 3, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8967), 5, 1299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a69bec07-9985-4829-aa84-f7b92ea5eaac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7707), 13, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a6e0066b-0bf9-43f9-b4a3-f12bbeb6ddae",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8097), 15, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a70a2e02-8a15-466e-b651-351845673b73",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8222), 1, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a769be06-7364-42b4-ae43-f4e743dc7cd0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8296), 29, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a8764e34-1e34-46ce-9597-3add5a802a03",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9062), 4, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a9488c66-4662-457c-9cc0-c5d34298f352",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8006), 7, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab02e0d7-8890-4385-8dcb-4421ca0c8bb6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7872), 20, 10.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab363f5c-ce22-4689-9789-ff1bcc9e1d69",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8051), 21, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "abc0945a-9294-4463-b11f-e881c4a57194",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8003), 12, 4.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "aca3ee92-8f53-4c95-bf6f-63b7c8273f51",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8256), 3, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ad22c7f1-37a6-406f-9342-add77fd17234",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8009), 18, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "addf303c-15d4-4456-8ff5-97e9fc568f1e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7796), 17, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af6f8587-30eb-4838-b1a5-efcb688390a6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7758), 7, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af97e70f-98ed-455d-9db8-ff39d255e175",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7660), 17, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b097c96c-048a-4f83-b9fe-706d5a3296db",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7970), 19, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0a36dae-6181-4455-82ac-a919fff997be",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8714), 1, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0e9542f-d95e-4102-9fb4-118d1f821e2f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7644), 18, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b1675b86-526f-4bdd-8106-2827be31c8cd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8680), 28, 179.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b17dd04c-c864-48d6-a6a2-aceed9e53a02",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8861), 22, 799.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4267088-0d92-40cb-a03f-9730aaa1fb8f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8017), 25, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9028), 299.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4cc6cd5-16c1-4e65-8dfc-647d19f2560e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8055), 9, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b60b2054-fe4d-4dfb-87d7-862e48faa272",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7825), 5, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6891273-10bd-47ca-a139-27955175dfee",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8964), 599.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9076), 0, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6bfa026-b6ed-4a81-b4c2-636ef1b81376",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7746), 15, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b760bf11-5ee0-4f02-b476-a95b233d3812",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8676), 1, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b7b23326-9dc3-4fa2-b6b6-c296be64caa0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8362), 23, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7653), 10, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b94d575c-d197-4a2b-8b05-961f549af20d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8494), 7, 15.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b962aa74-832a-4417-9941-100f0328322f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8510), 16, 2.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9f6f25c-5573-4555-bc54-a5131d4a2b4f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7812), 25, 249.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9fbad4e-cf40-48ca-8a0c-0a468ddd27e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8596), 29, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ba248d16-acf6-4294-a1da-7bd81bf5e967",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7770), 2, 5.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb45a351-8caf-454c-acac-8afe9d2d7374",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8333), 3, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb72eb62-6f41-4c7d-aad4-93941e42dd68",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7792), 16, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bbeec1bf-5326-4616-8653-5ec68c4fb37b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7692), 6, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bcd6600f-ee89-4185-87c2-a48afb18070a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8413), 28, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd35fa6e-7868-4e62-ad87-79829aedb100",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7865), 4, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8763), 27, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bde7aff0-c7b5-48fc-9180-d3314fe0699f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8226), 15, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9083), 28, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0f4bf1-696e-4cc1-b89a-2531aa82e7e2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8900), 10, 699.5m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c50b46-e3fe-4c79-8352-0a211e7a0870",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8321), 9, 249.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c80075-e62c-44cf-8ad7-0f9e4c6de40d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8027), 30, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c312bba1-24b3-4561-ac77-e6845526a5b5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8583), 1, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3179d21-1741-4d68-9281-62cb8eabf58b",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9119), 12 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3ab8002-f2d1-416e-bf81-35eec16134a3",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8268), 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e0861d-1921-4971-84e4-7cf829ebbb37",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8433), 21, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e2a961-1479-4fd4-8f36-cd299e496d4e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8640), 4, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c4c0a113-144d-4f61-8349-edbf046fb32a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9106), 16, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7119e78-24e6-401a-b199-3b6845df17f3",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7847), 24, 8.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c74e9cd9-8e2c-4fba-b981-384224c57174",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9065), 6, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7834aa3-42f4-47eb-94b0-61a7c71f119e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8211), 5, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7c0c3bf-4646-4fee-82d3-816014e51d11",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7843), 4, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c86690f4-9702-44cb-a900-129d2e3ad99f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7647), 27, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8adafdb-7d5e-47cc-8bd0-267f50224cd6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8238), 5, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8dd9cd1-9fb1-4036-8527-01d4df8bbeed",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8590), 20, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c9182801-e964-42b5-b8d2-bdc6396d7677",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8482), 5, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c932eb6c-34be-469b-b2e3-b298d08b8e86",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8660), 22, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c935236b-6cb3-493c-874d-09b5d9961c34",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7887), 15, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca1d73fb-7574-4c2e-bf0d-6e020b064b28",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7981), 8.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca421101-f4c9-456f-989d-2ed5cfc87da4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8912), 29, 47.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca5e28a0-fb51-4972-8059-300ef3c3444b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8580), 27, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cbbb3345-ee8a-4b55-8eb3-8f01e78f09c4",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8464), 2, 16.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cc8f4a1b-c7fd-4e48-adf1-8b8113e6419f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8264), 28, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd2d914e-5873-4356-9989-1cd93c1fb04a",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8631), 11 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd4c6e36-0fbe-417c-a83d-737defa6d36d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8646), 18, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cdab4e47-7b03-4833-89d5-fe602a9e9558",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7739), 16, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9049), 19, 199.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0722930-e054-433b-9fc3-2928b8e06ace",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7681), 1, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9031), 6, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d15202ef-72f5-4a8a-b7d0-ab7f1d8b14f1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8690), 7, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d1559be9-4fae-4855-801b-d088886d4f3a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8170), 28, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d2711937-d17e-4be6-bad9-d5532a34288b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8694), 13, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d3b5d0af-297a-42b0-aade-279a51f3542e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8503), 26, 7.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d416f8d5-26a2-4c4d-87ba-2c5acecccc77",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8815), 14, 399.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d48dd083-5901-47bd-98c7-72fd01c7e481",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8945), 29, 179.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d50cb6e4-3eea-4421-adaf-fb11e9f1def6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8375), 11, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5613ac9-0c78-4869-9bf8-66877adfc306",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9034), 28, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d578e99d-086c-4f8c-af98-6c823d605d5b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8164), 12, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5a19b81-af8e-4539-9ce5-a487a929810b",
                columns: new[] { "DateOfCreation", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7773), 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d62efc95-bc43-41d1-bb0e-417003349616",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8992), 27, 699.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9116), 22 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d88a15c6-dd91-4337-9585-a45a331b6c87",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8683), 20, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d89d7946-6753-45e7-b094-5d050a265d1e",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8927), 14, 749.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d9c90e83-72b6-460f-8e07-3337ab878eaf",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8874), 29, 799.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa3c78e-a3be-4894-b685-c3f41ca92003",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8602), 24, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa8dd3e-41e9-45b4-9651-19bd9796b4aa",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7858), 28, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db894224-e132-4289-9c3b-b3d629204850",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8066), 11, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db9950ed-5ae4-481d-9541-a9cf957da348",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8020), 29, 79.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbf166c8-91b7-48c3-999b-cba45fdbaec1",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7911), 20, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9094), 2, 399.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dc24ecb6-993e-4f3d-b89a-35378cd261d5",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8865), 29, 349.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "de2ea13d-b216-41d2-b341-60182487738b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7992), 2, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "decc1764-3970-4b82-9c01-d8380b19d313",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7816), 13, 599.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "defb4623-4df5-4b58-84e3-fe8016598539",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8358), 23, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "df350e74-0d9f-4b51-a42c-c6614ce3558b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8886), 17, 349.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e0abceff-17f3-4244-8887-7a7a27e64a12",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8354), 1, 24.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e32ad0d7-cf89-4e1f-81e7-d331d534eb1d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8805), 3, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e3c66d98-7589-4e69-8536-a41a79d713c7",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8627), 19 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e53e3f4f-185d-4b53-a54f-03ada71e1d38",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7754), 8, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e670fc37-95a1-4888-8d87-7f3dac3fbdc0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7884), 9, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e6dfecee-1ffe-4a36-ac59-c183606b6218",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7678), 7, 129.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e72f4279-4d1c-49ea-9ccb-9cc8027726ac",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8070), 21, 99.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e77c09bd-4195-44bd-a8ff-e617ba5952fc",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8304), 6, 499.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e7b3822e-3e00-4717-8f49-4a924d1f1af6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8822), 14, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e876b05c-3d86-4421-a4e0-e857933f11c2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8130), 22, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e8ad636f-f434-4649-8c22-728dd28d9814",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8878), 10, 1599.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e98a1b74-7f7a-4add-a282-199dc34120e4",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8621), 3 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ea488074-4c36-47f4-b664-e9cda4250dde",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9097), 22, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eb9d8d41-727d-45b1-94a3-aac67fbeaabb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7657), 23, 69.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ec7caaac-3acc-4e33-b44f-d9246988fe17",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7974), 13, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ed14e83d-f3f1-4076-9ae5-4d8e49228d26",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8523), 17, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eda99703-0611-4cd9-8f29-4c1e83978b37",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7786), 13, 14.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef408df0-6877-4fea-a517-84ca2e67b019",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8180), 15 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef429ea8-025b-4475-b348-17fab65ee9a2",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7934), 23, 12.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "efd1e2db-9b36-4ec8-8520-58d0ca85abde",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8272), 30, 34.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8999), 8, 449.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1b3f4cb-d222-44ad-a6cf-1ab3089cdd97",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8149), 2, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1c88c2d-8433-471b-abf9-b59f9a530e37",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7832), 6, 9.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f25c6022-40d9-4039-8d38-8b8bbebba68d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8734), 21, 89.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f351bbc7-d6bd-4356-9824-ba4e4b4789eb",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7890), 29, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f372726b-105f-4af7-bf1d-edad558a7c91",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8802), 26, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9135), 23, 19.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                columns: new[] { "DateOfCreation", "Discount" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9109), 28 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9041), 18, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f743b312-b58a-4b4b-a2c4-ceaff31fdd15",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8234), 24, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f778be19-5ee8-4282-b842-b05f4ab343f6",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8710), 17, 44.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f8ae5b26-dbb2-4baa-b052-93fb19488b00",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7907), 7, 8.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "faa67f45-3870-400c-add8-841489087883",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8133), 27, 39.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fadecfd0-03cd-462b-be1f-6c68cc9d2659",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8160), 17, 49.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fc7809c8-a01f-428a-ace9-af8ec9ba3a7b",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8498), 13, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fcd352df-4c09-403d-b320-ad20518faf0f",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8342), 8, 29.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe07bf5c-7ec9-4b18-a66d-fd71becdeedd",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7667), 23, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe1a49f9-36a1-477b-be87-edb573326e03",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9140), 30, 59.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff269c57-2916-4536-a976-02864ffe9a5d",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8985), 8, 799.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff519d70-6019-46e1-b0b4-277a90b832e0",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8507), 28, 4.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffa08eea-3cf4-4d5a-8d1e-c4581b562d74",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8192), 19, 149.99m });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffe0ed0b-2a3b-4dac-8b38-fc0b7ebd7a14",
                columns: new[] { "DateOfCreation", "Discount", "Price" },
                values: new object[] { new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8527), 4, 29.99m });

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "Id", "Cons", "Date", "ProductId", "Pros", "Rate", "Review", "UserId" },
                values: new object[,]
                {
                    { "0e9f9eae-77af-4e5b-8a97-1e8aed0f66cb", "Hefty price, heavy to carry.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9722), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Superb camera, powerful performance.", 5, "Stunning device! Camera quality is unmatched.", "10" },
                    { "1170e861-00d8-48c8-b24b-c05d42d8fbef", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9717), "1cdfeeae-13d4-40d4-9a70-60916ea4ba17", "", 5, "", "8" },
                    { "1369e104-2fda-4ddc-885b-aaa5b94f4a0f", "Expensive, average battery life.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9727), "690d1d22-2bbd-4f27-9549-58862b320685", "Nice display, powerful processor.", 3, "Good phone, but not worth the high price tag.", "3" },
                    { "213469ec-b2d2-4858-96e4-6050ad5efd71", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9737), "4878b254-2d40-4128-b9ac-a4109ea1b1ca", "", 2, "", "8" },
                    { "3436a6f0-0a9d-4f6d-882e-e044b28bf536", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9719), "b6891273-10bd-47ca-a139-27955175dfee", "", 2, "", "9" },
                    { "34721059-9f4a-4f21-b45a-dfdfe494ea87", "Average battery life.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9723), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Great display, smooth interface.", 4, "Impressive phone, but the battery drains quickly.", "1" },
                    { "415bdbea-adc7-4ffb-874d-d668e226f123", "Average display quality, a bit heavy to carry around.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9657), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Excellent performance, good battery life, sleek design.", 4, "Great laptop overall. It runs smoothly and handles multitasking effortlessly.", "1" },
                    { "7d53546c-ffae-4998-9c0f-bdd7b12cb1f9", "Overheats quickly, noisy fan.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9711), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Good display, responsive keyboard.", 3, "Had high hopes, but disappointed with the heating issues.", "5" },
                    { "932a2997-8483-4365-8765-07ff4d15bd5c", "Average camera quality.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9735), "50f7e18f-a606-4935-95aa-2679cfa37999", "Sleek design, good display.", 1, "Solid phone, but expected more for the price.", "7" },
                    { "96b45543-4cb4-4fc5-a8d2-bec9f55d8353", "Lacks some camera finesse.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9733), "50f7e18f-a606-4935-95aa-2679cfa37999", "Speedy performance, smooth interface.", 4, "Fast and reliable. Great performance overall.", "6" },
                    { "99eb3237-deb9-4f48-9b4b-bb783b3d5071", "High price tag.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9715), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Smooth performance, sleek design.", 4, "Top-notch quality as expected from Apple. Love the user experience.", "7" },
                    { "a4bf2347-a19b-40d3-8222-2b1c429a5fc4", "Slightly expensive.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9729), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Outstanding camera, clean UI.", 5, "Incredible camera capabilities and a smooth user experience.", "4" },
                    { "a6a8cc03-739e-42e5-a492-17d2c9192fb8", "Slightly bulky, UI can be overwhelming.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9725), "690d1d22-2bbd-4f27-9549-58862b320685", "Fantastic camera, gorgeous display.", 2, "Exceptional features, especially the camera setup.", "2" },
                    { "b4ef46d1-fc72-4799-afba-b34c80d502db", "Mediocre build quality, average speakers.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9701), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Affordable price, decent performance.", 3, "Decent laptop for everyday use. Gets the job done without any major issues.", "2" },
                    { "b83550dd-8847-4c4a-8c84-de8de56bf002", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9743), "d62efc95-bc43-41d1-bb0e-417003349616", "", 2, "", "1" },
                    { "bbccd453-6169-4965-b08a-0c5f661cf212", "Poor battery optimization.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9731), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Good performance, nice design.", 3, "Disappointing battery life despite the promising features.", "5" },
                    { "cc28e4f2-82eb-4a82-ab68-71ba33d50aa6", "Average battery life.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9709), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Sleek design, fast processing, lightweight.", 5, "Love the design and performance. Works like a charm!", "4" },
                    { "cda00a86-97ae-466f-937f-85643383796e", "Laggy performance, below-average battery.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9706), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "", 2, "Not impressed with this model. Slow processing and poor battery life.", "3" },
                    { "d0163348-32a8-41f0-afb0-f4bb6b6cb4f7", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9739), "ff269c57-2916-4536-a976-02864ffe9a5d", "", 4, "", "9" },
                    { "db1ca182-80a4-4a2a-ae21-2047c26a9541", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9741), "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab", "", 5, "", "10" },
                    { "e803aee5-bd7a-4de8-b8fc-e24c081c256c", "Pricey, limited ports.", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9713), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Superb performance, stunning display, long-lasting battery.", 1, "Absolute powerhouse! Great for creative work and heavy tasks.", "6" },
                    { "ee14b94c-bb16-4114-8988-27df2e2b516e", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9744), "8c559d76-c84a-4144-b6b8-259d896a97cc", "", 1, "", "2" },
                    { "fd30bc29-daba-4107-b75b-a896fb6b9d79", "", new DateTime(2023, 12, 11, 17, 26, 24, 400, DateTimeKind.Local).AddTicks(9746), "f0dd3651-99f3-4bac-abb3-8492b32d71ba", "", 4, "", "3" }
                });
        }
    }
}
