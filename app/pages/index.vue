<script setup lang="ts">
const { data: projects } = await useAsyncData("portfolio-projects", () =>
  queryCollection("projects").order("order", "ASC").all(),
);

const featuredProject = computed(() => {
  return (
    projects.value?.find((project) => project.featured) ??
    projects.value?.[0] ??
    null
  );
});

const otherProjects = computed(() => {
  return (
    projects.value?.filter(
      (project) => project.path !== featuredProject.value?.path,
    ) ?? []
  );
});

useSeoMeta({
  title: "Никита Бородин — CAD & Mechanical Design",
  description:
    "CAD-проектирование, параметрическое моделирование и прототипирование.",
  ogTitle: "AW1NGER — CAD Portfolio",
  ogDescription: "Mechanical Design / CAD / Prototyping",
});
</script>

<template>
  <div>
    <section>
      <UContainer>
        <div class="grid items-center gap-12 pt-15 pb-22 lg:grid-cols-2">
          <div class="flex flex-col gap-8 h-full">
            <div class="flex items-center gap-3 mb-auto">
              <span class="size-2 rounded-full bg-primary" />
              <span
                class="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500"
              >
                CAD / Mechanical Design
              </span>
            </div>

            <h1
              class="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              От цифровой модели
              <span class="text-primary"> к реальному изделию</span>
            </h1>

            <div class="">
              <p
                class="max-w-lg mb-0.5 text-lg leading-relaxed text-neutral-500"
              >
                Проектирование механических конструкций, параметрическое
                моделирование и практическое прототипирование.
              </p>
              <p class="max-w-lg text-lg leading-relaxed text-neutral-500">
                Я еще <span class="text-primary"> доделываю сайт</span>, поэтому
                возможны недоработки, так же я активно пополняю содержание
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <UButton
                to="#projects"
                color="primary"
                size="xl"
                trailing-icon="i-lucide-arrow-down"
              >
                Смотреть проекты
              </UButton>

              <UButton to="#about" color="neutral" variant="outline" size="xl">
                Обо мне
              </UButton>
            </div>

            <div class="mt-auto flex flex-wrap gap-2">
              <UBadge color="neutral" variant="subtle">КОМПАС-3D</UBadge>
              <UBadge color="neutral" variant="subtle">Fusion 360</UBadge>
              <UBadge color="neutral" variant="subtle">SolidWorks</UBadge>
              <UBadge color="neutral" variant="subtle">3D Printing</UBadge>
            </div>
          </div>

          <div class="h-full flex flex-col justify-center">
            <NuxtLink
              v-if="featuredProject"
              :to="featuredProject.path"
              class="group relative md:aspect-video overflow-hidden rounded-2xl bg-neutral-200"
            >
              <NuxtImg
                :src="featuredProject.cover"
                :alt="featuredProject.title"
                class="aspect-video object-cover transition w-full h-auto duration-700 group-hover:scale-105"
              />

              <div
                class="absolute hidden md:block inset-0 bg-linear-to-t from-black/80 via-transparent to-black/10"
              />

              <div class="absolute md:left-6 md:top-6 left-3 top-3">
                <UBadge color="neutral" variant="solid">
                  FEATURED PROJECT / 01
                </UBadge>
              </div>
              <UIcon
                name="i-lucide-arrow-up-right"
                class="hidden md:block absolute right-3 top-3 text-white"
              />

              <div
                class="absolute hidden md:block bottom-0 left-0 p-8 text-white"
              >
                <span
                  class="font-mono text-xs uppercase tracking-widest text-white/70"
                >
                  {{ featuredProject.category }}
                </span>

                <h2 class="mt-3 text-3xl font-semibold">
                  {{ featuredProject.title }}
                </h2>

                <p class="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                  {{ featuredProject.description }}
                </p>
              </div>

              <div class="p-5 sm:p-6">
                <div class="flex items-center justify-between gap-3">
                  <span
                    class="font-mono text-[10px] uppercase tracking-widest text-primary"
                  >
                    {{ featuredProject.category }}
                  </span>

                  <span class="font-mono text-xs text-neutral-400">
                    {{ featuredProject.year }}
                  </span>
                </div>

                <div class="mt-4 flex items-start justify-between gap-4">
                  <h3
                    class="text-xl font-semibold tracking-tight transition group-hover:text-primary"
                  >
                    {{ featuredProject.title }}
                  </h3>

                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="mt-1 size-5 shrink-0 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <p
                  class="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-500"
                >
                  {{ featuredProject.description }}
                </p>

                <div class="mt-5 flex flex-wrap gap-2">
                  <UBadge
                    v-for="tag in featuredProject.tags.slice(0, 3)"
                    :key="tag"
                    color="neutral"
                    variant="outline"
                    size="sm"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

    <section id="projects" class="border-y border-neutral-200 bg-[#eeece6]">
      <UContainer>
        <div class="py-24">
          <div class="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span class="font-mono text-xs text-primary">
                01 / PORTFOLIO
              </span>

              <h2
                class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Избранные проекты
              </h2>

              <p class="mt-4 max-w-lg text-neutral-500">
                Разработанные конструкции, CAD-модели и результаты физического
                прототипирования.
              </p>
            </div>

            <span class="font-mono text-xs text-neutral-500">
              {{ projects?.length ?? 0 }} PROJECTS
            </span>
          </div>

          <div v-if="otherProjects.length" class="grid gap-8 sm:grid-cols-2">
            <ProjectCard
              v-for="(project, index) in otherProjects"
              :key="project.path"
              :project="project"
              :index="index + 2"
            />
          </div>

          <div
            v-else
            class="rounded-xl border border-dashed border-neutral-300 p-12 text-center text-neutral-500"
          >
            Пока нет дополнительных проектов. Добавь Markdown-файл в
            content/projects/.
          </div>
        </div>
      </UContainer>
    </section>

    <section id="about" class="bg-[#24251f] text-white">
      <UContainer>
        <div class="grid gap-12 py-24 lg:grid-cols-2">
          <div>
            <span class="font-mono text-xs text-primary"> 02 / ABOUT </span>

            <h2
              class="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Системный подход к проектированию.
            </h2>
          </div>

          <div class="space-y-6 text-lg leading-relaxed text-neutral-400">
            <p>
              Мой профессиональный бэкграунд связан с разработкой сложных
              IT-систем. Сейчас активно развиваюсь в направлении
              CAD-проектирования и механических конструкций.
            </p>

            <p>
              В собственных проектах совмещаю параметрическое моделирование,
              практическое прототипирование и анализ физических свойств изделий.
            </p>

            <div class="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span class="font-mono text-xs text-neutral-500">
                  CAD SOFTWARE
                </span>

                <p class="mt-3 text-white">КОМПАС-3D</p>
                <p class="text-white">Fusion 360</p>
                <p class="text-white">SolidWorks</p>
              </div>

              <div>
                <span class="font-mono text-xs text-neutral-500">
                  TECHNOLOGIES
                </span>

                <p class="mt-3 text-white">3D Printing</p>
                <p class="text-white">Prototyping</p>
                <p class="text-white">Parametric Design</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
