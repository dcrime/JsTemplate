c = document.getElementById('Canvas')
ctx = c.getContext('2d')

c.width = window.innerWidth;
c.height = window.innerHeight;

request = requestAnimationFrame(gameLoop)