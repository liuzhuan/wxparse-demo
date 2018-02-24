/**
 * 帮助文档：https://github.com/icindy/wxParse
 */

var wxParse = require('../../libs/wxParse/wxParse')

Page({
  onLoad
})

function onLoad() {
  var articles = [
    '<div>我是 HTML 代码<strong>加粗</strong><img src="https://thumb.qschou.com/files/qschou.com/project/402d5508e24-ae6d-4d7d-a9ba-6d2cd801ce8f15188400352257640180006ea7271b510cb2c1f3647bd71a99ade6.jpg@!home.png" />文案，随便写文案</div>',
    '<div>2<strong>加粗</strong><img src="https://thumb.qschou.com/files/qschou.com/project/402d5508e24-ae6d-4d7d-a9ba-6d2cd801ce8f15188400352257640180006ea7271b510cb2c1f3647bd71a99ade6.jpg@!home.png" />文案，随便写文案</div>'
  ]
  var that = this
  /**
  * WxParse.wxParse(bindName , type, data, target,imagePadding)
  * 1.bindName绑定的数据名(必填)
  * 2.type可以为html或者md(必填)
  * 3.data为传入的具体数据(必填)
  * 4.target为Page对象,一般为this(必填)
  * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
  */
  const nodes = articles.map(item => wxParse.wxParse('article', 'html', item, that, 5).article)
  that.setData({
    nodes: nodes
  })
}