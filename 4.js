function countTotalSalary(employees) {
    const salaries = Object.values(employees);
  
    const totalSalary = salaries.reduce((total, salary) => total + salary, 0);
  
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