import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotification = defineStore('notification', () => {
  const notifications = ref<{ id: number; title: string; message: string; type?: string }[]>([]);
  let idCounter = 0;

  const addNotification = (title: string, message: string, type = 'info') => {
    const id = idCounter++;
    notifications.value.push({ id, title, message, type });
    setTimeout(() => {
        const element = document.getElementById(`notify-${id}`);
        element?.classList.add("modal-in");
    }, 50);
    setTimeout(() => removeNotification(id), 4000);
  };

  const removeNotification = (id: number) => {
    const element = document.getElementById(`notify-${id}`)
    element?.classList.remove('modal-in')
    setTimeout(() => notifications.value = notifications.value.filter(n => n.id !== id), 500);
  };

  return { notifications, addNotification, removeNotification };
});
