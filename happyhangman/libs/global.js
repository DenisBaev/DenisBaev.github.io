//кол-во партий
game = 0;

//загадываем слово
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startNewGame() {
r = getRandomInt(0, Dict.length); 

w = Dict[r];

//кол-во попыток
attempts = 6;

//кол-во угаданных букв
letrues = 0;

//нажатые буквы
    pressletters = "";
    
//Monster steps
    ms=1;
}

//текстовые поля

changeTextInFields = function(a, b) {
    root.mtf.text = a;
    root.tf.text = b;
    };    
       
    //открытие слова
    openWord = function() { 
            for (o=0;o<w.length;o++) {
            container.getChildAt(o).gotoAndStop(1);
            root.continue_btn.visible=true;
                }			
        }
    
    //monster moving
    movingMonster = function() {
            root.mouse.x += 135;
            root.mouse.y -= 22;
        if (attempts==0) {
            root.gman.visible=false;
            changeTextInFields("Печеньку съели :-(","");
        }
        }
//Sound
selectletter = './sound/selectletter.wav';
openletter = './sound/openletter.mp3';
win = './sound/win.mp3';
eaten = './sound/eaten.mp3';
mousesteps = [];
for (m = 2; m<7; m++)
{
    mousesteps.push('./sound/mouse_step' + '0' + String(m) + '.mp3');
}

function playsound(src){
    var audio = new Audio(src);
    audio.play();
    audio.onended = function(){this.remove()};
 }
