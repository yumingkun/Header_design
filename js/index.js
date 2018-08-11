// 获取元素
let getElem=function (selector) {
    return document.querySelector(selector)
};

//获取元素样式
let getCls=function (element) {
    return element.getAttribute('class');
};
//设置元素样式
let setCls=function (element,cls) {
    return element.setAttribute('class',cls);
};


// 为元素添加样式(主要添加类名）
let addCls=function (element,cls) {
    let baseCls=getCls(element);//获取样式（类名）
    if (baseCls.indexOf(cls)===-1){//如果不包含此类，则添加新类名
        setCls(element,baseCls+' '+cls)
    }

};
// 为元素删除样式(主要删除类名）outline AAA
let delCls=function (element,cls) {
    let baseCls=getCls(element);//获取样式（类名）
    if (baseCls.indexOf(cls)!==-1){//如果包含此类，则f
        setCls(element,baseCls.split(cls).join(' '))
    }

};





window.onscroll=function () {
    let top=document.documentElement.scrollTop;//获取滚动条到顶部的距离
    console.log(top);
    // 导航条黑色动画
    if(top>80){
        addCls(getElem('.header'),'header_status_black')
    }else{
        delCls(getElem('.header'),'header_status_black');
    }

};

