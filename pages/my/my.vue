<template>
	<view class="main">
		<view class="top">
			<view class="top-top">
				<view class="person">
					<view class="touxiang" v-if="show">
						<text type="" class="iconfont icon-gerenzhongxin"></text>
					</view>
					<view class="message" v-if="show">
						<!-- <view><text class="name">{{userinfo[0].username}}</text></view> -->
						<view><text class="phone" v-model="phone">{{phone}}</text></view>
					</view>
					<view class="touxiang" v-if="!show">
						<text type="" class="iconfont icon-gerenzhongxin" style="color: black;"></text>
					</view>
					<view class="message" v-if="!show">
						<view><text class="name" @click="login">登录</text></view>
					</view>
				</view>
				<view class="setting">
					<text class="iconfont icon-shezhi"></text>
				</view>
			</view>
			<view class="top-bottom">
				<view v-if="show" class="address">
					<text>区块链地址:\n{{address}}...</text>
					<text class="iconfont icon-fuzhi"></text>
				</view>
				<view class="top-bottomall">
					<view class="top-bottom1">
						<text class="iconfont icon-vip">我的藏品</text>
					</view>
					<view class="top-bottom2">
						<text class="iconfont icon-qianbao">我的钱包</text>
					</view>
				</view>
			</view>
			<!-- <image src="../../static/456.jpg" mode="" style="width: 100%;"></image> -->
		</view>
		<view class="gory" >
			<view class="center">
				<view class="item">
					<text class="iconfont icon-shujuku">
						<text style="padding-left: 20upx;">我的积分</text> 
					</text>
					<text class="iconfont icon-youjiantou itemright"></text>
				</view>
				
			</view>
			<view class="middle">
				<view class="item" style="border-bottom: 1px solid #eeeeee;">
					<text class="iconfont icon-dingdandingdanmingxishouzhimingxi">
						<text style="padding-left: 20upx;">我的订单</text>
						</text>
					<text class="iconfont icon-youjiantou itemright"></text>
				</view>
				<view class="item">
					<text class="iconfont icon-renzheng">
						<text style="padding-left: 20upx;">我的认证</text> 
						</text>
					<text class="iconfont icon-youjiantou itemright"></text>
				</view>

			</view>
			<view class="bottom">
				<view class="item" style="border-bottom: 1px solid #eeeeee;">
					<text class="iconfont icon-suoding">
						<text style="padding-left: 20upx;">账号与安全</text> 
						</text>
						<text class="iconfont icon-youjiantou itemright"></text>
				</view>
				<view class="item" style="border-bottom: 1px solid #eeeeee;">
					<text class="iconfont icon-show_yinsizhengce_fill">
						<text style="padding-left: 20upx;">隐私设置</text> 
						</text>
					<text class="iconfont icon-youjiantou itemright"></text>
				</view>
				<view class="item" style="border-bottom: 1px solid #eeeeee;">
					<text class="iconfont icon-guanyu">
						<text style="padding-left: 20upx;">关于十八数藏</text> 
						</text>
					<text class="iconfont icon-youjiantou itemright"></text>
				</view>
				<view class="item"><text class="iconfont icon-zhifeiji">
				<text style="padding-left: 20upx;">分享十八数藏</text> 
				</text>
				<text class="iconfont icon-youjiantou itemright"></text>
				</view>
				
				
			</view>
			<view class="logobottom">
					<view class="logobottom-1">
						<image src="../../static/QQ图片20220917200857.jpg" mode=""></image>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				phone: '',
				address: '',
				a: '',
				appheight:''
			}
		},
		methods: {
			getheight() {
				uni.getSystemInfo({
					success:(res)=>{
						console.log("手机可用高度:"+res.windowHeight*2+"rpx");
						this.appheight=res.windowHeight*2
							}
						})
					},
			
			login() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			getphoneandaddress() {
				var self = this
				uni.getStorage({
					key: 'PHONE',
					success: function(res) {
						self.a = res.data
					}
				})
				if (this.a !== '') {
					console.log('phone存在');
					this.getStoragephone()
					this.getStorageaddress()
					this.show = true
				} else {
					console.log('phone不存在，跳转login页面');
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			getStorageaddress() {
				var self = this
				uni.getStorage({
					key: 'ADDRESS',
					success: function(res) {
						self.address = res.data
						console.log(self.address)
					}
				})
			},
			getStoragephone() {
				var self = this
				uni.getStorage({
					key: 'PHONE',
					success: function(res) {
						self.phone = res.data
						console.log(self.phone)
					}
				})
			},

		},
		onLoad() {
			this.getphoneandaddress()
			this.getheight()
		},
	}
</script>
<style lang="scss">
	.itemright{
		float: right;
	}
	.logobottom-1 image{
		width: 300upx;
		height: 100upx;
		margin-left: 27%;
		margin-top: 60upx;
	}
	.logobottom{
		// position:fixed;
		bottom:85upx;
		width: 100%;
		// height: 165upx;
	}
	.item{
		width: 90%;
		background-color: #fff;
		border-radius: 40upx;
		line-height: 90upx;
		height: 90upx;
		margin-left: 40upx;
	}
	.address {
		width: 100%;
		font-size: 25upx;
		font-weight: bold;
		padding-left: 40upx;

	}
	.top {
		width: 90%;
		margin-top: 20upx;
		border-radius: 25upx;
		margin-left: 5%;
		margin-bottom: 10upx;
		height: 370upx;
		background-color: #ff2a91;
		overflow: hidden;
		background: url(../../static/456.jpg) no-repeat center;
		// background-image: url(@/static/456.jpg);
	}
	.iconfont{
		font-size: 28upx;
		
	}
	.top-top {
		border: 1px solid #ffffff;
		height: 180upx;
	}

	.top-bottom {
		width: 100%;
	}

	.top-bottomall {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.top-bottom1 {
		margin: 10upx;
		margin-left: 40upx;
		width: 80%;
		height: 80upx;
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
		opacity: 0.9;
		border-radius: 20upx;
		text-align: center;
		line-height: 70upx;
	}

	.top-bottom2 {
		opacity: 0.9;
		margin: 10upx;
		margin-left: 40upx;
		width: 80%;
		height: 80upx;
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
		border-radius: 20upx;
		text-align: center;
		line-height: 70upx;
	}

	.center {
		width: 90%;
		margin-left: 5%;
		margin-top: 20upx;
		height: 90upx;
		background-color: #fff;
		border-radius: 30upx;
	}

	.middle {
		width: 90%;
		margin-left: 5%;
		margin-top: 20upx;
		height: 180upx;
		background-color: #fff;
		border-radius: 30upx;
	}

	.bottom {
		width: 90%;
		margin-left: 5%;
		margin-top: 20upx;
		height: 370upx;
		background-color: #fff;
		border-radius: 30upx;
	}

	.gory {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		height: auto;
		background-color: #eeeeee;
	}

	.icon-gerenzhongxin {
		font-size: 80upx;
		color: #0055ff;

	}

	.person {
		width: 100upx;
		height: 100upx;
		border: 1px solid #000;
		text-align: center;
		background-color: #000;
		border-radius: 60upx;
		margin: 30upx;
		z-index: 2;
		float: left;
	}

	.name {
		width: 100px;
		height: 100px;
		font-weight: bold;
		font-size: 34upx
	}

	.phone {
		width: 300upx;
		height: 100upx;
		font-size: 34upx;
		font-weight: bold;
	}

	.message {
		position: relative;
		left: 120upx;
		top: -70upx;
	}

	.setting {
		float: right;
		width: 50px;
		height: 50px;
		margin: 40upx;
		text-align: center;
	}

	.icon-shezhi {
		font-size: 45upx
	}

	.icon-vip {
		text-align: center;
		font-size: 30upx;
		font-weight: bold;
	}

	.icon-qianbao {
		text-align: center;
		font-size: 30upx;
		font-weight: bold;
	}
</style>
