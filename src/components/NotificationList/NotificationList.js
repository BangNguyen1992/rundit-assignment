import { mapState, mapGetters } from "vuex";
import Notification from "@/components/Notification/Notification.vue";


export default {
  name: "NotificationList",
  components: {
    Notification
  },
  computed: {
    ...mapGetters({
      badgeNumber: "badgeNumber"
    }),
    ...mapState({
      notifications: "notifications",
      drawerOpen: "drawerOpen"
    }),
  }
};