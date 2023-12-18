using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class SaveHashPassword : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "006746be-bf9f-4d95-ac6b-825d03576c3d");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "01f27de2-b5df-48b9-97ce-9e4599678601");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "0487ad2d-9c19-46d2-a5ee-b18b63d1c780");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "0e837d17-6944-4dc0-ba15-0d95f24285d4");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "27bd8ad8-8814-4e97-90c5-527104673dd0");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "43db13a5-a2be-45e8-b390-f5c44a675f9a");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "533768e2-8b81-422d-a9f3-4bca4aa96a21");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "53d2ea40-99ca-429e-9c51-37c01b225464");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "5869b0b1-0431-4e19-8e06-f9c90327aaeb");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "58c3f440-41bc-4833-9146-c3bbf23c859f");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "677a6a91-dfdf-42d3-b24b-9a189295e553");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "6e40e566-7e46-4a13-b12b-2970c8705c08");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "6fe84d59-528f-4965-ae78-0b5a47f46914");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "7db5d109-7e2e-4244-b8cc-12702feec3e6");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "814a28b0-7942-44ce-bdc2-38492096b70a");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "9c7b63ed-b380-459b-96f0-2cae428619aa");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "a2a84fe8-610e-4115-8271-98afc35db25d");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "a6ec2c11-61fd-46da-a34a-4a89b226f723");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ac31e63c-f08c-46c0-9d7a-656bcf69d770");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "afd3522b-ded7-4090-861a-ade478b492fe");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "be0249e5-b1e3-4bef-9375-639d26d14826");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "d00ffd81-da11-4b3f-94f8-6f86af35b677");

            migrationBuilder.DeleteData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "ef5a58b7-1a62-4d9c-996e-ae9fac54d009");

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
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8313));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "01b41576-5f8d-475f-88e8-122cd7e15b5c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8935));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "022e2163-a617-4324-b06a-ff80415bdf06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8567));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "03b07a62-e987-4544-90b8-5955bc6051a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7566));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "051cd50e-5497-4c17-9a03-f094f96a76b3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8047));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05d827ba-e6ed-4159-be96-04f2b71d27cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8137));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e4932f-b86e-40de-bc3a-d6edb461d109",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7922));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e6aed2-3e6d-430e-ba53-3108182378d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7722));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "06ff5983-84f7-4999-a812-9d21117478dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8093));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0754cac8-5d4b-4bb6-94fd-d8d15d4d1a5e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8738));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "07ea471c-8970-4ebc-a242-255ef39de930",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8350));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0806ff69-ba2a-46d8-b828-d63cc6ccd01d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8468));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9015));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08c0f380-042b-44ad-8f5b-c6a0fdb89089",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8421));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08ca6a32-41a7-4317-8148-a58e733854e7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8409));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a2dafad-ef52-42b1-b760-b2f160f09e25",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8670));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a54bf68-791b-4573-aabf-583db9e83e05",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8486));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a87621f-3066-4df1-ad90-4161cbd17b9c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7766));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ac71d91-25ae-4d53-8a11-4118494224e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7821));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ad310e2-48e2-4f76-a9cf-635c0384925c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7800));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0bea072a-0e26-48d0-9357-44cf35e056d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7958));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0de7b3ef-6a40-469f-a17a-2a9a663a4312",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8300));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e2160fc-e95f-4d9d-89a6-dce377ae7b34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8346));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e428c6f-64b3-41be-ab7d-b4031dc430cf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8289));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e46225d-54e0-46bd-93ca-3226d3fe157e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8726));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8781));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "100a3b8d-61bc-47a3-9520-a37bbe2abc0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8769));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10c930ed-f326-48da-a571-6889262104ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8920));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10fbc819-c0b3-4a97-8999-f44840827446",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8890));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "12e13234-2da4-475f-89ce-3b16125da53c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8079));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1324bca3-1eb0-4db9-a069-c33322753cf6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8777));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13bee259-e388-4b18-8700-ecd3a0844858",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7714));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13ed769d-2c43-47fd-9525-27eb52505e51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8643));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "15b1e745-03cb-4873-892d-18a1dfc16fe2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8157));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "162db9c7-dc26-4427-929f-f06891adf285",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8260));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16672559-004b-47c0-8a4f-9f55fc129785",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9053));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16a06882-a2f4-43e5-afda-590971c6152e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8759));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16fdfb87-f4ee-4567-9904-af3164f203d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9123));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7903));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ad70921-3eaa-4272-b7d2-e3aec90862c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8514));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1b6a9dbf-01b9-47b7-a7c8-3df7fd89da4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8829));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8960));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1eb4379a-a87b-441d-bd49-af2bea052b50",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7726));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ed9876d-fa08-4fb3-8dc7-261d1225548c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7999));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fa012e8-c124-46c4-a390-0a0d8ff118fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8560));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fd49222-be5c-442a-ba8d-6d0d902be8df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7636));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fe6f99d-afa0-47b5-ac53-8f7a0b36264b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7967));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "20855d33-7fba-4408-aa81-67c85af2b3aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8176));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "21364990-c2e4-4598-a617-5286281f1885",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7876));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "215eb3c6-55fc-4c2d-9746-6c9c6a012326",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7868));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "218db5cc-3555-4c1c-af09-d69f7ca1f4ae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8663));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22342ce7-d548-4040-8a95-4ce837e0e8bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8280));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22921046-fc72-4dca-b4d8-23fb82b2c417",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8371));

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
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8141));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "262c138c-f65d-4528-bd40-e54a28712b2a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8035));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "264db346-d6cd-42bd-8710-934d194ffe21",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7851));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "270f8981-0025-4016-9d4b-d962522ebcdd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8544));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2819ed17-0637-49e8-a797-04616be7e636",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8798));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "288a2013-d786-41fe-b4b9-a56c3a8e4187",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7985));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "28ad32de-e0aa-4454-a802-c756b4b0d8e1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8812));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a52ebff-9687-4309-8d9c-c32a585243d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9044));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a67a875-ec48-4295-9159-5021d48ef30c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8718));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b265092-ee4f-490f-b7e9-0e8290d51c93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7685));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7939));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c163753-69b0-46d6-8f04-615b334a1ece",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8564));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c8676d4-55be-4090-ad12-9b66b88d188a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9021));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2cbfd742-d03e-44a5-bf0e-6bf1709e0599",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8636));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d373ea8-695f-47cc-8ee8-2f672eef7609",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8437));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7919));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d7e1567-2863-4073-ba87-1c09cd435400",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8417));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2e0a563c-03ef-456c-8bfc-c9e14283a5b9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7650));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2eea9eb3-dbda-4069-b09b-70d1e802c715",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7688));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f7e55f3-2fc1-43a0-8ed1-d8d092fe51da",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8539));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f8ce754-9e39-478d-b8a3-69b0d672e2eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8916));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "306df296-d233-4795-bb9c-6a5bb8ba1422",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8613));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "31d084b6-e885-4b46-b517-f2d9df72ab61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9038));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "324b72d9-f597-4c3d-9490-a90225002406",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8666));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "34bafd74-3e1c-4bf3-a832-270b4481eb8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8145));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "35744787-3044-46a3-a613-126b4387419b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7750));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3606ba10-ae01-4789-a1b4-1e17bae8b384",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8058));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9008));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38212e7c-d4f5-4729-a6ac-220340ba4ad0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8200));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "385adbbf-3523-461e-8235-1d0ae0a0a752",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7777));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38f15679-ddd3-40ce-a148-5ddf31317f78",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8882));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9011));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "393f691e-1ec3-4d6f-bba2-0c9e0ae624c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8460));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a59b15b-2817-4432-be8a-097e614a243a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7989));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8953));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3b3fbb68-f41e-4ac3-b9ef-93c59630e68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8840));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8687));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3d39d7a3-8d8f-42c7-9f91-880a53a6a380",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7735));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3e9f2e08-4819-4f98-add8-f94ea8909ef3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8397));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3f34d9bb-8858-45ab-ab66-7653cf4b4632",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7926));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "41d72b4e-f572-4292-a90b-9c2ce51cce60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8338));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "42157d88-51ec-4a4a-a283-7951c56376ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7949));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4266b4ca-1999-48c7-9a1c-94b82f5bdecc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8196));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "43ba262d-15c7-4936-9bf5-eb9a06c0ee3d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7762));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "45784ea5-0041-4bf1-9c23-2e93657963fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8043));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "457d29fc-301b-4aa1-9337-610cd0144a9d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9005));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4778333f-2513-45ef-9b15-4a7ddb56ba16",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7695));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9085));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4833de13-c027-4f25-ae67-ba6a8117282a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9131));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8981));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7861));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4ab262eb-a388-4218-a411-f7c0cbfbc083",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8836));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7915));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4cadf79f-bf8c-468c-b766-e4211e828330",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8384));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4dea614b-430c-4abd-a648-74226675ee09",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8208));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4fc49f4b-3338-437e-9172-c5b2d061cb66",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8722));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9090));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50f7e18f-a606-4935-95aa-2679cfa37999",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8977));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5116b20c-3b9c-42ae-875f-788bf14ea028",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7945));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "537e4172-3dee-41e8-97cd-27edc38bb2ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8248));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9002));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5498c1a5-f773-4bcc-8acb-10794c36694c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7996));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "554ad846-8a31-43ae-a36b-6b5e329da7d9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8858));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8449));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9080));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58c9836c-3d54-4eaa-ab98-142a9023502b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8184));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58e26c93-1bdd-4ff1-aac7-761f71bd2ea2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7836));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8826));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a22f585-6379-4fcb-8059-736aee703ea3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9128));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a5d00df-2745-4f6b-a7a6-40a93c3efb15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7664));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a9847e1-4d55-419b-aefc-a298fb196d7c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8706));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8939));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c1b8585-54c8-4aa4-8659-bd7b6491ad6c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8380));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c2635b2-1577-4eb0-89ba-9a6a2a330f02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8808));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cd7422b-2901-46d5-987a-a2bdcce54223",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8424));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cf1420d-b916-4694-b1c9-c67ab7188033",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8897));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5d90c324-ec2e-4272-a1c7-15007b491bcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8792));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da5d9d9-03f0-4b26-aa19-d0037d0a1e0b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7930));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7627));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e2b1649-ccef-48f0-af29-04480659a698",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8329));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e38bece-7184-4889-9c94-ffebf7b2579d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8405));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e528195-7626-4d59-bcec-93838a587789",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8531));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5f0f89ae-2136-4509-a334-951cfe495cd7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8973));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60003e1d-68de-4f7a-937c-f636ab2b798d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8749));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60f4d55e-af8d-4b62-92bd-15c4f08fde39",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8126));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61829cb1-3692-4664-8727-d54f6bcc2a4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7900));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8988));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61c6f600-1ea9-4a55-8df8-79ee71b6b4ad",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7699));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61dd1f5e-bb22-45f8-a9c3-ffc5663f144f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8490));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "623cf00a-bc37-4b40-b008-47c4936ee0fb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8203));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62a66a93-cf80-4632-8cba-7126c7c996c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8429));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62e37b49-e838-41e2-84fa-64881c97c6a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8230));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6393507c-0aeb-45d1-93e6-a468f61084f7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7710));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "642f96e1-f879-4a87-8c34-b976d4c2d14d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8083));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "644ed6f5-1d49-46c8-8d4c-623bb5f44f06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8309));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6584ca3b-6f76-4237-a581-296624842641",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8325));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "65a11451-4f8f-4224-8628-ae1407974f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8276));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "679b396d-e17e-40f1-a79d-6d9c4838c36a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8766));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "690d1d22-2bbd-4f27-9549-58862b320685",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8970));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9024));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "698fe90c-e0a0-429a-846c-5e1cdd62dbf9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8788));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69cee78d-ba2e-4f14-ac65-6c50ea481778",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8252));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69f88fc8-31ed-4dcc-b19a-e75731a2b47f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8730));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6a6e57ac-0995-4317-9a98-f52b0a3786a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8617));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b7a7571-1a41-4feb-9d88-134a97007fcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8242));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b897bf1-077d-47ed-b8d0-84abcc0d29a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7730));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6bac2be5-1291-45b4-a5d8-9d106c807e99",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8673));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6c073e2c-3343-4fb4-a948-86dc83eb0af9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8833));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fa2b4f4-b767-4ac6-b22d-e50edf9438ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8444));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fd73a11-7250-4291-b706-281c40efefcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7675));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9069));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7067fe71-d0d0-4adb-b4b8-ee4891a74a1c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7977));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "712b1ac6-a732-45c4-94b7-2dbeb5c904bc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8388));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7447366f-649c-450a-ae99-c759057f8d8e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7803));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8956));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74be1b8d-a0b0-4788-89e3-9aa8476841fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7808));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "761b9633-ff86-4626-9563-ae92284f60ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7897));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "766ce0e4-60a1-4a63-8dd4-771f30de7041",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8904));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "76fd81bd-c9e8-4348-9411-0323ca0ee333",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8572));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "798629fb-9751-4d2f-a8fd-fedfa6b57c02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8931));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7ab36f6d-9c59-4aff-97c9-e406fc9b5ea5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8024));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7acf8f89-addb-4b53-80c9-c6f798020a11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8188));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7b4f6627-3fc9-4aae-9a3d-fbae4463936e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7703));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7cd3b4c0-7252-4873-b986-71e313667e8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8393));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d129827-9823-4468-88e3-e6ef5c05487f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8923));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d4de95c-aef1-4a5c-b7e2-2f1d793c2862",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7954));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7fb1b26c-5bf9-459b-b8d0-647929818374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8153));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "809d8ffc-8fdf-4d04-a3cd-a1489c440c92",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7854));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "810bbb00-b104-4b11-ab99-6f91b730029e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8031));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8173d005-a54a-4589-9775-ef8e7eb88a7d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8746));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9102));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9057));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82f8f9bc-6d8f-4fc1-9626-c342dce64bbc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8292));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85af39fc-10c2-4016-867f-78bda66d6990",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8593));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85cea852-e6fa-4e82-865b-0924b36713f2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8784));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8600635d-9264-4273-8906-75915a2396d0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9072));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86a47d55-c068-4cb0-b813-93234cc2600e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7962));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ec62c0-1363-43ca-b330-b2ee9df5c0a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8215));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ffc244-8e3b-4a16-be97-47a5e372291e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8704));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "870cff3a-4782-475f-abde-062a33cd95a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8795));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "888b70f7-d256-4890-8dfd-31f0dd9864c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7781));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "88e8459e-4d19-4386-bce5-84b901685bb5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8753));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "896e2b2d-b43a-4d2a-8eaa-59c1a6fb0762",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7879));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8a722b88-6df3-4664-ab61-390cd0e28645",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8284));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8b2bffe2-34d8-4ede-b2bd-16cfc25601d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8610));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8bda082a-7153-41bc-b04a-bde246de6877",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8453));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8743));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c559d76-c84a-4144-b6b8-259d896a97cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8995));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c5fde29-0da8-44de-9dc3-769698d9fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8062));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8d0d1487-da7c-49b0-8812-0acb418f6d04",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8656));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8de2c19f-6dc2-461b-a5a1-8acf2e3eca2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8535));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8e7e2151-0881-40e4-a21e-7536467e74a9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8457));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8ee1a5b3-784f-4fe9-a5b4-e0c86991c2a0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8599));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9020264a-3348-4e4b-97c1-3463074c5e5f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9137));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9104c7e9-0646-4d84-831b-72215d9393ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8869));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "910a7763-e37d-4d64-a0e2-61a5a76804dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8401));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9122246d-052a-4105-8c7e-605ff07a45b2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8909));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "93e47b26-b2ed-44e3-b3f4-0519a8381d93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8700));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "969d452a-fb83-4dde-a5e6-677d1f915912",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8843));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "96c9fe94-aa22-4efd-8526-1bf2f064ad48",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8087));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98857751-85f1-4921-b8a5-27f228ca295d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8552));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98912a2c-bf1d-4cfa-a605-fc3c2b4c2cc4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8366));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99adbca1-5e84-4b5d-977e-c33e8c56a57a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8479));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99b652b9-77db-4989-a8a9-d0cad2c61976",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8475));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9a1ef502-733c-40e6-8273-867971ae16d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8650));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9bb4cc0f-b72b-4bce-969e-a442a2e47f07",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8756));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9d833dbe-06a0-482f-a841-c902c2ca4012",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8548));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9db7c84e-94fd-4e3f-8a9b-726b557a93eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8316));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9eabd2ca-d4c5-4c8b-8b56-e88d77ccd4bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8521));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9efe4fca-e34c-4824-9bc7-4bc31d10a7b7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8039));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9f5f2a19-15bc-4057-a288-d1e88abfd16e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8576));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a071b643-8c74-4f62-86ca-2f506ff71c89",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7828));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a0f4efbb-56a3-4c5b-9bd5-4a0c15d29a61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8847));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a12803da-c155-431b-973f-0fb18133495d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8606));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9060));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8949));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1ead742-c2eb-44ae-85fe-bd97a79e5141",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8219));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2d10892-0ebf-4db4-80d9-5d240b325295",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8854));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2ec9b8a-7a25-41cb-89f3-0cf7e89410e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7839));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9112));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a36dc640-54d2-4b02-a01b-11841693f736",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8587));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a3fd8116-9e1d-40c0-90b2-ba89eda95906",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8819));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4442552-fcbc-4767-9bcc-38c4172ce456",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7718));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4c9eeff-59dc-446d-909d-27e90053284b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8101));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5a886da-209b-4bd3-a532-5e9ef25c7026",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8074));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8967));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a69bec07-9985-4829-aa84-f7b92ea5eaac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7707));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a6e0066b-0bf9-43f9-b4a3-f12bbeb6ddae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8097));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a70a2e02-8a15-466e-b651-351845673b73",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8222));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a769be06-7364-42b4-ae43-f4e743dc7cd0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8296));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a8764e34-1e34-46ce-9597-3add5a802a03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9062));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a9488c66-4662-457c-9cc0-c5d34298f352",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8006));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab02e0d7-8890-4385-8dcb-4421ca0c8bb6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7872));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab363f5c-ce22-4689-9789-ff1bcc9e1d69",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8051));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "abc0945a-9294-4463-b11f-e881c4a57194",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8003));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "aca3ee92-8f53-4c95-bf6f-63b7c8273f51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8256));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ad22c7f1-37a6-406f-9342-add77fd17234",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8009));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "addf303c-15d4-4456-8ff5-97e9fc568f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7796));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af6f8587-30eb-4838-b1a5-efcb688390a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7758));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af97e70f-98ed-455d-9db8-ff39d255e175",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7660));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b097c96c-048a-4f83-b9fe-706d5a3296db",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7970));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0a36dae-6181-4455-82ac-a919fff997be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8714));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0e9542f-d95e-4102-9fb4-118d1f821e2f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7644));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b1675b86-526f-4bdd-8106-2827be31c8cd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8680));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b17dd04c-c864-48d6-a6a2-aceed9e53a02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8861));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4267088-0d92-40cb-a03f-9730aaa1fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8017));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9028));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4cc6cd5-16c1-4e65-8dfc-647d19f2560e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8055));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b60b2054-fe4d-4dfb-87d7-862e48faa272",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7825));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6891273-10bd-47ca-a139-27955175dfee",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8964));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9076));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6bfa026-b6ed-4a81-b4c2-636ef1b81376",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7746));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b760bf11-5ee0-4f02-b476-a95b233d3812",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8676));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b7b23326-9dc3-4fa2-b6b6-c296be64caa0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8362));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7653));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b94d575c-d197-4a2b-8b05-961f549af20d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8494));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b962aa74-832a-4417-9941-100f0328322f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8510));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9f6f25c-5573-4555-bc54-a5131d4a2b4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7812));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9fbad4e-cf40-48ca-8a0c-0a468ddd27e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8596));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ba248d16-acf6-4294-a1da-7bd81bf5e967",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7770));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb45a351-8caf-454c-acac-8afe9d2d7374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8333));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb72eb62-6f41-4c7d-aad4-93941e42dd68",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7792));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bbeec1bf-5326-4616-8653-5ec68c4fb37b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7692));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bcd6600f-ee89-4185-87c2-a48afb18070a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8413));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd35fa6e-7868-4e62-ad87-79829aedb100",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7865));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8763));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bde7aff0-c7b5-48fc-9180-d3314fe0699f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8226));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9083));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0f4bf1-696e-4cc1-b89a-2531aa82e7e2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8900));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c50b46-e3fe-4c79-8352-0a211e7a0870",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8321));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c80075-e62c-44cf-8ad7-0f9e4c6de40d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8027));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c312bba1-24b3-4561-ac77-e6845526a5b5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8583));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3179d21-1741-4d68-9281-62cb8eabf58b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9119));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3ab8002-f2d1-416e-bf81-35eec16134a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8268));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e0861d-1921-4971-84e4-7cf829ebbb37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8433));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e2a961-1479-4fd4-8f36-cd299e496d4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8640));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c4c0a113-144d-4f61-8349-edbf046fb32a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9106));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7119e78-24e6-401a-b199-3b6845df17f3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7847));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c74e9cd9-8e2c-4fba-b981-384224c57174",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9065));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7834aa3-42f4-47eb-94b0-61a7c71f119e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8211));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7c0c3bf-4646-4fee-82d3-816014e51d11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7843));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c86690f4-9702-44cb-a900-129d2e3ad99f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7647));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8adafdb-7d5e-47cc-8bd0-267f50224cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8238));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8dd9cd1-9fb1-4036-8527-01d4df8bbeed",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8590));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c9182801-e964-42b5-b8d2-bdc6396d7677",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8482));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c932eb6c-34be-469b-b2e3-b298d08b8e86",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8660));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c935236b-6cb3-493c-874d-09b5d9961c34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7887));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca1d73fb-7574-4c2e-bf0d-6e020b064b28",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7981));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca421101-f4c9-456f-989d-2ed5cfc87da4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8912));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca5e28a0-fb51-4972-8059-300ef3c3444b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8580));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cbbb3345-ee8a-4b55-8eb3-8f01e78f09c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8464));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cc8f4a1b-c7fd-4e48-adf1-8b8113e6419f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8264));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd2d914e-5873-4356-9989-1cd93c1fb04a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8631));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd4c6e36-0fbe-417c-a83d-737defa6d36d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8646));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cdab4e47-7b03-4833-89d5-fe602a9e9558",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7739));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9049));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0722930-e054-433b-9fc3-2928b8e06ace",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7681));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9031));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d15202ef-72f5-4a8a-b7d0-ab7f1d8b14f1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8690));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d1559be9-4fae-4855-801b-d088886d4f3a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8170));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d2711937-d17e-4be6-bad9-d5532a34288b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8694));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d3b5d0af-297a-42b0-aade-279a51f3542e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8503));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d416f8d5-26a2-4c4d-87ba-2c5acecccc77",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8815));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d48dd083-5901-47bd-98c7-72fd01c7e481",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8945));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d50cb6e4-3eea-4421-adaf-fb11e9f1def6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8375));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5613ac9-0c78-4869-9bf8-66877adfc306",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9034));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d578e99d-086c-4f8c-af98-6c823d605d5b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8164));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5a19b81-af8e-4539-9ce5-a487a929810b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7773));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d62efc95-bc43-41d1-bb0e-417003349616",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8992));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9116));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d88a15c6-dd91-4337-9585-a45a331b6c87",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8683));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d89d7946-6753-45e7-b094-5d050a265d1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8927));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d9c90e83-72b6-460f-8e07-3337ab878eaf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8874));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa3c78e-a3be-4894-b685-c3f41ca92003",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8602));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa8dd3e-41e9-45b4-9651-19bd9796b4aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7858));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db894224-e132-4289-9c3b-b3d629204850",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8066));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db9950ed-5ae4-481d-9541-a9cf957da348",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8020));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbf166c8-91b7-48c3-999b-cba45fdbaec1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7911));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9094));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dc24ecb6-993e-4f3d-b89a-35378cd261d5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8865));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "de2ea13d-b216-41d2-b341-60182487738b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7992));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "decc1764-3970-4b82-9c01-d8380b19d313",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7816));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "defb4623-4df5-4b58-84e3-fe8016598539",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8358));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "df350e74-0d9f-4b51-a42c-c6614ce3558b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8886));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e0abceff-17f3-4244-8887-7a7a27e64a12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8354));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e32ad0d7-cf89-4e1f-81e7-d331d534eb1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8805));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e3c66d98-7589-4e69-8536-a41a79d713c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8627));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e53e3f4f-185d-4b53-a54f-03ada71e1d38",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7754));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e670fc37-95a1-4888-8d87-7f3dac3fbdc0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7884));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e6dfecee-1ffe-4a36-ac59-c183606b6218",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7678));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e72f4279-4d1c-49ea-9ccb-9cc8027726ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8070));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e77c09bd-4195-44bd-a8ff-e617ba5952fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8304));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e7b3822e-3e00-4717-8f49-4a924d1f1af6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8822));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e876b05c-3d86-4421-a4e0-e857933f11c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8130));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e8ad636f-f434-4649-8c22-728dd28d9814",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8878));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e98a1b74-7f7a-4add-a282-199dc34120e4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8621));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ea488074-4c36-47f4-b664-e9cda4250dde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9097));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eb9d8d41-727d-45b1-94a3-aac67fbeaabb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7657));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ec7caaac-3acc-4e33-b44f-d9246988fe17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7974));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ed14e83d-f3f1-4076-9ae5-4d8e49228d26",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8523));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eda99703-0611-4cd9-8f29-4c1e83978b37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7786));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef408df0-6877-4fea-a517-84ca2e67b019",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8180));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef429ea8-025b-4475-b348-17fab65ee9a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7934));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "efd1e2db-9b36-4ec8-8520-58d0ca85abde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8272));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8999));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1b3f4cb-d222-44ad-a6cf-1ab3089cdd97",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8149));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1c88c2d-8433-471b-abf9-b59f9a530e37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7832));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f25c6022-40d9-4039-8d38-8b8bbebba68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8734));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f351bbc7-d6bd-4356-9824-ba4e4b4789eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7890));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f372726b-105f-4af7-bf1d-edad558a7c91",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8802));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9135));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9109));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9041));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f743b312-b58a-4b4b-a2c4-ceaff31fdd15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8234));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f778be19-5ee8-4282-b842-b05f4ab343f6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8710));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f8ae5b26-dbb2-4baa-b052-93fb19488b00",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7907));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "faa67f45-3870-400c-add8-841489087883",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8133));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fadecfd0-03cd-462b-be1f-6c68cc9d2659",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8160));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fc7809c8-a01f-428a-ace9-af8ec9ba3a7b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8498));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fcd352df-4c09-403d-b320-ad20518faf0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8342));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe07bf5c-7ec9-4b18-a66d-fd71becdeedd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(7667));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe1a49f9-36a1-477b-be87-edb573326e03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(9140));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff269c57-2916-4536-a976-02864ffe9a5d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8985));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff519d70-6019-46e1-b0b4-277a90b832e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8507));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffa08eea-3cf4-4d5a-8d1e-c4581b562d74",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8192));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffe0ed0b-2a3b-4dac-8b38-fc0b7ebd7a14",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 11, 17, 26, 24, 392, DateTimeKind.Local).AddTicks(8527));

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

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "1",
                column: "Password",
                value: "AB07646990FCD87739EDECB49521EB2F");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "10",
                column: "Password",
                value: "6488D8A24274BD0F4AFC517310CD1FE2");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "11",
                column: "Password",
                value: "05D0C0B188482240E0DEB01D152E6238");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "12",
                column: "Password",
                value: "6EF694B9CC1CEBBA8A2C8D2657074A6E");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "13",
                column: "Password",
                value: "C132F08E5A9E2D636585F3C37DF010E8");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "14",
                column: "Password",
                value: "FC79B0333C2E126BE380C3128B9471FC");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "15",
                column: "Password",
                value: "139F3CC8B986EDC528F7EB20D59B5B9F");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "2",
                column: "Password",
                value: "F9A8CCE657DEFDEE712FC0151EBD3896");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "3",
                column: "Password",
                value: "401533BE748859F438F0F8BAFC802D86");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "4",
                column: "Password",
                value: "F70A06FE8956CD793D56D0B24C4A1D64");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "5",
                column: "Password",
                value: "D0A6F46FA2FFFA45AC8713E6196CB007");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "6",
                column: "Password",
                value: "C60B18FD6E0590E12BA8BC5FC2C68196");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "7",
                column: "Password",
                value: "746A78EFAF1F1D114D5DB06C903FF9C1");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "8",
                column: "Password",
                value: "79BB7BD4726A3791D38D66FDA31E5017");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "9",
                column: "Password",
                value: "63297C6292A4EE9F0AB781A7C07BE77A");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                value: new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(237));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(279));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "3",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(280));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "4",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(282));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "5",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(284));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "013053e6-4e6b-4093-bb2a-4f5e007c44ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9990));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "01b41576-5f8d-475f-88e8-122cd7e15b5c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(189));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "022e2163-a617-4324-b06a-ff80415bdf06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(68));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "03b07a62-e987-4544-90b8-5955bc6051a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9720));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "051cd50e-5497-4c17-9a03-f094f96a76b3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9909));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05d827ba-e6ed-4159-be96-04f2b71d27cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9931));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e4932f-b86e-40de-bc3a-d6edb461d109",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9866));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "05e6aed2-3e6d-430e-ba53-3108182378d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9796));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "06ff5983-84f7-4999-a812-9d21117478dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9923));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0754cac8-5d4b-4bb6-94fd-d8d15d4d1a5e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(125));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "07ea471c-8970-4ebc-a242-255ef39de930",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(2));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0806ff69-ba2a-46d8-b828-d63cc6ccd01d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(38));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "081f8b76-f0a2-4172-a15d-07cbc7e33013",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(215));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08c0f380-042b-44ad-8f5b-c6a0fdb89089",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(24));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "08ca6a32-41a7-4317-8148-a58e733854e7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(20));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a2dafad-ef52-42b1-b760-b2f160f09e25",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(103));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a54bf68-791b-4573-aabf-583db9e83e05",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(43));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0a87621f-3066-4df1-ad90-4161cbd17b9c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9810));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ac71d91-25ae-4d53-8a11-4118494224e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9827));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0ad310e2-48e2-4f76-a9cf-635c0384925c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9820));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0bea072a-0e26-48d0-9357-44cf35e056d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9877));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0de7b3ef-6a40-469f-a17a-2a9a663a4312",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9985));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e2160fc-e95f-4d9d-89a6-dce377ae7b34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e428c6f-64b3-41be-ab7d-b4031dc430cf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9981));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0e46225d-54e0-46bd-93ca-3226d3fe157e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(121));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "0edc6010-603d-4a12-81e8-3fbeacbfa3c0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(138));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "100a3b8d-61bc-47a3-9520-a37bbe2abc0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(136));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10c930ed-f326-48da-a571-6889262104ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(184));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "10fbc819-c0b3-4a97-8999-f44840827446",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(174));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "12e13234-2da4-475f-89ce-3b16125da53c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9919));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1324bca3-1eb0-4db9-a069-c33322753cf6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(137));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13bee259-e388-4b18-8700-ecd3a0844858",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9794));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "13ed769d-2c43-47fd-9525-27eb52505e51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(93));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "15b1e745-03cb-4873-892d-18a1dfc16fe2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9938));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "162db9c7-dc26-4427-929f-f06891adf285",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9972));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16672559-004b-47c0-8a4f-9f55fc129785",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(227));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16a06882-a2f4-43e5-afda-590971c6152e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(132));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "16fdfb87-f4ee-4567-9904-af3164f203d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(251));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1a275ab8-9dc3-45b1-a52e-533d5f37c21f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9859));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ad70921-3eaa-4272-b7d2-e3aec90862c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(53));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1b6a9dbf-01b9-47b7-a7c8-3df7fd89da4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(156));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1cdfeeae-13d4-40d4-9a70-60916ea4ba17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(196));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1eb4379a-a87b-441d-bd49-af2bea052b50",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9798));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1ed9876d-fa08-4fb3-8dc7-261d1225548c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9893));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fa012e8-c124-46c4-a390-0a0d8ff118fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(65));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fd49222-be5c-442a-ba8d-6d0d902be8df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9765));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1fe6f99d-afa0-47b5-ac53-8f7a0b36264b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9880));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "20855d33-7fba-4408-aa81-67c85af2b3aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9944));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "21364990-c2e4-4598-a617-5286281f1885",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9847));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "215eb3c6-55fc-4c2d-9746-6c9c6a012326",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9845));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "218db5cc-3555-4c1c-af09-d69f7ca1f4ae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(100));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22342ce7-d548-4040-8a95-4ce837e0e8bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9978));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "22921046-fc72-4dca-b4d8-23fb82b2c417",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(9));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "23c0f84f-f9cd-4d1f-912b-d83d574b1c0c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(176));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "25a35a75-b84a-4556-97c4-faf1c32e4c90",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9932));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "262c138c-f65d-4528-bd40-e54a28712b2a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9905));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "264db346-d6cd-42bd-8710-934d194ffe21",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9838));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "270f8981-0025-4016-9d4b-d962522ebcdd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(61));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2819ed17-0637-49e8-a797-04616be7e636",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(145));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "288a2013-d786-41fe-b4b9-a56c3a8e4187",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9887));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "28ad32de-e0aa-4454-a802-c756b4b0d8e1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(150));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a52ebff-9687-4309-8d9c-c32a585243d1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(225));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2a67a875-ec48-4295-9159-5021d48ef30c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(119));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b265092-ee4f-490f-b7e9-0e8290d51c93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9782));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2b7b4c0e-3b2c-4ddf-8907-ff352aad28a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9871));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c163753-69b0-46d6-8f04-615b334a1ece",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(67));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2c8676d4-55be-4090-ad12-9b66b88d188a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(216));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2cbfd742-d03e-44a5-bf0e-6bf1709e0599",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(90));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d373ea8-695f-47cc-8ee8-2f672eef7609",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(29));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d5268af-e732-42f1-8ae8-b6e91677bcd4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9865));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2d7e1567-2863-4073-ba87-1c09cd435400",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(23));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2e0a563c-03ef-456c-8bfc-c9e14283a5b9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9769));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2eea9eb3-dbda-4069-b09b-70d1e802c715",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9783));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f7e55f3-2fc1-43a0-8ed1-d8d092fe51da",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(60));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2f8ce754-9e39-478d-b8a3-69b0d672e2eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(183));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "306df296-d233-4795-bb9c-6a5bb8ba1422",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(84));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "31d084b6-e885-4b46-b517-f2d9df72ab61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(223));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "324b72d9-f597-4c3d-9490-a90225002406",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(101));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "34bafd74-3e1c-4bf3-a832-270b4481eb8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9933));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "35744787-3044-46a3-a613-126b4387419b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9804));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3606ba10-ae01-4789-a1b4-1e17bae8b384",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9913));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "370ff008-cbc0-4b3e-b8cb-687a246be0ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(213));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38212e7c-d4f5-4729-a6ac-220340ba4ad0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9952));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "385adbbf-3523-461e-8235-1d0ae0a0a752",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9814));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "38f15679-ddd3-40ce-a148-5ddf31317f78",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(172));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "391fadac-24e9-40ec-a0ed-6604ba61a0c9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(214));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "393f691e-1ec3-4d6f-bba2-0c9e0ae624c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(35));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a59b15b-2817-4432-be8a-097e614a243a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9889));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3a97f708-2be7-498a-8d59-ada88e5e7c1b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(193));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3b3fbb68-f41e-4ac3-b9ef-93c59630e68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(160));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3bdb838f-1e89-40fe-85f4-61e978bd02d8",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(109));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3d39d7a3-8d8f-42c7-9f91-880a53a6a380",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9800));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3e9f2e08-4819-4f98-add8-f94ea8909ef3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(17));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "3f34d9bb-8858-45ab-ab66-7653cf4b4632",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9868));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "41d72b4e-f572-4292-a90b-9c2ce51cce60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9998));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "42157d88-51ec-4a4a-a283-7951c56376ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9874));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4266b4ca-1999-48c7-9a1c-94b82f5bdecc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9950));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "43ba262d-15c7-4936-9bf5-eb9a06c0ee3d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9809));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "45784ea5-0041-4bf1-9c23-2e93657963fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9908));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "457d29fc-301b-4aa1-9337-610cd0144a9d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(212));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4778333f-2513-45ef-9b15-4a7ddb56ba16",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9786));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "47c2cef5-cfc4-4e6d-84e3-56d618701eac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(239));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4833de13-c027-4f25-ae67-ba6a8117282a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(253));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4878b254-2d40-4128-b9ac-a4109ea1b1ca",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(203));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4909b5d1-d00d-44f9-9f2f-07b191e55ce9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9842));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4ab262eb-a388-4218-a411-f7c0cbfbc083",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(158));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4bbe25a4-60b5-47f1-8a09-34b5b98a10be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9864));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4cadf79f-bf8c-468c-b766-e4211e828330",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(13));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4dea614b-430c-4abd-a648-74226675ee09",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9955));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "4fc49f4b-3338-437e-9172-c5b2d061cb66",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(120));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50160b96-d21a-453e-afbb-4e31cc0a6abf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(241));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "50f7e18f-a606-4935-95aa-2679cfa37999",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(202));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5116b20c-3b9c-42ae-875f-788bf14ea028",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9873));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "537e4172-3dee-41e8-97cd-27edc38bb2ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9968));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5454868c-f8e4-4777-b90f-cb9d2e5c82fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(210));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5498c1a5-f773-4bcc-8acb-10794c36694c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9892));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "554ad846-8a31-43ae-a36b-6b5e329da7d9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(164));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "56ae1e61-916f-4f02-87d3-f5220d0c2a0d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(31));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58a34f33-1e5f-4f93-bc0d-2b5d06d4287c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(237));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58c9836c-3d54-4eaa-ab98-142a9023502b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9946));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "58e26c93-1bdd-4ff1-aac7-761f71bd2ea2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9833));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a17d26e-18fd-40d8-b487-1c8c7c699bcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(155));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a22f585-6379-4fcb-8059-736aee703ea3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(252));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a5d00df-2745-4f6b-a7a6-40a93c3efb15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9774));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5a9847e1-4d55-419b-aefc-a298fb196d7c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(115));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5b6113ba-889a-4aac-b50a-2796fb2c3c2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(190));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c1b8585-54c8-4aa4-8659-bd7b6491ad6c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(12));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5c2635b2-1577-4eb0-89ba-9a6a2a330f02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(148));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cd7422b-2901-46d5-987a-a2bdcce54223",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(25));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5cf1420d-b916-4694-b1c9-c67ab7188033",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(177));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5d90c324-ec2e-4272-a1c7-15007b491bcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(142));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da5d9d9-03f0-4b26-aa19-d0037d0a1e0b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9869));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5da8b5c6-ddf6-4034-b745-be7d95f123c6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9761));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e2b1649-ccef-48f0-af29-04480659a698",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9995));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e38bece-7184-4889-9c94-ffebf7b2579d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(19));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5e528195-7626-4d59-bcec-93838a587789",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(58));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "5f0f89ae-2136-4509-a334-951cfe495cd7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(201));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60003e1d-68de-4f7a-937c-f636ab2b798d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(128));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "60f4d55e-af8d-4b62-92bd-15c4f08fde39",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9927));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61829cb1-3692-4664-8727-d54f6bcc2a4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9855));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(206));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61c6f600-1ea9-4a55-8df8-79ee71b6b4ad",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9788));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "61dd1f5e-bb22-45f8-a9c3-ffc5663f144f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(44));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "623cf00a-bc37-4b40-b008-47c4936ee0fb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9954));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62a66a93-cf80-4632-8cba-7126c7c996c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(26));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "62e37b49-e838-41e2-84fa-64881c97c6a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9963));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6393507c-0aeb-45d1-93e6-a468f61084f7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9793));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "642f96e1-f879-4a87-8c34-b976d4c2d14d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9921));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "644ed6f5-1d49-46c8-8d4c-623bb5f44f06",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9988));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6584ca3b-6f76-4237-a581-296624842641",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9994));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "65a11451-4f8f-4224-8628-ae1407974f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9977));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "679b396d-e17e-40f1-a79d-6d9c4838c36a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(135));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "690d1d22-2bbd-4f27-9549-58862b320685",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(200));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "691785c7-f98c-4b26-a391-f2cfa65b3b60",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(218));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "698fe90c-e0a0-429a-846c-5e1cdd62dbf9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(141));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69cee78d-ba2e-4f14-ac65-6c50ea481778",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9970));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "69f88fc8-31ed-4dcc-b19a-e75731a2b47f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(122));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6a6e57ac-0995-4317-9a98-f52b0a3786a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(85));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b7a7571-1a41-4feb-9d88-134a97007fcc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9967));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6b897bf1-077d-47ed-b8d0-84abcc0d29a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9799));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6bac2be5-1291-45b4-a5d8-9d106c807e99",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(104));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6c073e2c-3343-4fb4-a948-86dc83eb0af9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(157));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fa2b4f4-b767-4ac6-b22d-e50edf9438ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(30));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "6fd73a11-7250-4291-b706-281c40efefcb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9777));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7038fb12-03a9-4000-b94e-a25b85deb8f4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(233));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7067fe71-d0d0-4adb-b4b8-ee4891a74a1c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9885));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "712b1ac6-a732-45c4-94b7-2dbeb5c904bc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(14));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7447366f-649c-450a-ae99-c759057f8d8e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9821));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74bd7e24-0ac0-4414-918c-b1de0ac2a2df",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(195));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "74be1b8d-a0b0-4788-89e3-9aa8476841fa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9823));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "761b9633-ff86-4626-9563-ae92284f60ea",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9854));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "766ce0e4-60a1-4a63-8dd4-771f30de7041",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(179));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "76fd81bd-c9e8-4348-9411-0323ca0ee333",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(69));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "798629fb-9751-4d2f-a8fd-fedfa6b57c02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(187));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7ab36f6d-9c59-4aff-97c9-e406fc9b5ea5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9901));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7acf8f89-addb-4b53-80c9-c6f798020a11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9947));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7b4f6627-3fc9-4aae-9a3d-fbae4463936e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9790));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7cd3b4c0-7252-4873-b986-71e313667e8b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(15));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d129827-9823-4468-88e3-e6ef5c05487f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(185));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7d4de95c-aef1-4a5c-b7e2-2f1d793c2862",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9875));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "7fb1b26c-5bf9-459b-b8d0-647929818374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9936));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "809d8ffc-8fdf-4d04-a3cd-a1489c440c92",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9840));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "810bbb00-b104-4b11-ab99-6f91b730029e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9903));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8173d005-a54a-4589-9775-ef8e7eb88a7d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(127));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "826eb83a-7fd4-42c0-9b0c-bb04961ccd12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(244));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82cf8fdc-69af-4764-9466-3feaeb0edd3e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(229));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "82f8f9bc-6d8f-4fc1-9626-c342dce64bbc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9983));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85af39fc-10c2-4016-867f-78bda66d6990",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(77));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "85cea852-e6fa-4e82-865b-0924b36713f2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(140));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8600635d-9264-4273-8906-75915a2396d0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(235));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86a47d55-c068-4cb0-b813-93234cc2600e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9878));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ec62c0-1363-43ca-b330-b2ee9df5c0a7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9958));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "86ffc244-8e3b-4a16-be97-47a5e372291e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(114));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "870cff3a-4782-475f-abde-062a33cd95a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(143));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "888b70f7-d256-4890-8dfd-31f0dd9864c3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9815));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "88e8459e-4d19-4386-bce5-84b901685bb5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(130));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "896e2b2d-b43a-4d2a-8eaa-59c1a6fb0762",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9849));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8a722b88-6df3-4664-ab61-390cd0e28645",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9980));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8b2bffe2-34d8-4ede-b2bd-16cfc25601d4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(83));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8bda082a-7153-41bc-b04a-bde246de6877",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(33));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c23e709-b61d-4cff-84e7-9fe23a1a2076",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(126));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c559d76-c84a-4144-b6b8-259d896a97cc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(208));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8c5fde29-0da8-44de-9dc3-769698d9fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9914));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8d0d1487-da7c-49b0-8812-0acb418f6d04",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(97));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8de2c19f-6dc2-461b-a5a1-8acf2e3eca2d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(59));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8e7e2151-0881-40e4-a21e-7536467e74a9",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(34));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "8ee1a5b3-784f-4fe9-a5b4-e0c86991c2a0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(79));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9020264a-3348-4e4b-97c1-3463074c5e5f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(256));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9104c7e9-0646-4d84-831b-72215d9393ef",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(168));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "910a7763-e37d-4d64-a0e2-61a5a76804dc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(18));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9122246d-052a-4105-8c7e-605ff07a45b2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(180));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "93e47b26-b2ed-44e3-b3f4-0519a8381d93",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(113));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "969d452a-fb83-4dde-a5e6-677d1f915912",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(161));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "96c9fe94-aa22-4efd-8526-1bf2f064ad48",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9922));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98857751-85f1-4921-b8a5-27f228ca295d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(64));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "98912a2c-bf1d-4cfa-a605-fc3c2b4c2cc4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(8));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99adbca1-5e84-4b5d-977e-c33e8c56a57a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(40));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "99b652b9-77db-4989-a8a9-d0cad2c61976",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(39));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9a1ef502-733c-40e6-8273-867971ae16d6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(96));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9bb4cc0f-b72b-4bce-969e-a442a2e47f07",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(131));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9d833dbe-06a0-482f-a841-c902c2ca4012",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(63));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9db7c84e-94fd-4e3f-8a9b-726b557a93eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9991));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9eabd2ca-d4c5-4c8b-8b56-e88d77ccd4bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(54));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9efe4fca-e34c-4824-9bc7-4bc31d10a7b7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9906));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "9f5f2a19-15bc-4057-a288-d1e88abfd16e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(70));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a071b643-8c74-4f62-86ca-2f506ff71c89",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9830));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a0f4efbb-56a3-4c5b-9bd5-4a0c15d29a61",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(162));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a12803da-c155-431b-973f-0fb18133495d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(82));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1872dcb-6d84-4185-aa18-508a8f2391bb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(230));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1c18a4a-70dd-4314-b74f-c0772966a8c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(192));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a1ead742-c2eb-44ae-85fe-bd97a79e5141",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9959));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2d10892-0ebf-4db4-80d9-5d240b325295",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(163));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2ec9b8a-7a25-41cb-89f3-0cf7e89410e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9834));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a2f9b791-952a-45a8-9306-14ff5bb6692e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(248));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a36dc640-54d2-4b02-a01b-11841693f736",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(74));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a3fd8116-9e1d-40c0-90b2-ba89eda95906",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(152));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4442552-fcbc-4767-9bcc-38c4172ce456",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9795));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a4c9eeff-59dc-446d-909d-27e90053284b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9926));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5a886da-209b-4bd3-a532-5e9ef25c7026",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9918));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(198));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a69bec07-9985-4829-aa84-f7b92ea5eaac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9791));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a6e0066b-0bf9-43f9-b4a3-f12bbeb6ddae",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9925));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a70a2e02-8a15-466e-b651-351845673b73",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9961));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a769be06-7364-42b4-ae43-f4e743dc7cd0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9984));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a8764e34-1e34-46ce-9597-3add5a802a03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(231));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "a9488c66-4662-457c-9cc0-c5d34298f352",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9896));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab02e0d7-8890-4385-8dcb-4421ca0c8bb6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9846));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ab363f5c-ce22-4689-9789-ff1bcc9e1d69",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9910));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "abc0945a-9294-4463-b11f-e881c4a57194",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9894));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "aca3ee92-8f53-4c95-bf6f-63b7c8273f51",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9971));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ad22c7f1-37a6-406f-9342-add77fd17234",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9897));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "addf303c-15d4-4456-8ff5-97e9fc568f1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9819));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af6f8587-30eb-4838-b1a5-efcb688390a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9807));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "af97e70f-98ed-455d-9db8-ff39d255e175",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9773));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b097c96c-048a-4f83-b9fe-706d5a3296db",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9881));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0a36dae-6181-4455-82ac-a919fff997be",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(118));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b0e9542f-d95e-4102-9fb4-118d1f821e2f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9766));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b1675b86-526f-4bdd-8106-2827be31c8cd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(106));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b17dd04c-c864-48d6-a6a2-aceed9e53a02",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(166));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4267088-0d92-40cb-a03f-9730aaa1fb8f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9898));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4c1b2ca-8bf2-4aa7-91f6-af2ca4a164d3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(219));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b4cc6cd5-16c1-4e65-8dfc-647d19f2560e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9912));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b60b2054-fe4d-4dfb-87d7-862e48faa272",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9828));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6891273-10bd-47ca-a139-27955175dfee",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(197));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b69f3d89-1aea-4f5b-89a7-84a90a5c707d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(236));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b6bfa026-b6ed-4a81-b4c2-636ef1b81376",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9803));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b760bf11-5ee0-4f02-b476-a95b233d3812",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(105));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b7b23326-9dc3-4fa2-b6b6-c296be64caa0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(7));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b91fd86f-ea7f-467e-ad24-25ebb10dfd13",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9770));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b94d575c-d197-4a2b-8b05-961f549af20d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(45));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b962aa74-832a-4417-9941-100f0328322f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(51));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9f6f25c-5573-4555-bc54-a5131d4a2b4f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9824));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "b9fbad4e-cf40-48ca-8a0c-0a468ddd27e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(78));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ba248d16-acf6-4294-a1da-7bd81bf5e967",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9811));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb45a351-8caf-454c-acac-8afe9d2d7374",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9996));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bb72eb62-6f41-4c7d-aad4-93941e42dd68",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9817));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bbeec1bf-5326-4616-8653-5ec68c4fb37b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9784));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bcd6600f-ee89-4185-87c2-a48afb18070a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(22));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd35fa6e-7868-4e62-ad87-79829aedb100",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9844));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bd4c7f1d-1f1f-4356-ac15-e4868edff5a6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(133));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bde7aff0-c7b5-48fc-9180-d3314fe0699f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9962));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0d288f-4a4d-4070-af7c-2256cb9e5586",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(238));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "bf0f4bf1-696e-4cc1-b89a-2531aa82e7e2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(178));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c50b46-e3fe-4c79-8352-0a211e7a0870",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9993));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c0c80075-e62c-44cf-8ad7-0f9e4c6de40d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9902));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c312bba1-24b3-4561-ac77-e6845526a5b5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(73));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3179d21-1741-4d68-9281-62cb8eabf58b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(250));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3ab8002-f2d1-416e-bf81-35eec16134a3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9975));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e0861d-1921-4971-84e4-7cf829ebbb37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(28));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c3e2a961-1479-4fd4-8f36-cd299e496d4e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(92));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c4c0a113-144d-4f61-8349-edbf046fb32a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(245));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7119e78-24e6-401a-b199-3b6845df17f3",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9837));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c74e9cd9-8e2c-4fba-b981-384224c57174",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(232));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7834aa3-42f4-47eb-94b0-61a7c71f119e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9957));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c7c0c3bf-4646-4fee-82d3-816014e51d11",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9835));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c86690f4-9702-44cb-a900-129d2e3ad99f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9768));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8adafdb-7d5e-47cc-8bd0-267f50224cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9966));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c8dd9cd1-9fb1-4036-8527-01d4df8bbeed",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(75));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c9182801-e964-42b5-b8d2-bdc6396d7677",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(42));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c932eb6c-34be-469b-b2e3-b298d08b8e86",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(98));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "c935236b-6cb3-493c-874d-09b5d9961c34",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9851));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca1d73fb-7574-4c2e-bf0d-6e020b064b28",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9886));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca421101-f4c9-456f-989d-2ed5cfc87da4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(181));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ca5e28a0-fb51-4972-8059-300ef3c3444b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(72));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cbbb3345-ee8a-4b55-8eb3-8f01e78f09c4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(37));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cc8f4a1b-c7fd-4e48-adf1-8b8113e6419f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9973));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd2d914e-5873-4356-9989-1cd93c1fb04a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(89));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cd4c6e36-0fbe-417c-a83d-737defa6d36d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(95));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "cdab4e47-7b03-4833-89d5-fe602a9e9558",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9802));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d02ff2fc-a130-4060-bef3-ed1a27f0a94e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(226));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0722930-e054-433b-9fc3-2928b8e06ace",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9780));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d0de30f9-c6ed-46a2-a1a6-4826156f8bf1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(220));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d15202ef-72f5-4a8a-b7d0-ab7f1d8b14f1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(110));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d1559be9-4fae-4855-801b-d088886d4f3a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9942));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d2711937-d17e-4be6-bad9-d5532a34288b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(112));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d3b5d0af-297a-42b0-aade-279a51f3542e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(48));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d416f8d5-26a2-4c4d-87ba-2c5acecccc77",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(151));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d48dd083-5901-47bd-98c7-72fd01c7e481",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(191));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d50cb6e4-3eea-4421-adaf-fb11e9f1def6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(10));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5613ac9-0c78-4869-9bf8-66877adfc306",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(221));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d578e99d-086c-4f8c-af98-6c823d605d5b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9941));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d5a19b81-af8e-4539-9ce5-a487a929810b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9812));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d62efc95-bc43-41d1-bb0e-417003349616",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(207));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d81feb9d-338b-49aa-9f10-9581a6a24cd6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(249));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d88a15c6-dd91-4337-9585-a45a331b6c87",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(108));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d89d7946-6753-45e7-b094-5d050a265d1e",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(186));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "d9c90e83-72b6-460f-8e07-3337ab878eaf",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(169));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa3c78e-a3be-4894-b685-c3f41ca92003",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(80));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "daa8dd3e-41e9-45b4-9651-19bd9796b4aa",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9841));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db894224-e132-4289-9c3b-b3d629204850",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9916));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "db9950ed-5ae4-481d-9541-a9cf957da348",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9899));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbf166c8-91b7-48c3-999b-cba45fdbaec1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9862));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dbfb7b60-b951-49d9-a194-f13cdd80fd1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(242));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "dc24ecb6-993e-4f3d-b89a-35378cd261d5",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(167));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "de2ea13d-b216-41d2-b341-60182487738b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9890));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "decc1764-3970-4b82-9c01-d8380b19d313",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9825));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "defb4623-4df5-4b58-84e3-fe8016598539",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(5));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "df350e74-0d9f-4b51-a42c-c6614ce3558b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(173));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e0abceff-17f3-4244-8887-7a7a27e64a12",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(3));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e32ad0d7-cf89-4e1f-81e7-d331d534eb1d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(147));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e3c66d98-7589-4e69-8536-a41a79d713c7",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(88));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e53e3f4f-185d-4b53-a54f-03ada71e1d38",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9805));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e670fc37-95a1-4888-8d87-7f3dac3fbdc0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9850));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e6dfecee-1ffe-4a36-ac59-c183606b6218",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9779));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e72f4279-4d1c-49ea-9ccb-9cc8027726ac",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9917));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e77c09bd-4195-44bd-a8ff-e617ba5952fc",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9987));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e7b3822e-3e00-4717-8f49-4a924d1f1af6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(153));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e876b05c-3d86-4421-a4e0-e857933f11c2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9928));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e8ad636f-f434-4649-8c22-728dd28d9814",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(171));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "e98a1b74-7f7a-4add-a282-199dc34120e4",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(87));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ea488074-4c36-47f4-b664-e9cda4250dde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(243));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eb9d8d41-727d-45b1-94a3-aac67fbeaabb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9772));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ec7caaac-3acc-4e33-b44f-d9246988fe17",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9883));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ed14e83d-f3f1-4076-9ae5-4d8e49228d26",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(55));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "eda99703-0611-4cd9-8f29-4c1e83978b37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9816));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef408df0-6877-4fea-a517-84ca2e67b019",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9945));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ef429ea8-025b-4475-b348-17fab65ee9a2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9870));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "efd1e2db-9b36-4ec8-8520-58d0ca85abde",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9976));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f0dd3651-99f3-4bac-abb3-8492b32d71ba",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(209));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1b3f4cb-d222-44ad-a6cf-1ab3089cdd97",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9935));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f1c88c2d-8433-471b-abf9-b59f9a530e37",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9831));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f25c6022-40d9-4039-8d38-8b8bbebba68d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(124));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f351bbc7-d6bd-4356-9824-ba4e4b4789eb",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9852));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f372726b-105f-4af7-bf1d-edad558a7c91",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(146));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f3ee82c6-eb40-47cc-8738-4aab57b2200c",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(255));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f4fff34e-0c3f-4044-8aa0-ab0483ac7304",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(246));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f7021be2-2cc2-4720-bd6b-a9e534dd241a",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(224));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f743b312-b58a-4b4b-a2c4-ceaff31fdd15",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9964));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f778be19-5ee8-4282-b842-b05f4ab343f6",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(116));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "f8ae5b26-dbb2-4baa-b052-93fb19488b00",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9861));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "faa67f45-3870-400c-add8-841489087883",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9930));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fadecfd0-03cd-462b-be1f-6c68cc9d2659",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9940));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fc7809c8-a01f-428a-ace9-af8ec9ba3a7b",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(47));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fcd352df-4c09-403d-b320-ad20518faf0f",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9999));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe07bf5c-7ec9-4b18-a66d-fd71becdeedd",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9775));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "fe1a49f9-36a1-477b-be87-edb573326e03",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(257));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff269c57-2916-4536-a976-02864ffe9a5d",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(205));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ff519d70-6019-46e1-b0b4-277a90b832e0",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(50));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffa08eea-3cf4-4d5a-8d1e-c4581b562d74",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 490, DateTimeKind.Local).AddTicks(9949));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "ffe0ed0b-2a3b-4dac-8b38-fc0b7ebd7a14",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 10, 20, 3, 11, 491, DateTimeKind.Local).AddTicks(57));

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "Id", "Cons", "Date", "ProductId", "Pros", "Rate", "Review", "UserId" },
                values: new object[,]
                {
                    { "006746be-bf9f-4d95-ac6b-825d03576c3d", "Hefty price, heavy to carry.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5737), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Superb camera, powerful performance.", 5, "Stunning device! Camera quality is unmatched.", "10" },
                    { "01f27de2-b5df-48b9-97ce-9e4599678601", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5736), "b6891273-10bd-47ca-a139-27955175dfee", "", 2, "", "9" },
                    { "0487ad2d-9c19-46d2-a5ee-b18b63d1c780", "Average camera quality.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5746), "50f7e18f-a606-4935-95aa-2679cfa37999", "Sleek design, good display.", 1, "Solid phone, but expected more for the price.", "7" },
                    { "0e837d17-6944-4dc0-ba15-0d95f24285d4", "Slightly bulky, UI can be overwhelming.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5740), "690d1d22-2bbd-4f27-9549-58862b320685", "Fantastic camera, gorgeous display.", 2, "Exceptional features, especially the camera setup.", "2" },
                    { "27bd8ad8-8814-4e97-90c5-527104673dd0", "Slightly expensive.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5742), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Outstanding camera, clean UI.", 5, "Incredible camera capabilities and a smooth user experience.", "4" },
                    { "43db13a5-a2be-45e8-b390-f5c44a675f9a", "Mediocre build quality, average speakers.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5725), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Affordable price, decent performance.", 3, "Decent laptop for everyday use. Gets the job done without any major issues.", "2" },
                    { "533768e2-8b81-422d-a9f3-4bca4aa96a21", "Poor battery optimization.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5744), "5f0f89ae-2136-4509-a334-951cfe495cd7", "Good performance, nice design.", 3, "Disappointing battery life despite the promising features.", "5" },
                    { "53d2ea40-99ca-429e-9c51-37c01b225464", "Average battery life.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5739), "a5bbfafe-f8b2-4b4e-bfb9-dc3947fd20bd", "Great display, smooth interface.", 4, "Impressive phone, but the battery drains quickly.", "1" },
                    { "5869b0b1-0431-4e19-8e06-f9c90327aaeb", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5754), "f0dd3651-99f3-4bac-abb3-8492b32d71ba", "", 4, "", "3" },
                    { "58c3f440-41bc-4833-9146-c3bbf23c859f", "High price tag.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5733), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Smooth performance, sleek design.", 4, "Top-notch quality as expected from Apple. Love the user experience.", "7" },
                    { "677a6a91-dfdf-42d3-b24b-9a189295e553", "Expensive, average battery life.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5741), "690d1d22-2bbd-4f27-9549-58862b320685", "Nice display, powerful processor.", 3, "Good phone, but not worth the high price tag.", "3" },
                    { "6e40e566-7e46-4a13-b12b-2970c8705c08", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5750), "61a20a3e-5e8d-47e6-8e2e-6af2b4d4d5ab", "", 5, "", "10" },
                    { "6fe84d59-528f-4965-ae78-0b5a47f46914", "Overheats quickly, noisy fan.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5730), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Good display, responsive keyboard.", 3, "Had high hopes, but disappointed with the heating issues.", "5" },
                    { "7db5d109-7e2e-4244-b8cc-12702feec3e6", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5753), "8c559d76-c84a-4144-b6b8-259d896a97cc", "", 1, "", "2" },
                    { "814a28b0-7942-44ce-bdc2-38492096b70a", "Average display quality, a bit heavy to carry around.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5714), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "Excellent performance, good battery life, sleek design.", 4, "Great laptop overall. It runs smoothly and handles multitasking effortlessly.", "1" },
                    { "9c7b63ed-b380-459b-96f0-2cae428619aa", "Pricey, limited ports.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5732), "74bd7e24-0ac0-4414-918c-b1de0ac2a2df", "Superb performance, stunning display, long-lasting battery.", 1, "Absolute powerhouse! Great for creative work and heavy tasks.", "6" },
                    { "a2a84fe8-610e-4115-8271-98afc35db25d", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5749), "ff269c57-2916-4536-a976-02864ffe9a5d", "", 4, "", "9" },
                    { "a6ec2c11-61fd-46da-a34a-4a89b226f723", "Average battery life.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5728), "3a97f708-2be7-498a-8d59-ada88e5e7c1b", "Sleek design, fast processing, lightweight.", 5, "Love the design and performance. Works like a charm!", "4" },
                    { "ac31e63c-f08c-46c0-9d7a-656bcf69d770", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5735), "1cdfeeae-13d4-40d4-9a70-60916ea4ba17", "", 5, "", "8" },
                    { "afd3522b-ded7-4090-861a-ade478b492fe", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5751), "d62efc95-bc43-41d1-bb0e-417003349616", "", 2, "", "1" },
                    { "be0249e5-b1e3-4bef-9375-639d26d14826", "", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5748), "4878b254-2d40-4128-b9ac-a4109ea1b1ca", "", 2, "", "8" },
                    { "d00ffd81-da11-4b3f-94f8-6f86af35b677", "Laggy performance, below-average battery.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5727), "a1c18a4a-70dd-4314-b74f-c0772966a8c7", "", 2, "Not impressed with this model. Slow processing and poor battery life.", "3" },
                    { "ef5a58b7-1a62-4d9c-996e-ae9fac54d009", "Lacks some camera finesse.", new DateTime(2023, 12, 10, 20, 3, 11, 496, DateTimeKind.Local).AddTicks(5745), "50f7e18f-a606-4935-95aa-2679cfa37999", "Speedy performance, smooth interface.", 4, "Fast and reliable. Great performance overall.", "6" }
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "1",
                column: "Password",
                value: "Viltrumite123!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "10",
                column: "Password",
                value: "MilevskaPass456!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "11",
                column: "Password",
                value: "IlkovskaPass123!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "12",
                column: "Password",
                value: "StoimenovaPass@123");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "13",
                column: "Password",
                value: "CvetkovskiPass123!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "14",
                column: "Password",
                value: "KostovAdmin123!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "15",
                column: "Password",
                value: "BogdanovskaPass@123");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "2",
                column: "Password",
                value: "GalacticForce@123");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "3",
                column: "Password",
                value: "SecureAdminPass123!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "4",
                column: "Password",
                value: "MegaAdminPass789!!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "5",
                column: "Password",
                value: "SpeedyCourier@123");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "6",
                column: "Password",
                value: "FlameCourier456!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "7",
                column: "Password",
                value: "Sarafiloski123!");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "8",
                column: "Password",
                value: "RistovskiPass@123");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "9",
                column: "Password",
                value: "KuzmanovskaPass123!");
        }
    }
}
