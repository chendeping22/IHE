<template>
<el-form ref="infoForm" :model="infoForm" label-width="90px" class="form-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>地址</span>
      </div>
        <el-form-item label="IP" prop="IP">
          <el-input v-model="infoForm.IP"></el-input>
        </el-form-item>
        <el-form-item label="studyUID" prop="studyUID">
          <el-input v-model="infoForm.studyUID"></el-input>
        </el-form-item>
        <el-form-item label="seriesUID" prop="seriesUID">
          <el-input v-model="infoForm.seriesUID"></el-input>
        </el-form-item>
        <el-form-item label="objectUID" prop="objectUID">
          <el-input v-model="infoForm.objectUID"></el-input>
        </el-form-item>
    </el-card>
    <el-button type="primary" style="width:90px" @click="dicomLoad('infoForm')">dicom下载</el-button>
    <el-button style="margin-left: 10px;" type="success" @click="jpgLoad('infoForm')">jpg下载</el-button>
</el-form>
</template>
<script>
export default {
  data() {
    return {
      infoForm: {
        IP:"http://192.168.121.66:8080/wadoImage/getImage",
        requestType:"WADO",
        studyUID: "1.2.826.1.1.3680043.2.461.20091016115419.165761.200910160205",
        seriesUID: "1.2.840.113619.2.55.3.604688119.476.1254655055.555",
        objectUID: "1.2.840.113619.2.55.3.604688119.476.1254655055.556.23",
        contentType:""
      }
    };
  },
  methods: {
    dicomLoad(formName){
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let params = self.infoForm;
          params.contentType="application/dicom"
          let url=params.IP+"?"+"requestType="+params.requestType+"&"+"studyUID="+params.studyUID+"&"+"seriesUID="+params.seriesUID+"&"+"objectUID="+params.objectUID+"&"+"contentType="+params.contentType
          // console.log(params)
          // console.log(url)
          window.open(url)
        }
      });
    },
     jpgLoad(formName){
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let params = self.infoForm;
          params.contentType="application/jpg"
          let url=params.IP+"?"+"requestType="+params.requestType+"&"+"studyUID="+params.studyUID+"&"+"seriesUID="+params.seriesUID+"&"+"objectUID="+params.objectUID+"&"+"contentType="+params.contentType
          // console.log(params)
          // console.log(url)
          window.open(url)
        }
      });
    },
  }
};
</script>
<style scoped>

</style>

