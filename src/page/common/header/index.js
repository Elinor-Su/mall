

'use strict';
require('./index.css');
var _mm     = require('util/mm.js');
// 通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
       //组件加载
       var keyword = _mm.getUrlParam('keyword');
       //keyword存在，则回填输入框
       if (keyword) {
           $('#search-input').val(keyword);
       }

    },
    bindEvent : function(){
        var _this = this;
        //点击搜索按钮以后做的搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        //输入回车后也要做搜索提交
        $('#search-input').keyup(function (e) {
            if(e.keyCode === 13) {
                _this.searchSubmit();
            }
        });
    },
    searchSubmit: function() {
        var keyword = $.trim($('#search-input').val());
        //如果提交的时候有keyword，正常跳转套list页面
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword
        }else {
            //如果keyword 为空，直接返回首页
            _mm.goHome();
        }
    }

};

header.init();