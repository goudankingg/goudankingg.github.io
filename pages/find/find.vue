<template>
	<view class="">
		<view class="">
			
			<u-tabs :list="list" :is-scroll="false" :current="currents" @change="change"></u-tabs>
		
		</view>
		<view class="">
			<u-tabs :list="lists" :is-scroll="false" :current="currents1" @change="change1"></u-tabs>
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				currents: 0,
				currents1: 0,
				list: [{
					name: '平台公告'
				}, {
					name: '新闻发声'
				}, {
					name: '辟谣墙'
				}],
				lists: [{
						name: '全部'
					}, {
						name: '活动公告'
					}, {
						name: '上新公告'
					},
					{
						name: '合成公告'
					}, {
						name: '运营公告'
					}, {
						name: '寄售公告'
					},
					{
						name: '空投公告'
					}, {
						name: '白名单'
					}
				]
			}
		},
		methods: {
			change(index) {
				this.currents = index.index;
			},
			change1() {
				this.currents1 = index.index;
			}
		}
	}
</script>
<style lang="scss">
	
</style>
