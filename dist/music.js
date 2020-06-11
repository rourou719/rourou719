const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "Whiskey and Morphine",
        artist: 'Alexander Jean',
        url: 'http://music.163.com/song?id=416700932&userid=79118658',
        cover: 'http://p2.music.126.net/QqFe_pFAsOlrmW1UN4gLuw==/109951163509974538.jpg',
      },
      {
        name: 'I Found Myself',
        artist: 'ZEFEAR',
        url: 'http://music.163.com/song?id=1450782389&userid=79118658',
        cover:'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
      },
   
    ]
});