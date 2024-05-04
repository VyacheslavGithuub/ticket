import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { NotificationService } from './notification.service';
import { Notification, NotificationType } from './notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  imports: [NgClass, NgStyle, NgOptimizedImage],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  private subNotificationService$?: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.subNotificationService$ = this.notificationService
      .getObservable()
      .subscribe((notification) => this.addNotification(notification));
  }

  ngOnDestroy() {
    this.subNotificationService$?.unsubscribe();
  }

  private addNotification(notification: Notification) {
    this.notifications.push(notification);

    // Требует доработки
    // Проверка на автоматического скрытия уведомления
    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);
    }
  }

  close(notification: Notification, refNotification?: HTMLDivElement) {
    this.notifications.forEach((notif) => {
      const notificationElement = notif;
      if (notificationElement.id === notification.id) {
        notificationElement.show = 'closed';
        setTimeout(() => this.deleteNotificationElement(notification.id), 300);
      }
      if (notificationElement.id > notification.id) {
        notificationElement.show = 'pending';
        if (refNotification) {
          // Достаём высоту из элумента, который будет удален,
          // Для анимации поднятия нижестоящих элементов
          notificationElement.remoteNotificationHeight = refNotification.clientHeight * -1;
        }
      }
    });
  }

  deleteNotificationElement(id: number) {
    this.notifications = this.notifications.filter((notif) => {
      const notification = notif;
      if (notification.id > id) {
        notification.show = 'beenShown';
        notification.remoteNotificationHeight = 0;
      }
      return notification.id !== id;
    });
  }

  className(notification: Notification): string {
    let style: string;

    switch (notification.type) {
      case NotificationType.success:
        style = 'success';
        break;

      case NotificationType.warning:
        style = 'warning';
        break;

      case NotificationType.error:
        style = 'error';
        break;

      default:
        style = 'info';
        break;
    }

    return style;
  }
}
