sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(3)
let mySprite = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 f f 5 5 5 5 f f 5 5 5 f 
    f 5 5 5 1 d 5 5 5 5 1 d 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 f 5 5 5 5 5 5 f 5 5 5 f 
    f 5 5 5 f f f f f f f f 5 5 5 f 
    f 5 5 5 5 f b b b b f 5 5 5 5 f 
    . f 5 5 5 5 f f f f 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    .............beebbbb............
    ............eebbbb4bb...........
    ............eb344bb4bb..........
    ............e44334bb4bb.........
    ............eb433344b4be........
    ............4eb43344444be.......
    ...........bd4eb43333344bb......
    ..........b455d4443333444bb.....
    ..........4d5555d444333444bb....
    .........4555555dd4b4443444be...
    ........bd5555d555d4bb444444ee..
    ........b55ddd665555bb4b44444ee.
    .......bd5555677655554ebb44444eb
    .......43222558855555d4eeb44b4ee
    ......b422332ddd555222d4eebbb4be
    ......be22232ed55522332db4ebbbbe
    .....bde22222e555e22232edd4bbbbe
    .....b52e222e3555e22222eddd4ebee
    ....bd552eee355552e222e355544eee
    ....665dd5555555552eee355dd4deee
    ...6776555555555555555551554d4ee
    ...4885222555dddd6655551544d4eee
    ..b45522332555dd677611d444ddeee.
    ..4d5222232e55555881d44ddd4eee..
    .bdd5e22222e555115114d54d4ee....
    .b55d2e222e351144d1d55eeee......
    bd5ddd2eee3d444555dd4e..........
    b555115dddd55d544eede...........
    4511d444d5544ee...4de...........
    41d4555d4ee........44...........
    41554eede.......................
    44ee...4e.......................
    `, SpriteKind.Food)
