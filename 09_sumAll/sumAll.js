const sumAll = function(x, y) {
    let sum = 0;
    if (x>0 && y>0 && Number.isInteger(x) && Number.isInteger(y)) 
    {
        if (x<=y){
            for (i=x; i<=y; i++){
            sum=sum+i;
            }
        }
        else if (x>y){
            for (i=y; i<=x; i++){
            sum=sum+i;
            }
        }
        return sum;
    }
    else {return "ERROR";}
    
};

// Do not edit below this line
module.exports = sumAll;
