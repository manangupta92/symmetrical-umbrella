function sortingHat(input){
  //Assuming the input is valid format
  const BV = new Set();
  const AV = new Set();
  const BNV = new Set();
  const ANV = new Set();
  const NA = new Set();
  for(var i = 0 ; i < input.length; i++){
    const rollNo = input[i].split(' ')[1]; 
    const classSection = input[i].split(' ')[2];
    const foodPref = input[i].split(' ')[3];
    if(foodPref === 'V'){
      if(classSection === 'A'){
        if(AV.size < Math.floor(input.length/4)){
           AV.add(rollNo);
        }else{
          NA.add(rollNo);
        }
      }else{
        if(BV.size < Math.floor(input.length/4)){
           BV.add(rollNo);
        }else{
          NA.add(rollNo);
        }
      }
    }else {
      if(classSection === 'A'){
        if(ANV.size < Math.floor(input.length/4)){
           ANV.add(rollNo);
        }else{
          NA.add(rollNo);
        }
      }else{
        if(BNV.size < Math.floor(input.length/4)){
           BNV.add(rollNo);
        }else{
          NA.add(rollNo);
        }
      }
    }
  }
  console.log("AV : ["+[...AV]+"]");
  console.log("BV : ["+[...BV]+"]");
  console.log("ANV : ["+[...ANV]+"]");
  console.log("BNV : ["+[...BNV]+"]");
  console.log("NA : ["+[...NA]+"]");
}


const input=[
  'reg 1 B V',
  'reg 2 A V',
  'reg 3 A V',
  'reg 4 B NV',
  'reg 5 B V',
  'reg 6 A NV',
  'reg 7 A V',
  'reg 8 A NV',
  'reg 9 B NV',
  'reg 10 B V',
  'reg 11 A NV',
  'reg 12 B NV',
  'reg 13 A NV',
  'reg 14 B NV',
  'reg 15 B NV',
  'reg 16 B NV',
]


sortingHat(input);
