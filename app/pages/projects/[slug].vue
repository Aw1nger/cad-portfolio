<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";

const route = useRoute();

const routePath = computed(() => withoutTrailingSlash(route.path));

const { data: project } = await useAsyncData(
  routePath.value,
  () => queryCollection("projects").path(routePath.value).first(),
  {
    watch: [routePath],
  },
);

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
    fatal: true,
  });
}

useSeoMeta({
  title: project.value.title,
  description: project.value.description,
  ogTitle: project.value.title,
  ogDescription: project.value.description,
  ogImage: project.value.cover,
});
</script>

<template>
  <article v-if="project">
    <UContainer>
      <!-- HEADER -->
      <section class="pb-12 pt-12 lg:pt-20">
        <UButton
          to="/#projects"
          variant="ghost"
          icon="i-lucide-arrow-left"
          class="mb-10"
        >
          Все проекты
        </UButton>

        <div
          class="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-500"
        >
          <UBadge color="primary" variant="subtle">
            {{ project.category }}
          </UBadge>

          <span v-if="project.year">{{ project.year }}</span>
          <span>/</span>
          <span>{{ project.status }}</span>
        </div>

        <h1
          class="max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          {{ project.title }}
        </h1>

        <p
          class="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-500 sm:text-xl"
        >
          {{ project.description }}
        </p>

        <div class="mt-8 flex flex-wrap gap-2">
          <UBadge
            v-for="tag in project.tags"
            :key="tag"
            color="neutral"
            variant="outline"
          >
            {{ tag }}
          </UBadge>
        </div>
      </section>

      <!-- COVER -->
      <section class="overflow-hidden rounded-2xl bg-neutral-200">
        <NuxtImg
          :src="project.cover"
          :alt="project.title"
          class="max-h-180 w-full object-cover"
        />
      </section>

      <!-- CONTENT -->
      <section class="grid gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div class="min-w-0">
          <ContentRenderer
            :value="project"
            :data="{}"
            prose
            class="portfolio-prose"
          />
        </div>

        <!-- SIDEBAR -->
        <aside class="space-y-8">
          <div class="border-t border-neutral-300 pt-5">
            <span class="font-mono text-xs text-neutral-400"> SOFTWARE </span>

            <div class="mt-4 flex flex-wrap gap-2">
              <UBadge
                v-for="software in project.software"
                :key="software"
                color="neutral"
                variant="subtle"
              >
                {{ software }}
              </UBadge>
            </div>
          </div>

          <div class="border-t border-neutral-300 pt-5">
            <span class="font-mono text-xs text-neutral-400">
              PROJECT STATUS
            </span>

            <p class="mt-3 font-medium">
              {{ project.status }}
            </p>
          </div>

          <div
            v-if="project.files?.length"
            class="border-t border-neutral-300 pt-5"
          >
            <span class="font-mono text-xs text-neutral-400">
              PROJECT FILES
            </span>

            <div class="mt-4 space-y-3">
              <a
                v-for="file in project.files"
                :key="file.url"
                :href="file.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between gap-3 text-sm transition hover:text-primary"
              >
                <span>{{ file.name }}</span>

                <UBadge color="neutral" variant="outline">
                  {{ file.format }}
                </UBadge>
              </a>
            </div>
          </div>
        </aside>
      </section>
    </UContainer>
  </article>
</template>
