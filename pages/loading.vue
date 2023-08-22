<template>
  <div class="terminal">
    <div class="buttons">
      <div class="button red"></div>
      <div class="button yellow"></div>
      <div class="button green"></div>
    </div>
    <span class="title">Terminal</span>
    <div class="display">
      <div class="line" id="display-command">
        <nuxt-icon name="arrow-right" class="arrow" />
        <span class="dir">febatista.dev</span>
        <span class="command">yarn start</span>
      </div>
      <div class="line">
        <nuxt-icon name="arrow-right" class="arrow" />
        <span class="dir">febatista.dev</span>
        <span class="command" id="type-command"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped lang="postcss">
.overlay {
  @apply hidden md:block;
  @apply fixed left-0 top-0 z-20;
  @apply h-screen w-screen bg-slate-900;
  animation: fadeout 0.5s ease-out;
  animation-delay: 4.5s;
  animation-fill-mode: forwards;
}

.terminal {
  @apply absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2;
  @apply bg-black backdrop-opacity-80;
  @apply rounded border-2 border-neutral-400 p-4;
  @apply flex flex-col;
  animation: minimize 0.25s ease-out;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}

.buttons {
  @apply absolute left-1.5 top-1.5 flex gap-1.5;
}

.button {
  @apply h-3 w-3 rounded-full;
}

.red {
  @apply bg-red-500;
}

.yellow {
  @apply bg-yellow-500;
}

.green {
  @apply bg-green-500;
}

.title {
  @apply mb-1.5 text-center text-xs;
}

.display {
  @apply flex flex-1 flex-col justify-end;
}

.line {
  @apply flex items-center text-sm;
}

.arrow {
  @apply mr-[1ch] inline-block text-base text-green-500;
}

.dir {
  @apply mr-[1ch] font-bold text-cyan-200;
}

#type-command:before {
  content: "";
  animation:
    type 1s,
    enter 0.1s;
  animation-delay: 1s, 3s;
  animation-fill-mode: forwards;
}

#type-command:after {
  content: "";
  @apply border-[1ch] border-fuchsia-600;
  animation: blink 0.75s steps(1, end) infinite;
}

#display-command {
  opacity: 0;
  animation: display 0.1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

@keyframes type {
  0% {
    content: "";
  }
  10% {
    content: "y";
  }
  20% {
    content: "ya";
  }
  30% {
    content: "yar";
  }
  40% {
    content: "yarn";
  }
  50% {
    content: "yarn ";
  }
  60% {
    content: "yarn s";
  }
  70% {
    content: "yarn st";
  }
  80% {
    content: "yarn sta";
  }
  90% {
    content: "yarn star";
  }
  100% {
    content: "yarn start";
  }
}

@keyframes enter {
  0% {
    content: "yarn start";
  }
  100% {
    content: "";
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes display {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes minimize {
  0% {
    top: 50%;
    height: 50%;
    width: 50%;
  }
  100% {
    top: 125%;
    height: 0%;
    width: 0%;
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
