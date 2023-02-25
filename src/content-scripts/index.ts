import { MessageType } from "../models/Message";
import { messagingClient } from "../services/WebPageMessaging";

/** Main script */
main();

async function main() {
  messagingClient.subscribeToExtension(MessageType.CONNECT_BTN_CLICK, onConnectBtnClick);

}

/***** Helper functions */
async function onConnectBtnClick(){
  console.log("button clicked")
}
