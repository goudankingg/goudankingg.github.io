<template>
	<view class="u-page">
		<view class="u-demo-block_top">
		</view>
		<view class="u-demo-block">
			<view class="u-demo-block__content">
				<text class="phone">手机号码</text>
				<u-input class="input" v-model="phone" :type="type" placeholder="请输入手机号码"
					placeholderStyle="font-weight: bold;" />
				<text class="phone">验证码</text>
				<u-input class="input" v-model="code" :type="type" placeholder="输入验证码"
					placeholderStyle="font-weight: bold;" />
				<text style="color: #0097e3;position: relative;top: -90%;left: 30%;" @tap="getcode">获取验证码</text>
			</view>

			<view class="u-demo-block__bottom">
				<u-button type="primary" text="登录" customStyle="margin-top: 50px" @click="submit" :disabled="checked">
				</u-button>
				<view style="margin-top: 20px;">
					<u-checkbox-group style="float: left;">
						<u-checkbox @change="checkboxChange" v-model="checked"></u-checkbox>
					</u-checkbox-group>
					<text style="font-size: 10px;">已阅读并同意 <text
							style="color: #0097e3;font-size: 10px;font-weight: bold;">《用户服务协议》《隐私政策》 </text> </text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUUID
	} from '../../util/uuid.js'
	export default {
		data() {
			return {
				code: '',
				phone: '',
				border: true,
				type: 'text',
				checked: true,
				uuid: ''
			}
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则

		},
		methods: {
			async submit() {
				this.uuid = getUUID()
				if (this.phone == '') {
					return uni.showToast({
						title: '手机号不能为空',
						icon: 'error'
					})
				}
				let result = await this.$request({
					url: '/api/login',
					method: 'POST',
					data: {
						uuid: this.uuid,
						phone: this.phone
					}
				})
				this.getuserinfo()
			},
			async getuserinfo() {
				console.log('getuserinfo接口');
				let result1 = await this.$request({
					url: '/api/getuserinfo',
					method: 'POST',
					data: {
						phone: this.phone
					},
				})
				console.log('result1');
				console.log(result1);
				this.userinfo = result1.data.message
				console.log('userinfo');
				console.log(this.userinfo[0]);
				if (result1.data.status == 0) {

					uni.setStorage({
						key: 'PHONE',
						data: result1.data.message[0].phone,
						success: function() {
							console.log('success');
						}
					});
					uni.setStorage({
						key: 'ADDRESS',
						data: result1.data.message[0].address,
						success: function() {
							console.log('success');
						}
					});
					setTimeout(()=>{
						uni.switchTab({
							url: '/pages/my/my'
						})
					}, 1000)

				}
			},
			getcode() {
				this.code = 1234
			},
			checkboxChange(e) {
				let a = this.checked == true ? false : true
				this.checked = a
			},
		},
	}
</script>

<style lang="scss">
	.u-demo-block__content {
		width: 80%;
		height: 33%;
		line-height: 100upx;
		position: absolute;
		top: 200upx;
		background-color: #ffffff;
		display: grid;
		place-items: center;
		left: 10%;
		// margin: 50upx;
		// padding: 50upx;
		border-bottom-left-radius: 40px;
		border-bottom-right-radius: 40px;
		overflow: hidden;
		background: linear-gradient(135deg, transparent 25px, #ffffff 0) top left,
			linear-gradient(-135deg, transparent 25px, #ffffff 0) top right;
		background-size: 80% 100%;
		background-repeat: no-repeat;
		border: 1px solid #ffd425;
	}

	.u-demo-block_top {
		position: absolute;
		top: -100upx;
		width: 100%;
		height: 500upx;
		// display: grid;
		// place-items: center;
		background: url(../../static/loginbgi.jpg) no-repeat center;

	}

	.u-demo-block {
		background-color: #f7f7f7;
	}

	.input {
		background-color: #ffffff;
		border: 0px;
		color: #0097e3;
		position: relative;
		left: -15%;
	}

	.phone {
		position: relative;
		top: 15px;
		left: -38%;
		// float: left;
		font-size: 10px;
	}

	.u-demo-block__bottom {
		position: absolute;
		top: 45%;
		width: 80%;
		height: 100px;
		display: grid;
		place-items: center;
		left: 10%;
		// background-color: #000;
	}
</style>
