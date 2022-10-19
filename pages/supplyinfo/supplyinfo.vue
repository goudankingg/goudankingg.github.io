<template>
	<view class="">
		<view class="top">
			<view class="top_1">
				<view class="top_2">
					<view class="">
						<text style="font-size: 50upx;color:#f7a784;text-align: center;">{{goodsinfo[0].supplyinfo.slice(0,4)}}</text>
					</view>
					<view class="">
						<text style="">{{goodsinfo[0].supplyinfo.slice(0,100)}}</text>
					</view>
				</view>
				
			</view>
		</view>
		<view>

		</view>
		<view>

		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	export default{
		computed: {
			...mapGetters(['goodsinfo'])
		},
	}
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		height: 30vh;
		background-image: url(../../static/info.jpg);
		background-repeat: no-repeat;
		background-size: 100vw 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top_1 {
		width: 350px;
		height: 200px;
		padding: 3px;
		background: linear-gradient(-45deg, transparent 10px, #6b5d5c 0) bottom right,
			linear-gradient(45deg, transparent 10px, #6b5d5c 0) bottom left,
			linear-gradient(135deg, transparent 10px, #6b5d5c 0) top left,
			linear-gradient(-135deg, transparent 10px, #6b5d5c 0) top right;
		background-size: 50% 50%;
		background-repeat: no-repeat;
	}
	.top_2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: linear-gradient(-45deg, transparent 8px, #fff 0) bottom right,
			linear-gradient(45deg, transparent 8px, #fff 0) bottom left,
			linear-gradient(135deg, transparent 8px, #fff 0) top left,
			linear-gradient(-135deg, transparent 8px, #fff 0) top right;
		background-size: 50% 50%;
		background-repeat: no-repeat;
	}
</style>
