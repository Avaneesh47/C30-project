class Block{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,40,40);
        this.x = x;
        this.y = y;
        this.Visibility = 255;
        World.add(world,this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<10){
            var pos = this.body.position;
            var r = Math.round(random(0,255));
            var g = Math.round(random(0,255));
            var b = Math.round(random(0,255));
            push();
            fill(r,g,b);
            noStroke();
            rectMode(CENTER);
            rect(pos.x,pos.y,40,40);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            pop();
        }
        
    }

    score(){
        if(this.Visibility<0 && this.Visibility>-1005){
            score++;
        }
    }
};