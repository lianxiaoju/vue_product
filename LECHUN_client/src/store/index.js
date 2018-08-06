import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        list: [],//20条数据
        types: [],//4个数据
        newShopcar: {}//总弹框
    },
    getters: {
        sumCount(state) {
            let count = 0;
            for (let key in state.newShopcar) {
                if (state.newShopcar[key]) {
                    count += state.newShopcar[key].count
                }
            }
            window.localStorage.setItem('newShopcar',JSON.stringify(state.newShopcar))
            return count;
        },
        priceSum(state) {
            let sum = 0;
            for (let key in state.newShopcar) {
                if (state.newShopcar[key]) {
                    sum += state.newShopcar[key].price * state.newShopcar[key].count
                }
            }
            return sum.toFixed(2);
        }
    },
    mutations: {
        GET_SHOPCAR_LIST(state, list) {
            state.list = list
            // console.log(this.list)
        },
        Types(state, data) {
            state.types = data
        },
        NEWSHOPCAR(state, data) {
            console.log(data)
            state.newShopcar = data
        },
        MINC(state, payload) {
            state.newShopcar[payload.id].count -= 1;
            if (state.newShopcar[payload.id].count < 1) {
                delete state.newShopcar[payload.id]
                state.newShopcar = Object.assign({}, state.newShopcar)

            }

        },
        ADD(state, item) {
            if (state.newShopcar[item.id]) {
                state.newShopcar[item.id].count += 1;
            } else {
                this._vm.$set(state.newShopcar, item.id, item);
                this._vm.$set(state.newShopcar[item.id], 'count', 1);
            }

        }

    },
    actions: {
        GETSHOP({ commit }) {
            fetch('/api/shopcar', {
                credentials: 'include'
            }).then(res => {
                return res.json()
            }).then(data => {
                commit('GET_SHOPCAR_LIST', data.data)
            })

            fetch('/api/typearr', {
                credentials: 'include'
            }).then(res => {
                return res.json()
            }).then(data => {
                commit('Types', data)
            })

            const newShopcar = JSON.parse(window.localStorage.getItem('newShopcar'));
            if (newShopcar) {
                commit('NEWSHOPCAR', newShopcar)
            }

        }
    }
})


export default store;