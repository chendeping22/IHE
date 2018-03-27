<template>
  <el-container>
    <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" style="width:100%">
      <h5>WADO参数信息</h5>
      <el-row>
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Dicom清单信息预览</span>
            </div>
            <div class="DicomInfo">

            </div>

          </el-card>
        </el-col>
        <el-col :span="12">
           <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>WADO网址信息预览</span>
            </div>
            <div class="DicomInfo">

            </div>

          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-container>

</template>



<script>
export default {
  data() {
    return {
      loading:false
    };
  },
  methods: {}
};
</script>
<style scoped>
.DicomInfo {
  border: 1px dashed #ccc;
  height: 500px;
  overflow: hidden;
}
h5{
  margin: 0;
  text-align: left;
  color: #c0c4cc
}
</style>


