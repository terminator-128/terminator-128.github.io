---
title: About Me
date: 2021-07-26 01:20:10
layout: about
---

<span id="typed"></span>



<!-- Prepare a container for your calendar. -->
<div class="calendar">
    <!-- Loading stuff -->
</div>

<div id="waline"></div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
    var options = {
    strings: [
        '会使用魔法の麻瓜',
        '不晓大海之宽 但晓天空之蓝',
        'In me the tiger sniffs the rose',
        '天才就是99%的汗水+1%的灵感',
        'Rome was not built in a day'
        ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    
    };
    var typed = new Typed('#typed', options);
</script>


<script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />

<script>
  Waline({
    el: '#waline',
    serverURL: 'https://hexo-blog-about-comments-lumtw9w85-terminator-128.vercel.app/',
    placeholder: '想对我说些什么呢哈哈ヾ(•ω•`)o？',
    avatar: 'retro',
    // 设置 emoji 为微博与哔哩哔哩
    emoji: [
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
    ],
  });
</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Lora&family=Ma+Shan+Zheng&display=swap');

#typed {
    font-family: 'Lora', 'Ma Shan Zheng', cursive;
}

.about-intro {
    margin-left: 10px;
}

.typed-cursor {
    font-size: 20px;
}

.markdown-body .border, .border{
    border: 0px;
}

.markdown-body p > img.vemoji {
    box-shadow: 0 0 0 0;
    border-radius: 0px;
}

.v[data-class=v] .vcontent .vemoji {
    width: 1.5em;
    margin: 0rem 0.15rem 0.25rem 0.15rem;
}

#waline-edit {
	background-image: url(https://count.getloli.com/get/@cxyBlog?theme=rule34);
    background-size: 250px;
	background-repeat: no-repeat;
	background-position: right;
	background-color: rgba(255, 255, 255, 0);
	resize: vertical
}


#waline-edit:hover {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .12);
    background-position-x: 900px;
    transition: all 0.3s ease-in-out 0s;
}

img.vuser {
    transition: all 1s;   /* 旋转时间为 1s */
    box-shadow: 0 5px 11px 0 rgb(0 0 0 18%), 0 4px 15px 0 rgb(0 0 0 15%);
    border-radius: 3px;
}

img.vuser:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
}

</style>