using BTD6_Companion.Server.Models;
using System.Diagnostics.CodeAnalysis;

namespace BTD6_Companion.Models
{
    public class MonkeyModel
    {
        // Universal Attributes - See UpgradeModel for specific attributes
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required string Category { get; set; }
        public double Debut { get; set; }
        public char? Hotkey { get; set; }
        public List<UpgradeModel> Upgrades { get; set; }

        [SetsRequiredMembers]
        public MonkeyModel(int id, string name, string category, double debut, char hotkey, List<UpgradeModel> upgrades)
        {
            Id = id;
            Name = name;
            Category = category;
            Debut = debut;
            Hotkey = hotkey;
            Upgrades = upgrades;
        }
    }
}

