<template>
	<view class="container">
		<view class="wrap1">
			<!-- <u-swiper :list="list" mode="dot" :effect3d="true"></u-swiper> -->
			<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000"
				indicator-active-color="#fff" indicator-color="#d1d1d1" duration="800">
				<swiper-item>
					<view class="">
						<image src="../../static/swiper1.jpg" mode="" style="height: 320upx;width: 100%;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="">
						<image src="../../static/swiper2.jpg" mode="" style="height: 320upx;width: 100%;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="">
						<image src="../../static/swiper3.jpg" mode="" style="height: 320upx;width: 100%;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="">
						<image src="../../static/swiper4.jpg" mode="" style="height: 320upx;width: 100%;"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="tip">
			<text style="float: left;font-weight: bold;margin-top: 10upx;">资讯\n公告</text>
			<view class="tips">
			      <u-notice-bar mode="vertical" :list="text1" type="none"></u-notice-bar>
			</view>
		</view>
		<view class="salle">
			<a >
				<image src="../../static/912185043.png" mode=""></image>
			</a>
		</view>
		<view>
			<view class="wrap">
				<view class="u-tabs-box">
					
					<u-sticky offset-top="0" :enable="enable">
						<u-tabs-swiper activeColor="#000000" ref="tabs" :list="list" 
						:current="current" @change="change" 
						:is-scroll="false" swiperWidth="750">
						</u-tabs-swiper>		
					</u-sticky>
					
					
				</view>
				<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
							<view class="page-box">
								<view class="order">
									<box></box>
								</view>
								<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
							</view>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
							<view class="page-box">
								<view class="order">
									<blodbox></blodbox>
								</view>
								<u-loadmore :status="loadStatus[1]" bgColor="#f2f2f2"></u-loadmore>
							</view>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;">
							<view class="page-box">
								<view class="order">
								
								</view>
							</view>
						</scroll-view>
					</swiper-item>
					
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				enable:true,
				orderList: [[], [], [], []],
				text1:[
					'【十八数藏上新公告】民族风俗画系列藏品《秋收》明日上线',
					'【十八数藏活动公告】《韩熙载夜宴图N卡》抽检活动今日上线',
					'【十八数藏寄售公告】二期盲盒《韩熙载夜宴图》系列藏品开放寄售'
					],
				list: [{
					name: '数字藏品'
				}, {
					name: '盲盒'
				}, {
					name: '活动精选'
				}],
				goods:{},
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
			}
		},
		computed: {
			// 价格小数
			priceDecimal() {
				return val => {
					if (val !== parseInt(val)) return val.slice(-2);
					else return '00';
				};
			},
			// 价格整数
			priceInt() {
				return val => {
					if (val !== parseInt(val)) return val.split('.')[0];
					else return val;
				};
			}
		},
		methods: {
			reachBottom() {
				// 此tab为空数据
				if(this.current != 2) {
					this.loadStatus.splice(this.current,1,"loading")
					// setTimeout(() => {
					// 	this.getOrderList(this.current);
					// }, 1200);
				}
			},
			// 页面数据
			// getOrderList(idx) {
			// 	for(let i = 0; i < 5; i++) {
			// 		let index = this.$u.random(0, this.dataList.length - 1);
			// 		let data = JSON.parse(JSON.stringify(this.dataList[index]));
			// 		data.id = this.$u.guid();
			// 		this.orderList[idx].push(data);
			// 	}
			// 	this.loadStatus.splice(this.current,1,"loadmore")
			// },
			// 总价
			totalPrice(item) {
				let price = 0;
				item.map(val => {
					price += parseFloat(val.price);
				});
				return price.toFixed(2);
			},
			// 总件数
			totalNum(item) {
				let num = 0;
				item.map(val => {
					num += val.number;
				});
				return num;
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				// this.getOrderList(index);
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		},
		onLoad() {
			// this.getOrderList(0);
			// this.getOrderList(1);
			// this.getOrderList(3);
		},
		onShow() {
		        this.enable= true
		    },
		    onHide() {
		        this.enable= false
		    }
	}
</script>
<style>
/* #ifndef H5 */
page {
	height: 100%;
	/* background-color: #f2f2f2; */
}
/* #endif */
</style>
<style lang="scss" scoped>
	.container {
		height: auto;
		/* background-color: #f0b62d; */
	}
	.scroll{
		margin: 35upx;
		overflow: hidden;
	}
	.wrap1 {
		/* padding: 10px; */
		margin-left: 5%;
		width: 90%;
		height: 270upx;
		background-color: #a7b4ff;
		border-radius: 50upx;
		overflow: hidden;
	}

	.tip {
		/* padding: 10px; */
		margin-left: 5%;
		width: 90%;
		height: 100upx;
		/* background-color: #eca6ff; */
		background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
		border-radius: 20upx;
		margin-top: 10upx;
		/* overflow: hidden; */
		padding-left: 30upx;
		border: 1upx solid #a7b4ff;
	}

	.tips {
		width: 90%;
		height: 100upx;
		padding-top: 10upx;
		border-radius: 40upx;
		/* background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); */
	}

	.salle {
		/* padding: 10px; */
		margin-left: 5%;
		width: 90%;
		height: 180upx;
		/* background-color: #ffb8d1; */
		border-radius: 50upx;
		margin-top: 10upx;
	}
	.salle image{
		width: 100%;
		height: 180upx;
	}
	.selectgoods {
		position: sticky;
		top: 40px;
		/* padding: 10px; */
		margin-left: 4%;
		width: 100%;
		background-color: #fff;
		height: 1000upx;
		/* background-color: #f2ff98; */
		/* border-radius: 50upx; */
		margin-top: 10upx;
		z-index: 1;
	}
	.order {
		width: 100%;
		background-color: #ffffff;
		margin-left: 5%;
		border-radius: 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		.top {
			display: flex;
			justify-content: space-between;
			.left {
				display: flex;
				align-items: center;
				.store {
					margin: 0 10rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
			}
			.right {
				color: $u-type-warning-dark;
			}
		}
		.item {
			display: flex;
			margin: 20rpx 0 0;
			.left {
				margin-right: 20rpx;
				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}
			.content {
				.title {
					font-size: 28rpx;
					line-height: 50rpx;
				}
				.type {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}
				.delivery-time {
					color: #e5d001;
					font-size: 24rpx;
				}
			}
			.right {
				margin-left: 10rpx;
				padding-top: 20rpx;
				text-align: right;
				.decimal {
					font-size: 24rpx;
					margin-top: 4rpx;
				}
				.number {
					color: $u-tips-color;
					font-size: 24rpx;
				}
			}
		}
		.total {
			margin-top: 20rpx;
			text-align: right;
			font-size: 24rpx;
			.total-price {
				font-size: 32rpx;
			}
		}
		.bottom {
			display: flex;
			margin-top: 40rpx;
			padding: 0 10rpx;
			justify-content: space-between;
			align-items: center;
			.btn {
				line-height: 52rpx;
				width: 160rpx;
				border-radius: 26rpx;
				border: 2rpx solid $u-border-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-type-info-dark;
			}
			.evaluate {
				color: $u-type-warning-dark;
				border-color: $u-type-warning-dark;
			}
		}
	}
	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;
		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}
		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}
		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
		}
	}
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}
	.swiper-box {
		flex: 1;
	}
	.swiper-item {
		height: 100%;
	}
</style>
