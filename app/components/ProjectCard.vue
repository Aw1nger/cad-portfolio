<script setup lang="ts">
interface Project {
  path: string;
  title: string;
  description: string;
  cover: string;
  category: string;
  status: string;
  year?: number;
  tags: string[];
}

defineProps<{
  project: Project;
  index: number;
}>();
</script>

<template>
  <NuxtLink :to="project.path" class="group block">
    <UCard
      class="h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      :ui="{ body: 'p-0 sm:p-0' }"
    >
      <div class="relative aspect-4/3 overflow-hidden bg-neutral-200">
        <NuxtImg
          :src="project.cover"
          :alt="project.title"
          loading="lazy"
          class="size-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span
          class="absolute left-4 top-4 rounded bg-[#f4f2ed] px-3 py-2 font-mono text-xs"
        >
          {{ String(index).padStart(2, "0") }}
        </span>

        <UBadge
          class="absolute bottom-4 right-4"
          color="neutral"
          variant="solid"
        >
          {{ project.status }}
        </UBadge>
      </div>

      <div class="p-5 sm:p-6">
        <div class="flex items-center justify-between gap-3">
          <span
            class="font-mono text-[10px] uppercase tracking-widest text-primary"
          >
            {{ project.category }}
          </span>

          <span class="font-mono text-xs text-neutral-400">
            {{ project.year }}
          </span>
        </div>

        <div class="mt-4 flex items-start justify-between gap-4">
          <h3
            class="text-xl font-semibold tracking-tight transition group-hover:text-primary"
          >
            {{ project.title }}
          </h3>

          <UIcon
            name="i-lucide-arrow-up-right"
            class="mt-1 size-5 shrink-0 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
          />
        </div>

        <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-500">
          {{ project.description }}
        </p>

        <div class="mt-5 flex flex-wrap gap-2">
          <UBadge
            v-for="tag in project.tags.slice(0, 3)"
            :key="tag"
            color="neutral"
            variant="outline"
            size="sm"
          >
            {{ tag }}
          </UBadge>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>
