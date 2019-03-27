<template>
  <div class="layout">
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav> -->
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: 'Palanquin', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1,
h2,
h3,
h4 {
  font-family: 'Overpass', sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  color: #f2b754;
  text-decoration: none;
  border-bottom: 1px solid #444;
  margin-bottom: 1px;
  cursor: pointer;
}

.layout {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2b754;
}

.nav__link {
  margin-left: 20px;
}

p,
ul,
li,
a {
  font-size: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
}
</style>
