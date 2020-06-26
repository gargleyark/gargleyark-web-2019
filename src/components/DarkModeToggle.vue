<template>
  <div class="toggleWrapper" :class="isDarkMode ? 'invert' : ''">
    <input
      type="checkbox"
      class="dn"
      id="dn"
      @click="toggle"
      :checked="isDarkMode"
    />
    <label for="dn" class="toggle">
      <span class="toggle__handler">
        <span class="crater crater--1"></span>
        <span class="crater crater--2"></span>
        <span class="crater crater--3"></span>
      </span>
      <span class="star star--1"></span>
      <span class="star star--2"></span>
      <span class="star star--3"></span>
      <span class="star star--4"></span>
      <span class="star star--5"></span>
      <span class="star star--6"></span>
    </label>
  </div>
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
    getCookie(name) {
      const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    },
    toggle() {
      this.isDarkMode = !this.isDarkMode;
      this.setCookie('darkMode', this.isDarkMode, 100);

      if (this.isDarkMode) {
        document.body.parentElement.classList.add('darkMode');
      } else {
        document.body.parentElement.classList.remove('darkMode');
      }
    },
    setCookie(name, value, days = 0) {
      const d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie =
        name + '=' + value + ';path=/;expires=' + d.toGMTString();
    },
  },
  mounted() {
    const darkMode = this.getCookie('darkMode');

    const darkModeOnMac =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkMode === 'true') {
      document.body.parentElement.classList.add('darkMode');
    } else {
      document.body.parentElement.classList.remove('darkMode');
    }

    this.isDarkMode = darkModeOnMac || darkMode === 'true';
  },
  // computed: {
  //   hasDarkModeCookie() {
  //     const darkMode = this.getCookie('darkMode');
  //     this.isDarkMode = darkMode === 'true';

  //     if (darkMode === 'true') {
  //       document.body.parentElement.classList.add('darkMode');
  //     } else {
  //       document.body.parentElement.classList.remove('darkMode');
  //     }

  //     return darkMode === 'true';
  //   },
  // },
  data() {
    return {
      isDarkMode: false,
    };
  },
};
</script>

<style scoped lang="scss">
.toggleWrapper {
  margin-top: -60px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  padding: 0 200px;
  transform: translate3d(-50%, -50%, 0);

  input {
    position: absolute;
    left: -99em;
  }

  &.invert {
    filter: invert(1);
  }
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: #83d8ff;
  border-radius: 90px - 6;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:before {
    content: 'Light';
    position: absolute;
    left: -50px;
    top: 15px;
    font-size: 18px;
  }

  &:after {
    content: 'Mode';
    position: absolute;
    right: -48px;
    top: 15px;
    font-size: 18px;
    color: #749ed7;
  }
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 50px - 6;
  height: 50px - 6;
  background-color: gold;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);

  .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .crater--1 {
    top: 18px;
    left: 10px;
    width: 4px;
    height: 4px;
  }

  .crater--2 {
    top: 28px;
    left: 22px;
    width: 6px;
    height: 6px;
  }

  .crater--3 {
    top: 10px;
    left: 25px;
    width: 8px;
    height: 8px;
  }
}

.star {
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.star--1 {
  top: 10px;
  left: 35px;
  z-index: 0;
  width: 30px;
  height: 4px;
}

.star--2 {
  top: 18px;
  left: 28px;
  z-index: 1;
  width: 30px;
  height: 8px;
}

.star--3 {
  top: 27px;
  left: 40px;
  z-index: 0;
  width: 30px;
  height: 12px;
}

.star--4,
.star--5,
.star--6 {
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.star--4 {
  top: 16px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
}

.star--5 {
  top: 32px;
  left: 17px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px, 0, 0);
}

.star--6 {
  top: 36px;
  left: 28px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
}

input:checked {
  + .toggle {
    background-color: #749dd6;

    &:before {
      content: 'Dark';
      color: #749ed7;
    }

    &:after {
      color: #ffffff;
    }

    .toggle__handler {
      background-color: #ffe5b5;
      transform: translate3d(40px, 0, 0) rotate(0);

      .crater {
        opacity: 1;
      }
    }

    .star--1 {
      width: 2px;
      height: 2px;
    }

    .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }

    .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }

    .star--4,
    .star--5,
    .star--6 {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .star--4 {
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--5 {
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--6 {
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
}
</style>
