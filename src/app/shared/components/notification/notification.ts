export class Notification {
  constructor(
    public id: number,
    public type: NotificationType,
    public title: string,
    public message: string,
    public timeout: number,
    public show: 'open' | 'closed' | 'pending' | 'beenShown' | string,
    public remoteNotificationHeight: number,
  ) {}
}

export enum NotificationType {
  success = 0,
  warning = 1,
  error = 2,
  info = 3,
}
