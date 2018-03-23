<template>
			<div class="" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
				<div class="search-content">

					<el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
						<el-row :gutter="12">
							<el-col :span="12">
								<el-form-item label="PatientId" prop="patientId">
									<el-input v-model="searchForm.patientId" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="Status" prop="status">
									<el-input v-model="searchForm.status" placeholder=""></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						 <el-collapse v-model="activeNames">
              <el-collapse-item title="更多参数查询" name="1">
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
								<el-form-item label="SourceId" prop="sourceId">
									<el-input v-model="searchForm.sourceId" placeholder=""></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
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
						</el-row>
              </el-collapse-item>
            </el-collapse>
				
					</el-form>
					<div class="search-btn center">
						<el-button type="primary" @click="search">确认</el-button>
						<el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
					</div>
				</div>
				<div class="info-table">
					<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
						<el-tab-pane label="提交集" name="first">
							<el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
								<el-table-column prop="date" label="提交时间">
								</el-table-column>
								<el-table-column prop="name" label="提交集状态">
								</el-table-column>
								<el-table-column prop="address" label="提交集唯一标识">
								</el-table-column>
								<el-table-column prop="address" label="sourceId">
								</el-table-column>
								<el-table-column prop="address" label="EntryID">
								</el-table-column>
							</el-table>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      tableData: [],
      loading: false,
      activeName: "first",
      searchForm: {
        patientId: "",
        status: "",
        authorPerson: "",
        contentType: "",
        submissionTimeFrom: "",
        submissionTimeTo: "",
        sourceId: ""
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
  created() {},
  computed: {},
  methods: {
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
