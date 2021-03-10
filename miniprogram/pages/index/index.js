//index.js
//获取应用实例
const app = getApp()
var timer;

Page({
  data: {
    food: '黄焖鸡',
    foodList: [
      '鸡公煲', '砂锅', '麻辣香锅', '水饺',
      '黄焖鸡', '炒饭', '米线', '麻辣烫',
      '炒面', '刀削面', '蔬菜沙拉', '火锅',
      '烤鱼', '炒粉干', '水煮鱼', '酸菜鱼',
      '盖饭', '炸鸡', '烧烤', '花甲粉',
      '螺蛳粉', '盖饭'
    ],
    flag: 1,
    message: '今天吃什么'
  },
  chooseOne: function () {
    var _this = this;
    var len = this.data.foodList.length;
    if (this.data.flag == 1) {
      timer = setInterval(function () {
        var index = Math.round(Math.random() * len);
        var newFood = _this.data.foodList[index];
        _this.setData({
          food: newFood
        })
      }, 50);
      this.setData({
        flag: 0,
        message: '就它了!!'
      })
    } else {
      clearInterval(timer);
      this.setData({
        flag: 1,
        message: '今天吃什么'
      })
    }
  },

})