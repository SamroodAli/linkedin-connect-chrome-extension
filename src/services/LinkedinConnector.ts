import { OnConnectClickPayload } from "../models/Message";

class LinkedInConnector {
  private isRunning = false;
  private currentIndex = 0;

  public startConnecting = (data: OnConnectClickPayload) => {
    this.isRunning = true;
    const allConnectElements = document.querySelectorAll("button");

    this.connectButtonClick(allConnectElements, data.isDemo);
  };

  public stopConnecting = () => {
    this.isRunning = false;
  };

  private connectButtonClick = (
    allButtons: NodeListOf<HTMLButtonElement>,
    isDemo: boolean,
    isFirst = true,
    timeout = isFirst ? 0 : this.randomIntFromInterval(3000, 5000)
  ) => {
    if (this.currentIndex >= allButtons.length) return;

    const button = allButtons[this.currentIndex];
    const buttonIntent = button.getAttribute("aria-label");

    if (!buttonIntent?.includes("Invite")) {
      this.currentIndex++;
      this.connectButtonClick(allButtons, isDemo, isFirst);
      return;
    }

    setTimeout(() => {
      if (!this.isRunning) {
        return;
      }

      if (isDemo) {
        button.style.backgroundColor = "red";
      } else {
        button.click();
        //TODO: check if there is a pop-up before resolving this
      }

      this.currentIndex++;
      this.connectButtonClick(allButtons, isDemo, false);
    }, timeout);
  };

  private randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

export const linkedinConnector = new LinkedInConnector();
