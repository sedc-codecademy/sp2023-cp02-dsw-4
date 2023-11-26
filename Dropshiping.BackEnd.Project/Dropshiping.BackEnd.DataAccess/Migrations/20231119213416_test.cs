using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class test : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "CardNumber",
                table: "Cards",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "Cards",
                columns: new[] { "Id", "CardHolder", "CardNumber", "CardStatus", "CardType", "ExpirationDate", "SecurityCode", "UserId" },
                values: new object[] { "1", "Ana B", 4111111111111111L, 1, 1, new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8650), 123, "1" });

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8421));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8451));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8043));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8117));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8559));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 11, 19, 22, 34, 16, 36, DateTimeKind.Local).AddTicks(8584));

            migrationBuilder.InsertData(
                table: "UserOrders",
                columns: new[] { "Id", "OrderId", "UserId" },
                values: new object[,]
                {
                    { "1", "1", "1" },
                    { "2", "2", "1" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cards",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "UserOrders",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "UserOrders",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.AlterColumn<int>(
                name: "CardNumber",
                table: "Cards",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 4, 0, 1, 30, 955, DateTimeKind.Local).AddTicks(5012));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 4, 0, 1, 30, 955, DateTimeKind.Local).AddTicks(5027));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 4, 0, 1, 30, 955, DateTimeKind.Local).AddTicks(4863));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 4, 0, 1, 30, 955, DateTimeKind.Local).AddTicks(4919));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 11, 4, 0, 1, 30, 955, DateTimeKind.Local).AddTicks(5113));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 11, 4, 0, 1, 30, 955, DateTimeKind.Local).AddTicks(5126));
        }
    }
}
