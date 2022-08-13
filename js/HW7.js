
const generateBtn = document.querySelector(`.btn`);

let picsConteiner = document.querySelector(`.picsConteiner`);

let picArray = [
    {

    }
]

generateBtn.addEventListener(`click`, () => {

})

// function picRender =

function picRandom () {
    let result = ``;

    for (let i=0; i < pics.length; i++) {
        result += `<div class="card">
                        <p class="cardName">Card Name</p>
                        <div class="pic"></div>
                        <p class="cardDescription"> Card Description</p>
                  </div>`
    };
    picsConteiner.innerHTML = result;
};