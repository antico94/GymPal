using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Test.Migrations
{
    public partial class WorkoutsInGymTaks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Workouts_WorkoutId",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_WorkoutId",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "WorkoutId",
                table: "Tasks");

            migrationBuilder.CreateTable(
                name: "GymTaskWorkout",
                columns: table => new
                {
                    GymTasksId = table.Column<int>(type: "int", nullable: false),
                    UsedInWorkoutsWorkoutId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymTaskWorkout", x => new { x.GymTasksId, x.UsedInWorkoutsWorkoutId });
                    table.ForeignKey(
                        name: "FK_GymTaskWorkout_Tasks_GymTasksId",
                        column: x => x.GymTasksId,
                        principalTable: "Tasks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GymTaskWorkout_Workouts_UsedInWorkoutsWorkoutId",
                        column: x => x.UsedInWorkoutsWorkoutId,
                        principalTable: "Workouts",
                        principalColumn: "WorkoutId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GymTaskWorkout_UsedInWorkoutsWorkoutId",
                table: "GymTaskWorkout",
                column: "UsedInWorkoutsWorkoutId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GymTaskWorkout");

            migrationBuilder.AddColumn<int>(
                name: "WorkoutId",
                table: "Tasks",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_WorkoutId",
                table: "Tasks",
                column: "WorkoutId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Workouts_WorkoutId",
                table: "Tasks",
                column: "WorkoutId",
                principalTable: "Workouts",
                principalColumn: "WorkoutId");
        }
    }
}
