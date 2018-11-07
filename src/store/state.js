export const state = {
  drawerOpen: false,
  notifications: [
    {
      id: "1",
      user: "Henry",
      message: 'has published an update for this document',
      thumbnail: require('@/assets/update.svg'),
      seen: false
    },
    {
      id: "2",
      user: "Crow",
      message: 'has removed an article from his report',
      thumbnail: require('@/assets/update.svg'),
      seen: false
    },
    {
      id: "3",
      user: "Tomas",
      message: 'has added new feature for analysis system',
      thumbnail: require('@/assets/update.svg'),
      seen: false
    },
  ],
}