<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground transition-colors">
    <Navbar />
    <main class="container mx-auto px-6 py-10 flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>