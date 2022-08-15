
const generateBtn = document.querySelector(`.btn`);

const picsConteiner = document.querySelector(`.picsConteiner`);

let picArray = [];

generateBtn.addEventListener(`click`, () => {
    // console.log(randomCard());
    picArray.push(randomCard());
    picRender ();
    // console.log(picArray);
});

function picRender () {
    let result = ``;

    for (let i=0; i < picArray.length; i++) {
        result += `<div class="card">
                        <p class="cardName">${picArray[i].cardName}</p>
                            <img src="${picArray[i].pic}" alt="pic">
                        <p class="cardDescription">${picArray[i].cardDescription}</p>
                        <button class="btn-del" onclick="cardDel(${picArray[i].id})">🗑️</button>
                  </div>`
    }
    picsConteiner.innerHTML = result;
}

function cardDel(id) {
    picArray = picArray.filter(el => el.id !== id);
    picRender ();
}

function randomId() {
    return Math.floor(Math.random()*100000000000)
}
function randomCard() {
    const wordsForNames = [
        `Гудрон`, `Доберман`, `Клиент`, `Корректорский`,
        `Монумент`, `Навытяжку`, `Неведение`, `Самовольный`, `Скребница`,
        `Целовальник`, `Гальванический`, `Заискивать`, `Засолочный`, `Златокованый`,
        `Наспех`, `Образина`, `Отпарить`, `Пуэрториканцы`, `Свинство`, `Собственный`
    ];
    const wordsForDescriptions = [
        `я захохочу и радостно плюну`, `им нипочем огонь забвения`, `27 ноября - День оценщика`, `накроет город с головой`,
        `в один невыразимый миг`, `наполнит ветер ночь интриг`, `А ты найдешь добычу с ней`, `Глаза чарующего мая`,
        `Обстреляй потаённую бухточку`, `Луна – бесстыжее создание`, `И что вершины годы не вернут?`, `Ах, мечты`,
        `Здравствуй лето, зеленое, милое, светлое...`, `для них – беззубый фельетон`, `и звезд игривые веснушки`
    ];
    return {
        cardName: wordsForNames[Math.floor(Math.random()*wordsForNames.length-1)+1],
        cardDescription: wordsForDescriptions[Math.floor(Math.random()*wordsForDescriptions.length-1)+1],
        id: randomId(),
        pic: `https://random.imagecdn.app/500/500`,
    }

}