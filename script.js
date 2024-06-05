function chessBoard(length, width){
    let lineType = 2
    let lineA = ""
    let lineB = ""

    for (let j = 0; j < width; j++){
        lineA += "#"
        lineA += " "
        lineB += " "
        lineB += "#"
    }

    for (let i = 0; i < length; i++){
            if (lineType % 2 == 0){
            console.log(lineA)
            }
            else{
                console.log(lineB)
            }
            lineType += 1
    }
}

chessBoard(10, 10)