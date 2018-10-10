/*var rect = {
    perimeter: (a,b) => (2*(a+b)),
    area : (a,b) => (a*b)
};*/

var rect=require('./rectangle');
function findvals (l,b)
{
    console.log("Solving for rectangle l="+l+ "an b = "+b);
    if(l<=0 || b <=0)
    {
        console.log("Rectangle is pointless as dimensions are null !!!");
    }
    else
    {
        console.log("The area of rectangle is :"+rect.area(l,b));
        console.log("The perimeter of the rectangle :"+rect.perimeter(l,b));

    }
}

findvals(3,7);
findvals(0,8);
findvals(7,-8);
