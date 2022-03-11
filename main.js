console.clear();
var Main = {
  data() {
    return {
      code: "let name = zc",
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
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.$refs.codeEdit.codemirror.setSize("auto", 500);
    console.log(window.jsonlint);
  },
  created() {},

  methods: {
    onCmCodeChange(value) {
      console.log("value:", value);
      // console.log('this is new code', newCode)
      //   this.code = newCode
    },
  },
};

var Ctor = Vue.extend(Main);
Vue.use(window.VueCodemirror);
var app = new Ctor().$mount("#app");
