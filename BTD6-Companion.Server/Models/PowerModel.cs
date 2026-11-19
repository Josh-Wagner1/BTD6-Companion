namespace BTD6_Companion.Server.Models
{
    public class PowerModel
    {
        public int Id { get; set; } required
        public string Name { get; set; } required
        public bool ProStatus {  get; set; }
        public int Cost { get; set; }
        public int Damage { get; set; }
        public int Income { get; set; }
        public int Footprint { get; set; }
        public int Range { get; set; }
        public string Description { get; set; }
    }
}
