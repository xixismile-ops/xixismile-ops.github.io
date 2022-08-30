//设置全局变量
var js = document.scripts;
js = js[js.length - 1].src.substring(0, js[js.length - 1].src.lastIndexOf("/") + 1);
layui.config({
    base:  js+'lib/extend/'
  });
