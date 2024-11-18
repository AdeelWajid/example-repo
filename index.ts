import { MenuManager } from "github.com/octarine-public/wrapper/wrapper/Menu"
import { EventsSDK } from "github.com/octarine-public/wrapper/index"
import { LocalPlayer } from "github.com/octarine-public/wrapper/wrapper/Objects/Base/Entity"
import { Vector2 } from "github.com/octarine-public/wrapper/wrapper/Base/Vector2"

let toggleButton: any

// Create main menu
EventsSDK.on("GameStarted", () => {
	if (!MenuManager) {
		return
	}
	
	
})

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
	if(MenuManager.IsOpen){
		const mainMenu = MenuManager.AddEntry("Kill Steal Script")
	toggleButton = mainMenu.AddToggle("Enable Kill Steal", false, "K")
	if (MenuManager && toggleButton?.value) {
		console.log("Kill steal is enabled!")
	}
	}
	// Kill steal logic
	
})
