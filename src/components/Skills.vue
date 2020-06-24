<template>
  <div class="skills" :class="[size, { white: white }]">
    <a
      v-for="skill in data"
      :index="skill.name"
      class="skill"
      :title="skill.name"
      :key="skill.name"
    >
      <img :alt="skill.name" :src="skill.image" />
    </a>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  props: {
    data: Array,
    size: String,
    white: String,
  },
};
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

      &:nth-child(9) {
        display: block;
        @media only screen and (min-width: 1024px) {
          display: none;
        }
        @media only screen and (min-width: 1400px) {
          display: block;
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

  &.medium {
    justify-content: center;

    @media only screen and (min-width: 768px) {
      justify-content: flex-start;
    }

    .skill {
      width: 50px;
      margin: 10px;

      &:hover {
        width: 70px;
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
