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

  console.log(data.isDemo);

  let timeout = 0;

  allConnectElements.forEach((button) => {
    const buttonIntent = button.getAttribute("aria-label");
    if (buttonIntent?.includes("Invite")) {
      connectButtonClick(button, timeout, data.isDemo);
      timeout += randomIntFromInterval(3000, 5000);
    }
  });
}

async function connectButtonClick(
  button: HTMLButtonElement,
  timeout: number,
  isDemo: boolean
) {
  new Promise((resolve) => {
    setTimeout(() => {
      if (isDemo) {
        button.style.backgroundColor = "red";
      } else {
        console.log("clicked but why");
        // button.click();
      }
      resolve(button);
    }, timeout);
  });
  // mocking button click
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
