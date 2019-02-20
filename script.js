let sample = new Vue({
  el: '.sample',
  data: {
    name: 'Nastya',
    isshow: true,
  },
  methods: {
    show: function () {
      this.data.isshow = false
    }
  }
})