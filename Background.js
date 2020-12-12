class Background{
    constructor(canvasId){
        this.can = document.getElementById(canvasId);
        this.can.width = 1024;
        this.can.height = 1024;
        this.c = this.can.getContext("2d");

        this.currentPoint = [Math.random(), Math.random()];
        this.points = [];
        this.maxPoints = 100;
    }

    render(frame){
        this.c.clearRect(0, 0, this.can.width, this.can.height);

        for(let i=0;i<this.points.length-1;i++){
            this.c.strokeStyle = `rgba(0, 0, 0, ${i/(this.points.length)})`;
            this.c.beginPath();
            this.c.moveTo(this.can.width * this.points[i][0], this.can.height * this.points[i][1]);
            this.c.lineTo(this.can.width * this.points[i+1][0], this.can.height * this.points[i+1][1]);
            this.c.stroke();
        }

        this.points.push(this.currentPoint);
        if(this.points.length > this.maxPoints){
            this.points.shift();
        }
        this.currentPoint = [Math.random(), Math.random()];
    }
}