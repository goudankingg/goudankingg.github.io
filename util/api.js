const baseURL='http://127.0.0.1:3007'
export const request=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL+options.url,
			method:options.method ||'GET',
			data:options.data || {},
			success:(res)=> {
				console.log(res.data);
				if(res.data.status!==0){
					return uni.showToast({
						title:res.data.message,
						icon:'error'
					})
				}else{
					uni.showToast({
						title:"成功"
					})
					resolve(res)
				}
			},
			fail:(err)=> {
				console.log(err);
				uni.showToast({
					title:'获取接口失败',
					icon:'error'
				})
				reject(err)
			}
		})
	})
}
