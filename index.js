
// Список курсов
let courses = [
   { name: "Courses in England", prices: [0, 100] },
   { name: "Courses in Germany", prices: [500, null] },
   { name: "Courses in Italy", prices: [100, 200] },
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function getFilteredCourses(courses, range) {
   // Заменяем null на математические значения 
   rangeMin = range[0] == null ? 0 : range[0]
   rangeMax = range[1] == null ? Infinity : range[1]

   return courses.filter((elem) =>
      (elem.prices[1] == null ? Infinity : elem.prices[1]) >= rangeMin  // максимальная цена >= Минимальный запрос
      &&
      (elem.prices[1] == null ? Infinity : elem.prices[1]) <= rangeMax  // максимальная цена <= Максимального запрос      
      ||
      (elem.prices[0] == null ? 0 : elem.prices[0]) <= rangeMax // максимальная цена <= Максимального запрос  
      &&
      (elem.prices[1] == null ? Infinity : elem.prices[1]) >= rangeMin) // максимальная цена  >=  Минимальный запрос

}



console.log(getFilteredCourses(courses, requiredRange1))

console.log(getFilteredCourses(courses, requiredRange2))

console.log(getFilteredCourses(courses, requiredRange3))


// [
//    { name: 'Courses in England', prices: [ 0, 100 ] },
//    { name: 'Courses in Italy', prices: [ 100, 200 ] },
//    { name: 'Courses in Russia', prices: [ null, 400 ] },
//    { name: 'Courses in China', prices: [ 50, 250 ] },
//    { name: 'Courses in USA', prices: [ 200, null ] },
//    { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
//    { name: 'Courses in France', prices: [ null, null ] }
//  ]
//  [
//    { name: 'Courses in England', prices: [ 0, 100 ] },
//    { name: 'Courses in Italy', prices: [ 100, 200 ] },
//    { name: 'Courses in Russia', prices: [ null, 400 ] },
//    { name: 'Courses in China', prices: [ 50, 250 ] },
//    { name: 'Courses in USA', prices: [ 200, null ] },
//    { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
//    { name: 'Courses in France', prices: [ null, null ] }
//  ]
//  [
//    { name: 'Courses in Germany', prices: [ 500, null ] },
//    { name: 'Courses in Italy', prices: [ 100, 200 ] },
//    { name: 'Courses in Russia', prices: [ null, 400 ] },
//    { name: 'Courses in China', prices: [ 50, 250 ] },
//    { name: 'Courses in USA', prices: [ 200, null ] },
//    { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
//    { name: 'Courses in France', prices: [ null, null ] }
//  ]