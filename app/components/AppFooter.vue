<template>
  <footer id="contacts" class="border-t border-neutral-200 bg-[#eeece6]">
    <UContainer>
      <div class="grid gap-10 py-16 md:grid-cols-2">
        <div>
          <span class="font-mono text-xs text-primary"> 03 / CONTACT </span>

          <h2 class="mt-4 text-4xl font-semibold tracking-tight">
            Есть интересная задача?
          </h2>

          <p class="mt-4 max-w-md text-neutral-500">
            Открыт к техническим задачам, инженерным проектам и долгосрочному
            сотрудничеству.
          </p>
        </div>

        <div class="flex flex-col gap-4 md:items-end md:justify-center">
          <a href="mailto:aw1nger@yandex.ru" class="hover:text-primary">
            aw1nger@yandex.ru ↗
          </a>

          <a
            href="https://t.me/aw1nger"
            target="_blank"
            class="hover:text-primary"
          >
            Telegram ↗
          </a>

          <a
            href="https://github.com/aw1nger"
            target="_blank"
            class="hover:text-primary"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div
        class="flex flex-wrap justify-between gap-4 border-t border-neutral-300 py-6 font-mono text-xs text-neutral-500"
      >
        <span>AW1NGER / CAD PORTFOLIO</span>
        <span>© {{ new Date().getFullYear() }} NIKITA BORODIN</span>
      </div>
    </UContainer>
  </footer>
</template>
