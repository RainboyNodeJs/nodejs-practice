var cheerio = require('cheerio');


var $ = cheerio.load(r'<div class='text'> 
<span class="righttext">
    <a href="http://jandan.net/ooxx/page-1902#comment-3088933">
        47533
    </a>
</span>
<p>
    <a href="http://ww4.sinaimg.cn/large/66b3de17gw1f1z1du68rej20go0p00wj.jpg"
    target="_blank" class="view_img_link">
        [&#x67E5;&#x770B;&#x539F;&#x56FE;]
    </a>
    <br>
    <img src="http://ww4.sinaimg.cn/mw600/66b3de17gw1f1z1du68rej20go0p00wj.jpg">
</p>
<div class="vote" id="vote-3088933">
    <span id="acv_stat_3088933">
    </span>
    <a titl,e="&#x5708;&#x5708;/&#x652F;&#x6301;" class="acvclick acv4" id="vote4-3088933"
    href="javascript:acv_vote(3088933,1);">
        OO
    </a>
    [
    <span id="cos_support-3088933">
        92
    </span>
    ]
    <a title="&#x53C9;&#x53C9;/&#x53CD;&#x5BF9;" class="acvclick acva" id="votea-3088933"
    href="javascript:acv_vote(3088933,0);">
        XX
    </a>
    [
    <span id="cos_unsupport-3088933">
        4
    </span>
    ]
</div>
</div>');

var t = $("img").attr('src');
console.log(t);