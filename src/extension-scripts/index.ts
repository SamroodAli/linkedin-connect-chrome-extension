import { messagingClient } from "../services/ExtensionMessaging";

main();

async function main() {
  const button = document.getElementById("connect-btn");
  button?.addEventListener("click", connectBtnClick);
}

function connectBtnClick() {
  messagingClient.send({ type: "CONNECT_BTN_CLICK", data: { isDemo: true } });
}
