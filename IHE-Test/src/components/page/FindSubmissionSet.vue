<template>
	<div class="" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
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
							<el-button type="primary" @click="FindSubmissionSets('searchForm')">确认</el-button>
							<el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
						</div>
					</el-col>
				</el-row>
				<el-collapse v-model="activeNames">
					<el-collapse-item title="" name="1">
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="AuthorPerson" prop="authorPerson">
									<el-input v-model="searchForm.authorPerson" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="ContentType" prop="contentType">
									<el-input v-model="searchForm.contentType" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="SubmissionTimeFrom">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.submissionTimeFrom" type="date" placeholder="选择日期">
											</el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="SubmissionTimeTo">
									<el-row>
										<el-col :span="2">
											<el-checkbox></el-checkbox>
										</el-col>
										<el-col :span="22">
											<el-date-picker style="width:100%;" v-model="searchForm.submissionTimeTo" type="date" placeholder="选择日期">
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
							<el-col :span="12">
								<el-form-item label="SourceId" prop="sourceId">
									<el-input v-model="searchForm.sourceId" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-collapse-item>
				</el-collapse>

			</el-form>

		</div>
		<div class="info-table">
			<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
				<el-tab-pane label="提交集" name="first">
					<el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
						<el-table-column prop="submissionTime" label="提交时间">
						</el-table-column>
						<el-table-column prop="status" label="提交集状态">
						</el-table-column>
						<el-table-column prop="uniqueId" label="提交集唯一标识">
						</el-table-column>
						<el-table-column prop="sourceId" label="sourceId">
						</el-table-column>
						<el-table-column prop="id" label="EntryID">
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
import { FindSubmissionBus } from "../../utils/bus";
import { baseInfo } from "../../utils/common";
export default {
  data() {
    return {
      value1: "",
      tableData: [],
      loading: false,
      activeName: "first",
      activeNames: "",
      searchForm: {
        repository_Url: "",
        patientId: "",
        status: "",
        authorPerson: "",
        contentType: "",
        submissionTimeFrom: "",
        submissionTimeTo: "",
        sourceId: "",
        returnType: "LeafClas"
      },
      searchRules: {
        patientId: [],
        status: [],
        authorPerson: [],
        contentType: [],
        submissionTimeFrom: [],
        submissionTimeTo: [],
        sourceId: []
      }
    };
  },
  created() {
    this.searchForm.patientId = baseInfo.patientId;
    this.searchForm.repository_Url = baseInfo.repository_Url;
    this.searchForm.sourceId = baseInfo.sourceId;
  },
  computed: {},
  methods: {
    FindSubmissionSets(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/consumer/querySubmissionSet";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res);
            this.tableData = res.data;
          });
        }
      });
    },
    search() {},
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
