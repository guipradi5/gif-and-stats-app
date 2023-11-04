<template>
  <div class="top-bar">
    <h1>Guillermo's App</h1>
    <nav>
      <router-link to="/">Gifs</router-link> |
      <router-link to="/coupons">Coupons</router-link>
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
  padding-bottom: 30px;

  .top-bar{
    padding: $topBarVerticalPadding 30px;
    height: $topBarHeight;
    box-shadow: $shadow;
    margin-bottom: $topBarBottomMargin;
  }

  h1{
    margin-top:0;
  }
  
  a {
    color: $textColor;
  }
}
</style>
