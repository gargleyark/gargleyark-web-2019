<template>
  <article class="job-block">
    <section class="job-text">
      <div class="company">
        <img v-for="(icon, index) in companyIcon" :index="index" :src="icon.image" :alt="icon.title">
      </div>
      <div class="date">
        <span>{{ startDate }}</span> -
        <span>{{ endDate }}</span>
      </div>
      <h2>{{ roleTitle }}</h2>
      <div class="description" v-html="description"></div>
    </section>
    <section class="job-skills">
      <Skills :data="skills" size="medium" white="true"/>
    </section>
  </article>
</template>

<script>
import marked from "marked";
import Skills from "~/components/Skills";

export default {
  props: {
    job: Object
  },
  components: {
    Skills
  },
  methods: {
    getDate(dateString) {
      if (!dateString) {
        return "now";
      }

      const dateNums = dateString.match(/\d+/g);
      const month = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
      }[dateNums[1]];
      return `${month} ${dateNums[0]}`;
    }
  },
  computed: {
    roleTitle() {
      return this.job.roleTitle;
    },
    startDate() {
      return this.getDate(this.job.startDate);
    },
    endDate() {
      return this.getDate(this.job.endDate);
    },
    description() {
      return marked(this.job.description);
    },
    skills() {
      return this.job.skills.map(
        ({
          fields: {
            name,
            icon: {
              fields: {
                file: { url }
              }
            }
          }
        }) => ({ name, image: url })
      );
    },
    companyIcon() {
      return this.job.companyIcon.map(
        ({
          fields: {
            file: { url },
            title
          }
        }) => ({ image: url, title })
      );
    }
  }
};
</script>

<style lang="scss">
.job-block {
  padding: 20px;
  flex-direction: column;
  display: flex;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  .job-text {
    @media only screen and (min-width: 768px) {
      padding: 40px;
      width: 60%;
    }
  }

  .job-skills {
    flex-direction: row-reverse;

    @media only screen and (min-width: 768px) {
      width: 40%;
      padding: 40px;
      max-width: 360px;
      margin: auto;
    }
  }

  h2 {
    text-align: center;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;

    &:before {
      content: "";
      height: 5px;
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
    justify-content: center;
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

