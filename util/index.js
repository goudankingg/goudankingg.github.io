import {request} from './api.js'

//获取所有商品的接口
export const getallgoods = ()=>request({url:'/api/getgoodsall',method:'GET'})
//获取类型可变的商品接口
export const gettypechange = (data)=>request({url:'/api/getgoods',method:'POST',data})
//根据skuid获取商品详情
export const getgoodsinfo = (data)=>request({url:'/api/getgoodsinfo',method:'POST',data})