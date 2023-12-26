function fibbo(n){
    //0 1 1 2 3 5 8 13 21..
    var fibo_arr = [];
    if(n==0){
        fibo_arr.push(0);
    }else if(n==1){
        fibo_arr.push(0);
        fibo_arr.push(1);
    }else{
        fibo_arr[0] = 0;
        fibo_arr[1] = 1;
        for(var i=2; i<n; i++){
            fibo_arr[i] = fibo_arr[i-1] + fibo_arr[i-2];
        }
    }
    
    return fibo_arr;
}

console.log(fibbo(8));