<template>
  <div class="custom-editor">
    <div class="editor-inp" ref="customEditor" contenteditable="true"></div>

    <div class="editor-img">
      <el-upload
        class="upload-demo"
        action
        :before-upload="beforeAvatarUpload"
        :http-request="httpRequest"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "customEditor",

  data() {
    return {};
  },

  methods: {
    beforeAvatarUpload() {
      console.log("customEditor值为", this.$refs.customEditor);
      this.$refs.customEditor.innerHTML +=
        '<img class="inp-img" src="/static/img/avactor.66c4498.png">';
    },

    httpRequest() {}
  }
};
</script>

<style lang='scss'>
.custom-editor {
  width: 500px;
  height: 500px;
  .editor-inp {
    height: 400px;
    border: 1px solid #409eff;
    overflow: auto;
    img{
      width: 300px;
    }
  }
}
  .inp-img {
  }
</style>