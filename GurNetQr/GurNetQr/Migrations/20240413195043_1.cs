using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GurNetQr.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dormintory_number = table.Column<int>(type: "int", nullable: false),
                    room_number = table.Column<int>(type: "int", nullable: false),
                    phone_number = table.Column<long>(type: "bigint", nullable: false),
                    first_name = table.Column<string>(type: "varchar(50)", nullable: false),
                    last_name = table.Column<string>(type: "varchar(50)", nullable: false),
                    midle_name = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    date = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    identification_code = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
