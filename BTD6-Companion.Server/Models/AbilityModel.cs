namespace BTD6_Companion.Server.Models
{
    public class AbilityModel
    {
        public int Id { get; set; } required
        public string Name { get; set; } required
        public int Damage { get; set; }
        public double Duration { get; set; }
        public string Description { get; set; }
        public int Income { get; set; }
        public double Cooldown { get; set; }
        public bool hitCamo { get; set; }
        public int maxUsesPerRound { get; set; }
        public string? ImgRef { get; set; }
    }
}
