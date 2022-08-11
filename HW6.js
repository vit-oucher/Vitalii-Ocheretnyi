// ========================== 1.1 ========================================
// let start = '';
// let end = '';
// let salaryPerMonth = 0;
// let position = '';
// let companyName = '';
let work = [
    {
        start: new Date ('2019-3-11'),
        end: new Date ('2019-11-6'),
        salaryPerMonth: 800,
        position: 'junior',
        companyName: 'Oracle',
    },
    {
        start: new Date ('2019-11-06'),
        end: new Date ('2020-01-07'),
        salaryPerMonth: 1300,
        position: 'middle',
        companyName: 'ttk',
    },
    {
        start: new Date ('2020-01-07'),
        end: new Date ('2020-9-06'),
        salaryPerMonth: 1500,
        position: 'middle',
        companyName: 'lpg',
    },
    {
        start: new Date ('2020-9-06'),
        end: new Date ('2021-11-10'),
        salaryPerMonth: 2384,
        position: 'middle',
        companyName: 'trd',
    }
];

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
// let firstHuman = new Human(185,100,'Vit', new Date("1996-2-25"),'male',false);
// console.log(firstHuman);
// firstHuman.getHello;
// firstHuman.setNewName = 'taras';
// firstHuman.setDisablementStatus = true;
// firstHuman.getInfo;

// ========================== 1.2 /// 1.3 ========================================

class FrontEndDev extends Human {
    constructor(height, weight, name, dateOfBirth, gender, disablement, startCarr, pastCompanies) {
        super(height, weight, name, dateOfBirth, gender, disablement);
        this.startCarr = startCarr;
        this.pastCompanies = pastCompanies;
    };

get getHelloFrEnd() {
    console.log('Привет, меня зовут ' + this.name + ', я Фронтенд разработчик. Работаю с ' + this.startCarr);

};
set totalSel (k) {
        let money = [];
        for (let i=0; i < work.length; i++) {
            let x = work[i].start;
            let y = work[i].end;
            let monthDiff = (y.getFullYear() - x.getFullYear()) * 12;
            monthDiff -= x.getMonth() + 1;
            monthDiff += y.getMonth();

            let total = monthDiff * work[i].salaryPerMonth;
            money.push(total);
        };
            let l = 0
            for (let j=0; j< money.length; j++){
                l += money[j];
            }
            console.log(l);

        };
    getCompanyName(companyNameFind) {

        for (let i=0; i<work.length; i++) {
            if (work[i].companyName === companyNameFind)
                console.log(work[i]);
        };
            };

    newCompany (start, end, salaryPerMonth, position, companyName) {
        let comp2 = {};
        comp2 = {
            start: start,
            end: end,
            salaryPerMonth: salaryPerMonth,
            position: position,
            companyName: companyName,
        };
        work.push(comp2);
        console.log(work)

}};


let secondHuman = new FrontEndDev (196, 95, 'Ihor', new Date('1998-06-05'), 'male',false, work[0].start, work[3].companyName);
// secondHuman.totalSel = work;

// console.log(secondHuman);

// secondHuman.getHelloFrEnd;

// secondHuman.newCompany(new Date('2021-11-23'), new Date('2022-03-25'), 964, 'senior', 'trd6');
// secondHuman.getCompanyName('trd6');




class HouseBuilder extends (Human) {
    constructor(height, weight, name, dateOfBirth, gender, disablement, location, instruments, workSpeed) {
        super(height, weight, name, dateOfBirth, gender, disablement);
        this.location = location;
        this.instruments = instruments;
        this.workSpeed = workSpeed
    };

    building (kvm) {
        let time = (kvm * this.workSpeed);
        console.log(time);
        if (time < 1440) {
            let hours = + Math.trunc(time / 60);
            let min = time % 60;

            console.log(hours + ' ч. и ' + min + ' мин.');
        }
        else if (time >= 1440 && time < 10080) {
            let min = time % 60;
            let hours = Math.trunc(time / 60) ;
            let days = Math.trunc(hours / 24);


            console.log(days + ' д.' + hours + ' ч. и ' + min + ' мин.');
        }
    };


};

let newHouseBuilder = new HouseBuilder(188,95, 'Rob', new Date('1985-12-05'), 'male', false, 'Kyiv', ['кирка', 'топор', 'кельма', 'руки)'],30);
// console.log(newHouseBuilder);

newHouseBuilder.building(49);