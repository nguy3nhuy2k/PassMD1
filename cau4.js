let c = document.getElementById('myCanvs');
let ctx=c.getContext('2d');
class Circle{
    constructor(_x,_y,_radius,_color) {
        this.x = _x;
        this.y = _y;
        this.radius =_radius;
        this.color = _color
    }
     render(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        ctx.fillStyle= this.color
        ctx.fill();
    }
}
let draw1 = new Circle(10,10,100,'#000000');
draw1.render();
