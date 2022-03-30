/* eslint-disable no-unused-vars */
export interface ServerToClientEvents {
  basicEmit: (userId: number, eventId: number, msg: string) => void;
  changeNotification: (status: boolean) => void;
}

export interface ClientToServerEvents {
  emitMsgFromClient: (userId: number, eventId: number, msg: string) => void;
  joinRoom: (userId: number, eventId: number) => void;
  leaveRoom: (userId: number, eventId: number) => void;
}
