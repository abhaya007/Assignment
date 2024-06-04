const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}
arr.map((item)=>{
  if(userDetails[item]){
    return item + ' ' + userDetails[item]
  }
}).filter(item=>item)
//const array=Object.entries(userDetails)
//if (arr===array)
console.log(array)

// expected output :
// ['kaylin khanal', 'gopal tharu']