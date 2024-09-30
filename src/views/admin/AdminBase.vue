<template>
    <div class="flex">
        <Preloader />
        <SideBar />
        <Toast />
        <div class="hidden-sidebar w-1/5"></div>
        <div class="w-4/5 relative">
            <TopBar />
            <RouterView />
        </div>
    </div>
</template>

<script>

    import SideBar from '@/components/admin/SideBar.vue';
    import TopBar from '@/components/admin/TopBar.vue';
    import Preloader from '@/components/admin/Preloader.vue';
    import Toast from '@/components/admin/Toast.vue';
    
    export default {
        components: {
            SideBar,
            TopBar,
            Preloader,
            Toast
        },
    }
</script>