export interface ChattestConnector {
    sendMessage(message: string): void;
    expectsMessage(expectedMessage: string): boolean;
}