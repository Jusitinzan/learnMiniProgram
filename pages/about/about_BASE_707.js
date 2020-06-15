// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "丁赞",
    number: 0,
    students: [{
      name: "丁赞",
      sex: '男',
      age: 15
    }, {
      name: "超超",
      sex: '男',
      age: 18
    }, {
      name: "老叶",
      sex: '男',
      age: 20
    }]
  },

  addNumber() {
    this.setData({
      number: this.data.number + 1
    })
  },
  dropNumber() {
    this.setData({
      number: this.data.number - 1
    })
  }
})