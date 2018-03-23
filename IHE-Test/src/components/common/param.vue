<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="通讯参数配置改变" name="1">
      <el-form label-width="100px">
        <el-col :span="5" :offset="2">
          <el-form-item label="文档库" prop="systemAddr" style="text-align:left;margin-bottom:4px">
            <el-select v-model="value" placeholder="请选择文档库">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="注册库" prop="systemAddr" style="text-align:left">
            <el-select v-model="value" placeholder="请选择注册库">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="patientId" prop="patientId" style="text-align:left;margin-bottom:4px">
            <el-input v-model="input1">
            </el-input>
          </el-form-item>
          <el-form-item label="sourceID" prop="patientInfo">
            <el-input v-model="input1">
            </el-input>
          </el-form-item>

        </el-col>
        <el-col :span="9">
          <el-row>
            <el-col :span="8" :offset="1">
              <el-form-item label="SOAP版本">
                <el-radio-group v-model="SOAP">
                  <el-radio label="1.1">soap 1.1</el-radio>
                  <el-radio label="1.2">soap 1.2</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8" >
              <el-form-item label="TLS版本">
                <el-radio-group v-model="TLS">
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
      options: [
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
      SOAP: "2",
      TLS: "2"
    };
  }
};
</script>
<style scoped>
.el-radio + .el-radio {
  margin-left: 0;
}
</style>

