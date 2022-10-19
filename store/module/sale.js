import { gettypechange } from '../../util'

const state={
	// goodsgoods:[],
	typelist:[],
}
const mutations={
	// GETGOODSGOODS(state,goodsgoods){
	// 	state.goodsgoods=goodsgoods
	// },
	GETTYPE(state,typelist){
		state.typelist=typelist
	}
}
const actions={
	// async getgoodsgoods({commit}){
	// 	let result = await getallgoods()
	// 	commit('GETGOODSGOODS',result.data.message)
	// },
	async gettype({commit},data){
		let result = await gettypechange(data)
		commit('GETTYPE',result.data.message)
	}
}
const getters={
	// goodsgoods(state){
	// 	return state.goodsgoods || [] 
	// },
	typelist(state){
		return state.typelist || [] 
	}
}

export default{
	state,mutations,actions,getters
}