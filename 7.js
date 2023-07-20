function findBestEmployee(employees) {
    const employeeEntries = Object.entries(employees);
  
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (const [employee, tasks] of employeeEntries) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  }
  
  const employees = {
    John: 10,
    Sarah: 8,
    Michael: 12,
    Emily: 6,
  };
  
  const bestEmployee = findBestEmployee(employees);
  console.log(bestEmployee); //"Michael"
  