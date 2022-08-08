// ========================== 1.1 ========================================
class Human {
    constructor(height, weight, name, dateOfBirth, gender, disablement) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.disablement = disablement;
    }
get getHello() {
       console.log('Привет, меня зовут ' + this.name);
}
set setNewName(name) {
        this.name = name;
        console.log('New name ' + this.name);
}
set setDofBirth (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        console.log('dateOfBirth ' + this.dateOfBirth);
}

set setDisablementStatus(disablement) {
        this.disablement = disablement;
        console.log('setDisablementStatus  ' + this.disablement);
}
set setParamH(height) {
        this.height = height;
        console.log('height ' + this.height);
}
set setParamW(weight) {
        this.weight = weight;
        console.log('weight ' + this.weight);
}
set setParamG(gender) {
        this.gender = gender;
        console.log('gender ' + this.gender);
}

get getInfo () {
        const info = {
            name: this.name,
            height: this.height,
            weight: this.weight,
            dateOfBirth: this.dateOfBirth,
            gender: this.gender,
            disablement: this.disablement,
        }
    console.log('Info about human ', info);
}
}
let firstHuman = new Human(185,100,'Vit', new Date("1996-2-25"),'male',false);
console.log(firstHuman);
firstHuman.getHello;
firstHuman.setNewName = 'taras';
firstHuman.setDisablementStatus = true;
firstHuman.getInfo;

// ========================== 1.2 /// 1.3 ========================================

class FrontEndDev extends Human {
    constructor(startCarr, pastCompanies) {
        super();
        this.startCarr = startCarr;
        this.pastCompanies = pastCompanies;

    }


get getHelloFrEnd() {
    console.log('Привет, меня зовут ' + this.name + ', я Фронтенд разработчик. Работаю с ' + this.startCarr);

}};

let firsFrEDev = new FrontEndDev( new  Date ('2019-3-11'),{
    start: new Date ('2019-3-11'),
    end: new Date ('2021-11-6'),
    salaryPerMonth: 1300,
    position: 'middle',
    companyName: 'Oracle',
});

console.log(firsFrEDev);
firsFrEDev.setNewName = 'Iryna';
firsFrEDev.setDisablementStatus = false;
firsFrEDev.setDofBirth = '1995-6-23';
firsFrEDev.setParamH = 180;
firsFrEDev.setParamG = 'female';
firsFrEDev.setParamW = 70;








// class HouseBuilder extends (Human) {
//     constructor() {
//         super();
//     }
// }