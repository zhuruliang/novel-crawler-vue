<template>
<div>
  <p>{{collect.collect}}</p>
<ul>
  <li v-for="{name, link} in collect.chapters">
    <!--<a :href="link">{{name}}</a>-->
    <router-link :to="{name: 'chapter', params: {category: category, index: index, chapter: link, bookname: bookname}}">{{name}}</router-link>
  </li>
</ul>
</div>
</template>

<script>
export default {
  name: 'BookDetailChapter',
  props: ['collect', 'bookname'],
  data () {
    return {
      category: this.$route.params.category,
      index: this.$route.params.index
    }
  },
  created () {
    console.log(111)
  }
}
</script>

<style lang="stylus" scoped>
p
 height: 30px
 font-size: 16px
 background-color: #E1ECED
 display: flex
 align-items: center
 justify-content: center
 margin: 5px 0 5px 0
ul
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  li
    width: 33.3%
    text-align: left
    height: 25px
    line-height: 200%
    border-bottom: 1px dashed #CCC
    display: flex
    overflow: hidden
    a
      color: #444444
      text-decoration: none
      font-size: 12px
      justify-content: center
      text-indent: 10px
</style>