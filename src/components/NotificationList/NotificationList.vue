<template>
  <div v-if="drawerOpen" class="NotificationList-container">
    <div class="NotificationList-header u-flex u-flex__space-between u-pad-1">
      <div class="NotificationList-header__title u-flex u-flex__column u-flex__center"> Notifications</div>
      <div class="NotificationList-header__badge">
        <div v-if="badgeNumber" class="NotificationList-header__badge c-badge"> {{badgeNumber}} </div>
      </div>
    </div>
  
    <!-- If has notification -->
    <div v-if="notifications.length > 0" class="NotificationList-content u-flex u-flex__column u-flex__center">
      <div class="u-flex u-flex-center u-pad-1" v-for="(notification) in notifications" v-bind:key="notification.id">
        <Notification v-bind:notification="notification"></Notification>
      </div>
    </div>
  
    <!-- If no notification -->
    <div v-else>
      <div class="NotificationList-empty-state u-flex u-flex__center u-flex__center-v">
        <img class="notification" alt="no notification" src="@/assets/notification-placeholder.svg" /> No new notifications
  
      </div>
    </div>
  
  </div>
</template>

<script type="text/javascript" src="./NotificationList.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./NotificationList.css"></style>