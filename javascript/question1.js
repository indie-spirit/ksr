function find_min_element(arr){
    if(arr.length === 0){
        return null; 
    }   
    let minElement = arr[0];
    for(let i = 1; i < arr.length; i++){
    if(arr[i] < minElement){
    minElement = arr[i];
    }
    }
    return minElement;
}