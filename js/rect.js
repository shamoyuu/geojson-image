function Rect() {
    createjs.Shape.call(this);
    
    this.shapeType = "rect";
    
    this.shapeId = Date.now();

    this.paintDashed = function(x1, y1, x2, y2) {
        this.graphics = new createjs.Graphics();
        this.graphics.setStrokeDash([4, 5]).beginStroke("#f00")
            .beginFill("rgba(255, 128, 0, 0.1)")
            .drawRect(0, 0, x2 - x1, y2 - y1)
        this.x = x1;
        this.y = y1;
    }
    
    this.paint = function(x1, y1, x2, y2) {
        this.graphics = new createjs.Graphics();
        this.graphics.clear().beginStroke("#f00")
                .beginFill("rgba(255, 128, 0, 0.1)")
                .drawRect(0, 0, x2 - x1, y2 - y1);
        this.x = x1;
        this.y = y1;
    }
}

Rect.prototype = new createjs.Shape();