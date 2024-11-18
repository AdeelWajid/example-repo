import { EventsSDK } from "github.com/octarine-public/wrapper/index"

console.log("Hello world!")
EventsSDK.on("GameStarted", () => {
	console.log("Hello world!")
})
EventsSDK.on("EntityVisibleChanged", () => {
	console.log("Hello world! Visible")
})
