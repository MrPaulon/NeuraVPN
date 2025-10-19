<script setup>
import { useColorMode } from '#imports'
const colorMode = useColorMode()
</script>

<template>
  <nav class="flex items-center justify-between py-4 px-6 border-b border-neutral-200 dark:border-neutral-800">
    <NuxtLink to="/" class="flex items-center gap-2">
        <span class="text-xl font-bold text-primary">NeuraVPN</span>
    </NuxtLink>

    <div class="flex items-center gap-4">
      <UButton to="/download" color="primary">Télécharger</UButton>
      <UButton
        :icon="colorMode.value === 'dark' ? 'material-symbols:nightlight-rounded' : 'material-symbols:light-mode-rounded'"
        @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
        variant="ghost"
      >
      </UButton>
    </div>
  </nav>
</template>