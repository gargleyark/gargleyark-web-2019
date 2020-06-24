<template>
  <article class="container">
    <input type="checkbox" />
    <section class="menuContainer">
      <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80">
        <path
          class="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -12"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 12"
        />
      </svg>
    </section>
    <section class="menu">
      <ul>
        <li v-for="link in menuLinks" :key="link.linkName">
          <g-link :to="link.linkUrl" v-if="!link.linkUrl.match(/http/)">{{
            link.linkName
          }}</g-link>
          <a :href="link.linkUrl" v-if="link.linkUrl.match(/http/)">{{
            link.linkName
          }}</a>
        </li>
      </ul>
      <article class="bottom">
        <SocialButtons :socialMediaButtons="socialIcons" />
      </article>
    </section>
  </article>
</template>

<script>
import SocialButtons from '~/components/SocialButtons';

export default {
  props: {
    menuLinks: Array,
    socialIcons: Array,
  },
  components: {
    SocialButtons,
  },
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 3;

  input {
    display: block;
    width: 57px;
    height: 57px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 300ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1;
}

input:checked ~ .menuContainer .hamRotate {
  transform: rotate(45deg);
}

input:checked ~ .menuContainer .hamRotate180 {
  transform: rotate(180deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 300ms, stroke-dashoffset 300ms;
  stroke: #fff;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.ham8 .top {
  stroke-dasharray: 40 160;
}
.ham8 .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 300ms;
}
.ham8 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 300ms, stroke-dashoffset 300ms;
}
input:checked ~ .menuContainer .ham8 .top {
  stroke-dashoffset: -64px;
}
input:checked ~ .menuContainer .ham8 .middle {
  transform: rotate(90deg);
}
input:checked ~ .menuContainer .ham8 .bottom {
  stroke-dashoffset: -64px;
}

input:checked ~ .menuContainer .line,
input:hover ~ .menuContainer .line {
  stroke: orange;
}

.menu {
  width: 60%;
  background-image: linear-gradient(to bottom right, #f2b754, orange);
  overflow: hidden;
  display: flex;
  padding: 0px;
  position: fixed;
  top: 0px;
  transition: right 0.3s;
  height: 118px;
  margin: 0px;
  height: 100%;
  flex-direction: column;
  width: 100%;
  right: -100%;

  @media only screen and (min-width: 768px) {
    width: 60%;
    right: -60%;
  }

  ul {
    padding-left: 60px;
    padding-bottom: 60px;
  }

  li {
    list-style: none;
    margin-top: 20px;
  }

  a {
    color: #fff;
    border-bottom: 5px solid #fff;
    transition: color 0.3s;
    font-size: 24px;

    @media only screen and (min-width: 1024px) {
      font-size: 40px;
    }

    &:hover {
      color: #333;
    }
  }

  .bottom {
    height: 100%;
    background: white;
    padding: 60px;
  }
}

input:checked ~ .menu {
  right: 0%;
}

.menuContainer {
  z-index: 1;
  align-items: center;
  display: flex;
  height: 60px;
  border-radius: 3px;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  width: 60px;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: orange;
  transition: background-color 0.3s;
}

input:checked ~ .menuContainer,
input:hover ~ .menuContainer {
  background-color: #fff;
}
</style>
