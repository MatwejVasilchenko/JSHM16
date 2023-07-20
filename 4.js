function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const employee in employees) {
    totalSalary += employees[employee];
  }

  return totalSalary;
}

const employees = {
  John: 100,
  Sarah: 80,
  Michael: 102,
  Emily: 68,
};

const totalSalary = countTotalSalary(employees);
console.log(totalSalary);
