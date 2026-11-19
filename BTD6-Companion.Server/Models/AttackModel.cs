namespace BTD6_Companion.Server.Models
{
    public class AttackModel
    {
        // Individual attack attributes
        public int Id { get; set; } required
        public int UpgradeId { get; set; } required
        public string Name { get; set; } required
        public int Damage { get; set; }
        public double Cooldown { get; set; }
        public string Description { get; set; }
        public string DamageType { get; set; }
        public int Speed { get; set; }
        public double Lifespan { get; set; }
        public double Range { get; set; }
        public int Radius { get; set; }
        public bool hitCamo { get; set; }
        public string? ImgRef { get; set; }
    }
}