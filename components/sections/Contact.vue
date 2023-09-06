<template>
  <Section title="Contact" id="contact" v-if="contactContent">
    <h3 class="">{{ contactContent.title }}</h3>
    <p class="">
      {{ contactContent.message }}
    </p>
    <LinkButton :href="contactContent.cta.url" target="_blank">{{
      contactContent.cta.text
    }}</LinkButton>
  </Section>
</template>

<script setup lang="ts">
const { data: contactContent } = useAsyncData(() =>
  queryContent("/contact").findOne(),
);
</script>

<style scoped>
h3 {
  margin-bottom: 8px;
}

p {
  margin-bottom: 16px;
}
</style>
