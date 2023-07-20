const feedBack = {
    hight: 10,
    midle: 5,
    bad: 1,
    ok: 2,
  };
  
  function countProps(obj) {
    const copiedObj = { ...obj };
  
    const feedBackArr = Object.keys(copiedObj);
    return feedBackArr.length;
  }
  
  console.log(countProps(feedBack));
  