<template>
    <Notivue v-slot="item">
    <NotivueSwipe :item="item" >
      <Notification :item="item" :theme="darkTheme">
        <NotificationProgress :item="item" />
      </Notification>
    </NotivueSwipe>
  </Notivue>

</template>

<script>
    import {
    Notivue,
    NotivueSwipe,
    Notification,
    NotificationProgress,
    darkTheme
    } from 'notivue'

    export default {
        data() {
            return {
                darkTheme: darkTheme
            }
        },
        components: {
            Notivue,
            NotivueSwipe,
            Notification,
            NotificationProgress,
        }
    }
</script>
<style scoped>
    .Notivue__notification{
        border-radius: 0px !important;
    }

</style>
