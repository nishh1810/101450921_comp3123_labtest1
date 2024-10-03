function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("Error: 'Array Only!");
      } else {
        const result = arr
          .filter(item => typeof item === 'string') 
          .map(str => str.toLowerCase());      
        resolve(result); 
      }
    });
  }
  
  const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error)); 
  