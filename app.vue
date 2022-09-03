<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
      <div 
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
        <!-- LEft sidebar -->
        <div class="hidden md:block col-span-1 md:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <sidebar-left />
          </div>
        </div>
        <!-- Main content -->
        <main class="col-span-12 bg-red-500 md:col-span-7 xl:col-span-6">
          <h1>Main</h1>
        </main>
        <!-- Right Sidebar -->
        <div class="hidden md:block col-span-1 md:col-span-4 xl:col-span-3">
          <div class="sticky top-0">
            <sidebar-right />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
  const darkMode = ref(false)
</script>
