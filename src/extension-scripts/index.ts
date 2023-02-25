import { messagingClient } from "../services/ExtensionMessaging";

main();

async function main() {
  const button = document.getElementById("connect-btn");
  button?.addEventListener("click", connectBtnClick);
}

function connectBtnClick() {
  const isDemoCheckBox = <HTMLInputElement>document.getElementById("is-demo");
  messagingClient.send({
    type: "CONNECT_BTN_CLICK",
    data: { isDemo: isDemoCheckBox.checked }
  });
}
