<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <!-- App -->
      <div v-if="user" class="min-h-full">

      <div 
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
        <!-- LEft sidebar -->
        <div class="hidden md:block col-span-1 md:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <sidebar-left />
          </div>
        </div>
        <!-- Main content -->
        <main class="col-span-12 md:col-span-7 xl:col-span-6">
          <router-view />
        </main>
        <!-- Right Sidebar -->
        <div class="hidden md:block col-span-1 md:col-span-4 xl:col-span-3">
          <div class="sticky top-0">
            <sidebar-right />
          </div>
        </div>
      </div>
      </div>
      <auth-page v-else></auth-page>
    </div>
  </div>
</template>

<script setup>
  const { useAuthUser } = useAuth()
  const user = useAuthUser()
  const darkMode = ref(false)
</script>
