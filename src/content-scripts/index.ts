import { linkedinConnector } from "../services/LinkedinConnector";
import { LinkedInWebPage } from "../services/LinkedinWebPage";
import { messagingClient } from "../services/WebPageMessaging";

main();

async function main() {
  // subscribe to events from the extension
  new LinkedInWebPage(
    messagingClient,
    linkedinConnector
  ).subscribeToExtensionMessages();

  console.log("script ready");
}
