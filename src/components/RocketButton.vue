<template>
  <a @click="launch" :class="stage">
    <Rocket class="rocket" />
    <Smoke class="smoke" />
    <Fire class="fire" />
  </a>
</template>

<script>
import Rocket from './assets/rocket-solo.svg';
import Fire from './assets/fire.svg';
import Smoke from './assets/smoke.svg';

export default {
  props: {
    scrollAmount: [String, Number],
  },
  components: {
    Rocket,
    Fire,
    Smoke,
  },
  methods: {
    launch() {
      const spaceImage = document.getElementById('spaceImage');
      this.stage = 'one';
      setTimeout(() => {
        this.stage = 'two';
        setTimeout(() => {
          this.stage = 'three';
          setTimeout(() => {
            if (spaceImage) {
              spaceImage.classList.add('show');
            }
            window.scrollTo({
              top: this.scrollAmount,
              left: 0,
              behavior: 'smooth',
            });
            setTimeout(() => {
              this.stage = 'zero';
            }, 500);
            setTimeout(() => {
              if (spaceImage) {
                spaceImage.classList.remove('show');
              }
            }, 4000);
          }, 500);
        }, 500);
      }, 500);
    },
  },
  data() {
    return {
      stage: 'zero',
    };
  },
};
</script>

<style scoped lang="scss">
a {
  margin: auto;
  display: block;
  width: 50px;
  height: 50px;
  // border: 2px solid #279df9;
  border-radius: 25px;
  border: none;
  transition: background-color 0.5s, border 0.5s;
  background-color: #ffffff;
  position: relative;
}

svg {
  height: 100%;
  position: absolute;
  width: 100%;
}

.rocket {
  margin-bottom: 0px;
  transition: margin-top 0.5s;
}

.smoke {
  bottom: -10px;
  width: 100px;
  margin-left: -25px;
  transition: opacity 0.5s;
}

.fire {
  width: 8px;
  bottom: -7px;
  height: 18px;
  left: 21px;
  transition: opacity 0.5s, height 0.5s;
  animation: anim 0.5s steps(2) infinite;
}

.zero .smoke,
.zero .fire,
.one .fire {
  opacity: 0;
}

.one .smoke,
.two .smoke,
.three .smoke {
  opacity: 0.7;
}

.two .fire,
.three .fire {
  opacity: 1;
}

.three .fire {
  height: 115px;
}

.one .rocket,
.two .rocket {
  margin-top: -5px;
}

.three .rocket {
  margin-top: -100px;
}

@keyframes anim {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
