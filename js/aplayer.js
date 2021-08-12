const ap = new APlayer({
  container: document.getElementById('hexo-aplayer'),
  fixed: true,
  audio: [{
      name: 'Shape of You',
      artist: 'artist',
      url: '/songs/ShapeofYou.mp3',
      cover: 'avatar.png',
  }]
});