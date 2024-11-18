// import { Color } from "github.com/octarine-public/wrapper/dist/Base/Color"
import { EventsSDK } from "github.com/octarine-public/wrapper/index"
import { LocalPlayer } from "github.com/octarine-public/wrapper/wrapper/Objects/Base/Entity"
import { Vector2 } from "github.com/octarine-public/wrapper/wrapper/Base/Vector2"

const VISIBLE_TEXT = "VISIBLE BY ENEMY!"
// const TEXT_COLOR = new Color(255, 0, 0, 255) // Red color
const TEXT_POSITION = new Vector2(400, 100) // Position on screen

EventsSDK.on("Draw", () => {
	const myHero = LocalPlayer?.Hero
	if (myHero === undefined) {
		return
	}

	// Check if hero is visible by enemies
	if (myHero.IsVisibleForEnemies_) {
		// Draw warning text on screen
		console.log("Visible by enemies!")
		// myHero.DrawText(TEXT_POSITION, VISIBLE_TEXT, TEXT_COLOR)
	}
})
