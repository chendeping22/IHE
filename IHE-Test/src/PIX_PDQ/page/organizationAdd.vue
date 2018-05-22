<template>
	<div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
		<el-form ref="addForm" :model="addForm" status-icon :rules="searchRules" label-width="100px" style="padding:0 20px">
			<el-row>
				<el-card class="box-card" style="border-right: none;">
					<div slot="header" class="clearfix">
						<span>添加机构</span>
					</div>
					<el-col :span="6">
						<el-form-item label="namespaceId" prop="namespaceId">
							<el-input v-model="addForm.namespaceId"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="universal" prop="universal">
							<el-input v-model="addForm.universal"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="oidType" prop="oidType">
							<el-input v-model="addForm.oidType"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="2">
						<el-button type="primary" style="width:80px;margin-left:16px;" @click="localSearchPatInfo('addForm')">添加</el-button>
					</el-col>
					<!-- 查询到数据显示 -->
					<el-table :data="organizations" height="200" border style="width: 100%">
						<el-table-column prop="id" width="180" label="id">
						</el-table-column>
						<el-table-column prop="namespaceId" label="namespaceId" width="180">
						</el-table-column>
						<el-table-column prop="oidType" width="80" label="oidType">
						</el-table-column>
						<el-table-column prop="universal"  label="universal">
						</el-table-column>
						<!--<el-table-column prop="operation" label="操作">
						</el-table-column>-->
					</el-table>
				</el-card>
			</el-row>
		</el-form>

	</div>
</template>
<script>
//	import { showLog, baseInfo, pathReset } from '../../utils/common';
	import { mapGetters, mapActions } from 'vuex';
	import Apis from '../../utils/apisPIX'
	export default {
		data() {
			return {
				loading: false,
				//				tableData: [],
				addForm: {
					namespaceId: '',
					universal: '',
					oidType: '',
					},
				searchRules: {
					namespaceId: [{
						required: true,
						message: '不能为空',
						trigger: 'blur'
					}],
					universal: [{
						required: true,
						message: '不能为空',
						trigger: 'blur'
					}],
					oidType: [{
						required: true,
						message: '不能为空',
						trigger: 'blur'
					}],
				},

			};
		},
		computed: {
			...mapGetters(['organizations']),
		},
		created() {
			this.getOrganizationAll().catch(err => {
				this.$message.error(err.message);
			});
		},
		methods: {
			...mapActions(['getOrganizationAll']),
			localSearchPatInfo(addForm) {
				this.$refs[addForm].validate((valid) => {
					if(valid) {
//						let params = { ...this.addForm
//						};

						Apis.Organization.add(this.addForm)
							.then(res => {
								console.log(res);
								if(res.status === 200) {
									this.$message({
										message: res.data.info,
										type: 'success',
									});
									this.getOrganizationAll();
								}
							})
							.catch(err => {
								console.log(err);
								this.$message.error(err.message);
							});
			} else {
				console.log('error submit!!');
				return false;
			}
		});
	}
	},
	};
</script>