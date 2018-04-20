<template>
  <el-container>
    <div size="medium" style="width:100%" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
      <el-button type="primary" @click="AddServer" style="float:left;margin-bottom:20px">新增</el-button>
      <el-button type="primary" @click="openKView">高级阅片</el-button>
      <!-- 新增表单 -->
      <el-dialog title="服务端地址配置" :visible.sync="addDialogFormVisible">
        <el-form ref="addForm" :model="addForm" :rules="infoRules" label-width="110px">
          <el-form-item label="厂家" prop="company">
            <el-input v-model="addForm.company"></el-input>
          </el-form-item>
          <el-form-item label="文档库-http" prop="repositoryHttp">
            <el-input v-model="addForm.repositoryHttp"></el-input>
          </el-form-item>
          <el-form-item label="注册库-http" prop="registerHttp">
            <el-input v-model="addForm.registerHttp"></el-input>
          </el-form-item>
          <el-form-item label="文档库-https" prop="repositoryHttps">
            <el-input v-model="addForm.repositoryHttps"></el-input>
          </el-form-item>
          <el-form-item label="注册库-https" prop="registerHttps">
            <el-input v-model="addForm.registerHttps"></el-input>
          </el-form-item>
          <el-form-item label="病人ID" prop="patientId">
            <el-input v-model="addForm.patientId"></el-input>
          </el-form-item>
          <el-form-item label="文档库ID" prop="repositoryId">
            <el-input v-model="addForm.repositoryId"></el-input>
          </el-form-item>
          <el-form-item label="SourceID" prop="sourceId">
            <el-input v-model="addForm.sourceId"></el-input>
          </el-form-item>
          <el-form-item label="WADO服务" prop="wadoService">
            <el-input v-model="addForm.wadoService"></el-input>
          </el-form-item>
          <el-form-item label="AETitle" prop="aetitle">
            <el-input v-model="addForm.aetitle"></el-input>
          </el-form-item>
          <el-form-item label="contentType" prop="contentType">
            <!-- <el-input v-model="addForm.contentType"></el-input> -->
            <el-select v-model="addForm.contentType" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="info" @click="cancelAddForm('addForm')">重置</el-button>
          <el-button type="primary" @click="saveData('addForm')">保存</el-button>
        </div>
      </el-dialog>
      <!-- 新增表单 -->

      <!-- 修改表单 -->
      <el-dialog title="服务端地址配置" :visible.sync="changeDialogFormVisible">
        <el-form ref="changeForm" :model="changeForm" :rules="infoRules" label-width="110px">
          <el-form-item label="厂家" prop="company">
            <el-input v-model="changeForm.company"></el-input>
          </el-form-item>
          <el-form-item label="文档库-http" prop="repositoryHttp">
            <el-input v-model="changeForm.repositoryHttp"></el-input>
          </el-form-item>
          <el-form-item label="注册库-http" prop="registerHttp">
            <el-input v-model="changeForm.registerHttp"></el-input>
          </el-form-item>
          <el-form-item label="文档库-https" prop="repositoryHttps">
            <el-input v-model="changeForm.repositoryHttps"></el-input>
          </el-form-item>
          <el-form-item label="注册库-https" prop="registerHttps">
            <el-input v-model="changeForm.registerHttps"></el-input>
          </el-form-item>
          <el-form-item label="病人ID" prop="patientId">
            <el-input v-model="changeForm.patientId"></el-input>
          </el-form-item>
          <el-form-item label="文档库ID" prop="repositoryId">
            <el-input v-model="changeForm.repositoryId"></el-input>
          </el-form-item>
          <el-form-item label="SourceID" prop="sourceId">
            <el-input v-model="changeForm.sourceId"></el-input>
          </el-form-item>
          <el-form-item label="WADO服务" prop="wadoService">
            <el-input v-model="changeForm.wadoService"></el-input>
          </el-form-item>
          <el-form-item label="AETitle" prop="aetitle">
            <el-input v-model="changeForm.aetitle"></el-input>
          </el-form-item>
          <el-form-item label="contentType" prop="contentType">
            <el-input v-model="changeForm.contentType"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="info" @click="cancelChangeForm('changeForm')">重置</el-button>
          <el-button type="primary" @click="changeData('changeForm')">保存</el-button>
        </div>
      </el-dialog>
      <!-- 修改表单 -->
      <template>
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%" @row-contextmenu="configDate" id="set">
          <el-table-column fixed prop="company" label="厂家" width="100">
          </el-table-column>
          <el-table-column prop="repositoryHttps" label="文档库-https" width="200">
          </el-table-column>
          <el-table-column prop="registerHttps" label="注册库-https" width="200">
          </el-table-column>
          <el-table-column prop="repositoryHttp" label="文档库-http" width="200">
          </el-table-column>
          <el-table-column prop="registerHttp" label="注册库-http" width="200">
          </el-table-column>
          <el-table-column prop="patientId" label="病人ID" width="120">
          </el-table-column>
          <el-table-column prop="repositoryId" label="文档库ID" width="120">
          </el-table-column>
          <el-table-column prop="wadoService" label="wado服务" width="120">
          </el-table-column>
          <el-table-column prop="aetitle" label="AETitle" width="120">
          </el-table-column>
          <el-table-column prop="sourceId" label="sourceId" width="120">
          </el-table-column>
          <el-table-column prop="contentType" label="contentType" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="140">
            <template slot-scope="scope">
              <el-button @click="changeInfo(scope.$index,scope.row)" type="text">修改</el-button>
              <el-button @click="delInfo(scope.$index,scope.row)" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格end -->
      </template>

      <!--自定义右键菜单html代码-->
      <div id="menu">
        <div class="menu" id="repositoryHttp">文档库-http(H)</div>
        <div class="menu" id="registerHttp">注册库-http(T)</div>
        <div class="menu" id="repositoryHttps">文档库-https(P)</div>
        <div class="menu" id="registerHttps">注册库-https(S)</div>
        <div class="menu" id="documentHttp">设为影响文档源(Z)</div>
      </div>
    </div>
  </el-container>

</template>



<script>
import { serverListBus } from "../../utils/bus";
import { baseInfo } from "../../utils/common";
export default {
  data() {
    return {
      loading: false,
      tableData: [],
      options: [
        {
          value: "application/dicom",
          label: "application/dicom"
        },
        {
          value: "image/jpeg",
          label: "image/jpeg"
        },
        {
          value: "application%2Fdicom",
          label: "application%2Fdicom"
        }
      ],
      addForm: {
        id: "",
        company: "",
        repositoryHttp: "",
        registerHttp: "",
        repositoryHttps: "",
        registerHttps: "",
        patientId: "",
        repositoryId: "",
        wadoService: "",
        aetitle: "",
        sourceId: "",
        contentType: ""
      },
      changeForm: {
        id: "",
        company: "",
        repositoryHttp: "",
        registerHttp: "",
        repositoryHttps: "",
        registerHttps: "",
        patientId: "",
        repositoryId: "",
        wadoService: "",
        aetitle: "",
        sourceId: "",
        contentType: ""
      },
      delForm: {
        id: ""
      },
      configForm: {
        id: ""
      },
      infoRules: {
        manuFacturer: [
          {
            required: true,
            message: "请输入厂家名称",
            tigger: "blur"
          }
        ],
        patientID: [
          {
            required: true,
            message: "请输入病人ID",
            tigger: "blur"
          }
        ],
        DocLibraryID: [
          {
            required: true,
            message: "请输入文件文档库ID",
            tigger: "blur"
          }
        ],
        SourceID: [
          {
            required: true,
            message: "请输入SourceID",
            tigger: "blur"
          }
        ],
        DocLibraryHttp: [
          {
            required: true,
            message: "请输入文档库HTTP",
            tigger: "blur"
          }
        ],
        regLibraryHttp: [
          {
            required: true,
            message: "请输入注册库HTTP",
            tigger: "blur"
          }
        ],
        DocLibraryHttps: [
          {
            required: true,
            message: "请输入文档库HTTPS",
            tigger: "blur"
          }
        ],
        regLibraryHttps: [
          {
            required: true,
            message: "请输入注册库HTTPS",
            tigger: "blur"
          }
        ]
      },
      addDialogFormVisible: false,
      changeDialogFormVisible: false
    };
  },
  created() {
    //获取表单数据
    this.getData();
  },
  mounted() {
    //关闭右键菜单，很简单
    window.onclick = function(e) {
      //用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
      //document.queryelector("#menu").style.width = 0;
      var myMenu = document.getElementById("menu");
      if (myMenu) {
        myMenu.style.width = 0;
      }
    };
  },
  methods: {
    getData() {
      let self = this;
      let url = "/systemConfig/queryAll";
      self.$axios.post(url).then(res => {
        this.tableData = res.data;
      });
    },
    saveData(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/systemConfig/addAndUpdate";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.addForm));
          console.log(params);
          self.$axios
            .post(url, params)
            .then(res => {
              if (res.status === 200) {
                this.$message.success(res.data);
                this.addDialogFormVisible = false;
                this.getData();
              } else {
                this.$message.error(res.data);
              }
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    changeData(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/systemConfig/addAndUpdate";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.changeForm));
          console.log(params);
          self.$axios
            .post(url, params)
            .then(res => {
              if (res.status === 200) {
                this.$message.success(res.data);
                this.changeDialogFormVisible = false;
                this.getData();
              } else {
                this.$message.error(res.data);
              }
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    changeInfo(index, row) {
      console.log(index, row);
      this.changeDialogFormVisible = true;
      const self = this;
      self.changeForm.id = row.id;
      self.changeForm.company = row.company;
      self.changeForm.repositoryHttp = row.repositoryHttp;
      self.changeForm.registerHttp = row.registerHttp;
      self.changeForm.repositoryHttps = row.repositoryHttps;
      self.changeForm.registerHttps = row.registerHttps;
      self.changeForm.patientId = row.patientId;
      self.changeForm.repositoryId = row.repositoryId;
      self.changeForm.wadoService = row.wadoService;
      self.changeForm.aetitle = row.aetitle;
      self.changeForm.sourceId = row.sourceId;
      self.changeForm.contentType = row.contentType;
    },
    openKView() {
      let str =
        "KView:////info=studyuid=1.2.826.0.1.3680043.2.461.9781923.2589951579<<|>>userid=666666<<|>>pacssvrip=192.168.171.229<<|>>pacssvrport=7008<<|>>pacssvrip1=<<|>>pacssvrport1=<<|>>security=1";
      window.open(str, "_self");
    },
    delInfo(index, row) {
      const self = this;
      let url = "/systemConfig/delete";
      self.delForm.id = row.id;
      let params = JSON.parse(JSON.stringify(this.delForm));
      console.log(params);
      self.$axios
        .post(url, params)
        .then(res => {
          this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              if (res.data === "删除成功") {
                this.$message.success(res.data);
                this.getData();
                // setTimeout(function() {
                //   document.location.reload(true);
                // }, 3000);
              } else {
                this.$message.error(res.data);
              }
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除"
              });
            });

          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    cancelAddForm(cancelForm) {
      this.$refs[cancelForm].resetFields();
    },
    cancelChangeForm(cancelForm) {
      this.$refs[cancelForm].resetFields();
    },
    AddServer() {
      this.addDialogFormVisible = true;
    },
    configDate(row, e) {
      //取消默认的浏览器自带右键 很重要！！
      e.preventDefault();
      //获取我们自定义的右键菜单
      var menu = document.querySelector("#menu");
      //根据事件对象中鼠标点击的位置，进行定位
      menu.style.left = e.clientX + "px";
      menu.style.top = e.clientY + "px";
      //改变自定义菜单的宽，让它显示出来
      menu.style.width = "140px";
      // const self = this;
      // self.configForm.id = row.id;
      // console.log(row.id);
      this.fn_repositoryHttp(row);
      this.fn_registerHttp(row);
      this.fn_repositoryHttps(row);
      this.fn_registerHttps(row);

      // this.meunOne(row);
    },
    fn_repositoryHttp(row) {
      var repositoryHttp = document.querySelector("#repositoryHttp");
      repositoryHttp.onclick = function() {
        serverListBus.$emit("repositoryHttpChild", row.repositoryHttp);
        baseInfo.repository_Url = row.repositoryHttp;
      };
    },
    fn_registerHttp(row) {
      var registerHttp = document.querySelector("#registerHttp");
      registerHttp.onclick = function() {
        serverListBus.$emit("registerHttpChild", [
          row.registerHttp,
          row.patientId,
          row.sourceId
        ]);
        baseInfo.register_Url=row.registerHttp;
        baseInfo.patientId = row.patientId;
        baseInfo.sourceId = row.sourceId;
      };
    },
    fn_repositoryHttps(row) {
      var repositoryHttps = document.querySelector("#repositoryHttps");
      repositoryHttps.onclick = function() {
        serverListBus.$emit("repositoryHttpsChild", row.repositoryHttps);
        baseInfo.repository_Url = row.repositoryHttps;
      };
    },
    fn_registerHttps(row) {
      var registerHttps = document.querySelector("#registerHttps");
      registerHttps.onclick = function() {
        serverListBus.$emit("registerHttpsChild", [
          row.registerHttps,
          row.patientId,
          row.sourceId
        ]);
        baseInfo.register_Url=row.registerHttps;
        baseInfo.patientId = row.patientId;
        baseInfo.sourceId = row.sourceId;
      };
    },
    customMenu(row) {
      //js自定义菜单功能
      var sss = document.getElementById("set");
      sss.oncontextmenu = function(e) {
        //取消默认的浏览器自带右键 很重要！！
        e.preventDefault();

        //获取我们自定义的右键菜单
        var menu = document.querySelector("#menu");

        //根据事件对象中鼠标点击的位置，进行定位
        menu.style.left = e.clientX + "px";
        menu.style.top = e.clientY + "px";

        //改变自定义菜单的宽，让它显示出来
        menu.style.width = "140px";
      };
    }
  }
};
</script>


<style>
/*css代码*/
#menu {
  width: 0; /*设置为0 隐藏自定义菜单 */
  height: 125px;
  overflow: hidden; /*隐藏溢出的元素*/
  box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
  position: absolute; /*自定义菜单相对与body元素进行定位*/
  text-align: left;
  color: #3c3a3a;
  font-size: 14px;
  background: #fff;
  z-index: 1000;
}
.menu {
  width: 140px;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
  cursor: pointer;
}
.menu:hover {
  color: #040404;
}
</style>


