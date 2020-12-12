class Background{
    constructor(canvasId){
        this.can = document.getElementById(canvasId);
        this.can.width = 1024;
        this.can.height = 1024;
        this.c = this.can.getContext("2d");

        
    }

    render(frame){
        this.c.clearRect(0, 0, this.can.width, this.can.height);

        
    }
}