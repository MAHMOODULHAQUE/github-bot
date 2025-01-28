const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require("simple-git");
const random = require('random');
const FILE_PATH = './data.json';
const makeCommit = n => {
    if(n===0) return simpleGit().push();
    const x = Math.floor(Math.random() * 30); // Random number between 0 and 54
console.log('Using Math.random:', x);
    const y = Math.floor(Math.random() * 6); // Random number between 0 and 6
console.log('Using Math.random:', y);
    const DATE = moment().subtract(2,'w').add(1,'d')
                 .add(x,'w').add(y,'d').format();
const data = {
    date: DATE
}
console.log(DATE);
jsonfile.writeFile(FILE_PATH, data, ()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, 
        makeCommit.bind(this, --n));
});
}

makeCommit(100);
