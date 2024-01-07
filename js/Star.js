class Star {
    constructor() {
        this.color = 'white';
        this.radius = 10;
        this.position = {x: 0, y: 0};
    }
    setPosition(position) {
        this.position = position;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    setColor(color) {
        this.color = color;
    }
    draw(ctx) {
        ctx.beginPath();
        const N = 5
        ctx.moveTo(this.position.x + this.radius,this.position.y);
        for(var i = 1; i <= N * 2; i++)
        {
            if(i % 2 == 0){
                var theta = i * (Math.PI * 2) / (N * 2);
                var x = this.position.x + (this.radius * Math.cos(theta));
                var y = this.position.y + (this.radius * Math.sin(theta));
            } else {
                var theta = i * (Math.PI * 2) / (N * 2);
                var x = this.position.x + ((this.radius/2) * Math.cos(theta));
                var y = this.position.y + ((this.radius/2) * Math.sin(theta));
            }
            ctx.lineTo(x ,y);
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill()
    }
}