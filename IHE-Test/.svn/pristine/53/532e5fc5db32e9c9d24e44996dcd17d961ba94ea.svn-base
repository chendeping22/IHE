<template>
  <div class="form-wrap">
    <el-upload
      class="upload-demo"
      ref="upload"
      name="imageFile"
      action="/wadoImage/getPageImage"
      :before-remove="beforeRemove"
      :on-error="uploadError"
      :on-success="handleAvatarSuccess"
      :on-exceed="onEeceed"
      :limit="1"
      :show-file-list="true"
      :auto-upload="false">
  <el-button slot="trigger" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" type="success" @click="sendImage">上传</el-button>
</el-upload>
<template>
  <el-dialog title="imageFile" :visible.sync="centerDialogVisible" width="90%" append-to-body center>
    <iframe id="container">
    </iframe>
    <!-- 文档库http://192.168.121.66:8787/upload -->
  </el-dialog>
</template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false
    };
  },
  methods: {
    uploadError(err, file, fileList) {
      console.log(err, file, fileList);
    },
    handleAvatarSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      this.centerDialogVisible = true;
      this.$nextTick(function() {
        document.getElementById(
          "container"
        ).contentDocument.body.innerHTML = response;
      });
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onEeceed(files, fileList) {
      this.$message.warning(`一次只能上传一个文件！`);
    },
    sendImage() {
      const self=this
      self.$refs.upload.submit();
    }
  }
};
</script>
<style scoped>
iframe{
  width: 100%;
  height: 350px;
}
</style>

