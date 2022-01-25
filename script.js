let fields = [];
let gameOver = false;
let currentShape = 'cross';
let filledFields = 0;

let AUDIO_SUCCESS = new Audio('./audio/win1.mp3');
let AUDIO_END = new Audio('./audio/game_over.mp3');

function fillShape(id) {
    if (!fields[id] && !gameOver) { //wenn fields an der Stelle [id] nicht ausgefüllt ist und der Wert von gameOver nicht true ist, führe folgendes aus:
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player_2').classList.remove('player_inactive');
            document.getElementById('player_1').classList.add('player_inactive');
            filledFields++;
            console.log(filledFields);
        } else {
            currentShape = 'cross';
            document.getElementById('player_1').classList.remove('player_inactive');
            document.getElementById('player_2').classList.add('player_inactive');
            filledFields++;
            console.log(filledFields);
        }

        fields[id] = currentShape;
        console.log(fields);
        draw();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle_' + i).classList.remove('d-none');
            AUDIO_SUCCESS.play();
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross_' + i).classList.remove('d-none');
            AUDIO_SUCCESS.play();
        }
    }
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { //wenn die jeweiligen Stellen des Arrays den gleichen Inhalth haben, führe flgendes aus:
        winner = fields[0]; //in der Variable winner wird der Inhalt des Arrays an der Stelle [0] gespeichert
        document.getElementById('line_0').style.transform = 'scaleX(1)'; //dem entsprechenden HTML Element wird der inline-style 'scaleX(1)' hinzugefügt,=> die Linie wird in der im css programmierten geschwindigkeit animiert
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line_1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line_2').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line_3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_6').style.transform = 'rotate(45deg) scaleX(1.3)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_7').style.transform = 'rotate(-45deg) scaleX(1.3)';
    }

    if (winner || filledFields >= 9) { //wenn winner == true , führe folgendes aus
        win();
    }

}

function win() {
    gameOver = true;
    setTimeout(function() {
        document.getElementById('GameOverImg').style.transform = 'scaleX(1) scaleY(1)';
        AUDIO_END.play();
    }, 1000);
    setTimeout(function() {
        document.getElementById('restartButton').style.transform = 'scaleX(1) scaleY(1)';
    }, 2000);
}