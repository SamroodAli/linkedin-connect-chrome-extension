import { Message } from "../models/Message";

class ExtensionMessaging {
  activeTab?: chrome.tabs.Tab;

  private async getActiveTab() {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    if (!tab || !tab.id) {
      throw new Error("No tab id present");
    }

    return tab;
  }

  /** send message of any format */
  async send(type: string, data?: any) {
    if (!this.activeTab) {
      this.activeTab = await this.getActiveTab();
    }

    if (!this.activeTab.id) {
      throw new Error("Active tab id not present");
    }

    const response = await chrome.tabs.sendMessage(this.activeTab.id, {
      type,
      data,
    });

    return response;
  }
}

export const messagingClient = new ExtensionMessaging();
