import { MenuManager } from "github.com/octarine-public/wrapper/wrapper/Menu"
import { EventsSDK } from "github.com/octarine-public/wrapper/index"
import { LocalPlayer } from "github.com/octarine-public/wrapper/wrapper/Objects/Base/Entity"
import { Vector2 } from "github.com/octarine-public/wrapper/wrapper/Base/Vector2"

// Create main menu
const mainMenu = MenuManager.AddEntry("Kill Steal Script")
const toggleButton = mainMenu.AddToggle("Enable Kill Steal", false, "K")


const VISIBLE_TEXT = "VISIBLE BY ENEMY!"
const TEXT_POSITION = new Vector2(400, 100)

EventsSDK.on("Draw", () => {
	const myHero = LocalPlayer?.Hero
	if (myHero === undefined) {
		return
	}

	// Check if hero is visible by enemies
	if (myHero.IsVisibleForEnemies_) {
		console.log("Visible by enemies!")
	}

	// Kill steal logic
	if (toggleButton.value) {
		console.log("Kill steal is enabled!")
		// console.log(`Using stun: ${useStun.value}`)
		// console.log(`Using nuke: ${useNuke.value}`)
		// console.log(`HP threshold: ${minHealth.value}`)
		// Your kill steal logic here
	}
})
