const person = {
    name: "Atik",
    age: 25,
    isDeveloper: true
  };

  person.country = 'Bangladesh'

//   console.log(person);

  delete person.age

//   console.log(person.age);
//   console.log(person['isDeveloper']);

  for(let key in person){
    // console.log(key, person[key]);
  }


  const student = {
    name: "Sakib",
    roll: 10,
    subjects: {
        math: 85,        
        english: 78,        
        science: 92 }
  }
  console.log(student);
  
  student.subjects.ict= 55;
//   console.log(student);

 student.subjects.bangla = student.subjects.english;
 delete student.subjects.english;

 for(let subject in student.subjects){
    console.log(`${subject}: ${student.subjects[subject]}`);
 }
  
