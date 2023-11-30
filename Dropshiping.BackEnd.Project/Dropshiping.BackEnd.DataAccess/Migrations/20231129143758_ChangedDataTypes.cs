using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class ChangedDataTypes : Migration
    {
        //
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<long>(
                name: "CardNumber",
                table: "Orders",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "CardNumber", "PhoneNumber", "PurchasedTime" },
                values: new object[] { 0L, "123123", new DateTime(2023, 11, 29, 15, 37, 58, 507, DateTimeKind.Local).AddTicks(149) });

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "CardNumber", "PhoneNumber", "PurchasedTime" },
                values: new object[] { 0L, "123123", new DateTime(2023, 11, 29, 15, 37, 58, 507, DateTimeKind.Local).AddTicks(163) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 29, 15, 37, 58, 507, DateTimeKind.Local).AddTicks(11));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 29, 15, 37, 58, 507, DateTimeKind.Local).AddTicks(60));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 11, 29, 15, 37, 58, 507, DateTimeKind.Local).AddTicks(245));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 11, 29, 15, 37, 58, 507, DateTimeKind.Local).AddTicks(260));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PhoneNumber",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CardNumber",
                table: "Orders",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "CardNumber", "PhoneNumber", "PurchasedTime" },
                values: new object[] { 0, 123123, new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3934) });

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "CardNumber", "PhoneNumber", "PurchasedTime" },
                values: new object[] { 0, 123123, new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3980) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3315));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3433));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(4140));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(4181));
        }
    }
}
