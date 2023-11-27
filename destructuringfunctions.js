let students ={
    name:'Obieze_Christain',
    level: 300,
    department: 'english',
    faculty:'art'
}

function getStudents({name,level, faculty}){
    return `Name:${name}level:${level},faculty:${faculty}`
}
getStudents=students;
console.log(getStudents);

const lecturers ={
    name:'FC_Chilaka',
    level: 'Prof',
    department: 'biochemistry',
    faculty:'biological_sciences'
}

function getlecturers({name,level,department}){
    return `Name:${name},level:${level},department:${department}`
}
getlecturers =lecturers
// console.log(getlecturers);