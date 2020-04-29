let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  

recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });