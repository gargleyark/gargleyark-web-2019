<template>
  <div class="skills" :class="[size, {white: white}]">
    <a  v-for="(skill, i) in skills" :index="skill.name" class="skill" :title="skill.name">
      <g-image :alt="skill.name" :src="skill.image" />
    </a>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    skills: Array,
    size: String,
    white: String
  },
}
</script>

<style scoped lang="scss">
.skills {
  display: flex;
  flex-wrap: wrap;

  .skill {
    display: block;
    border-bottom: none;
    transition: margin 0.3s, width 0.3s;

    > img {
      width: 100%;
    }
  }

  &.large {
    justify-content: space-between;

    .skill {
      width: 50px;
      margin: 20px;

      @media only screen and (min-width: 768px) {
        margin: 22px;
        width: 70px;

        &:hover {
          margin: 12px;
          width: 90px;
        }
      }

      @media only screen and (min-width: 1024px) {
        margin: 45px;

        &:hover {
          margin: 35px;
        }
      }
    }
  }

  &.small {
    .skill {
      width: 30px;
      margin: 10px;

      &:hover {
        width: 50px;
        margin: 0px;
      }
    }
  }

  &.white {
    .skill {
      > img {
        background: white;
        border-radius: 50%;
      }
    }
  }
}
</style>

