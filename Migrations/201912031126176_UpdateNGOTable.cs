namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateNGOTable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Ngo", "Ngo_Id", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Ngo", "Ngo_Id", c => c.Int(nullable: false));
        }
    }
}
