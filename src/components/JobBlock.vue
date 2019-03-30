<template>
  <article class="job-block">
    <div class="date"><span>{{ startDate }}</span> - <span>{{ endDate }}</span></div>
      <h2>{{ roleTitle }}</h2>
      <div class="company">
        <img v-for="(icon, index) in companyIcon" :index="index" :src="icon.image"/>
      </div>
      <Skills :data="skills" size="small" white="true"/>
      <div class="description" v-html="description"></div>
  </article>
</template>

<script>
import marked from 'marked'
import Skills from '~/components/Skills.vue'

export default {
  props: {
    job: Object
  },
  components: {
    Skills
  },
  computed: {
    roleTitle() { return this.job.roleTitle },
    startDate() { return this.job.startDate },
    endDate() { return this.job.endDate || 'now' },
    description() { return marked(this.job.description) },
    skills() { return this.job.skills.map(({
      fields: {name, icon: { fields: { file: { url }}}}
    }) => ({ name, image: url }))},
    companyIcon() { return this.job.companyIcon.map(({
      fields: { file: { url }}
    }) => ({ image: url }))}
  }
}
</script>

<style lang="scss">
.job-block {
  padding: 20px;
  flex-direction: column;
  display: flex;

  h2 {
    text-align: center;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;

    &:before {
      content: '';
      height: 10px;
      margin-top: 15px;
      margin-bottom: 15px;
      background-color: rgba(74, 74, 74, 0.08);
      display: block;
    }
  }

  .company {
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: space-around;
    margin-bottom: 20px;

    > img {
      height: 100%;
    }
  }

  .date {
    display: flex;
    justify-content: center;

    > span {
      margin: 0px 10px;
    }
  }

  .description {
    ul {
      li {
        margin: 10px 0px;
      }
    }
  }
}
</style>

