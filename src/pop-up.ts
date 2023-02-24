import { messagingClient } from "./services/ExtensionMessaging";

main();

async function main() {
  await messagingClient.send("hello");
}
