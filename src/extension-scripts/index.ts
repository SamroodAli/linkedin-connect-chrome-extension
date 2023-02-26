import { messagingClient } from "../services/ExtensionMessaging";

let isRunning = false;

const button = document.getElementById("connect-btn");

button?.addEventListener("click", connectBtnClick);

function connectBtnClick() {
  const isDemoCheckBox = <HTMLInputElement>document.getElementById("is-demo");
  if (!button) throw new Error("button not found");

  console.log(isRunning);
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
