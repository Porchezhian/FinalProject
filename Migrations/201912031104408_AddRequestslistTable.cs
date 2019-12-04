namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRequestslistTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Requestslist",
                c => new
                    {
                        RequestId = c.Int(nullable: false, identity: true),
                        Request_Title = c.String(),
                        Ngo_Name = c.String(),
                        Number_of_items_Required = c.Int(nullable: false),
                        category = c.String(),
                        ngos_Id = c.Int(),
                    })
                .PrimaryKey(t => t.RequestId)
                .ForeignKey("dbo.Ngo", t => t.ngos_Id)
                .Index(t => t.ngos_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Requestslist", "ngos_Id", "dbo.Ngo");
            DropIndex("dbo.Requestslist", new[] { "ngos_Id" });
            DropTable("dbo.Requestslist");
        }
    }
}
