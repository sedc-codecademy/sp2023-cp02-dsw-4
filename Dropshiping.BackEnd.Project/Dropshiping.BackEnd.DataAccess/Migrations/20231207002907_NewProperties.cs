using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class NewProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Icon",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: "1",
                column: "Icon",
                value: "Icon");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 7, 1, 29, 7, 567, DateTimeKind.Local).AddTicks(4061));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 7, 1, 29, 7, 567, DateTimeKind.Local).AddTicks(4146));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 7, 1, 29, 7, 567, DateTimeKind.Local).AddTicks(3862));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 7, 1, 29, 7, 567, DateTimeKind.Local).AddTicks(3924));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 12, 7, 1, 29, 7, 567, DateTimeKind.Local).AddTicks(4234));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 12, 7, 1, 29, 7, 567, DateTimeKind.Local).AddTicks(4259));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Icon",
                table: "Categories");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 4, 16, 38, 9, 768, DateTimeKind.Local).AddTicks(5726));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 12, 4, 16, 38, 9, 768, DateTimeKind.Local).AddTicks(5745));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 4, 16, 38, 9, 768, DateTimeKind.Local).AddTicks(5521));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 12, 4, 16, 38, 9, 768, DateTimeKind.Local).AddTicks(5588));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 12, 4, 16, 38, 9, 768, DateTimeKind.Local).AddTicks(5810));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 12, 4, 16, 38, 9, 768, DateTimeKind.Local).AddTicks(5828));
        }
    }
}
