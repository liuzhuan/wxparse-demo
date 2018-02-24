微信小程序 1.4.0 起已经开始支持 [`rich-text`][rich-text] 组件。也许，可以抛弃 `wxParse` 等第三方富文本组件了。

> [基础库 1.4.0][log] 于 2017 年 7 月 11 日发布。据[微信官方数据统计][client]，截止到 2018 年 2 月 24 日为止，1.4.0 以下的基础库版本占比不到 0.8%。

## 用法

```js
/** page.js */
Page({
  data: {
    html: [
      '<div class="red">你好，<strong>世界</strong></div>',
      '<div class="blue">你好，<span style="color:red;">世界</span></div>',
      '<div class="underline">下划线</div>'
    ]
  }
})
```

```html
<block wx:for="{{ html }}">
  <rich-text class="rich" nodes="{{item}}"></rich-text>
</block>
```

还可以设置样式：

```css
.rich {
  border: 1px solid #CCC;
  display: block;
  margin: 10px 15px;
  padding: 10px;
}

.red {
  background: purple;
}

.blue {
  background: steelblue;
}

.underline {
  text-decoration: underline;
}
```

[rich-text]: https://mp.weixin.qq.com/debug/wxadoc/dev/component/rich-text.html
[log]: https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/uplog.html
[client]: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/client-lib.html