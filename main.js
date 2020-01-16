function draw() {
}

function gameLoop() {
    ctx.clearRect(0, 0, c.width, c.height)
    // Code..
    request = requestAnimationFrame(gameLoop)
}