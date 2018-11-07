import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { directive as onClickaway } from 'vue-clickaway';

import NotificationList from "@/components/NotificationList/NotificationList.vue";
import Button from '@/components/Button/Button.vue';

export default {
  name: "Drawer",
  components: {
    NotificationList, Button
  },
  directives: {
    onClickaway: onClickaway,
  },
  computed: {
    ...mapState({
      drawerOpen: "drawerOpen"
    }),
    ...mapGetters({
      badgeNumber: "badgeNumber"
    })
  },
  methods: {
    ...mapMutations({
      TOGGLE_DRAWER: "TOGGLE_DRAWER",
      SEE_ALL_NOTIFICATION: "SEE_ALL_NOTIFICATION",
      ADD_NEW_NOTIFICATION: "ADD_NEW_NOTIFICATION",
      REMOVE_ALL_NOTIFICATION: "REMOVE_ALL_NOTIFICATION",
      CLOSE_DRAWER: "CLOSE_DRAWER",
    }),
    ...mapActions({}),
    toggleDrawerHandler() {
      this.TOGGLE_DRAWER();

      // change all notification.seen to true after close drawer
      if (this.drawerOpen === false) {
        this.SEE_ALL_NOTIFICATION();
      }
    },
    away(event) {
      if (this.drawerOpen === true && event.target.className.includes('Home-container')) {
        this.SEE_ALL_NOTIFICATION();
        this.CLOSE_DRAWER();
      }
    },
  }
};