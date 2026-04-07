class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
  }

  addGrade(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
  }

  getAverageGrade(subject) {
    if (subject !== undefined) {
      const subjectGrades = this.grades[subject];
      if (!subjectGrades || subjectGrades.length === 0) return 0;
      
      const sum = subjectGrades.reduce((acc, curr) => acc + curr, 0);
      return sum / subjectGrades.length;
    }

    const allGrades = Object.values(this.grades).flat();
    if (allGrades.length === 0) return 0;

    const totalSum = allGrades.reduce((acc, curr) => acc + curr, 0);
    const average = totalSum / allGrades.length;
    
    return Number(average.toFixed(2));
  }
}

// Przykład użycia:
const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('history', 4);
student.addGrade('english', 2);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(avgMath, avg);

console.log(student);

const subject = 'maths';
const grades = student.grades[subject];
console.log(grades);