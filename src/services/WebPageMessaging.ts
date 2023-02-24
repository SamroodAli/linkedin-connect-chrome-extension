import { Message } from "../models/Message";

type Callback = () => any;

class WebPageMessaging {
  private isSubscribed = false;
  private subscriptions: Map<string, Callback> = new Map();

  public subscribeToExtension(message: string, callback: Callback) {
    this.subscriptions.set(message, callback);

    // subscribe if haven't subscribed already.
    if (!this.isSubscribed) {
      this.subscribe();
    }
  }

  private async subscribe() {
    if (this.isSubscribed) {
      // already subscribed
      return;
    }

    chrome.runtime.onMessage.addListener(
      (request: Message, sender, sendResponse) => {
        if (sender.tab) {
          throw new Error("Message not from the extension");
        }

        const callback = this.subscriptions.get(request.type);

        if (!callback) {
          throw new Error(`Callback not present for ${request.type} message`);
        }

        const response = callback();

        sendResponse(response);
      }
    );
  }
}

export const messagingClient = new WebPageMessaging();
