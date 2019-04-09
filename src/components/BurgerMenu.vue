<template>
  <article>
    <input type="checkbox" />
    <section class="menuContainer">
      <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80">
        <path
              class="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -12" />
        <path
              class="line middle"
              d="m 30,50 h 40" />
        <path
              class="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 12" />
      </svg>
    </section>
    <ul class="menu"></ul>
  </article>
</template>

<script>
export default {
  props: {
    links: Array
  }
}
</script>

<style scoped lang="scss">
article {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 3;

  input {
    display: block;
    width: 44px;
    height: 44px;
    position: absolute;
    top: 16px;
    right: 15px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
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
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
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
  transition: transform 400ms;
}
.ham8 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
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

.menu {
  width: 60%;
  background-image: linear-gradient(to bottom right, #f2b754, orange);
  overflow: hidden;
  display: flex;
  padding: 0px;
  position: fixed;
  right: -60%;
  top: 0px;
  transition: right 0.4s;
  height: 118px;
  margin: 0px;
  height: 100%;
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
  background-image: linear-gradient(to bottom right, #f2b754, orange);
}
</style>

