<template>
	<view class="">
		<navigator url="/pages/detail/detail"  v-for="item in blodbox" :key="item.skuid">
		<view class="box">
		<image :src="item.pic" ></image>
		<view class="box-buttom">
			<text style="font-size: 40upx;font-weight: bold;">{{item.skuname}}</text>
		<view class="box-buttom">
			<view>
				<text style="background-color: #ffa135;color: #221202;font-size: 26upx;
				padding: 6upx;
				border-top-left-radius:10upx ;
				border-bottom-left-radius:10upx ;">限量</text>
				<text style="background-color: #f0d5b7;
				color: #b3752a;
				padding: 6upx;
				font-size: 26upx;
				border-top-right-radius: 10upx;
				border-bottom-right-radius: 10upx;">{{item.total}}份</text>
			</view>
			<text style="font-size: 20upx;">by {{item.autor}}</text>
			
			<text class="price" >￥{{item.price}}</text>
		</view>
		</view>
	</view></navigator>
	</view>
	
	
</template>

<script>
	export default{
		data(){
			return{
				blodbox:[],
				type:'blod'
			}
		},
		methods:{
			async load(){
				let result = await this.$request({
					url: '/api/getgoods',
					method:'POST',
					data:{
						type:this.type
					}
				})
				this.blodbox=result.data.message
			},
		},
		created() {
			this.load()
		},
	}
</script>

<style lang="scss">
	.price{
		font-size: 48upx;
		font-weight: bold;
		margin-left: 60upx;
		float: right;
	}
	.box{
		width: 90%;
		height: 800upx;
		border-radius: 50upx;
		overflow: hidden;
		// sbackground-color: #edb7ff;
		border: 1upx solid #dcdcdc;
		margin-top: 20upx;
	}
	.box image{
		width: 100%;
		height:75%;
		border-top-left-radius: 50upx;
		border-top-right-radius: 50upx;
	}
	.box-buttom{
		margin: 15upx;
		// background-color: #ffc25e;
	}
</style>