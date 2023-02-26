// @ts-ignore
import { OnConnectClickPayload } from "../models/Message";
import { linkedinConnector } from "../services/LinkedinConnector";
import { messagingClient } from "../services/WebPageMessaging";

/** Main script */
main();

async function main() {
  messagingClient.subscribeToExtension(
    "START_CONNECTING",
    linkedinConnector.startConnecting
  );

  messagingClient.subscribeToExtension(
    "STOP_CONNECTING",
    linkedinConnector.stopConnecting
  );

  console.log("content script ready");
}
