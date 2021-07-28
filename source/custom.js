import Waline from '@waline/client/dist/Waline.noStyle';

var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '( •_•)>⌐(•_•) 给我回来';
        clearTimeout(titleTime);
    }
    else {
        document.title = 'ヾ(•ω•`)o欢迎回到' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});