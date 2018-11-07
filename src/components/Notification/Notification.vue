<template>
  <div class="Notification-item u-flex u-flex__center-vs">
    <div class="Notification__image">
      <img alt="Notification thumbnail" v-bind:src="notification.thumbnail" />
    </div>
    <div class="Notification__content u-flex u-flex__center-v">
      <div class="">
        <span class=""><strong>"{{notification.user}}"</strong> {{notification.message}}</span>
      </div>
      <!-- <div class="time">1 hour ago</div> -->
    </div>
  </div>
</template>

<script type="text/javascript" src="./Notification.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Notification.css"></style>