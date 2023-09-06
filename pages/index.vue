<template>
  <SectionHero />
  <SectionSkills />
  <SectionExperience />
  <SectionProjects />
  <SectionContact />
  <!-- <Loading /> -->
</template>

<script setup lang="ts">
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });

  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach((el) => observer.observe(el));
});
</script>

<!-- TODO: Adjust the typography of the page content -->
