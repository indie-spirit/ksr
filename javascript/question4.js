function Smallest(s){
  const n=s.length;
  const arr=s.split("");
  for (let i=0;i<n;i++) {
    if (arr[i]==="?") {
      let placed=false;
      for (let charCode=97;charCode<= 122;charCode++){
        const c = String.fromCharCode(charCode);
        if (i>=2&&arr[i-2]===c)continue;
        if (i>=3&&arr[i-2]===arr[i-1]&&arr[i-3]===c)continue;
        arr[i] = c;
        placed = true;
        break;
      }
      if(!placed) return "-1";
    }else{
      const c = arr[i];
      if (i >= 2 && arr[i - 2] === c) return "-1";
      if (i >= 3 && arr[i - 2] === arr[i - 1] && arr[i - 3] === c) return "-1";
    }
  }
  return arr.join("");
}
console.log(Smallest("a?b??")); 
