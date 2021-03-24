<template>
  <div class="blog">
    
    <div>
        <ul>
            <li v-for="(item, index) in blogList" :key="index">
                <div >
                    <span class="blog-type">旅行日记</span>
                    <span class="blog-date">
                        {{item.date}}
                    </span>
                </div>
                <div class="title">
                    {{item.title}}
                </div>
                <div>
                    {{item.desc}}
                    <!-- <img src="../assets/imgs/logo.ico" alt=""> -->
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
      return {
          blogList: []
      }
  },
  created() {
      console.log('created')
      this.blogList = [
          {title: '我的个人博客', date: '2021-3-24', desc: '搭建我的博客中', blogType: '旅行日记'},
          {title: '我的个人博客', date: '2021-3-24', desc: '搭建我的博客中', blogType: '技术博客'},
          {title: '我的个人博客', date: '2021-3-24', desc: '搭建我的博客中', blogType: '心情杂谈'},
          {title: '我的个人博客', date: '2021-3-24', desc: '搭建我的博客中', blogType: '旅行日记'},
      ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog {
    text-align: left;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: block;
    margin: 20px;
    padding: 10px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 10px;
    background: white;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
    cursor: pointer;
    &:hover {
        border-color: green;
    }
    .blog-type {
        padding: 2px;
        font-size: 12px;
        color: white;
        border-radius: 4px;
        background: green;
        margin-right: 10px;
    }
    .blog-date {
        font-size: 12px;;
    }
    .title {
        font-size: 16px;
        margin: 10px 0;
    }
}
a {
    color: #42b983;
}
</style>
