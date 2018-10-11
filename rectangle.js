module.exports = (x,y,callback) =>{

    if(x<=0 || y<=0)
    {
        setTimeout(()=>
        callback(new Error("The sides of a rectangle cannot have null dimensions"),
        null),
        2000);
    }
    else
    {
        setTimeout(()=>
        callback(null,
            {
                perimeter: () => (2*(x+y)),
                area : () => (x*y)

            }),
            2000);
    }

    
}
/*exports.perimeter = (a,b) => (2*(a+b));
exports.area = (a,b) => (a*b);*/
