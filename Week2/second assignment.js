// 1
function sum() {
    var result = 0;
    for (i = 0; i < arguments.length; i++ ){
        result += arguments [i];
    }
    return result;
}
console.log( sum(10, 15, 40));

// 2

function ColorCar (color) {
    console.log ('A' +' beatiful ' + color  + 'car');
}
ColorCar('black ');

// 3


function Barcelona() {
    
      const classInfo = [
    
        { FirstName: 'Lionel', LastName: 'Messi' },
    
        { FirstName: 'Luis', LastName: 'Suarez' },
    
        { FirstName: 'Andres', LastName: 'Iniesta' },
      ];
      for (let i = 0; i < classInfo.length; i++) {
    
        console.log('First Name :', classInfo[i].FirstName, '      Last Name : ', classInfo[i].LastName);
    
      }
    }
    
    Barcelona();

    // 4 

    function vehicleType(color, code) {
        
          if (code === 2) {
        
            console.log('a ' + color + ' motorbike');
        
          }
          else
        
          if (code === 1) {
        
            console.log('a ' + color + ' car');
        
          }
        
        }
        
        vehicleType('blue', 2);



    // 5

    const A = 3;
    
    const B = 3;
/*
    console.log(A == 3); //true
    console.log(B == 2); //False
  */  
    console.log(A == B);


    // 6





    // 7,  // 8

    var ListOfVehicles = ['Motorbike', 'Caravan', 'car', 'Bike'];
    
    console.log(ListOfVehicles[2]);

    // 9

    function Vehicles() {
        
          const data = [
        
            { type: 'car', color: 'white', age: 1, code: 1 },
        
            { type: 'motorbike', color: 'red', age: 3, code: 1 },
        
            { type: 'bike', color: 'black', age: 4, code: 2 },
        
            { type: 'caravan', color: 'green', age: 1, code: 2 }
          ];
          for (let i = 0; i < data.length; i++) {
        
            if (data[i].age <= 1) {
        
              data[i].age ='new';
        
              console.log('a', data[i].color, data[i].age, '', data[i].type);
            } 
           else if (data[i].age > 1) {
        
              data[i].age = 'old';
        
              console.log('a', data[i].color, data[i].age, '', data[i].type);
        
            }
        
          }
        }
        
        Vehicles();

        // 10

       /* function Advertisement() {

        
            
                for (i = 0; i < vehicles.length; i++) {
                    console.log("The best Garage, we service " + vehicles[i]);
                }
            }
            
            Advertisement();*/
            
        // 10-11

            function listOfVehicles() {
                
                  const data = [
                
                    { type: 'car', color: 'white', age: 1, code: 1 },
                    
                        { type: 'motorbike', color: 'red', age: 3, code: 1 },
                    
                        { type: 'bike', color: 'black', age: 4, code: 2 },
                    
                        { type: 'caravan', color: 'green', age: 1, code: 2 }
                
                  ];
                
                  let output = '';
                
                  for (let i = 0; i < data.length; i++) {
                
                    output += data[i].type + ', ';
                
                  }
                
                  console.log('The best Garage, we service a ', output);
                
                }
                
                listOfVehicles(); 

         // 12-13-14

                const Teachers = {
                    
                      ['Jim']: 'JS',
                    
                      ['Philipp']: 'HTML',
                    
                      ['Ivana']: 'CSS',
                    
                      ['Unmesh']: 'Command line'
                    
                    };
                    
                    console.log(Teachers);

                    // 15

                    function foo(func) {
                        
                            bar(func)
                        }
                        function bar() {
                        
                            console.log('Hello, I am bar!');
                        }
                        foo(bar);

                        //16


                        let x = [1,2,3];
                        
                        let y = [1,2,3];
                        
                        let z = y;
                        
                        console.log(x == y);
                        
                        console.log(x === y);
                        
                        console.log(z == x);
                        
                        console.log(z == y);



                        // 17

                        let o1 = { foo: 'bar' };
                        
                        let o2 = { foo: 'bar' };
                        
                        let o3 = o2;
                        
                        
                        
                        console.log("o1 = " + o1.foo + " o2 = " + o2.foo + " o3 = " + o3.foo);
                        
                        
                        
                        o2 = { foo: 'not bar' };
                        
                        
                        
                        console.log("o1 = " + o1.foo + " o2 = " + o2.foo + " o3 = " + o3.foo);
                        
                        console.log("The Value 03 won't be changed unless we chang the order of our codes ");


                        // 18
                        bar = 42;  
                        console.log(typeof typeof bar);

                       

            
            
            


                





        



           






 








