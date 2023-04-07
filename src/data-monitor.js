/**
 * 前端数据监控:前端监控一般使用的是image来传输数据，因为图片的传输快，还没有跨域问题
 */

//js错误异常捕获和请求错误捕获
window.addEventListener('error', (errInfo) => {

    console.log('%c [ error ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', errInfo);
});
//Promise异常捕获
window.addEventListener('unhandledrejection', (errInfo) => {
    console.log('%c [ unhandledrejection ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', errInfo);

});

//白屏监控