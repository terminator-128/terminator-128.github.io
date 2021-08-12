<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>const ap = new APlayer({
  container: document.getElementById('hexo-aplayer'),
  fixed: true,
  audio: [{
      name: 'Shape of You',
      artist: 'artist',
      url: '/songs/ShapeofYou.mp3',
      cover: 'avatar.png',
  }]
});