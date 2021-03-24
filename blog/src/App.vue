<template>
  <div>
    <el-header>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/hello">About</router-link>
          </li>
        </ul>
      </div>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  height: 40px;
  text-align: center;
  ul {
    display: inline-block;
  }
  li {
    float: left;
    padding: 0 10px;
    line-height: 40px;
    list-style: none;
    color: #333;
    a {
      color: #333;
      text-decoration: none;
    }
  };
}
</style>
