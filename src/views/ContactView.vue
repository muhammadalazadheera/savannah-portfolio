<template>
    <div>
        <div class="w-full flex flex-col items-center justify-center">
            <div class="title font-din-medium w-3/5 text-center border py-2 my-5 text-xl"><p class="uppercase">Contact</p></div>
            <form class="w-full sm:w-3/5 p-4 sm:p-0 font-din text-black text-lg my-5">
                <div class="w-full flex mb-3">
                    <div class="mr-3 w-1/2">
                        <input class="block border w-full h-8 p-3 focus-visible:outline-none focus-visible:border-black" type="text" id="fname" placeholder="First Name">
                    </div>
                    <div class="w-1/2">
                        <input class="block border w-full h-8 p-3 focus-visible:outline-none focus-visible:border-black" type="text" id="lname" placeholder="Last Name">
                    </div>
                </div>
                <div class="mb-3">
                    <input class="block border w-full h-8 p-3 focus-visible:outline-none focus-visible:border-black" type="email" id="email" placeholder="Email">
                </div>
                <div class="mb-3">
                    <select id="subject" class="block w-full h-8 focus-visible:outline-none focus-visible:border-black">
                        <option disabled selected>Subject</option>
                        <option value="1">General Query</option>
                        <option value="1">Media Request</option>
                        <option value="1">Academic Opportunities</option>
                        <option value="1">Hate Mail</option>
                        <option value="1">Others</option>
                    </select>
                </div>
                <textarea class="w-full border mt-3 p-3 focus-visible:outline-none focus-visible:border-black" id="message" rows="3" placeholder="Message"></textarea>
                <button class="w-full h-12 border font-din-medium mr-4 bg-black text-white">Send</button>
            </form>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>