<template>
	<view class="allgrid">
		<navigator url="/pages/detail/detail" v-for="item in goodslist" :key="item.skuid">
			<view class="boxfugai">
			</view>
			<view class="box">
				<image :src="item.pic" mode=""></image>
				<view class="box-buttom">
					<text style="font-size: 30upx;">{{item.skuname}}</text>
					<view class="box-buttom">
						<view>
							<text style="background-color: #ffa135;color: #221202;font-size: 30upx;
				padding: 5upx;
				border-top-left-radius:10upx ;
				border-bottom-left-radius:10upx ;">限量</text>
							<text style="background-color: #f0d5b7;
				color: #b3752a;
				padding: 5upx;
				font-size: 30upx;
				border-top-right-radius: 10upx;
				border-bottom-right-radius: 10upx;">{{item.total}}份</text>
						</view>
						<text
							style="font-size: 35upx;font-weight: bold;float: right;margin-top: 10upx;">￥{{item.price}}.0起</text>
					</view>
				</view>
			</view>
		</navigator>
	</view>


</template>

<script>

	export default {
		data() {
			return {
				// goodslist: [],
				goods: 'goods'
			}
		},
		props:['goodslist']
		// methods: {
		// 	async load(){
		// 		let result = await this.$request({
		// 			url: '/api/getgoodsall',
		// 		})
		// 		this.goodslist=result.data.message
		// 	},
		// },
		// created() {
		// 	this.load()
		// },
		
		
	}
</script>

<style lang="scss">
	// .boxfugai{
	// 	width: 330upx;
	// 	height: 550upx;
	// 	background-color: #000;
	// 	position: absolute;
	// 	margin: 10upx;
	// 	border-radius: 50upx;
	// 	border: 1upx solid #dcdcdc;

	// }
	.allgrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.box {
		width: 90%;
		height: 550upx;
		border-radius: 20upx;
		overflow: hidden;
		// sbackground-color: #edb7ff;
		border: 1upx solid #dcdcdc;
		margin: 18upx;
		box-shadow: 0upx 20upx rgb(255, 247, 233);
		margin-top: 30upx;
		// box-shadow: inset 0px 50px 20px rgb(255, 247, 233);
	}

	.box image {
		width: 100%;
		height: 65%;
	}

	.box-buttom {
		margin: 15upx;
		// background-color: #ffc25e;
	}
</style>
