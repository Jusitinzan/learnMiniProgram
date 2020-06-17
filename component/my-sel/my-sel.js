// component/my-sel/my-sel.js
Component({

  data: {
    number: 0
  },
  methods: {
    editNumber(val) {
      this.setData({
        number: this.data.number + val
      })
    }
  }

})