using BTD6_Companion.Models;
using BTD6_Companion.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BTD6_Companion.Server.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class MonkeyController : ControllerBase
	{
        // TODO Create database solution with CRUD operations

        // Temp testing solution includes 1 monkey from each class

        private static readonly IEnumerable<MonkeyModel> Items = new[]
        {
            new MonkeyModel(1, "Dart Monkey", "Primary", 1.0, 'q', new List<UpgradeModel>()),
            new MonkeyModel(2, "Sniper Monkey", "Military", 1.0, 'z', new List<UpgradeModel>()),
            new MonkeyModel(3, "Wizard Monkey", "Magic", 1.0, 'a', new List<UpgradeModel>()),
            new MonkeyModel(4, "Engineer Monkey", "Support", 10.0, 'l', new List<UpgradeModel>())
        };

        [HttpGet("{Id:int}")]
        public MonkeyModel[] Get(int Id)
        {
            MonkeyModel[] items = Items.Where(i => i.Id == Id).ToArray();
            return items;
        }
    }
}
