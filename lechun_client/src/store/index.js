import Vue from 'vue'
import Vuex from 'vuex';
import user from './module/user'
import axios from '@/utils/axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listData: [], // 20条数据的
        typeList: [], // 4条的
        shopcarList: {}   // 购物车
    },
    getters: {
        cartCount(state) {// 总的个数 
            let count = 0;
            for (let key in state.shopcarList) {
                count += state.shopcarList[key].count;
            };
            window.localStorage.setItem('shopcarList', JSON.stringify(state.shopcarList));
            return count;
        },
        checkCount(state) { //选择选中或不选中时的个个数 
            let count = 0;
            for (let key in state.shopcarList) {
                if (state.shopcarList[key].isCheck) {
                count += state.shopcarList[key].count;
                }
            };
            return count;
        },
        isCheckAll(state) { //全选
            let check = true;
            for (let key in state.shopcarList) {
                if (!state.shopcarList[key].isCheck) {
                    check = false;
                }
            };
            window.localStorage.setItem('shopcarList', JSON.stringify(state.shopcarList));
            return check;
        },
        countPrice(state) {//差价
            let price = 0;
            for (let key in state.shopcarList) {
                if (state.shopcarList[key].isCheck) {
                    price += state.shopcarList[key].price * state.shopcarList[key].count;
                }
            };
            return price;
        }
    },
    mutations: {
        listData(state, list) {
            state.listData = list;
            // console.log(state.listData)
        },
        typeList(state, list) {
            state.typeList = list;
            // console.log(state.typeList)
        },
        shopcarList(state, list) {
            console.log(list)
            state.shopcarList = list;
        },
        add(state, item) {
            console.log('1111')
            console.log(state.shopcarList)
            if (state.shopcarList[item.id]) {
                state.shopcarList[item.id].count += 1;
            } else {
                this._vm.$set(state.shopcarList, item.id, item);
                this._vm.$set(state.shopcarList[item.id], 'count', 1);
                this._vm.$set(state.shopcarList[item.id], 'isCheck', true);
            }
        },
        minus(state, id) {
            state.shopcarList[id].count -= 1;
            if (state.shopcarList[id].count < 1) {
                delete state.shopcarList[id];
                state.shopcarList = Object.assign({}, state.shopcarList)
            }
        },
        setIsCheck(state, payload) {
            this._vm.$set(state.shopcarList[payload.id], 'isCheck', payload.isCheck);
        },
        setCheckAll(state, isCheckAll) {
            for (let key in state.shopcarList) {
                this._vm.$set(state.shopcarList[key], 'isCheck', isCheckAll);
            };
        }
    },
    actions: {
        getData({ commit }) {
            axios.get('/api/product/list').then(result => {
                console.log(result)
                commit('listData', result.data)
            })
            axios.get('/api/product/type-list').then(result => {
                commit('typeList', result.data)
            })
            const shopcarList = JSON.parse(window.localStorage.getItem('shopcarList'));
            console.log(shopcarList)
            if (shopcarList) {
                commit('shopcarList', shopcarList);
            }
        },
        getDetail (context, id) {
            return new Promise((resolve, reject) => {
                axios.get('/api/product/detail', {params: {id: id}}).then((res) => {
                    resolve(res.data)
                });
            })
        }
    },
    modules: {
        user,
    }
})

export default store;
