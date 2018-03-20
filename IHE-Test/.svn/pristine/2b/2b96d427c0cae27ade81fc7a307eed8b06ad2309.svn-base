<template>
	<div class="form-wrap">
		<el-form ref="form"  label-width="180px">
			<el-row>
				<el-col :span="12">
					<el-card class="box-card" style="margin-left:20px;" >
						<div slot="header" class="clearfix">
							<span>FindDocuments</span>
						</div>
						<el-row>
							<el-col :span="20">
								<el-form-item label="PatientId">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="Status">
									<el-select v-model="form.region" placeholder="请选择" style="width:100%;">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="ClassCode">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="TypeCode">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="PracticeSettingCode">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="CreationTimeFrom">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value1"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="CreationTimeTo">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value2"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="ServiceStarTimeFrom">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value3"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="ServiceStarTimeTo">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value4"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="ServiceStopTimeFrom">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value5"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="ServiceStopTimeTo">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value6"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="HealthcareFacilityTpeyCode">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="EventCodeList">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="ConfidentialityCode">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="AuthorPerson">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="FormatCode">
									<el-input></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button  type="primary" @click="onSubmit">发送</el-button>
							</el-col>
						</el-row>
				</el-card>
				</el-col>
				<el-col :span="12">
					<el-card class="box-card" style="margin-left:20px" >
						<div slot="header" class="clearfix">
							<span>FindSubmissionSets</span>
						</div>
						<el-row>
							<el-col :span="20">
								<el-form-item label="PatientId">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="Status">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="SourceId">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="SubmissionTimeFrom">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value9"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="SubmissionTimeTo">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value10"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="AuthorPerson">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="ContentType">
									<el-input></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button  type="primary" @click="onSubmit">发送</el-button>
							</el-col>
						</el-row>
					</el-card>
					<el-card class="box-card" style="margin-left:20px;" >
						<div slot="header" class="clearfix">
							<span>FindFolders</span>
						</div>
						<el-row>
							<el-col :span="20">
								<el-form-item label="PatientId">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="Status">
									<el-input></el-input>
								</el-form-item>
								<el-form-item label="LastUpdateTimeFrom">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value11"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="LastUpdateTimeTo">
									<el-col :span="2">
									    <el-checkbox></el-checkbox>
									</el-col>
									<el-col :span="22">
										<el-date-picker style="width:100%;"
									       v-model="value12"
									       type="date"
									       placeholder="选择日期">
										</el-date-picker>
									 </el-col>
								</el-form-item>
								<el-form-item label="CodeList">
									<el-input></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="4">
								<el-button  type="primary" @click="onSubmit">发送</el-button>
							</el-col>
						</el-row>
					</el-card>
				</el-col>
			</el-row>
		</el-form>
		<div class="select-table" style="margin-left:20px;">
			<el-card>
				<div slot="header" class="clearfix" style="text-align: left; padding:5px 0;">
					<span>查询结果列表：</span>
					<el-button type="primary">清空</el-button>
				</div>
				<el-tabs  v-model="activeName" type="border-card" @tab-click="handleClick" >
					<el-tab-pane label="文档" name="first">
						<el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
							<el-table-column prop="date" label="文档创建时间">
							</el-table-column>
							<el-table-column prop="name" label="文档类型mineType">
							</el-table-column>
							<el-table-column prop="address" label="文档状态">
							</el-table-column>
							<el-table-column prop="address" label="文档唯一标识">
							</el-table-column>
							<el-table-column prop="address" label="文档库唯一标识">
							</el-table-column>
							<el-table-column prop="address" label="EntryID">
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="文件夹" name="second">
						<el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
							<el-table-column prop="date" label="文件夹需改时间">
							</el-table-column>
							<el-table-column prop="name" label="文件夹状态">
							</el-table-column>
							<el-table-column prop="address" label="文件夹唯一标识">
							</el-table-column>
							<el-table-column prop="address" label="EntryID">
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="提交集" name="third">
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
			</el-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			  const item = {
		        date: '2016-05-02',
		        name: '王小虎',
		        address: '上海市普陀区金沙江路 1518 弄'
		      };
					return {
				tableData: Array(20).fill(item),
				radio: '1',
				labelPosition: 'left',
				activeName: 'first',
				value1:'',
				value2:'',
				value3:'',
				value4:'',
				value5:'',
				value6:'',
				value7:'',
				value8:'',
				value9:'',
				value10:'',
				value11:'',
				value12:'',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formInline: {
					user: '',
					region: ''
				},
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				}
			};
		},
		methods: {
			handleClick(tab, event) {
				//      console.log(tab, event);
			},
			onSubmit() {
				console.log('submit!');
			}
		}
	};
</script>

<style>
</style>
