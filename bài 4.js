let Circle = function (radius,x,y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.renderCircle = function (circle) {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d")
        ctx.arc(circle.x, circle.y,  circle.radius, 0, 2*Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill()
    }
}

let circle = new Circle(100, 10, 10);
circle.renderCircle(circle);