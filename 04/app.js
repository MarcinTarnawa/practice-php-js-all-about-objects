const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

const getTestBirthday = new Date();

const testUser = {
    firstName: 'Test',
    lastName: 'Nowak',
    born: {
        day: getTestBirthday.getDate(),
        month: getTestBirthday.getMonth() + 1,
        year: '1985'
    }
}

let birthday = new Date(user.born.year, user.born.month - 1, user.born.day);
let today = new Date();
let testBirthday = new Date(testUser.born.year, testUser.born.month - 1, testUser.born.day);

if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
    console.log('Today is your birthday!');
}

if (today.getMonth() === testBirthday.getMonth() && today.getDate() === testBirthday.getDate()) {
    console.log('Test Today is your birthday!');
}

console.log(birthday.toDateString()); 