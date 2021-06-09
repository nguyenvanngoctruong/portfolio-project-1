const database = [
    {
        field:'IT',
        topic:'Special characters',
        word:'スラッシュ',
        meanTA:"Slash",
        meanTV:"Dấu gạch chéo",
        image:"",
        voice:"",
        hiragana:"",
        example:""
    },
    {
        field:'IT',
        topic:'Special characters',
        word:'チルド',
        meanTA:"Tilde",
        meanTV:"Dấu ngã",
        image:"",
        voice:"",
        hiragana:"",
        example:""
    },
    {
        field:'IT',
        topic:'Special characters',
        word:'縦棒',
        meanTA:"Vertical bar",
        meanTV:"Dấu cột dọc",
        image:"",
        voice:"",
        hiragana:"Tatebō",
        example:""
    },
    {
        field:'IT',
        topic:'Special characters',
        word:'中括弧閉じ',
        meanTA:"Right brace",
        meanTV:"Dấu ngoặc nhọn phải",
        image:"",
        voice:"",
        hiragana:"Chū kakkotoji",
        example:""
    },
    {
        field:'IT',
        topic:'Special characters',
        word:'中括弧',
        meanTA:"Left brace",
        meanTV:"Dấu ngoặc nhọn trái",
        image:"",
        voice:"",
        hiragana:"Nakakakko",
        example:""
    }
]

// lấy number thẻ bất kỳ trong database
const randomCard = (number, dataOb) => {
    let rdObject = [];
    let numRandom = [];
    for(let i =0; i < dataOb.length; i++){
        numRandom[i] = i;
    }

    while(number > 0 ){
        let random = Math.floor(Math.random() * numRandom.length)
        rdObject.push(dataOb[numRandom[random]]);
        numRandom.splice(random,1);
        number--;
    }
    return rdObject;

}

const showRandomFlashCard = () =>{
    console.log('FlashCards đã random:');
    console.log(randomCard(2,database));
}

showRandomFlashCard();