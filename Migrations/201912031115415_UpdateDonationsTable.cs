namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateDonationsTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Donationslist",
                c => new
                    {
                        DonationId = c.Int(nullable: false, identity: true),
                        Request_Id = c.Int(nullable: false),
                        Request_Title = c.String(),
                        Ngo_Name = c.String(),
                        Number_of_items_Required = c.Int(nullable: false),
                        Number_of_items_Donated = c.Int(nullable: false),
                        category = c.String(),
                        ngo_Id = c.Int(),
                        user_Id = c.Int(),
                    })
                .PrimaryKey(t => t.DonationId)
                .ForeignKey("dbo.Ngo", t => t.ngo_Id)
                .ForeignKey("dbo.Users", t => t.user_Id)
                .Index(t => t.ngo_Id)
                .Index(t => t.user_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Donationslist", "user_Id", "dbo.Users");
            DropForeignKey("dbo.Donationslist", "ngo_Id", "dbo.Ngo");
            DropIndex("dbo.Donationslist", new[] { "user_Id" });
            DropIndex("dbo.Donationslist", new[] { "ngo_Id" });
            DropTable("dbo.Donationslist");
        }
    }
}
