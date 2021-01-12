## 说明
代码来自项目vue-element-admin；这里对其mock方法做了一点打包工作；

### 安装
```
npm i @hesiwen/mock-server -D
```


### 使用方法
```javascript
const { mockServer } = require('mock-server')
devServer: {
  // ...
  before: mockServer,
},
```

### 项目根目录，添加mock文件夹，添加js文件，文件内容示例
```javascript
module.exports = [
  {
    url: '/framework/principal',
    type: 'get',
    response: config => {
      const { username } = config.body
      return { companyId: '9524', username: 'admin' }
    },
  }
]
```

### 纯前端引入，在main.js文件中
```javascript
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('mock-server')
  mockXHR()
}
```
