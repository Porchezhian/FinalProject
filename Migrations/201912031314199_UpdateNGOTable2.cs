namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateNGOTable2 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Requestslist", "ngo_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int());
            CreateIndex("dbo.Requestslist", "ngo_Id");
        }
    }
}
