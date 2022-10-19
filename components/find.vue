<template>
	<view class="main">
		<scroll-view  scroll-y="true">
			<button class="tabs" v-for="(item,index) in list" :key="index">{{item.name}}</button>
		</scroll-view>
	</view>
	
		
</template>

<script>
	export default {
		data() {
			return {
				currents: 0,
				list: [{
						name: '全部'
					}, {
						name: '活动公告'
					}, {
						name: '上新公告'
					},{
						name: '合成公告'
					}, {
						name: '运营公告'
					}, {
						name: '寄售公告'
					},{
						name: '空投公告'
					}, {
						name: '白名单'
					}]
			}
		},
		methods: {
			change(index) {
				this.currents = index.index;
			}
		}
	}
</script>

<style lang="scss">
	.main{
		border: 1px solid #000;
		width: 100%;
		height: 180upx;
	}
	.tabs{
		float: left;
		width: 200upx;
		height: 100upx;
		padding: 20upx;
		// margin: 20upx;
		font-size: 30upx;
		border: 1px solid #ffffff ;
		background-color: #f7f7f7;
		text-align: center;
		border-radius: 20px;
	}
</style>