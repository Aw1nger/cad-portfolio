<script setup lang="ts">
const navigation = [
  { label: "Проекты", to: "/#projects" },
  { label: "Обо мне", to: "/#about" },
  { label: "Контакты", to: "/#contacts" },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f4f2ed]/75 backdrop-blur-xl"
  >
    <UContainer>
      <div class="flex h-20 items-center justify-between">
        <NuxtLink to="/" class="text-xl font-black tracking-tight">
          AW1NGER<span class="text-primary">.</span>CAD
        </NuxtLink>

        <nav class="hidden items-center gap-8 md:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="text-sm text-primary transition hover:text-primary"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <UButton
          to="https://t.me/aw1nger"
          target="_blank"
          color="neutral"
          variant="outline"
          trailing-icon="i-lucide-arrow-up-right"
          size="sm"
        >
          Telegram
        </UButton>
      </div>
    </UContainer>
  </header>
</template>
