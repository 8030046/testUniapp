
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/hiv/HivHome/HivHome","pages/my/my","pages/hiv/details","pages/phoneme/phoneme","pages/community/community"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","rpxCalcMaxDeviceWidth":960,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750,"background":"#efeff4"},"tabBar":{"color":"#7A7E83","selectedColor":"#0EBCC7","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/img/syzz.png","selectedIconPath":"static/img/syzz1.png","text":"首页"},{"pagePath":"pages/hiv/HivHome/HivHome","iconPath":"static/img/xx.png","selectedIconPath":"static/img/xx1.png","text":"信息"},{"pagePath":"pages/my/my","iconPath":"static/img/wm.png","selectedIconPath":"static/img/wm1.png","text":"我们"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"testuni","compilerVersion":"3.1.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarTextStyle":"black","backgroundColor":"#FFFFFF","onReachBottomDistance":50}},{"path":"/pages/hiv/HivHome/HivHome","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"信息"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"我们"}},{"path":"/pages/hiv/details","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"详情"}},{"path":"/pages/phoneme/phoneme","meta":{},"window":{"navigationBarTitleText":"联系我们"}},{"path":"/pages/community/community","meta":{},"window":{"navigationBarTitleText":"社区图片"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
