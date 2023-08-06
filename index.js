// // Exercise1
// let age=prompt("Enter your age");
// age=Number.parseInt(age);

// if(age>10&&age<20){
//   console.log("Age is as expected");
// }
// else{
//   console.log("Age is not as expected");
// }

// exercise on looops
const data={
  rossi:20,
  kells:14,
  james:34,
  
}
console.log(Object.keys(data).length);
console.log(data[Object.keys(data)])
// console.log(Object.keys(data))

for(i=0;i<Object.keys(data).length;i++){
  console.log("The marks of "+Object.keys(data)[i]+ 'are' +data[Object.keys(data)[i]]);
  
}

for(key in data){
  console.log("the marks of "+key+ "are" +data[key]);
}


const str='bana\a'
console.log(str.length);

