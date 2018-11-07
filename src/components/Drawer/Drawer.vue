<template>
  <div class="Drawer-container">
    <Button v-bind:clickHandler="REMOVE_ALL_NOTIFICATION" v-bind:buttonText="'Remove all notification'" ></Button>
    <Button v-bind:clickHandler="ADD_NEW_NOTIFICATION" v-bind:buttonText="'Add new notification'" ></Button>
  
    <div class="Drawer-notifications">
      <div v-on:click="toggleDrawerHandler" class="u-flex u-flex__center Drawer-notifications__icon">
        <i class="c-icon c-icon__bell"></i>
        <span v-if="badgeNumber" class="c-badge">{{badgeNumber}}</span>
      </div>
  
      <transition name="fade" v-cloak>
        <NotificationList></NotificationList>
      </transition>
  
    </div>
  
  </div>
</template>

<script type="text/javascript" src="./Drawer.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Drawer.css"></style>
