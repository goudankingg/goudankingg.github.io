import {getgoodsinfo} from '../../util'


const state={
	goodsinfo:[]
}
const mutations={
	GETGOODSINFOS(state,goodsinfo){
		state.goodsinfo=goodsinfo
	}
}
const actions={
	async getgoodsinfos({commit},data){
		let result = await getgoodsinfo(data)
		commit('GETGOODSINFOS',result.data.message)
	}
}
const getters={
	goodsinfo(state){
		return state.goodsinfo || []
	}
}

export default{
	state,mutations,actions,getters
}