<template>
    <div class="p-3 hover:bg-gray-100 dark:text-white cursor-pointer dark:hover:bg-dim-300 border-b"
        :class="wrapperClasses">
        <slot />
    </div>
</template>

<script setup>
    const wrapperClasses = computed(() => {
        return `${defaultTransition}  ${twitterBorderColor}`
    })
    const {defaultTransition, twitterBorderColor} = useTailwindConfig
</script>