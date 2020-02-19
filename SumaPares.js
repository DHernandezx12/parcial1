function sumaPares(x)
{
    var i=0,par=0,pares=2;
    for(i=1; i<=x; i++)
    {        
        par+=pares;
        pares+=2;
        
    }
return par;
}
console.log(sumaPares(2));

