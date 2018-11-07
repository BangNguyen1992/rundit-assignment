import { mutations } from '@/store/mutations.js';

describe('store mutations tests', () => {
  const state = {
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
    ]
  };

  it('TOGGLE_DRAWER: should return true', () => {
    expect(mutations.TOGGLE_DRAWER(state)).toBe(true)
  })

  it('SEE_ALL_NOTIFICATION: should change value of seen in all notifications to true', () => {
    expect(mutations.SEE_ALL_NOTIFICATION(state))
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            seen: true
          })
        ])
      )
  });

  it('ADD_NEW_NOTIFICATION: should add new notification to notifications state', () => {
    expect(mutations.ADD_NEW_NOTIFICATION(state)).toHaveLength(3)
  });

  it('ADD_NEW_NOTIFICATION: should new notification has all required fields', () => {
    const newNotification = mutations.ADD_NEW_NOTIFICATION(state)[0];
    expect(newNotification).toHaveProperty('id')
    expect(newNotification).toHaveProperty('user')
    expect(newNotification).toHaveProperty('message')
    expect(newNotification).toHaveProperty('seen', false)
  });

  it('REMOVE_ALL_NOTIFICATION: should remove all notifications', () => {
    expect(mutations.REMOVE_ALL_NOTIFICATION(state)).toHaveLength(0)
  });
})
