import { OnConnectClickPayload } from "../models/Message";
import { messagingClient } from "../services/WebPageMessaging";

/** Main script */
main();

async function main() {
  messagingClient.subscribeToExtension("CONNECT_BTN_CLICK", onConnectBtnClick);
}

/***** Helper functions */
async function onConnectBtnClick(data: OnConnectClickPayload) {
  const allConnectElements = document.querySelectorAll("button");

  let isStarted = false;
  for (let i = 0; i < allConnectElements.length; i++) {
    const button = allConnectElements[i];
    const buttonIntent = button.getAttribute("aria-label");

    if (buttonIntent?.includes("Invite")) {
      await connectButtonClick(
        button,
        !isStarted ? 0 : randomIntFromInterval(3000, 5000),
        data.isDemo
      );

      isStarted = true;
    }
  }
}

async function connectButtonClick(
  button: HTMLButtonElement,
  timeout: number,
  isDemo: boolean
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isDemo) {
        button.style.backgroundColor = "red";
      } else {
        button.click();
        //TODO: check if there is a pop-up before resolving this
      }
      resolve(button);
    }, timeout);
  });
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
