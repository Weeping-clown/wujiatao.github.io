<template>
  <div class="content-box">
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
    <el-main class="main-box">
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
  .el-header {
    height: 600px !important;
    padding: 0px;
    background: url('./assets/imgs/1001999.jpg');
    background-size: cover;
    .nav {
      height: 40px;
      text-align: center;
      background: rgba(255,255,255, 0.3);
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
          font-size: 14px;
          color: #333;
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: #f96f1f;
        }
      };
    }
  }
  .el-main.main-box {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: -200px;
    background: white;
  }
}
</style>
