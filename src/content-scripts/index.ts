// @ts-ignore
import { OnConnectClickPayload } from "../models/Message";
import { messagingClient } from "../services/WebPageMessaging";

/** Main script */
main();

let currentIndex = 0;
let isRunning = false;

async function main() {
  messagingClient.subscribeToExtension("START_CONNECTING", onConnectMessage);

  messagingClient.subscribeToExtension(
    "STOP_CONNECTING",
    onStopConnectBtnClick
  );

  console.log("content script ready");
}

/***** Helper functions */
async function onConnectMessage(data: OnConnectClickPayload) {
  isRunning = true;
  const allConnectElements = document.querySelectorAll("button");

  connectButtonClick(allConnectElements, data.isDemo);
}

// @ts-ignore
async function connectButtonClick(
  allButtons: NodeListOf<HTMLButtonElement>,
  isDemo: boolean,
  isFirst = true,
  timeout = isFirst ? 0 : randomIntFromInterval(3000, 5000)
) {
  console.log(arguments);
  if (currentIndex >= allButtons.length) return;

  const button = allButtons[currentIndex];
  const buttonIntent = button.getAttribute("aria-label");

  if (!buttonIntent?.includes("Invite")) {
    currentIndex++;
    connectButtonClick(allButtons, isDemo, isFirst);
    return;
  }

  console.log(timeout);
  setTimeout(() => {
    if (!isRunning) {
      return;
    }

    if (isDemo) {
      button.style.backgroundColor = "red";
    } else {
      button.click();
      //TODO: check if there is a pop-up before resolving this
    }

    currentIndex++;
    connectButtonClick(allButtons, isDemo, false);
  }, timeout);
}

function onStopConnectBtnClick() {
  isRunning = false;
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
