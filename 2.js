function countProps(obj) {
    const count = 0;
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        count++;
      }
    }
    return count;
  }
  

