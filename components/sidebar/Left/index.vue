<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min
            dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <logo-twitter />
                </div>
            </nuxt-link>
        </div>
        <div class="mt-3 space-y-8">
            <sidebar-left-tab v-for="(item, idx) in sideBarItems" :key="idx">
            <template v-slot:icon>
                <component :is="item.icon" />
            </template>
            <template v-slot:name>
                {{ item.name }}
            </template>
        </sidebar-left-tab>
        </div>
        <!-- <home-icon></home-icon> -->
    </div>
</template>

<script setup>
    import {
        HomeIcon
    } from '@heroicons/vue/24/solid/index.js'
    import { 
        HashtagIcon,
        InboxIcon,
        BellIcon,
        BookmarkIcon,
        DocumentTextIcon,
        UserIcon,
        EllipsisHorizontalCircleIcon
    } from '@heroicons/vue/24/outline/index.js'
    const {defaultTransition} = useTailwindConfig()
    const sideBarItems = [
        { name: 'Home', icon: HomeIcon },
        { name: 'Explore', icon: HashtagIcon },
        { name: 'Bookmarks', icon: BookmarkIcon },
        { name: 'Lists', icon: DocumentTextIcon },
        { name: 'Notifications', icon: BellIcon },
        { name: 'Inbox', icon: InboxIcon },
        { name: 'Profile', icon: UserIcon },
        { name: 'More', icon: EllipsisHorizontalCircleIcon },
    ]
</script>