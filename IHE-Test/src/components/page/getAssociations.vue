<template>
  <!-- <div class="lw-container">
    <div class="lw-table"> -->
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
								<el-option label="Approved" value="urn:oasis:names:tc:ebxml-regrep:StatusType:Approved"></el-option>
								<el-option label="Deprecated" value="urn:oasis:names:tc:ebxml-regrep:StatusType:Deprecated"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<div class="search-btn center">
							<el-button type="primary" @click="FindDocument('searchForm')">确认</el-button>
							<el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
						</div>
					</el-col>
				</el-row>
          </el-form>
           <div class="info-table">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
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
             <el-tab-pane label="关联表" name="four">
              <el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
                <el-table-column prop="date" label="查找条件ID">
                </el-table-column>
                <el-table-column prop="name" label="关系类型">
                </el-table-column>
                <el-table-column prop="address" label="sourceObject">
                </el-table-column>
                <el-table-column prop="address" label="targetObject">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
        </div>
      </div>
    <!-- </div>
  </div> -->
</template>
<script>
export default {
  data(){
    return{
      activeName:"first",
      tableData: [
        {
         
        }],
      loading: false,
      searchForm:{
        uuid:"",
        homeCommunityId:""
      },
      searchRules:{
        uuid:[],
        homeCommunityId:[]
      }
    }
  },
  methods:{
    search() {},
     cancelForm(formName) {
      //取消编辑机构
      // this.tableData = [];
      this.reset(formName);
    },
    reset(form) {
      //重置表单
      this.$refs[form].resetFields();
    },
    handleClick(){
      
    }
  },

}
</script>

