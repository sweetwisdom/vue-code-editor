# vue-code-editor

> 基于：codemirror
>
> 参考：[CodeMirror](https://codemirror.net/)
> [demo](https://sweetwisdom.github.io/vue-code-editor/)

## json

![image-20220311150938701](https://gitee.com/ponyjie/mySou/raw/master/2022/03/upgit_20220311_1646982578.png)

## 错误提示 ❌

![image-20220311151049646](https://gitee.com/ponyjie/mySou/raw/master/2022/03/upgit_20220311_1646982649.png)

### 配置

```js
 cmOptions: {
        // codemirror options
        height: "500px",
        tabSize: 4,
        mode: "json",
        theme: "cobalt",
        mode: "application/json",
        // mode: "text/javascript",
        lineWrapping: true,
        lineNumbers: true,
        line: true,
        //代码折叠
        lineWrapping: true,
        foldGutter: true,

        gutters: ["CodeMirror-lint-markers"],

        lint: true,
        //全屏模式
        fullScreen: true,

        //括号匹配
        matchBrackets: true,
        //快捷键
      },
```
