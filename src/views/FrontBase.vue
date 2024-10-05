<template>
    <div class="container text-primary">
        <Nav />
        <RouterView />
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';
    export default {
        components: {
            Nav,
            Footer
        },
        mounted() {
            // Create Crisp script element
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.innerHTML = `window.$crisp=[];window.CRISP_WEBSITE_ID="a4912747-2e6f-496c-9744-ca90d655cfc3";
            (function(){
            d=document;
            s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
            })();`;

            // Append script to the head
            document.head.appendChild(script);
        }
    }
</script>