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
				<el-collapse v-model="activeCollapse">
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
		<!-- 表格 -->
		<div class="info-table">
			<el-tabs v-model="activeTabs" type="border-card" @tab-click="handleClick">
				<el-tab-pane label="文档" name="first">
					<el-table :data="tableData" border style="width:100%; text-align: left;" height="250" fit>
						<el-table-column prop="id" label="Id">
						</el-table-column>
						<el-table-column prop="creationTime" label="CreationTime">
						</el-table-column>
						<el-table-column prop="mimeType" label="MineType">
						</el-table-column>
						<el-table-column prop="status" label="Status">
						</el-table-column>
						<el-table-column prop="uniqueId" label="UniqueId">
						</el-table-column>
						<el-table-column prop="repositoryUniqueId" label="RepositoryUniqueId">
						</el-table-column>
						<!-- <el-table-column prop="address" label="EntryID">
						</el-table-column> -->
						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="retrieveDocument(scope.row)">获取</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
		</div>
		<!-- 表格end -->
	</div>
</template>

<script>
import { formatDuring, baseInfo } from "../../utils/common";
export default {
  data() {
    return {
      retrieveData: {
        repository_Url: "",
        uniqueId: "",
        repositoryUniqueId: "",
				status:""
      },
      tableData: [],
      loading: false,
      activeTabs: "first",
      activeCollapse: 1,
      searchForm: {
        repository_Url: "",
        register_Url: "",
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
        // patientId: [
        //   {
        //     required: true,
        //     message: "请输入patientId",
        //     tigger: "blur"
        //   }
        // ],
        // status: [
        //   {
        //     required: true,
        //     message: "请选择status",
        //     tigger: "blur"
        //   }
        // ],
      }
    };
  },
  created() {
    this.searchForm.patientId = baseInfo.patientId;
    this.searchForm.repository_Url = baseInfo.repository_Url;
    this.searchForm.register_Url = baseInfo.register_Url;
  },
  methods: {
    FindDocument(formName) {
      //查询文档
      const self = this;
      this.searchForm.repository_Url = baseInfo.repository_Url;
      this.searchForm.patientId = baseInfo.patientId;
      this.searchForm.register_Url = baseInfo.register_Url;
      console.log(this.searchForm.register_Url);
      self.$refs[formName].validate(valid => {
        if (valid) {
          //let url = "http://192.168.121.66:8080/consumer/queryDoc";
					//console.log(url);
					 let url = self.$apis.consumer.queryDoc
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
						console.log(res.data);
            //将返回的毫秒数转化为类似20071215132426格式
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].creationTime = formatDuring(res.data[i].creationTime);
            }
            console.log(res.data);
            this.tableData = res.data;
          });
        }
      });
    },
    retrieveDocument(row) {
      const self = this;
      this.retrieveData.repository_Url = baseInfo.repository_Url;
      this.retrieveData.uniqueId = row.uniqueId;
      this.retrieveData.repositoryUniqueId = row.repositoryUniqueId;
			this.retrieveData.status=row.status
      //let url = "http://192.168.121.66:8080/consumer/retrieveDocument";
			//console.log(url);
			let url = self.$apis.consumer.retrieveDocument
      let params = JSON.parse(JSON.stringify(this.retrieveData));
      console.log(params);
      self.$axios.post(url, params).then(res => {
        console.log(res);
				 if (res.data === "success") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error(res.data);
              }
      });
    },
    handleClick(tab, event) {},
    cancelForm(formName) {
      this.reset(formName);
    },
    reset(form) {
      //重置表单
      this.$refs[form].resetFields();
    }
  }
};
</script>
