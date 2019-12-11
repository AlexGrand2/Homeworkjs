var person1 = {
  name: "James",
  surname: "Robinson",
  age: 35
};
var person2 = {
  name: "Annah",
  surname: "Mussa",
  fathername: "Sergeevna",
  education: "biologist"
};
var person3 = {
  name: "Rey",
  surname: "Bredberry",
  address: "Kharkiv"
};

var arrayOfPeople = [person1, person2, person3];
// console.log(arrayOfPeople);

var str = "<table border='1'>";
for (var number in arrayOfPeople) {
  var element = arrayOfPeople[number].name;
  str += `<tr><td>${+number + 1}</td><td>${element}</td></tr>`;
}
str += "</table>";
console.log(str);
document.write(str);

// let jPeople = JSON.stringify(arrayOfPeople);
// console.log(jPeople);

// for(var person of arrayOfPeople){
//     if('fathername' in person){
//         person.fullName = person.name + ' ' + person.fathername + ' ' + person.surname;
//     }else{
//         person.fullName = person.name + ' ' + person.surname;
//     }
// }
// for(var person of arrayOfPeople){
//     console.log(person.fullName);
// }

// for(var person of arrayOfPeople){
//     for(var property in person){
//         console.log(property + " -> " + person[property]);
//     }
// }

// for(var index in arrayOfPeople){
//     console.log(arrayOfPeople[index].name + " " + arrayOfPeople[index].surname);
// }

// a.patronymic = 'Andreevich';
// var property1 = 'patronymic';
// if(property1 in a){
//     alert(a[property1]);
// }else{
//     alert("Property " + property1 + " is absent.");
// }
