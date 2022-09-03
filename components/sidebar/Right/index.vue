<template>
    <div class="flex flex-col">
        <!-- Previw Card : Whats heppening -->
        <sidebar-right-preview-card title="Whats heppening">
            <sidebar-right-preview-card-item v-for="whatHappening in whatHappeningItems">
            <h2 class="font-bold text-gray-800 dark:text-white">{{whatHappening.title}}</h2>
            <p class="text-xs text-gray-500">{{whatHappening.count}}</p>
            </sidebar-right-preview-card-item>
        </sidebar-right-preview-card>
       <!-- Previw Card : who to follwo -->
       <sidebar-right-preview-card title="Who to follow">
            <sidebar-right-preview-card-item v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row justify-between items-center p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                            <button class="rounded-full px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white">Follow</button>
                    </div>
                </div>
            </sidebar-right-preview-card-item>
       </sidebar-right-preview-card>
    </div>
</template>

<script setup>
    const whatHappeningItems = ref([
        { 
            title: '#SpaceX',
            count: '18.8k Tweets'
        },
        { 
            title: '#CodingisFun',
            count: '8.8k Tweets'
        },
        { 
            title: '#artforall',
            count: '18.8k Tweets'
        },
    ])
    const whoToFollowItems = ref([
        {
            name: 'Joe Biden',
            handle: '@joeBiden',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Joe Biden',
            handle: '@joeBiden',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Joe Biden',
            handle: '@joeBiden',
            image: 'https://picsum.photos/200/200'
        },
    ])
</script>