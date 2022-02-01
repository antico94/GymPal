using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Test.Migrations.User
{
    public partial class ChangedUserProgress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Progress_UserProgresses_UserProgressUserId",
                table: "Progress");

            migrationBuilder.DropForeignKey(
                name: "FK_UserProgresses_Users_UserId1",
                table: "UserProgresses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserProgresses",
                table: "UserProgresses");

            migrationBuilder.DropIndex(
                name: "IX_UserProgresses_UserId1",
                table: "UserProgresses");

            migrationBuilder.RenameColumn(
                name: "UserId1",
                table: "UserProgresses",
                newName: "UserProgressId");

            migrationBuilder.RenameColumn(
                name: "UserProgressUserId",
                table: "Progress",
                newName: "UserProgressId");

            migrationBuilder.RenameIndex(
                name: "IX_Progress_UserProgressUserId",
                table: "Progress",
                newName: "IX_Progress_UserProgressId");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserProgresses",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<int>(
                name: "UserProgressId",
                table: "UserProgresses",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserProgresses",
                table: "UserProgresses",
                column: "UserProgressId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProgresses_UserId",
                table: "UserProgresses",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Progress_UserProgresses_UserProgressId",
                table: "Progress",
                column: "UserProgressId",
                principalTable: "UserProgresses",
                principalColumn: "UserProgressId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProgresses_Users_UserId",
                table: "UserProgresses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Progress_UserProgresses_UserProgressId",
                table: "Progress");

            migrationBuilder.DropForeignKey(
                name: "FK_UserProgresses_Users_UserId",
                table: "UserProgresses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserProgresses",
                table: "UserProgresses");

            migrationBuilder.DropIndex(
                name: "IX_UserProgresses_UserId",
                table: "UserProgresses");

            migrationBuilder.RenameColumn(
                name: "UserProgressId",
                table: "UserProgresses",
                newName: "UserId1");

            migrationBuilder.RenameColumn(
                name: "UserProgressId",
                table: "Progress",
                newName: "UserProgressUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Progress_UserProgressId",
                table: "Progress",
                newName: "IX_Progress_UserProgressUserId");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserProgresses",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<int>(
                name: "UserId1",
                table: "UserProgresses",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserProgresses",
                table: "UserProgresses",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProgresses_UserId1",
                table: "UserProgresses",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Progress_UserProgresses_UserProgressUserId",
                table: "Progress",
                column: "UserProgressUserId",
                principalTable: "UserProgresses",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProgresses_Users_UserId1",
                table: "UserProgresses",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
