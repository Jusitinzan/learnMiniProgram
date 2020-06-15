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
  onLoad() {
    // 页面被加载出来
    console.log('------onLoad---')
  },
<<<<<<< HEAD
  // 页面显示出来时
  onShow() {
    console.log('------onShow---')
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('------onReady---')
  },
  // 页面隐藏起来时
  onHide() {
    console.log('------onHide---')
  },
  // 页面卸载时
=======
    // 页面显示出来时
  onShow() {
    console.log('------onShow---')
  },
    // 页面初次渲染完成时
  onReady() {
    console.log('------onReady---')
  },
    // 页面隐藏起来时
  onHide() {
    console.log('------onHide---')
  },
    // 页面卸载时
>>>>>>> 483adf7... 0202_注册小程序
  onUnload() {
    console.log('------onUnload---')
  },

  addNumber() {
    this.setData({
      number: this.data.number + 1
    })
  },
  dropNumber(event) {
    console.log('-------------', event)
    this.setData({
      number: this.data.number - 1
    })
  },

  clickMethod(event) {
    console.log('-------------', event)
  },



  handleCaptureBind1() {
    console.log('-----handleCaptureBind1')
  },
  handleBind1() {
    console.log('-----handleBind1')
  },
  handleCaptureBind2() {
    console.log('-----handleCaptureBind2')
  },
  handleBind2() {
    console.log('-----handleBind2')
  },
  handleCaptureBind3() {
    console.log('-----handleCaptureBind3')
  },
  handleBind3() {
    console.log('-----handleBind3')
  },


  handleAddmethod(event) {
    console.log('++++++', event)
  },


  editNumber() {
    // 获取组件对象
    var select = this.selectComponent('.select');
    console.log('--------', select)
    // 通过setData修改组件数据
    // select.setData({
    //   number: select.data.number + 1
    // })

    select.editNumber(2);
  }

})