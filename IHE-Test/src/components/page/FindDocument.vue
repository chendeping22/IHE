<template>
	<div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
		<div class="search-content">
			<el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
				<el-row>
					<el-col :span="8">
						<el-form-item label="PatientId" prop="patientId" label-width="100px">
							<el-input v-model="searchForm.patientId" placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<el-form-item label="Status" prop="status" label-width="100px">
							<el-select v-model="searchForm.status" placeholder="请选择" style="width:100%;">
								<el-option label="Approved" value="Approved"></el-option>
								<el-option label="Deprecated" value="Deprecated"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<div class="search-btn">
							<el-button type="primary" @click="FindDocument('searchForm')">确认</el-button>
							<el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
						</div>
					</el-col>
				</el-row>
				<el-collapse v-model="activeNames">
					<el-collapse-item title="" name="1">
						<el-row>
							<el-col :span="12">
								<el-form-item label="ClassCode" prop="classCode">
									<el-input v-model="searchForm.classCode" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="TypeCode" prop="typeCode">
									<el-input v-model="searchForm.typeCode" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="PracticeSettingCode" prop="practiceSettingCode">
									<el-input v-model="searchForm.practiceSettingCode" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="HealthcareFacilityTypeCode" prop="healthcareFacilityTypeCode">
									<el-input v-model="searchForm.healthcareFacilityTypeCode" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="EventCodeList" prop="eventCodeList">
									<el-input v-model="searchForm.eventCodeList" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="ConfidentialityCode" prop="confidentialityCode">
									<el-input v-model="searchForm.confidentialityCode" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="AuthorPerson" prop="authorPerson">
									<el-input v-model="searchForm.authorPerson" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="FormatCode" prop="formatCode">
									<el-input v-model="searchForm.formatCode" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="CreationTimeFrom">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.creationTimeFrom" type="datetime" placeholder="选择日期时间" value-format="yyyyMMddHHmmss">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="CreationTimeTo">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.creationTimeTo" type="datetime" placeholder="选择日期时间" value-format="yyyyMMddHHmmss">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="ServiceStarTimeFrom">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.serviceStartTimeFrom" type="datetime" placeholder="选择日期时间" value-format="yyyyMMddHHmmss">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="ServiceStarTimeTo">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.serviceStartTimeTo" type="datetime" placeholder="选择日期时间" value-format="yyyyMMddHHmmss">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="ServiceStopTimeFrom">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.serviceStopTimeFrom" type="datetime" placeholder="选择日期时间" value-format="yyyyMMddHHmmss">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="ServiceStopTimeTo">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.serviceStopTimeTo" type="datetime" placeholder="选择日期时间" value-format="yyyyMMddHHmmss">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="returnType">
									<el-radio-group v-model="searchForm.returnType">
										<el-radio label="ObjectRef "></el-radio>
										<el-radio label="LeafClas"></el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
						</el-row>
					</el-collapse-item>
				</el-collapse>

			</el-form>

		</div>
		<div class="info-table">
			<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
				<el-tab-pane label="文档" name="first">
					<el-table :data="tableData" border style="width:100%; text-align: left;" height="250" fit>
						<el-table-column prop="id" label="Id">
						</el-table-column>
						<el-table-column prop="creationTime" label="文档创建时间">
						</el-table-column>
						<el-table-column prop="mimeType" label="文档类型mineType">
						</el-table-column>
						<el-table-column prop="status" label="文档状态">
						</el-table-column>
						<el-table-column prop="uniqueId" label="文档唯一标识">
						</el-table-column>
						<el-table-column prop="repositoryUniqueId" label="文档库唯一标识">
						</el-table-column>

						<!-- <el-table-column prop="address" label="EntryID">
						</el-table-column> -->
						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button type="text" size="small">获取</el-button>
								<el-button type="text" size="small">解析</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
import { config, urlName } from "../../utils/config";
import { urlTool, baseInfo } from "../../utils/common";
import { FindDocumentBus } from "../../utils/bus";
export default {
  data() {
    return {
      tableData: [],
      loading: false,
      activeName: "first",
      xdsJson: {},
      tableData: [],
      activeNames: "",
      searchForm: {
        repository_Url: "",
        patientId: "",
        status: "",
        classCode: "",
        typeCode: "",
        practiceSettingCode: "",
        healthcareFacilityTypeCode: "",
        eventCodeList: "",
        confidentialityCode: "",
        authorPerson: "",
        formatCode: "",
        creationTimeFrom: "",
        creationTimeTo: "",
        serviceStartTimeFrom: "",
        serviceStartTimeTo: "",
        serviceStopTimeFrom: "",
        serviceStopTimeTo: "",
        returnType: "LeafClas"
      },
      searchRules: {
        //      patientId: [],
        //      status: [],
        //      classCode: [],
        //      typeCode: [],
        //      practiceSettingCode: [],
        //      healthcareFacilityTypeCode: [],
        //      eventCodeList: [],
        //      confidentialityCode: [],
        //      authorPerson: [],
        //      formatCode: [],
        //      creationTimeFrom: [],
        //      creationTimeTo: [],
        //      serviceStarTimeFrom: [],
        //      serviceStarTimeTo: []
      }
    };
  },
  computed: {},
  created() {
    console.log(baseInfo);
    console.log("mounted");
    // FindDocumentBus.$on("queryDocument", data => {
    //   console.log(data);
    //   this.searchForm.patientId = data[1];
    //   this.searchForm.repository_Url = data[0];
    //   console.log("文档传值");
    // });
    this.searchForm.patientId = baseInfo.patientId;
    this.searchForm.repository_Url = baseInfo.repository_Url;
  },
  methods: {
    FindDocument(formName) {
      const self = this;
      console.log("111");
      // let params = JSON.parse(JSON.stringify(this.searchForm));
      // console.log(params);
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/consumer/queryDoc";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            this.tableData = res.data;
          });
        }
      });
    },
    handleClick(tab, event) {},
    cancelForm(formName) {
      //取消编辑机构
      // this.tableData = [];
      this.reset(formName);
    },
    reset(form) {
      //重置表单
      this.$refs[form].resetFields();
    }
  }
};
</script>
