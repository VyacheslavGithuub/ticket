import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notification, NotificationType } from './notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private subject = new Subject<Notification>();
  private idx = 0;

  getObservable(): Observable<Notification> {
    return this.subject.asObservable();
  }

  notify(
    type: NotificationType,
    title: string,
    message: string,
    timeout: number,
    show: string,
    remoteNotificationHeight: number,
  ) {
    this.subject.next(
      new Notification(this.idx + 1, type, title, message, timeout, show, remoteNotificationHeight),
    );
  }

  success(
    message: string,
    timeout = 0,
    title: string = 'Успешно',
    show = 'open',
    remoteNotificationHeight = 0,
  ) {
    this.notify(NotificationType.success, title, message, timeout, show, remoteNotificationHeight);
  }

  error(
    message: string,
    timeout = 0,
    title: string = 'Ошибка',
    show = 'open',
    remoteNotificationHeight = 0,
  ) {
    this.notify(NotificationType.error, title, message, timeout, show, remoteNotificationHeight);
  }
}
