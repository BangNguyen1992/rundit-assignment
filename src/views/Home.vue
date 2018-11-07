<template>
  <div class="Home-container">
    <Drawer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Drawer from '@/components/Drawer/Drawer.vue'

export default {
  name: 'Home',
  components: {
    Drawer
  }
}
</script>
