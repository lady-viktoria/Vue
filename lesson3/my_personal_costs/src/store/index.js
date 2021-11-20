import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fetchDataObj = {
    "page1": [
    { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
    { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
    { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
    ],
    "page2": [
    { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
    { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
    ]
  } 

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList:[], 
    pageList:[]
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentList(state, payload) {
      state.paymentsList.push(payload)
    },
    addDataListToPaymentList(state, payload) {
      // const {payload, page} = obj;
      // if(state.pageList.includes(page)){
      //   return;
      // } else {
      //   state.pageList.push(page);
        state.paymentsList = state.paymentsList.concat(payload)
      //}
    },
    setCategoryList(state, payload) {
      state.categoryList = payload
    }, 
    addPageList(state, payload) {
        state.pageList.push(payload);
    }
    
    
    // updateItem(state,payload) {
    //   state.paymentsList[payload, idx] = payload
    //   sate.paymentsList = [...sate.paymentsList]
    //   //or
    //   // Vue.set(state.paymentsList, 0, payload)
    // }
  },
  actions: {
    // fetchData({commit}){
    //   return new Promise((resolve) =>{
    //     setTimeout(()=>{
    //       const items = []
    //       for (let i=1; i<=50; i++){
    //         items.push({
    //           date: "23.09.2020",
    //           category: "Sport",
    //           value:i
    //         })
    //       }
    //       resolve(items)
    //     },2000)
    //   }).then(res=>{
    //     commit('setPaymentListData', res)
    //   })
    // },

    fetchData({state, commit}, page){
      if(state.pageList.includes(page)) {
        return
      } else {
        commit('addPageList', page);
        return new Promise((resolve) =>{
          setTimeout(()=>{
            const items = fetchDataObj[page] || [];
            
            resolve(items)
          },2000)
        }).then(res=>{
          commit('addDataListToPaymentList', res)
        })
      }
    },

    fetchCategory({commit}) {
      return new Promise((resolve) => {
        setTimeout(() =>{
          resolve(['Food', 'Sport', 'Education', 'Auto', 'Health', 'Family'])
        }, 1000)
      }).then(res=>{
        commit('setCategoryList', res)
      })
    }
  },
  modules: {
  },
  getters: {
    getPaymentList: state=> state.paymentsList,
    getFullPaymentValue: state=>{
      return state.paymentsList.reduce((res, cur) => res+cur.value, 0)
    },
    getCategoryList: state=> state.categoryList
  }
})
