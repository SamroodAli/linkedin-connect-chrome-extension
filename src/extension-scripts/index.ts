import { messagingClient } from "../services/ExtensionMessaging";

let isRunning = false;

const button = document.getElementById("connect-btn");
const isDemoCheckBox = <HTMLInputElement>document.getElementById("is-demo");

button?.addEventListener("click", connectBtnClick);

function connectBtnClick() {
  if (!button) throw new Error("button not found");

  if (isRunning) {
    button.textContent = "START CONNECTING";
    isRunning = false;

    messagingClient.send({ type: "STOP_CONNECTING", data: null });
  } else {
    button.textContent = "STOP CONNECTING";
    isRunning = true;

    messagingClient.send({
      type: "START_CONNECTING",
      data: { isDemo: isDemoCheckBox.checked },
    });
  }
}
