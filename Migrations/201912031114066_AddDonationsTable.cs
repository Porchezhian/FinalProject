namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDonationsTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Requestslist", name: "ngos_Id", newName: "ngo_Id");
            RenameIndex(table: "dbo.Requestslist", name: "IX_ngos_Id", newName: "IX_ngo_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Requestslist", name: "IX_ngo_Id", newName: "IX_ngos_Id");
            RenameColumn(table: "dbo.Requestslist", name: "ngo_Id", newName: "ngos_Id");
        }
    }
}
