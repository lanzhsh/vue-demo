<template>
  <div>
    <!-- 富文本工具可配置 -->
    <script id="editor" type="text/plain"></script>
    <div class="save-editor">
      <el-button @click="save">保存编辑</el-button>
    </div>
    <div class="editor-text">富文本编辑输入内容为:{{ueText}}</div>
  </div>
</template>

<style>
.save-editor{
  margin-left:70%;
}
.editor-text{
  text-align: left;
}
</style>

<script>
  export default {
    name: 'UE',
    data () {
      return {
        editor: null,
        ueText:'',
      //   config:{
      //   BaseUrl: '',
      //   UEDITOR_HOME_URL: 'static/utf8-jsp/',
      //   toolbars: [
      //     ['fullscreen', 'source', 'undo', 'redo'],
      //     ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc']
      //   ]
      // }
      config:'',
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor('editor', this.config); // 初始化UE
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      },
      save(){
        this.ueText = UE.getEditor('editor').getContent();
        
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>