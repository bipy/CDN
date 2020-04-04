const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    lrcType: 0,
    audio: [
        {
            name: 'I Love You',
            artist: 'Billie Eilish',
            url: 'https://cdn.jsdelivr.net/gh/bipy/CDN@master/music/I%20Love%20You.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/bipy/CDN@master/music/I%20Love%20You.png',
            //lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        }
    ]
});