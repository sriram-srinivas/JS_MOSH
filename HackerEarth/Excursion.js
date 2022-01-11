const input= `4
13 7 2
5 5 3
2 2 2
5 4 5`


let number = 6;
     
      for(let i = 2; i< number; i++) {
         while(number%i == 0) {
            console.log(i+" ");
            number = number/i;
         }
      }
      if(number >2) {
         console.log(number);
      }








const roomAlotment = input =>{
    const [t,...arr] = input.split("\n")
    let rooms = ""
    for(a of arr){
        let [n,m,k] = a.split(" ")
        let room = 0
        n=Number(n);m=Number(m);k=Number(k);
        room += n>0 ? Math.ceil(n/k) : 0
        room += m>0 ? Math.ceil(m/k) : 0
        rooms += rooms==="" ? room : "\n"+room
    }
    return rooms
}

console.log(roomAlotment(input));