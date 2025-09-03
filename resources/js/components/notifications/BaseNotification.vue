<template>
  <div
    v-for="notification in store.notifications"
    :key="notification.id"
    :id="'notify-' + notification.id"
    class="notification notification-with-icon max-sm:absolute md:fixed"
    style="display: block"
  >
    <div class="notification-header">
      <div class="notification-icon">
        <i class="icon icon-site"></i>
      </div>
      <div class="notification-title font-sans">Sample Test App</div>
      <g-button class="ml-0" @click="store.removeNotification(notification.id)">
        <g-svg name="close-filled" />
      </g-button>
    </div>
    <div class="notification-content">
      <div
        class="notification-subtitle text-d_success-50"
        v-if="notification.type === 'success'"
      >
        {{ notification.title }}
      </div>
      <div
        class="notification-subtitle text-d_secondary-60"
        v-else-if="notification.type === 'warning'"
      >
        {{ notification.title }}
      </div>
      <div
        class="notification-subtitle text-d_danger-50"
        v-else-if="notification.type === 'error'"
      >
        {{ notification.title }}
      </div>
      <div class="notification-text tracking-tight" v-html="notification.message"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNotification } from '@/composables/useNotification';

const store = useNotification();
</script>

<style>
.popup-backdrop {
  z-index: 10500;
}
.custom-modal-backdrop,
.actions-backdrop,
.dialog-backdrop,
.popover-backdrop,
.popup-backdrop,
.preloader-backdrop,
.sheet-backdrop,
.fab-backdrop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 13000;
  visibility: hidden;
  opacity: 0;
  transition-duration: 0.4s;
}
.notification.modal-in {
  z-index: 1000;
  transform: translateZ(0);
  opacity: 1;
}
.notification {
  transition-duration: 0.45s;
  transform: translate3d(0, -200%, 0);
}
@supports ((-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))) {
  .ios-translucent-modals .notification {
    background-color: rgba(var(--notification-bg-color-rgb), 0.8);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
  }
}
.notification {
  left: var(--notification-margin);
  top: var(--notification-margin);
  width: calc(100% - var(--notification-margin) * 2);
  z-index: 20000;
  font-size: 14px;
  margin: 0;
  border: none;
  display: none;
  box-sizing: border-box;
  transition-property: transform;
  direction: rtl;
  max-width: var(--notification-max-width);
  padding: var(--notification-padding-vertical) var(--notification-padding-horizontal);
  border-radius: var(--notification-border-radius);
  box-shadow: var(--notification-box-shadow);
  background: white;
  backdrop-filter: blur(3px);
  margin-top: var(--safe-area-top);
}
.notification-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
}
.notification-header + .notification-content {
  margin-top: 10px;
}
.notification-icon i,
.notification-icon {
  width: var(--notification-icon-size) !important;
  height: var(--notification-icon-size) !important;
}
.notification-icon {
  font-size: 0;
  line-height: var(--notification-icon-size);
}
.notification-title-right-text {
  margin-left: 6px;
  margin-right: auto;
}
.notification-title-right-text {
  color: var(--notification-title-right-color);
  font-size: var(--notification-title-right-font-size);
}
.notification-subtitle {
  font-size: var(--notification-subtitle-font-size);
  text-transform: var(--notification-subtitle-text-transform);
  line-height: var(--notification-subtitle-line-height);
  font-weight: var(--notification-subtitle-font-weight);
  margin-bottom: 7px;
}
.notification-text {
  color: var(--notification-text-color);
  font-size: var(--notification-text-font-size);
  text-transform: var(--notification-text-text-transform);
  line-height: var(--notification-text-line-height);
  font-weight: var(--notification-text-font-weight);
}
i.icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  font-style: normal;
  position: relative;
}
:root {
  --notification-margin: 8px;
  --notification-padding-horizontal: 10px;
  --notification-padding-vertical: 10px;
  --notification-border-radius: 12px;
  --notification-box-shadow: 0px 5px 25px -10px rgba(0, 0, 0, 0.9);
  --notification-icon-size: 20px;
  --notification-title-font-size: 13px;
  --notification-title-text-transform: uppercase;
  --notification-title-line-height: 1.4;
  --notification-title-font-weight: 400;
  --notification-title-letter-spacing: 0.02em;
  --notification-title-right-font-size: 13px;
  --notification-subtitle-font-size: 15px;
  --notification-subtitle-font-weight: 600;
  --notification-text-font-size: 12px;
  --notification-text-line-height: 1.5rem;
  --notification-bg-color: rgba(250, 250, 250, 0.95);
  --notification-bg-color-rgb: 255, 255, 255;
  --notification-title-color: #000;
  --notification-title-right-color: rgba(0, 0, 0, 0.45);
  --notification-subtitle-color: #000;
  --notification-text-color: #082e49;
  --notification-max-width: 568px;
  --notification-subtitle-text-transform: none;
  --notification-subtitle-line-height: 1.35;
  --notification-text-text-transform: none;
  --notification-text-font-weight: 400;
}
</style>
