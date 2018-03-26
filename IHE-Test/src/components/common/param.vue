<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="通讯参数配置" name="1">
      <el-form ref="paramSetform" :model="paramSetform" label-width="100px">
        <el-col :span="5" :offset="1">
          <el-form-item label="文档库" prop="documentURL" style="text-align:left;">
            <el-select v-model="paramSetform.documentURL" placeholder="请选择文档库">
              <el-option v-for="item in documentUrlOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>

          </el-form-item>
          <el-form-item label="注册库" prop="registryURL" style="text-align:left">
            <el-select v-model="paramSetform.registryURL" placeholder="请选择注册库">
              <el-option v-for="item in registryUrlOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="病人Id" prop="patientId" style="text-align:left;">
            <el-input v-model="paramSetform.patientId">
            </el-input>
          </el-form-item>
          <el-form-item label="sourceID" prop="sourceID">
            <el-input v-model="paramSetform.sourceID">
            </el-input>
          </el-form-item>

        </el-col>
        <el-col :span="9">
          <el-row>
            <el-col :span="8" :offset="1">
              <el-form-item label="SOAP版本">
                <el-radio-group v-model="paramSetform.soap">
                  <el-radio label="1">soap 1.1</el-radio>
                  <el-radio label="2">soap 1.2</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="TLS版本">
                <el-radio-group v-model="paramSetform.tls">
                  <el-radio label="1">Version1</el-radio>
                  <el-radio label="2">Version2</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

        </el-col>

      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      paramSetform: {
        documentURL: "",
        registryURL: "",
        patientId: "",
        sourceID: "",
        soap: "2",
        tls: "2"
      },
      documentUrlOption: [
        {
          value: "选项1",
          label: "蓝网http"
        },
        {
          value: "选项2",
          label: "蓝网https"
        },
        {
          value: "选项3",
          label: "大会http"
        },
        {
          value: "选项4",
          label: "大会https"
        }
      ],
      registryUrlOption: [
        {
          value: "选项1",
          label: "蓝网http"
        },
        {
          value: "选项2",
          label: "蓝网https"
        },
        {
          value: "选项3",
          label: "大会http"
        },
        {
          value: "选项4",
          label: "大会https"
        }
      ]
    };
  }
};
</script>
<style scoped>
.el-radio + .el-radio {
  margin-left: 0;
}
</style>

