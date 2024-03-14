function passOrFail(students) {
    // Utiliza map para crear un nuevo arreglo con las propiedades "result"
    const evaluateStudents = students.map(student => {
      if (student.grade >= 5) {
        return { ...student, result: "pass" };
      } else {
        return student;
      }
    });
  
    return evaluateStudents;
  }
  
  // Ejemplo de uso:
  const studentData = [
    { firstname: "Alice", lastname: "Smith", grade: 7 },
    { firstname: "Bob", lastname: "Johnson", grade: 3 },
    { firstname: "Charlie", lastname: "Brown", grade: 6 },
  ];
  
  const evaluateStudentsData = passOrFail(studentData);
  console.log(evaluateStudentsData);
  // Debería mostrar:
  // [
  //   { firstname: 'Alice', lastname: 'Smith', grade: 7, result: 'pass' },
  //   { firstname: 'Bob', lastname: 'Johnson', grade: 3 },
  //   { firstname: 'Charlie', lastname: 'Brown', grade: 6, result: 'pass' }
  // ]
  