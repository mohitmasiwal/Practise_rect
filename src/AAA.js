const order =(a)=>(b)=>(c)=>{
      return (a+b)*c 
    
}
 const store12 = order(3)(6)
console.log(  store12(2));
console.log(  store12(3));
console.log(  store12(4));
console.log(  store12(5));
console.log(  store12(6));
console.log(  store12(7));

