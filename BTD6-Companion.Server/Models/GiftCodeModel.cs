namespace BTD6_Companion.Server.Models
{
    public class GiftCodeModel
    {
        public int Id { get; set; } required
        public string Name { get; set; } required
        public string Code { get; set; }
        public string Source { get; set; }
        public DateOnly Available { get; set; }
        public DateOnly Expired { get; set; }
        
        // Reward contents
        public int MM { get; set; }
        public List<PowerModel> Powers { get; set; }
        public List<PowerModel> Instas { get; set; }
    }
}