import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import "@/mock"
import axios from 'axios'

const store = new Vuex.Store({
    state: {
        list: [],
        arrTop: [],
        newList: [],
        count: 0,
        sum: 0,
        detail: [],
        typeList: [],
        userdetail: [],//地址,
        index: 0//nav点击
    },
    getters: {

    },
    mutations: {
        GETDATA(state, arr) {
            state.list = arr;
            window.localStorage.setItem('Data', JSON.stringify(arr))
        },
        SETTOP(state, val) {
            state.arrTop.push(val)
        },
        COUNT(state, v) {
            v.stock = true
            state.newList.push(v)
            v.count++
            state.count++;
            window.localStorage.setItem('newList', JSON.stringify(state.newList))
        },
        MINC(state, payload) {
            if (payload.v.count < 1) {
                payload.v.stock = false
                let index = state.newList.indexOf(payload.v)
                state.newList.splice(index, 1)
                state.sum = sumPrice(state.newList).toFixed(2)
                window.localStorage.setItem('newList', JSON.stringify(state.newList))
            } else {
                state.count--;
                payload.v.count--
                state.sum = sumPrice(state.newList).toFixed(2)
            }


        },
        ADD(state, payload) {
            state.count++;
            payload.v.stock = true
            payload.v.count++
            state.sum = sumPrice(state.newList).toFixed(2)
            window.localStorage.setItem('newList', JSON.stringify(state.newList))

        },
        DETAIL(state, v) {

            let detail = JSON.stringify(v)
            window.localStorage.setItem('Detail', detail)
            state.detail = v;
            console.log(JSON.parse(window.localStorage.getItem('Detail')))
            console.log(JSON.parse(window.localStorage.getItem('Data')))

        },
    },
    actions: {
        getGetDate({ commit }) {
            axios.get('/dataapi').then(res => {
                let arr = res.data;
                commit('GETDATA', arr)
            })
        },

    }
})


function sumPrice(arr) {
    return arr.reduce((prev, item) => {
        let price = item.count ? ((item.count) * (item.price)) : 0
        return prev + price
    }, 0)
}

export default store