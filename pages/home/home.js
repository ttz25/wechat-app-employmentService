// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImages:[
      "../images/top.jpg",
      "../images/top2.jpg",
      "../images/top3.jpg",
    ],
    categoryList:[{
      name: "就业服务",
      src: "../images/employment.png"
    },{
      name: "培训",
      src: "../images/train.png"
    }, {
      name: "求职",
      src: "../images/job.png"
    }, {
      name: "安置点概览",
      src: "../images/place.png"
    }],
    text: '就业服务平台上线了，欢迎大家体验！',
    marqueePace: 1,//滚动速度
    marqueeDistance: 20,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 40,
    size: 14,
    orientation: 'left',//滚动方向
    interval: 20, // 时间间隔

    middleImg: "../images/middle.jpg",

    fileList:[    //政策文件
    '关于落实东西部扶贫劳务协作有关政策的实施',
    '关于进一步加强一地扶贫搬迁劳动力就业创业',
    '省财政厅 省人离资源社会保障厅 关于发发发阿发发发',
    '某某市人离资源社会保障局 关于落实求职创业就业',
    '某某市万山区第一批异地扶贫搬迁工程 抽签'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 页面显示
    var vm = this;
    var length = vm.data.text.length * vm.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth ;// 屏幕宽度
    var query = wx.createSelectorQuery();
  /*  query.select(".marquee_box").bindingClientRext(function(rect){
      vm.setData({
        windowWidth : rect.width + 'px'
      })
    }).exec();*/
    vm.setData({
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    vm.run2();// 第一个字消失后立即从右边出现
  },

  run2: function () {
    var vm = this;
    var interval = setInterval(function () {
      if (-vm.data.marqueeDistance2 < vm.data.length) {
        // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
        vm.setData({
          marqueeDistance2: vm.data.marqueeDistance2 - vm.data.marqueePace,
          marquee2copy_status: vm.data.length + vm.data.marqueeDistance2 <= vm.data.windowWidth + vm.data.marquee2_margin,
        });
      } else {
        if (-vm.data.marqueeDistance2 >= vm.data.marquee2_margin) { // 当第二条文字滚动到最左边时
          vm.setData({
            marqueeDistance2: vm.data.marquee2_margin // 直接重新滚动
          });
          clearInterval(interval);
          vm.run2();
        } else {
          clearInterval(interval);
          vm.setData({
            marqueeDistance2: -vm.data.windowWidth
          });
          vm.run2();
        }
      }
    }, vm.data.interval);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})