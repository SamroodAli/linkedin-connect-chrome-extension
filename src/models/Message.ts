// message types and their data
export interface MessageTypeDataMap {
  CONNECT_BTN_CLICK: OnConnectClickPayload;
}

// type of messages is just inferred from MessagePayload
export type MessageType = keyof MessageTypeDataMap;

export interface Message<
  T extends MessageType = MessageType,
  D extends MessageTypeDataMap[T] = MessageTypeDataMap[T]
> {
  type: T;
  data: D;
}

export type MessageConsumeFn<
  T extends MessageType = MessageType,
  D extends MessageTypeDataMap[T] = MessageTypeDataMap[T]
> = (message: Message<T, D>) => Promise<any>;

/** payload types for messages */
export interface OnConnectClickPayload {
  isDemo: boolean;
}
