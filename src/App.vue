<template>
  <div class="top-bar">
    <h1>Guillermo's App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
body{
  background: $backgroundColor;
  color: $textColor;
  font-family: Ubuntu;
  margin: 0;

  .top-bar{
    padding: 15px 30px;
    box-shadow: $shadow;
    margin-bottom: 50px;
  }

  a {
    color: $textColor;
  }
}
</style>
