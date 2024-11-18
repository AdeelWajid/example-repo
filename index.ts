import { EventsSDK } from "../../octarine-public/wrapper/index"
import { Color } from "../../octarine-public/wrapper/wrapper/Base/Color"
import { LocalPlayer } from "../../octarine-public/wrapper/wrapper/Objects/Base/Entity"
import { Vector2 } from "../../octarine-public/wrapper/wrapper/Base/Vector2"

const VISIBLE_TEXT = "VISIBLE BY ENEMY!"
const TEXT_COLOR = Color.Red // Red color
const TEXT_POSITION = new Vector2(400, 100) // Position on screen

EventsSDK.on("Draw", () => {
	const myHero = LocalPlayer?.Hero
	if (myHero === undefined) {
		return
	}

	// Check if hero is visible by enemies
	if (myHero.IsVisible) {
		// Draw warning text on screen
		console.log("Hero is visible by enemies!")
	}
})
