using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dropshiping.BackEnd.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UserCard2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3934));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 26, 20, 54, 35, 983, DateTimeKind.Local).AddTicks(3980));

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

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "1",
                column: "PhoneNumber",
                value: null);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PhoneNumber",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "1",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 26, 19, 0, 11, 754, DateTimeKind.Local).AddTicks(3944));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: "2",
                column: "PurchasedTime",
                value: new DateTime(2023, 11, 26, 19, 0, 11, 754, DateTimeKind.Local).AddTicks(3997));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "1",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 26, 19, 0, 11, 754, DateTimeKind.Local).AddTicks(3454));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: "2",
                column: "DateOfCreation",
                value: new DateTime(2023, 11, 26, 19, 0, 11, 754, DateTimeKind.Local).AddTicks(3565));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "1",
                column: "Date",
                value: new DateTime(2023, 11, 26, 19, 0, 11, 754, DateTimeKind.Local).AddTicks(4153));

            migrationBuilder.UpdateData(
                table: "Ratings",
                keyColumn: "Id",
                keyValue: "2",
                column: "Date",
                value: new DateTime(2023, 11, 26, 19, 0, 11, 754, DateTimeKind.Local).AddTicks(4193));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "1",
                column: "PhoneNumber",
                value: 0);
        }
    }
}
