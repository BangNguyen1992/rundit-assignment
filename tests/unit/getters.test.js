import { getters } from '@/store/getters.js';

describe('store getters tests', () => {
  it('should badgeNumber return 2', () => {
    const state = {
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
    expect(getters.badgeNumber(state)).toBe(2)
  });

  it('should badgeNumber return 1', () => {
    const state = {
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
          seen: true
        },
      ]
    };
    expect(getters.badgeNumber(state)).toBe(1)
  });

  it('should badgeNumber return null if all notification had been seen', () => {
    const state = {
      notifications: [
        {
          id: "1",
          user: "Henry",
          message: 'has published an update for this document',
          thumbnail: require('@/assets/update.svg'),
          seen: true
        },
        {
          id: "2",
          user: "Crow",
          message: 'has removed an article from his report',
          thumbnail: require('@/assets/update.svg'),
          seen: true
        },
      ]
    };
    expect(getters.badgeNumber(state)).toBe(null)
  });

  it('should badgeNumber return null if there is no notification', () => {
    const state = {
      notifications: []
    };
    expect(getters.badgeNumber(state)).toBe(null)
  });
})