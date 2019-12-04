namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNGOTable1 : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Ngolist", newName: "Ngo");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Ngo", newName: "Ngolist");
        }
    }
}
