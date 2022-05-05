<template>
  <header class="header">
    <nav class="main-nav">
      <ul>
        <li class="main-nav_list"><router-link to="/">ホーム</router-link></li>
        <li class="main-nav_list"><router-link to="/card">カード</router-link></li>
        <li class="main-nav_list"><router-link to="/collection">コレクション</router-link></li>
        <li class="main-nav_list"></li>
      </ul>      
    </nav>
    <small class="copyright">&copy;&ensp;midori</small>
  </header>
  <main class="main">
    <router-view/>
  </main>
</template>

<style lang="scss">
/* -- global value -- */
/** size **/
$large-margin: 60px;
$middle-padding: 30px;
$small-padding: 10px;

/** size **/
$background-color-white: white;
$background-color-black: #444;


/* -- base style -- */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  line-height: 1.7;
}
li {
  list-style: none;
}
a {
  color: white;
}

/** --  style -- **/
/* app */
#app {
  display: flex;
  justify-content: space-between;
  background: $background-color-black;
  color: white;
}

/** header **/
$header-size: 100px;
.header {
  width: $header-size;
  height: 100vh;
  border-right: 1px solid gray;
  background: black;
  text-align: center;

  .copyright {
    font-size: 0.5em;
  }
}

/** main **/
.main {
  width: calc(100% - $header-size);
  padding: $middle-padding;
}

/** widget-box **/
.widget-box {
  padding: $middle-padding;
  border-radius: 10px;
  background: gray;
}

/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
