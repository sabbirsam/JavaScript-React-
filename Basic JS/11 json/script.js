let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]} ';

const js = JSON.parse(text);
console.log(js);
/**
 {
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Jones' }
  ]
}

 */

console.log(js.employees[1]);
console.log(js.employees[2]);
/**
 { firstName: 'Anna', lastName: 'Smith' }
{ firstName: 'Peter', lastName: 'Jones' }

 */

console.log(js.employees[1].firstName);
//Anna