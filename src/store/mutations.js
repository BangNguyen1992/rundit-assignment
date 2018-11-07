export const mutations = {
  TOGGLE_DRAWER: (state) => {
    let { drawerOpen } = state;
    drawerOpen = !drawerOpen;

    return state.drawerOpen = drawerOpen;
  },
  CLOSE_DRAWER: (state) => {
    let { drawerOpen } = state;
    drawerOpen = false;

    return state.drawerOpen = drawerOpen;
  },
  SEE_ALL_NOTIFICATION: (state) => {
    const { notifications } = state;
    for (const notification of notifications) {
      notification.seen = true;
    }

    return state.notifications = notifications;
  },
  ADD_NEW_NOTIFICATION: (state) => {
    const randomGenerator = Math.random().toString(36).substring(7);
    const { notifications } = state;
    const newNotification = {
      id: randomGenerator,
      user: randomGenerator,
      message: 'has added new feature for analysis system',
      thumbnail: require('@/assets/update.svg'),
      seen: false
    };

    notifications.unshift(newNotification)

    return state.notifications = notifications;
  },
  REMOVE_ALL_NOTIFICATION: (state) => {
    let { notifications } = state;
    notifications = [];

    return state.notifications = notifications;
  },
}