using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Test.Migrations
{
    public partial class ProgressImplementation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ObjectWeight",
                table: "Tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProgressId",
                table: "Tasks",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Progresses",
                columns: table => new
                {
                    ProgressId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Progresses", x => x.ProgressId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_ProgressId",
                table: "Tasks",
                column: "ProgressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Progresses_ProgressId",
                table: "Tasks",
                column: "ProgressId",
                principalTable: "Progresses",
                principalColumn: "ProgressId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Progresses_ProgressId",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Progresses");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_ProgressId",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "ObjectWeight",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "ProgressId",
                table: "Tasks");
        }
    }
}
