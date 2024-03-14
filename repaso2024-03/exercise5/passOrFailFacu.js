function passOrFail(students) {
  const evaluatedStudents = students.map((student) => {
    if (student.grade >= 5) {
      return { ...student, result: "pass" };
    }
    return student;
  });
  return evaluatedStudents;
}
