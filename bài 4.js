let Circle = function (radius,x,y,color) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = color;
    this.renderCircle = function () {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d")
        ctx.arc(this.x, this.y,  this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill()
    }
}

let circle = new Circle(100, 10, 10, "#000000");
circle.renderCircle();