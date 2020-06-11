{% aplayerlist %}
{
    "narrow": false,                          // （可选）播放器袖珍风格
    "autoplay": true,                         // （可选) 自动播放，移动端浏览器暂时不支持此功能
    "mode": "random",                         // （可选）曲目循环类型，有 'random'（随机播放）, 'single' (单曲播放), 'circulation' (循环播放), 'order' (列表播放)， 默认：'circulation' 
    "showlrc": 3,                             // （可选）歌词显示配置项，可选项有：1,2,3
    "mutex": true,                            // （可选）该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停
    "theme": "#e6d0b2",	                      // （可选）播放器风格色彩设置，默认：#b7daff
    "preload": "metadata",                    // （可选）音乐文件预载入模式，可选项： 'none' 'metadata' 'auto', 默认: 'auto'
    "listmaxheight": "513px",                 // (可选) 该播放列表的最大长度
    "music": [
        {
            name: 'Whiskey and Morphine',                         <!-- 歌曲名称-->
            artist: 'Alexander Jean',                       <!-- 歌曲作者-->
            url: 'http://music.163.com/song/media/outer/url?id=416700932.mp3',     <!-- 歌曲路径-->
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg', <!-- 歌曲封面图片-->
         
        },
        {
            name: 'I Found Myself',
            artist: 'ZEFEAR,Teya Flow',
            url: 'http://music.163.com/song/media/outer/url?id=1450782389.mp3',
            cover: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
    
        },
    ]
}
{% endaplayerlist %}