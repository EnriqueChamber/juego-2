tiles.setTilemap(tiles.createTilemap(
            hex`200020000101010101010101010101010101040205010101010101010101010101010101010101010101010101010101010104020501010101010101010101010101010101010101010101010101010101010402050101010101010101010101010101010101010101010101010101010101040205010101010101010101010101010101010101010101010101010101010104020501010101010101010101010101010101010101010101010101010101010402050101010101010101010101010101010303030303030303030303030303020202030303030303030303030303030303060606060602020606060606060606060606060606060606060202060606060601010101010405010101010101010101010101010101010101040501010101010101010101040501010101010101010101010101010101010104050101010101010101010104050101010101010101010101010101010101010405010101010101010101010405010101010101010101010101010101010101040501010101010101010101040501010101010101010101010101010101010104050101010101010101010104050101010101010101010101010101010101010405010101010101010101010405010101010101010101010101010101010101040501010101010101010101040501010101010101010101010101010101010104050101010101010101010104050101010101010101010101010101010101010405010101010101010101010405010101010101010101010101010101010101040501010101010101010101040501010101010109030303030a010101010101040501010101010101010101040501010101010104020202020501010101010104050101010101030303030302020303030303030202020202020303030303030205010101010106060202060606060606060606020202020202060606060606060801010101010101040501010101010101010107060202060801010101010101010101010101010104050101010101010101010101040501010101010101010101010101010101010405010101010101010101010104050101010101010101010101010101010101040501010101010101010101010405010101010101010101010101010101010104020303030303030303030303020203030303030303030303030303030301010706060606060606060606060602020606060606060606060606060606060101010101010101010101010101010405010101010101010101010101010101010101010101010101010101010101040501010101010101010101010101010101010101010101010101010101010104050101010101010101010101010101010101010101010101010101010101010405010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . 2 2 2 2 2 2 2 2 . . . . 2 . . 2 . . . . 
. . . . 2 . . 2 . . . . 2 . . . . . . 2 . . . . 2 . . 2 . . . . 
2 2 2 2 2 . . 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
2 2 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 . . . . 
. 2 . . 2 . . . . . . . 2 2 2 . . 2 2 2 . . . . . . . . . . . . 
. 2 . . 2 . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . 
. 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath3],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
