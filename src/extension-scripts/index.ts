import { MessageType } from "../models/Message";
import { messagingClient } from "../services/ExtensionMessaging";

main();

async function main() {
  // await messagingClient.send(MessageType.CONNECT_BTN_CLICK);
  // const button = document.getElementById('connect-btn')
  // button?.addEventListener('click',connectBtnClick)

  messagingClient.send(MessageType.CONNECT_BTN_CLICK);
}

// function connectBtnClick(){
// messagingClient.send(MessageType.CONNECT_BTN_CLICK)
// }
