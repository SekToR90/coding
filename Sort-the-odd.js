// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



function sortArray(array) {   
    const notIntegerArray = []; 
      let index = 0; 

    //извлечь из нечетные числа, создать из них новый массив  
    array.forEach((item) => { // использовать filter
      if (!item%2) { 
          notIntegerArray.push(item); 
          } 
    }) 
    //отсортировать массив без четных чисел 
    notIntegerArray.sort((a, b) => { // проверить работу без передаваемых аргументов
      return a-b; 
    }) 
    //в отсортированный массив вставить четные числа на свои позиции 
     array.forEach((item, counter) => { 
      if (!item%2) { 
        array[counter] = notIntegerArray[index] ; 
        index = index + 1 
      } 
    }) 
     
    return array 
  }