/*var rect = {
    perimeter: (a,b) => (2*(a+b)),
    area : (a,b) => (a*b)
};*/

var rect=require('./rectangle');
function findvals (l,b)
{
    console.log("Solving for rectangle l="+l+ "an b = "+b);
    
    rect(l,b,(err,rectangle)=>{
        if(err)
        {
            console.log("ERROR : "+err.message);
        }
        else
        {
            console.log(" perimeter :"+rectangle.perimeter()+" area :"+rectangle.area());

        }
    });
    console.log("This statement is after the call to rect()");
}

findvals(3,7);
findvals(0,8);
findvals(7,-8);
