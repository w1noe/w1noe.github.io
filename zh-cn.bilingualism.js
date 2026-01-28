 
'use strict';

/**
 * Html页面多语言化。
 *
 * 在Html页面中只需先引用一个JQuery文件：
 * 例如：<script src="http://libs.baidu.com/jquery/1.8.1/jquery.min.js"></script>
 *
 * 在引用本JS文件
 * 例如：<script src="./zh-cn.bilingualism.js"></script>
 *
 * 如果你想多语言化一个Html页面，你应该做两件事:
 * 1. 在HTML标签中，加入 data-sw-translate="" 标记
 *      例如：<h6 data-sw-translate="">Hello World</h6>
 * 2. 然后在下面的 window.SwaggerTranslator.learn 中添加中英文对应关系
 *      添加： "Hello World": "你好，世界",
 */
window.SwaggerTranslator = {
    _words: [],

    translate: function () {
        var $this = this;
        $('[data-sw-translate]').each(function () {
            $(this).html($this._tryTranslate($(this).html()));
            $(this).val($this._tryTranslate($(this).val()));
            $(this).attr('title', $this._tryTranslate($(this).attr('title')));
        });
    },

    _tryTranslate: function (word) {
        return this._words[$.trim(word)] !== undefined ? this._words[$.trim(word)] : word;
    },

    learn: function (wordsMap) {
        this._words = wordsMap;
    }
};


/* jshint quotmark: double */
window.SwaggerTranslator.learn({
    "bookerbug's home": "布客虫的小窝",
    "About Me": "关于我",
    "Blogs": "博客",
    "Zhihu": "知乎",
    "Bilibili": "B站",
    "Videos": "视频",
    "Photos": "相册",
    "CnBlogs": "博客园",
    "Self Introdution": "布客虫的自我介绍",
    "Welcome to my website!I'm a nine grade student from China.I'm sprinting for the high school entrance examination in full force.": "很荣幸您能访问我的网站！目前是一名初三学生，正在努力冲刺中考。",
    "Main job: Game development.": "主要: 游戏开发",
    "The languages I use: c++(main) gdscript(main) rust(main) C#(main) python html javascript":"会的编程语言：c++（主）、rust（主）、C#(主)、gdscript(主)、python、html、javascript",
    "The game engines I use: godot(main) unity bevy": "会的游戏引擎：godot(主)、unity、bevy",
    "I know a bit about linux and linux kernal.Opensuse is the release version of my computer.": "也会一点linux，opensuse是我电脑用的linux发行版",
    "But the point: I can only know a bit about everything.": "总结：啥都如会",
    "Hobbies: Programming Playing basketball and Playing yoyo.": "爱好：编程、悠悠球、玩游戏",
    "Screen name: bookerbug" : "网名：布客虫",
    "Email: 2745960048@qq.com" : "邮箱:2745960048@qq.com",
    "Twitter: bookerbug" : "微信:bookerbug123",
    "简体中文": "English"
});


// function on_change_language_click(){
//     window.SwaggerTranslator.translate();
// }


