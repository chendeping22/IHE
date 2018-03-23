<template>
<div>
<v-param></v-param>
	<el-container>
		<v-sidebar></v-sidebar>
		<el-main>
			<transition name="move" mode="out-in">
				<router-view></router-view>
			</transition>
		</el-main>
	</el-container>
</div>
	
</template>

<script>
import vParam from "../common/param";
import vSidebar from "../common/QuerySidebar";
export default {
  components: {
		vSidebar,
		vParam
  }
};
</script>

<style scoped>

</style>
