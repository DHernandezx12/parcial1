function serie(x)
{
    
    var i=0,j=4;k=1;res=0;
    for(i=1; i<=x; i++)
    {
        res+=j/k;
        k+=2;
        j*=-1;
    }
    return res;
}
console.log(serie(2))