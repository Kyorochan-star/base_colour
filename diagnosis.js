const questions = [
    {
        question:"手のひらの色は？",
        answer:[
            "黄味、オレンジ味が強い",
            "赤色味、ピンク色味が強い"
        ],
        picture:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbEGmDGMa2cdcmTPtwjfQPWXmOK3yADyFa3r1_Ub_Ki9xu-vNojmQkEqCyuZf_GxK5gOzo4T1I7FcwhdoP18wq0dq2s1sxnPg8tPm6CBwk_7HwGFbjHkD7NFgL8vPiREXMHwoDy_cnxZG4/s1600/virus_hand_clean.png"
    },
    {
        question:"瞳の色はどっち？",
        answer:[
            "ライトブラウン・ブラウン",
            "ブラック・ダークブラウン"
        ],
        picture:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGaEGmEdgWQLDbfjFimlkkqmkF9YYgjymqFt_eoGjg7PcfV35pm7QY3ONEzMC8jnxiSrU9ZZaTjcDXcue5yvxR6D3DkmxGw4IOK38Zscp86Y3-9DU1Tb-8YOnl1olwMl_I0tGBED3ajC0/s800/body_me.png"
    },
    {
        question:"地毛の髪色と質感はどっち？",
        answer:[
            "ライトブラウン寄りの色味でつややかな質感",
            "限りなくブラックに近いダークブラウンでマットな質感の方"
        ],
        picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGXSKpLOihPgynlC_iO2ojlQIMBmakebl2Q&s"
    },
    {
        question:"手首から肘までの内側の肌の色はどっち？",
        answer:[
            "黄色味が強い肌色",
            "ピンク色味が強い肌色"
        ],
        picture:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6qYYrMrAxJ_CG3YXWbIRuk4alRAMw4JDfal11QTRErkNxF1eVCNm6cNEL0hFt3cQ3TsVmYKMg21YqToy_Ytiyt4Svnqg0toarvnkWEvchPdxhgXO7DWzNqYXGdzBN-VDkzyHRRe1Z0sFE/s180-c/thumbnail_body_arm.jpg"
    },
    {
        question:"日焼けした時はどうなる？",
        answer:[
            "赤くなる or 小麦色の肌色になる",
            "赤くなった後に多少黒くなる or 赤くならず、すぐに黒く赤褐色になる"
        ],
        picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnBNxainUGmNRslZ5in1DSyvLrY6FMYKFgw&s"
    }
];
const quiz_length = questions.length;
let quiz_index = 0;

console.log(document.getElementsByTagName("img"));

const $button=document.getElementsByTagName("button");

/*質問文と選択肢を反映させる */
const setUp = ()=>{
    document.getElementById("Q").textContent = questions[quiz_index].question;
    document.getElementsByTagName("img")[0].src = questions[quiz_index].picture;
    $button[0].textContent = questions[quiz_index].answer[0];
    $button[1].textContent = questions[quiz_index].answer[1];
}

let yellow = 0;
let blue = 0;

/*ボタンを押したらイエベ要素ブルベ要素判定 */
const clickHandler = ()=>{
    quiz_index++;
    if(quiz_index<quiz_length){
        setUp();
    }else{
        if(yellow>blue){
            window.alert("あなたはイエベの可能性が高いです。");
        }else{
            window.alert("あなたはブルベの可能性が高いです。");
        }
    }
};

$button[0].addEventListener('click', ()=>{
    clickHandler();
    yellow++;
});
$button[1].addEventListener('click', ()=>{
    clickHandler();
    blue++;
});

setUp();
