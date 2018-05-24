<template>
    <div v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading">
        <el-form ref="checkForm"
                 :model="checkForm"
                 status-icon
                 :rules="checkRules"
                 label-width="100px"
                 style="padding:0 20px">
            <el-row>
                <el-card class="box-card"
                         style="border-right: none;">
                    <div slot="header"
                         class="clearfix">
                        <span>匹配字段设定</span>
                    </div>
                    <div class="checkBox">
                        <el-checkbox-group v-model="checkForm.checkList">
                            <el-checkbox label="patFamilyName">PatientFamilyName</el-checkbox>
                            <el-checkbox label="patGivenName">patientName</el-checkbox>
                            <el-checkbox label="birthDateTime">DateTimeofBirth</el-checkbox>
                            <el-checkbox label="sex">AdministrativeSex</el-checkbox>
                            <el-checkbox label="motherMaidenFname">MotherMaidenFamilyName</el-checkbox>
                            <el-checkbox label="motherMaidenGname">MotherMaidenName</el-checkbox>
                            <el-checkbox label="homeTelNum">PhoneNumberHome</el-checkbox>
                            <el-checkbox label="lastUpdtDate">UpdateDateTime</el-checkbox>
                            <el-checkbox label="lastUpdtFacility">UpdateFacility</el-checkbox>
                            <el-checkbox label="birthOrder">BirthOrder</el-checkbox>
                            <el-checkbox label="multiBirthIndicator">multiBirthIndicator</el-checkbox>
                            <el-checkbox label="address">PatientAddres</el-checkbox>
                            <el-checkbox label="ssnNum">SSN</el-checkbox>
                            <el-checkbox label="patAccountNum">AccountNum</el-checkbox>

                        </el-checkbox-group>

                        <el-row class="save-btn">
                            <el-button type="primary"
                                       @click="updateChecked('saveBtn')">保存</el-button>
                        </el-row>
                    </div>
                </el-card>
            </el-row>
        </el-form>

    </div>
</template>
<script>
import { showLog, baseInfo, pathReset } from '../../utils/common';
//	import { mapGetters } from 'vuex';
import Apis from '../../utils/apisPIX';
export default {
  data() {
    return {
      loading: false,
      matchData: {
        id: 1,
        patFamilyName: '0',
        patGivenName: '0',
        birthDateTime: '0',
        sex: '0',
        motherMaidenFname: '0',
        motherMaidenGname: '0',
        homeTelNum: '0',
        lastUpdtDate: '0',
        lastUpdtFacility: '0',
        birthOrder: '0',
        multiBirthIndicator: '0',
        address: '0',
        ssnNum: '0',
        patAccountNum: '0',
      },
      checkForm: {
        checkList: [],
      },
      checkRules: {},
    };
  },
  created() {
    this.getMatch();
  },
  methods: {
    getMatch() {
      Apis.match
        .query()
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            //							this.$message({
            //								message: res.data.info,
            //								type: 'success',
            //							});
            console.log(
              typeof res.data !== undefined,
              typeof res.data.data !== undefined,
            );
            if (typeof res.data !== undefined) {
              let data = res.data;
              for (let item in data) {
                console.log(data[item]);
                if (data[item] === '1') {
                  this.checkForm.checkList.push(item);
                }
              }
              console.log(this.checkForm.checkList);
            }
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.message);
        });
    },
    updateChecked(saveBtn) {
      let params = { ...this.matchData };

      for (let item of this.checkForm.checkList) {
        params[item] = '1';
      }

      console.log(params);

      Apis.match
        .update(params)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.$message({
              message: res.data.info,
              type: 'success',
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.message);
        });
    },

    //			allChange(val) {
    //				console.log("你点的全选" + val)
    //				this.checkedFfields = val ? fieldOptions : [];
    //				this.isIndeterminate = false;
    //			},
    //			handleChecked(value) {
    //				console.log("我是你选择的值" + value, this.checkForm.checkList)
    //				//				let checkedCount = value.length;
    //				//				this.checkAll = checkedCount === this.fields.length;
    //				//				this.isIndeterminate = checkedCount > 0 && checkedCount < this.fields.length;
    //			},
  },
};
</script>

<style scoped>
.checkBox {
  padding: 10px 0;
  border: 1px solid #d8d8d8;
  width: 340px;
}

.checkBox .el-checkbox-group .el-checkbox {
  padding: 10px 0;
  display: block;
}

.checkBox .el-checkbox-group .el-checkbox:first-child {
  margin-left: 30px;
}

.allbtn {
  display: block;
  padding: 0px 20px 10px;
  border-bottom: 1px solid #d8d8d8;
}

.el-checkbox-group {
  padding: 10px 14px;
}

.save-btn {
  padding-top: 12px;
  border-top: 1px solid #d8d8d8;
  padding-left: 44px;
}
</style>