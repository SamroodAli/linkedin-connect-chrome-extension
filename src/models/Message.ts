export enum MessageType {
  CONNECT_BTN_CLICK = "CONNECT_BTN_CLICK"
}

export interface Message {
  type: MessageType;
  data: any;
}

