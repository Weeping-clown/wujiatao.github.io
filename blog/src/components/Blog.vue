<template>
  <div class="blog">
    <el-container>
        <el-main class="blog-main">
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
        </el-main>
        <el-aside width="200px">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>个人信息</span>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>热门文章</span>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-aside>
    </el-container>
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

<style scoped lang="scss">
.blog {
    text-align: left;
}
ul {
    list-style-type: none;
    padding: 0;
}
.el-main.blog-main {
    padding: 0px 20px 0 0;
    li {
        display: block;
        margin: 0 0 20px 0;
        padding: 10px;
        background: white;
        border-radius: 4px;
        border: 1px solid #EBEEF5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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
}
// :deep(.box-card) {
//     margin-bottom: 20px;
//     .el-card__header {
//         // padding: 10px 20px;
//     }
// }
a {
    color: #42b983;
}
</style>
