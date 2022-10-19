<template>
	<view class="main">
		<view>
			<u-toast ref="uToast" />
		</view>
		<view class="mid_top">
			<text class="iconfont icon-31fanhui1" @click="reback"></text>
			<text>{{goodsinfo[0].skuname}}</text>
			<text class="iconfont icon-xihuan" style="font-size: 48upx;" @click="likes" :class="like?'':'red'"></text>
		</view>
		<view class="top">
			<view class="top_1">
				<image :src="goodsinfo[0].pic" mode=""></image>
			</view>
			<image src="../../static/背景.jpg" style="width:100%;height:700upx;">
			</image>
		</view>
		<view class="info">

			<text>&yen;{{goodsinfo[0].price}}.00</text>
			<view class="info_1">
				<text style="font-size: 38upx;font-weight: bold;margin-left: 40upx;line-height: 100upx;">{{goodsinfo[0].skuname}}</text>
				<view class="" style="margin-top: 10upx;margin-left: 40upx;">
					<view class="limit">
						<text style="background-color: #ffa135;color: #221202;font-size: 26upx;
						padding: 6upx;
						border-top-left-radius:10upx ;
						border-bottom-left-radius:10upx ;">限量</text>
						<text style="background-color: #f0d5b7;
						color: #b3752a;
						padding: 6upx;
						font-size: 26upx;
						border-top-right-radius: 10upx;
						border-bottom-right-radius: 10upx;">{{goodsinfo[0].total}}份</text>
					</view>
					<view class="flow">
						<text style="background-color: #ffa135;color: #221202;font-size: 26upx;
						padding: 6upx;
						border-top-left-radius:10upx ;
						border-bottom-left-radius:10upx ;">流通</text>
						<text style="background-color: #f0d5b7;
						color: #b3752a;
						padding: 6upx;
						font-size: 26upx;
						border-top-right-radius: 10upx;
						border-bottom-right-radius: 10upx;">{{goodsinfo[0].float}}份</text>
					</view>
				</view>

			</view>

		</view>
		<view class="brand">
			<view class="brand_1" @click="gobrand">
				<text>品牌方</text>
				<view style="display: flex;justify-content:space-around;">
					<view class="headimg">
						<image :src="goodsinfo[0].supplypic" mode=""></image>
					</view>
					<view style="height: 80upx;display: flex;justify-content:center;align-items: center;js">
						<text>{{goodsinfo[0].supplyinfo.slice(0,4)}}</text>
						<text class="iconfont icon-youjiantou itemright"></text>
					</view>
				</view>

			</view>
			<view class="author" @click="goauthor">
				<text>创作者</text>
				<view style="display: flex;justify-content:space-around;">
					<view class="headimg">
						<image :src="goodsinfo[0].authorpic" mode=""></image>
					</view>
					<view style="height: 80upx;display: flex;justify-content:space-around;align-items: center;js">
						<text v-if="goodsinfo[0].autor.length>6">{{goodsinfo[0].autor.slice(0,5)}}...</text>
						<text v-else>{{goodsinfo[0].autor}}</text>
						<text class="iconfont icon-youjiantou itemright"></text>
					</view>
				</view>
			</view>
			<view class="inform">
				<view class="inform_1">
					<text>所属专辑</text>
					<text>{{goodsinfo[0].skuname}}</text>
				</view>
				<view class="inform_2">
					<text>合约地址</text>
					<text>{{address}}</text>
					<text class="iconfont icon-fuzhi"></text>
				</view>
			</view>

		</view>
		<view class="sthory">
			<text style="font-weight: bold;">藏品故事</text>
			<view class="sthory_1">
				<image src="../../static/sthory.png" mode=""></image>	
			</view>
			
			
		</view>
		<view class="bottonlogo">
			<view class="saleinfo">
				<view class="" >
					<text style="font-weight: bold;">购买须知</text>
				</view>
				<view class="" style="margin-top: 30upx;padding-bottom: 40upx;">
					<text>数字藏品为虚拟数字商品，而非实物，仅限20周岁（不含）以上，60周岁（含）以下的中国大陆用户购买。数字藏品的版权由发行方或原创作者拥有，除另行取得版权拥有者书面同意外，用户不得将数字藏品用于任何商业用途。本商品一经售出，不支持退换。</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	import {
		getUUID
	} from '../../util/uuid.js'
	export default {
		data() {
			return {
				address: '000',
				like: 'flase'
			}
		},
		mounted() {
			this.address = getUUID().slice(16)
		},
		computed: {
			...mapGetters(['goodsinfo'])
		},
		methods: {
			reback() {
				uni.navigateBack({
					delta: 1,
				});
			},
			likes() {
				if (this.like == false) {
					this.like = true
					this.$refs.uToast.show({
						title: '取消关注成功',
						type: 'default'
					})
				} else {
					this.like = false
					this.$refs.uToast.show({
					title: '关注成功',
					type: 'default'
					})
				}
			},
			gobrand(){
				uni.navigateTo({
					url:'/pages/supplyinfo/supplyinfo'
				})
			},
			goauthor(){
				uni.navigateTo({
					url:'/pages/authorinfo/authorinfo'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.headimg{
		overflow: hidden;
	}
	.headimg image{
		width: 80upx;
		height: 80upx;
	}
	.bottonlogo{
		width: 90vw;
		margin-left: 5vw;
		padding-top: 150upx;
	}
	.sthory{
		width: 90vw;
		margin-left: 5vw;
		height: 3500upx;
		
		padding-top: 30upx;
	}
	.sthory image{
		width: 100%;
		height: 100%;
		// object-fit: scale-down;
	}
	.sthory_1{
		border-radius: 20upx;
		overflow: hidden;
		width: 100%;
		
		height: 3500upx;
		margin-top: 30upx;
	}
	.mid_top {
		position: sticky;
		top: 0px;
		background-color: #fff;
		font-size: 35upx;
		text-align: center;
		font-weight: bold;
		line-height: 100upx;
		height: 120upx;
		z-index: 99999;
		overflow: hidden;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.top_1 {
		position: absolute;
		top: 10%;
		width: 80%;
		height: 600upx;
		margin-left: 10%;
		z-index: 99;
		border-radius: 30upx;
		border: 8upx solid #fff;
		overflow: hidden;
	}

	.top_1 image {
		width: 100%;
		height: 600upx;
	}

	.info {
		border-radius: 48upx;
		width: 100%;
		height: auto;
		background-color: #000;
		width: 90vw;
		margin-left: 5%;
	}

	.info>text {
		color: white;
		font-size: 54upx;
		margin-left: 10%;
		line-height: 100upx;
		font-weight: bold;
	}

	.info_1 {
		width: 90vw;
		height: 200upx;
		border: 1upx solid #dddddd;
		background-color: #fff;
		border-radius: 40upx;
	}

	.limit {
		width: 200upx;
		height: 100upx;
		float: left;
	}

	.flow {
		width: 200upx;
		height: 100upx;
		margin-left: 200upx;
	}

	.brand {
		margin-top: 50upx;
	}

	.brand_1 {
		position: absolute;
		width: 44vw;
		margin-left: 4vw;
		height: 200upx;
		border: 1upx solid #dddddd;
		border-radius: 30upx;
	}

	.brand_1>text {
		font-size: 38upx;
		margin-left: 10%;
		line-height: 100upx;
	}

	.author {
		border: 1upx solid #dddddd;
		width: 44vw;
		margin-left: 51vw;
		height: 200upx;
		border-radius: 30upx;
	}

	.author>text {
		font-size: 38upx;
		margin-left: 10%;
		line-height: 100upx;
	}

	.headimg {
		width: 80upx;
		height: 80upx;
		background-color: #000;
		border-radius: 50px;

	}

	.inform {
		width: 90vw;
		height: 200upx;
		margin-left: 5vw;
		margin-top: 50upx;
		border: 1upx solid #dddddd;
		border-radius: 30upx;
		display: flex;
		flex-direction: column;

	}

	.inform_1 {
		width: 100%;
		height: 100upx;
		border-bottom: 1upx solid #dddddd;
		display: flex;
		align-items: center;
		// margin-left: 20upx;
		padding: 20upx;
		justify-content: space-between;
	}

	.inform_2 {
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		padding: 20upx;
		justify-content: space-between;
	}

	.red {
		color: red;
	}
</style>
