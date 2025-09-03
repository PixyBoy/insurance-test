<script setup lang="ts">
import { onMounted } from 'vue';
import BaseNotification from './components/notifications/BaseNotification.vue';
import { useNotification } from './composables/useNotification';
import apiClient from './http/api';

const notification = useNotification()
onMounted(async () => {
    console.log(123);

    notification.addNotification('خطا', 'test-message', 'error');

    const response = await apiClient.get('test-api')
    console.log('response', response);

})
</script>

<template>
  <div class="min-h-dvh bg-gray-50 text-gray-800">
    <header class="p-4 border-b bg-white">
      <nav class="container mx-auto flex gap-4">
        <RouterLink to="/" class="font-semibold">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/videos">Videos</RouterLink>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <RouterView/>
    </main>
  </div>
  <BaseNotification />
</template>
