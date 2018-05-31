import * as comTableApi from '@/api/comTable'

// initial state
const state = {
  tableData: [],
}

// getters
const getters = {
  allTableData: state => state.tableData,
}

// actions
const actions = {
  getAllData ({ commit }) {
    comTableApi.getComAjax('static/comTable.json',{obj1:'',obj2:''},(tableData) => {
      commit('setTableData', tableData)
     })
  }
}

// mutations
const mutations = {
  setTableData (state,tableData) {
    state.tableData = tableData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}