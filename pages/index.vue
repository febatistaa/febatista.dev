<template>
  <Hero />
  <Section title="Skills" id="skills">
    <Skills
      :items="[
        {
          title: 'Languages',
          skills: [
            'Javascript (ES6)',
            'Typescript',
            'HTML',
            'CSS/Sass',
            'SQL',
            'C#',
          ],
        },
        {
          title: 'Frameworks',
          skills: ['React', 'React Native', 'Angular', 'Vue', 'Node'],
        },
        {
          title: 'Tools',
          skills: [
            'Bash',
            'Git/Github',
            'Webpack/Vite',
            'Postman',
            'MongoDB/Postgres',
          ],
        },
      ]"
    />
  </Section>
  <Section title="Experience" id="experience">
    <Experience
      :items="[
        {
          company: 'Grupo Fleury',
          role: 'Senior Software Engineer',
          startedAt: 'Mar 2022',
        },
        {
          company: 'Saude iD',
          role: 'Senior Software Engineer',
          startedAt: 'Nov 2020',
          finishedAt: 'Mar 2022',
        },
        {
          company: 'Avanade',
          role: 'Software Engineer',
          startedAt: 'Jul 2019',
          finishedAt: 'Nov 2020',
        },
        {
          company: 'JJC',
          role: 'Software Engineer',
          startedAt: 'Mar 2019',
          finishedAt: 'Jun 2019',
        },
        {
          company: 'App DinDin',
          role: 'Frontend Engineer',
          startedAt: 'Oct 2018',
          finishedAt: 'Mar 2019',
        },
        {
          company: 'Hefesto Software House',
          role: 'Frontend Engineer',
          startedAt: 'Nov 2017',
          finishedAt: 'Jul 2018',
        },
        {
          company: 'Alura Cursos Online',
          role: 'Intern',
          startedAt: 'Mai 2017',
          finishedAt: 'Jan 2018',
        },
      ]"
    />
  </Section>
  <Section title="Projects" id="projects">
    <Projects
      :items="[
        {
          slug: 'febatista_dev',
          name: 'febatista.dev',
          description:
            'Small React project created during an interview process to browse and search surf videos via the YouTube API.',
          tags: ['Vue', 'Sass', 'Typescript', 'Nuxt'],
        },
        {
          slug: 'easy-budget',
          name: 'EasyBudget',
          description:
            'Small React project created during an interview process to browse and search surf videos via the YouTube API.',
          tags: ['React Native', 'Styled Components', 'Typescript', 'Express'],
        },
      ]"
    />
  </Section>
  <Section title="Contact" id="contact">
    <Contact />
  </Section>
  <Scroll />
</template>

<script setup lang="ts">
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });

  const hiddenElements = document.querySelectorAll(".animated");
  hiddenElements.forEach((el) => observer.observe(el));
});
</script>

<!-- TODO: Adjust the typography of the page content -->
