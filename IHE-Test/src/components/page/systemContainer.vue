<template>
<div>
	<el-container>
		<v-sidebarsystem></v-sidebarsystem>
		<el-main>
			<transition name="move" mode="out-in">
				<router-view></router-view>
			</transition>
		</el-main>
	</el-container>
</div>
	
</template>

<script>
import vSidebarsystem from "../common/systemSidebar";
export default {
  components: {
		vSidebarsystem,
  }
};
</script>

<style scoped>

</style>