import { messagingClient } from "../services/WebPageMessaging";

main();

async function main() {
  messagingClient.subscribeToExtension("hello", onHello);
}

async function onHello() {
  console.log("Hello world from extension");
}
