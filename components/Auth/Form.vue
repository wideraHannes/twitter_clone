<template>
  <div>
    <div class="pt-5 space-y-6">
        <ui-input label="Username" placeholder="@username"  v-model="user.username"/>
        <ui-input label="Password" placeholder="*********" type="password" v-model="user.password" />
        <div>
            <button @click="handleLogin">Submit</button>
        </div>
    </div>
  </div>
 </template>
 
 <script setup>
    const {login} = useAuth()
    const user = reactive({
        password: '',
        username: ''
    })

    async function handleLogin() {
        try {
            await login(user)
        } catch (error) {
            console.error(error)
        } finally {
        }
    }
 </script>