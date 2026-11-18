namespace BTD6_Companion.Server.Models
{
    public class UpgradeModel
    {
        // Upgrade attributes - Attacks found in AttackModel
        public int Id { get; set; } required
        public int MonkeyId { get; set; } required
        public string Name { get; set; } required
        public string Path { get; set; } // e.g. 5-2-0
        public double Range { get; set; } // In tiles
        public double FootprintRadius { get; set; } // In tiles
        public string? ImgRef { get; set; }


        // TODO
        // Attacks

    }
}
