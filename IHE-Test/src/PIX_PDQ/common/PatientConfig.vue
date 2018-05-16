<template>
  <!-- 通讯参数配置 -->
  <el-collapse v-model="activeNames"
               class="patientConfig">
    <el-collapse-item title="通信参数配置"
                      name="1">
      <el-form ref="paramSetform"
               :model="paramSetform"
               label-width="120px"
               style="padding-left:30px;padding-right:30px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="PIX管理器IP"
                          prop="pixAdminIp">
              <el-input v-model="paramSetform.pixAdminIp" @change="ipChange">
              </el-input>
              <!-- <el-select v-model="paramSetform.pixAdminIp"
                         placeholder="请选择IP">
                <el-option label=""
                           :value="-1"
                           :disabled="true">
                  <span class="pix-th-color">ID</span>
                  <span class="pix-margin pix-th-color">IP</span>
                  <span class="pix-right pix-th-color">外部描述</span>
                  <span class="pix-right pix-th-color">外部系统</span>
                  <span class="pix-right pix-th-color">Port</span>
                </el-option>
                <el-option v-for=" item in allService"
                           :key="item.id"
                           :label="item.ipAddress"
                           :value="item.id"
                           :name='item.id'
                           @click.native="pixIPChange(item)">
                  <span>{{ item.id }}</span>
                  <span class="pix-margin">{{ item.ipAddress }}</span>
                  <span class="pix-right">{{ item.outSystem }}</span>
                  <span class="pix-right">{{ item.outDesc }}</span>
                  <span class="pix-right">{{ item.port }}</span>
                </el-option>
              </el-select> -->
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-dropdown size='medium'>
              <el-button  type="primary">
                Select<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>
                  <span class="pix-th-color">ID</span>
                  <span class="pix-margin pix-th-color">IP</span>
                  <span class="pix-right pix-th-color">外部描述</span>
                  <span class="pix-right pix-th-color">外部系统</span>
                  <span class="pix-right pix-th-color">Port</span>
                </el-dropdown-item>
                <el-dropdown-item v-for=" item in allService"
                                  :key="item.id"
                                  :class="{active:dropdownActive === item.id}"
                                  @click.native="pixIPChange(item)">
                  <span>{{ item.id }}</span>
                  <span class="pix-margin">{{ item.ipAddress }}</span>
                  <span class="pix-right">{{ item.outSystem }}</span>
                  <span class="pix-right">{{ item.outDesc }}</span>
                  <span class="pix-right">{{ item.port }}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="4">
            <el-form-item label="PIX管理器端口"
                          prop="pixAdminPort">
              <el-input v-model="paramSetform.pixAdminPort"
                        @change="portChange">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item prop="pixTLS"
                          label-width="20px">
              <el-checkbox v-model="paramSetform.pixTLS">PIXTLS</el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-form-item label="接收应用"
                          prop="receiveApp">
              <el-input v-model="paramSetform.receiveApp"
                        @change="receiveAppChange">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item prop="enhancedMode"
                          label-width="20px">
              <el-checkbox v-model="paramSetform.enhancedMode">增强模式</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="4"
                  :offset="2">
            <el-form-item label="接收设施"
                          prop="receiveFacility">
              <el-input v-model="paramSetform.receiveFacility"
                        @change="receiveFacilityChange">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-form ref="paramSetform"
               :model="paramSetform"
               label-width="120px"
               style="padding-left:30px;padding-right:30px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="PDS-IP"
                          prop="pdsIP">
              <el-input v-model="paramSetform.pdsIP" @change="ipChange">
              </el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="2">
            <el-dropdown size='medium'>
              <el-button  type="primary">
                Select<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>
                  <span class="pix-th-color">ID</span>
                  <span class="pix-margin pix-th-color">IP</span>
                  <span class="pix-right pix-th-color">外部描述</span>
                  <span class="pix-right pix-th-color">外部系统</span>
                  <span class="pix-right pix-th-color">Port</span>
                </el-dropdown-item>
                <el-dropdown-item v-for=" item in allService"
                                  :key="item.id"
                                  :class="{active:dropdownActive === item.id}"
                                  @click.native="pixIPChange(item)">
                  <span>{{ item.id }}</span>
                  <span class="pix-margin">{{ item.ipAddress }}</span>
                  <span class="pix-right">{{ item.outSystem }}</span>
                  <span class="pix-right">{{ item.outDesc }}</span>
                  <span class="pix-right">{{ item.port }}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col> -->
          <el-col :span="4">
            <el-form-item label="PDS-Port"
                          prop="pdsPort">
              <el-input v-model="paramSetform.pdsPort"
                        @change="portChange">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="PDS接收应用"
                          prop="receiveApp">
              <el-input v-model="paramSetform.receiveApp"
                        @change="receiveAppChange">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="PDS接收设施"
                          prop="receiveFacility">
              <el-input v-model="paramSetform.receiveFacility"
                        @change="receiveFacilityChange">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item prop="PDSTLS"
                          label-width="20px">
              <el-checkbox v-model="paramSetform.pdsTLS">PIXTLS</el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      activeNames: ['1'],
      dropdownActive:'-1',
      paramSetform: {
        pixAdminIp: '',
        pixAdminPort: '',
        receiveApp: '',
        receiveFacility: '',
        pixTLS: 0,
        enhancedMode: 0,
      },
    };
  },
  computed: {
    ...mapGetters(['allService']),
    // ...mapState({
    //   // pixAdminPort1:state =>{
    //   //     console.log(state)
    //   //     return state.pix.pixAdminPort
    //   // },
    //   // 'receiveApp',
    //   // 'receiveFacility'
    // }),
  },
  methods: {
    ...mapActions(['getServiceAll','getOrganizationAll']),
    ...mapMutations([
      'setPixAdminIp',
      'setPixAdminPort',
      'setReceiveApp',
      'setReceiveFacility',
    ]),
    pixIPChange(item) {
      this.dropdownActive = item.id;
      this.paramSetform.pixAdminIp = item.ipAddress;
      this.paramSetform.pixAdminPort = item.port;
      this.paramSetform.receiveApp = item.outSystem;
      this.paramSetform.receiveFacility = item.outDesc;
      this.setPixAdminIp(item.ipAddress)
      this.setPixAdminPort(item.port);
      this.setReceiveApp(item.outSystem);
      this.setReceiveFacility(item.outDesc);
    },
    ipChange(value){
      this.setPixAdminIp(value)
    },
    portChange(value) {
      this.setPixAdminPort(value);
    },
    receiveAppChange(value) {
      this.setReceiveApp(value);
    },
    receiveFacilityChange(value) {
      this.setReceiveFacility(value);
      console.log(this.$store.state.pix);
    },
  },
  created() {
    this.getServiceAll().catch(err => {
      this.$message.error(err.message);
    });

    this.getOrganizationAll();
  },
};
</script>

<style scoped>
.pix-th-color {
  color: #8492a6;
}
.pix-right {
  float: right;
  margin-right: 8px;
}

.pix-margin {
  margin-left: 8px;
   margin-right: 8px;
}

.active {
 color: rgb(106, 149, 210)
}
</style>

