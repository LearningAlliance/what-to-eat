import {
  createScopedThreejs
} from '../miniprogram_npm/threejs-miniprogram/index'
const {
  renderCube
} = require('../test-cases/cube')
const {
  renderCubes
} = require('../test-cases/cubes')
const {
  renderSphere
} = require('../test-cases/sphere')
const {
  renderModel
} = require('../test-cases/model')

//index.js
//获取应用实例
const app = getApp()
var timer;

Page({
  data: {
    food: '...',
    foodList: [
      '鸡公煲', '砂锅', '麻辣香锅', '水饺',
      '黄焖鸡', '炒饭', '米线', '麻辣烫',
      '炒面', '刀削面', '蔬菜沙拉', '火锅',
      '烤鱼', '炒粉干', '水煮鱼', '酸菜鱼',
      '盖饭', '炸鸡', '烧烤', '花甲粉',
      '螺蛳粉', '盖饭', '生煎包', '鸭血粉丝汤',
      '寿司', '肯德基', '热干面', '牛肉面',
      '十足', '全家', '西北风~', '东南风～',
      '冷空气～', '龙卷风～'
    ],
    loading: false, // 正在选择时  loading = true
  },
  submit: function () {
    var _this = this;
    var len = this.data.foodList.length;
    if (this.data.loading === false) {
      timer = setInterval(function () {
        var index = Math.floor(Math.random() * len);
        var newFood = _this.data.foodList[index];
        _this.setData({
          food: newFood
        })
      }, 50);
      this.setData({
        loading: true,
      })
    } else {
      clearInterval(timer);
      this.setData({
        loading: false,
      })
    }
  },
  // onLoad: function () {
  //   wx.createSelectorQuery()
  //     .select('#webgl')
  //     .node()
  //     .exec((res) => {
  //       const canvas = res[0].node
  //       this.canvas = canvas
  //       const THREE = createScopedThreejs(canvas)

  //       // renderSphere(canvas, THREE)
  //       // renderCube(canvas, THREE)
  //       // renderCubes(canvas, THREE)
  //       renderModel(canvas, THREE)
  //     })
  // },
  touchStart(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchstart'
    })
  },
  touchMove(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchmove'
    })
  },
  touchEnd(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchend'
    })
  }
})