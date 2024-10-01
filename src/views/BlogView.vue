<template>
    <div class="">
        <div class="w-full flex flex-col items-center justify-center">
            <div class="title font-din w-3/5 text-center border py-2 my-5 text-xl shadow-sm"><p class="uppercase">Blogs</p></div>
            <div class="w-full flex flex-col my-10">
                <!-- Single Blog Starts -->
                 <KeepAlive>
                <div ref="blogsContainer" v-for="blog in FireStore.blogs" :key="blog.id" class="shadow-sm flex flex-col p-4 sm:p-0 sm:flex-row mb-7">
                    <div class="md:w-2/5 sm:w-4/5">
                        <img class="w-full block" width="454" :src="blog.featured_image">
                    </div>
                    <div class="w-3/5 border sm:border-l-0 p-8 flex flex-col justify-between">
                        <div class="">
                            <div class="flex">
                                <div class="w-8 h-8"><img class="rounded-full w-full h-full" src="../assets/images/author.png" alt=""></div>
                                <div class="text-xs mx-2">
                                    <p class="flex font-din">Savannah Mandel<svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" class="blog-post-homepage-description-fill" style="fill-rule: evenodd;"><path d="M15.3812,6.495914 L12.6789333,8.77258837 C12.6191333,8.84477644 12.5099333,8.85722265 12.4354,8.79997005 C12.4215333,8.79001308 12.4094,8.77756686 12.3998667,8.76429089 L9.78686667,6.14327115 C9.67766667,5.99225704 9.46186667,5.95491839 9.305,6.05863687 C9.26946667,6.08186981 9.23913333,6.11091099 9.21573333,6.14493065 L6.60013333,8.81075677 C6.5464,8.88626383 6.43893333,8.90534803 6.3592,8.85390366 C6.34446667,8.84394669 6.33146667,8.83233022 6.32106667,8.81905425 L3.61966667,6.50587098 C3.5018,6.36149485 3.28426667,6.33577266 3.13346667,6.44861837 C3.0494,6.51167921 3,6.60792997 3,6.70998895 L4,14 L15,14 L16,6.70169148 C16,6.51831719 15.8448667,6.36979232 15.6533333,6.36979232 C15.5476,6.36979232 15.4470667,6.41625821 15.3812,6.495914 Z"></path></svg></p>
                                    <p class="font-din">{{ moment(blog.created_at).fromNow() }}</p>
                                </div>
                            </div>
                            <RouterLink class="block my-5 hover:text-blue-500" 
                            :to="{ name: 'SingleBlog', params: { id: blog.id }}">
                                <span class="text-2xl block font-din mb-3">{{ blog.title }}</span>
                                <span class="font-din" v-html="excerpt(blog.body, 200)"></span>
                            </RouterLink>
                        </div>
                        <div class="border-t">
                            <div class="h-4">
                                <p class="font-din text-xs pt-4"><span class="mr-3">6 views</span><span>0 comments</span></p>
                            </div>
                        </div>
                    </div>
                </div>   
                </KeepAlive>
                <!-- Single Blog Ends -->
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import { useFirestore } from '@/stores/FireStore';
    import SingleBlog from '@/components/SingleBlog.vue';
    export default {
        data() {
            const FireStore = useFirestore()
            return {
                FireStore,
                moment,
            }
        },
        components:{
            SingleBlog
        },
        mounted() {
            this.getBlogs();
        },
        methods: {
            async getBlogs() {
                await this.FireStore.getBlogs();
            },
            excerpt(text, length) {
                if (text.length > length) {
                    return text.substring(0, length) + '...';
                } else {
                    return text;
                }
            }
        }

    }
</script>