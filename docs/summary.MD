## 项目总结

- es6中的import引入的永远是同一地址的对象，不管你在哪里import，都是一样的对象。如果想引入的是不同对象还是用require。这其实就是所谓的静态引用！

- 文件上传formdata处理模块：[formidable](https://github.com/felixge/node-formidable)

- 项目里如果有传递表单(fields)数据，还请用全能小助手[formidable](https://github.com/felixge/node-formidable)，不要用坑爹的`body-parser`

```javascript
const form = new formidable.IncomingForm(); // 实例化子类
form.uploadDir = './public/img/' + type; // 定义上传路径。注意：这里formidable是从node_modules来的，所以'./'所指的是整个程序的CWD。
form.parse(req, async (err, fields, files) => { // 转换formdata，指明callback是异步，里面有await！
  // 此时上传文件名字是随机的，需改名。
  const extname = path.extname(files.upload.name); // 获取文件后缀名 .jpg
  // fs.unlink(files.upload.path) // 在尝试修改文件失败后记得截图与文件的链接
}
```

- 图片文件缩放模块： [gm](https://github.com/aheckmann/gm)

```javascript
gm(repath) // 缩放图片尺寸
            .resize(400, 400, '!') // 限制大小
            .write(repath, async (err) => {
              if (err) { // 尝试写入，报错则reject
                console.log('改写图片尺寸失败');
                fs.unlink(repath);
                reject(err);
              } else {
                resolve(repath.replace(/^\.\/public/, '')); // 所有成功只返回图片路径，替换'/publc'
              }
            })
```
- express中权限严重中间件

需求：在路由中，除某小部分路由以外全部加入权限验证
实现：在router index中，先把不需要验证的路由写上面，需要验证的路由写下面，中间用`app.use(Middleware)`进行权限验证，在中间件中记得`next()`往下一步执行。
