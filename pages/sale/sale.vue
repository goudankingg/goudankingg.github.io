<template>
	<view class="main">

		<view class="mid">
			<view class="mid_top">
				<text>寄售区</text>
			</view>
			<view class="mid_bottom">
				<u-grid :col="2" :border="false">
					<u-grid-item :class="isshow?'':'midtext'" @click='btnClick'>
						<text style="font-size: 28upx;" @click="showjiantou">{{selectvalues.select}}
							<text class="iconfont" :class="isshow?'icon-xiajiantou':'icon-shangjiantou midtext'"></text>
						</text>
					</u-grid-item>
					<u-grid-item :class="isshow1?'':'midtext'" @click='btnClick1'>
						<text style="font-size: 28upx;" @click="showjiantou1">{{selectvalues.select1}}
							<text class="iconfont" :class="isshow1?'icon-xiajiantou':'icon-shangjiantou midtext'"></text>
						</text>
					</u-grid-item>
				</u-grid>
			</view>
			
		</view>
		<view class="">
			<u-popup  length="22%" v-model="show"  mode="top" @close="close" @open="open">
				<view class="popup">
					<view class="xiala" :class="{'xialaactive':active==0}" @tap="selectpopup">
						{{selectvalues.select_0}}
					</view>
					<view class="xiala" :class="{'xialaactive':active==1}" @tap="selectpopup1">
						{{selectvalues.select_1}}
					</view>
				</view>
			</u-popup>
			<u-popup  length="22%" v-model="show1"   mode="top" @close="close1" @open="open1" >
				<view class="popup">
					<view class="xiala" :class="{'xialaactive':active1==0}" @tap="newgrounding" >
						{{selectvalues.select_2}}
					</view>
					<view class="xiala" :class="{'xialaactive':active1==1}" @tap="asc" >
						{{selectvalues.select_3}}
					</view>
					<view class="xiala" :class="{'xialaactive':active1==2}" @tap="desc" >
						{{selectvalues.select_4}}
					</view>
				</view>
			</u-popup>
		</view>
		<view class="grid">
			<boxmin :goodslist="typelist"></boxmin>
		</view>
<!-- 		<u-grid :col="2">
			<u-grid-item class="grid">
				
			</u-grid-item>
		</u-grid> -->
	</view>

</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				show:false,
				show1:false,
				isshow: true,
				isshow1: true,
				mask:true,
				active:0,
				active1:0,
				type:'goods',
				order:'',
				orderasc:'asc',
				orderdesc:'desc',
				selectvalues:{
					select:'数字藏品',
					select1:'最新上架',
					select_0:'数字藏品',
					select_1:'盲盒',
					select_2:'最新上架',
					select_3:'价格升序',
					select_4:'价格降序'
				}
			}
		},
		methods: {
			selectpopup(){
				this.active=0
				this.type='goods'
				this.selectvalues.select=this.selectvalues.select_0
				this.close()
				this.getgoodstype()
				
			},
			selectpopup1(){
				this.active=1
				this.type='blod'
				this.selectvalues.select=this.selectvalues.select_1
				this.close()
				this.getgoodstype()
				
			},
			newgrounding(){
				this.active1=0
				this.order=''
				this.selectvalues.select1=this.selectvalues.select_2
				this.close1()
				this.getgoodstype()
			},
			asc(){
				this.active1=1
				this.order=this.orderasc
				this.selectvalues.select1=this.selectvalues.select_3
				this.close1()
				this.getgoodstype()
			},
			desc(){
				this.active1=2
				this.order=this.orderdesc
				this.selectvalues.select1=this.selectvalues.select_4
				this.close1()
				this.getgoodstype()
			},
			close() {
				this.show = false
				this.isshow=true
				this.isshow1=true
			},
			open() {
				this.show = true
			},
			close1() {
				this.show1 = false
				this.isshow=true
				this.isshow1=true
			},
			open1() {
				this.show1 = true
			},
			btnClick() {
				this.show = true;
			},
			btnClick1() {
				this.show1 = true;
			},
			showmid() {
				let a = this.show == false ? true : false
				this.show = a
			},
			showjiantou() {
				let a = this.isshow == true ? false : true
				this.isshow = a
			},
			showjiantou1() {
				let a = this.isshow1 == true ? false : true
				this.isshow1 = a
			},
			async getgoodstype(){
				let {type,order}=this
				await this.$store.dispatch("gettype",{type,order});
			}
		},
		mounted() {
			this.getgoodstype()
		},
		computed: {
			// ...mapState({
			// 	goodslist: (state) => state.sale.goodsgoods,
			// }),
			...mapGetters(["typelist"]),
		}
	}
</script>

<style lang="scss">

	.popup{
		position: absolute;
		top: 90px;
		width: 100%;
		height: 130upx;
		background-color: #f0f0f0;
		overflow: hidden;
	}
	.xiala {
		background-color: #fff;
		width: 200rpx;
		height: 80rpx;
		border: 1px solid #fff;
		float: left;
		border-radius: 20upx;
		text-align: center;
		line-height: 40px;
		margin: 20upx;
		font-size: 29upx;
		
	}
	.xialaactive{
		background-color: #fff;
		width: 200rpx;
		height: 80rpx;
		border: 1px solid #fff;
		float: left;
		border-radius: 20upx;
		text-align: center;
		line-height: 40px;
		margin: 20upx;
		font-size: 29upx;
		
		border: 1upx solid #5555ff;
		color: #5555ff;
	}
	.main {
		width: 100%;
		height: 100%;
	}

	.icon-xiajiantou {
		font-size: 20upx;
		padding-left: 10upx;
	}

	.icon-shangjiantou {
		font-size: 20upx;
		padding-left: 10upx;
	}
	.grid{
		position: relative;
		top: 80upx;
	}
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: #000;
	}

	.mid {
		width: 100%;
		height: 80upx;
		// border: 1upx solid #000;
		background-color: #fff;
		position: sticky;
		top: 0px;
		z-index: 99999;
		
	}
	.mid_top{
		font-size: 35upx;
		text-align: center;
		font-weight: bold;
		line-height: 80upx;
		height: 80upx;
		z-index: 99999;
		overflow: hidden;
	}
	.midtext {
		color: #5555ff;
		// border: 1upx solid #fff;
	}
</style>
