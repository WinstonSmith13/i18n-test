<template>
    <div class="container mx-auto p-4">
      <header class="mb-4">
        <h1 class="text-3xl font-bold">{{ $t('office') }}</h1>
        <p class="text-lg text-gray-600">{{ $t('description') }}</p>
      </header>
      
      <nav class="mb-6">
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">{{ $t('menu') }}</a></li>
          <li><a href="#" class="hover:underline">{{ $t('contact') }}</a></li>
          <li><a href="#" class="hover:underline">{{ $t('legals') }}</a></li>
        </ul>
      </nav>
  
      <footer class="mt-6 border-t pt-4">
        <div class="mb-4">
          <h2 class="text-xl font-semibold">{{ $t('footerContact') }}</h2>
        </div>
        <div>
          <h2 class="text-xl font-semibold">{{ $t('footerFollow') }}</h2>
        </div>
      </footer>
    </div>
  </template>

<script setup>

</script>

<style lang="scss" scoped>

</style>