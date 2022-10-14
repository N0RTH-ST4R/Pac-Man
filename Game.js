const fs=require('fs')
var tiles={
    "wall":{
        "char":"#"
    },
    "pellet":{
        "char":"."
    },
    "empty":{
        "char":" "
    }
}
var board=[
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
    [tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall, tiles.wall],
]
var pacman={
    
}

for(var i1=0;i1>board.length;i1++){
    for(var i2=0;i2>board[i1];i2++){
        console.log(board[i1][i2].char)
        if(i2=board[i1][i2].length){
               console.log("\n")
        }
    }
}
