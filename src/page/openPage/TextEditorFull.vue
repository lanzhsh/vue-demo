<template>
  <div>
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
  export default {
    name: 'UE',
    components:{VueEditor},
    data () {
      return {
        content: '<h1>我是标题1</h1>'
      }
    },
    mounted() {
    },
    methods: {
    },
    destroyed() {
    }
  }
</script>

<style>
.save-editor{
  margin-left:70%;
}
.editor-text{
  text-align: left;
}
</style>