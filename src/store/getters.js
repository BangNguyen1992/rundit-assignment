export const getters = {
  badgeNumber: state => {
    const unseenNotification = state.notifications.filter(notification => notification.seen === false).length;

    return unseenNotification > 0 ? unseenNotification : null;
  }
}