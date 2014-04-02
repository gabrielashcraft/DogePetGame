(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.DogePet = function() {
	this.initialize();

	// Status Bar
	this.menu = new lib.menu_bar();
	this.menu.setTransform(320,420);

	this.status = new lib.statusBar();

	this.addChild(this.status,this.menu);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


// symbols:
(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(3,1,1).p("ACcAIQiGi4iuh3QgSE6BYEVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AiYknQCuB3CGC4IjuEgQhYkWASk5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-29.5,31.3,59.2);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(3,1,1).p("AibAIQCGi4Cuh3QASE6hYEVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AibAIQCGi4Cuh3QASE5hYEWg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-29.5,31.3,59.2);


(lib.Tween1 = function() {
	this.initialize();

	// brown
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("ABmApQgQgRAAgYQAAgXAQgSQASgRAYAAQAZAAARARQASASAAAXQAAAYgSARQgRARgZABQgYgBgSgRgAi6ApQgRgRAAgYQAAgXARgSQASgRAZAAQAYAAARARQARASAAAXQAAAYgRARQgRARgYABQgZgBgSgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-5.8,40.8,11.8);


(lib.statusBar = function() {
	this.initialize();

	// status
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjEA/QgCgDAAgFIAAhXIAAgJIAAgKQAAgFADgDQADgCAFAAIAFABIAQgCIAOgCQAJABAOAEQARAEAAAGQAAAFgEADQgDADgEAAIgEgBQgKgDgPAAIgLABIgOABIAAAaQAMgCAIAAIAZABQAKABAAAJQAAAFgDABQgDADgFAAIgMgBIgMgBQgGABgOADIAAAxQAAAEgDAEQgEADgEAAQgFAAgDgDgAgJA0QgMgLAAgSQgBgRAKgLQAMgQATgBQAQAAAJANQAIAJAAARQAAASgJANQgLAOgTAAQgNAAgJgKgAADAGQgDAHAAAKQAAAJAEAGQAEADAFAAQAHABAFgFQAGgFAAgKQABgXgOAAQgKAAgFAHgAhdA0QgMgLAAgSQgBgRAKgLQAMgQAVgBQAQAAAJANQAIAJAAARQAAASgJANQgLAOgTAAQgOAAgKgKgAhPAGQgFAHAAAKQAAAJAGAGQAEADAFAAQAHABAFgFQAGgFAAgKQABgXgOAAQgKAAgFAHgAB9A4QgGADgFABIgMABQgSAAgLgLQgMgMAAgRQAAgVAMgLQAMgNATAAIAKABQAFACADACQABgaACgLQABgJAJAAQAFAAACADQADADAAAEIgBAiIgCAhQAAAbACAKIAAACQAAAEgDADQgEADgEAAQgFAAgDgFgABXABQgGAGAAANQAAAJAGAGQAHAGAIAAQAGAAADgCIAHgEIADgDIAAgdQgDgDgEgCQgEgCgGAAQgLAAgGAFgACwAeQAAgFADgDQAEgCAEAAQAMAAAAASQAAAEgDADQgDADgFAAQgMAAAAgSgACzgGQgDgDAAgEIgBgDIAAgDQAAgEADgDQADgDAFAAQAMAAAAAQQAAAEgDADQgEADgEAAQgFAAgDgDg");
	this.shape.setTransform(39.7,37.5);

	this.hunger_txt = new cjs.Text("", "bold 16px Comic Sans MS");
	this.hunger_txt.lineHeight = 18;
	this.hunger_txt.lineWidth = 116;
	this.hunger_txt.setTransform(74,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhhBQQgDgDAAgEIAAgdIAAggIgBgaIgBgQQAAgGADgFQADgGAGAAQAEAAADAEQADACAAAEIAAACQAFgEAGgBQAFgCAFABQASAAAIAPQAHAMAAAQQAAARgKALQgLAMgRAAIgOgCIAAAhQAAAEgDADQgDADgFAAQgFAAgDgDgAhFgSQgFACgFAEIABAfQAHADAHgBQAIABAEgHQAEgEAAgJIgBgNQgCgKgIAAQgFABgFACgAi2BQQgDgDAAgEIAAgdIAAggIgBgaIgCgQQAAgGADgFQAEgGAFAAQAFAAADAEQADACAAAEIAAACQAFgEAFgBQAFgCAGABQASAAAIAPQAGAMAAAQQAAARgKALQgKAMgSAAIgOgCIAAAhQAAAEgDADQgDADgFAAQgEAAgDgDgAiagSQgFACgGAEIABAfQAHADAHgBQAIABAFgHQAEgEAAgJIgBgNQgDgKgHAAQgFABgFACgABPAhIgCgPIgBgQIAAgGIAAgHIAAgCIABgEQAAgGgEAAQgGAAgHAIQgGAJgEALIAAAHIgBAHIAAAHIgBAGQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgGIAAgHIABgTIABgWIAAgHIgBgGQAAgFADgDQAEgDAEAAQAKAAABANIAAABQAMgMAMAAQAPAAAGAMQADAJAAAQIAAAFIAAAEIACAQIACAPQAAAEgDADQgEADgEAAQgKAAgBgKgAEgAnQgMgFAAgIQAAgHAJAAIALABQAGADAEAAQAQAAAAgGQAAgFgLgEIgVgJQgLgHAAgMQAAgPARgGQAKgDAUAAQAHAAAEACQAFADAAAHQAAAPgHAAQgIAAgCgHIgGAAQgTAAAAAEQAAAEAMAEIAUALQAMAHAAALQAAAMgNAIQgKAFgOAAQgLAAgIgDgADSAnQgMgFAAgIQAAgHAJAAIALABQAGADAEAAQAQAAAAgGQAAgFgLgEIgVgJQgLgHAAgMQAAgPARgGQAKgDAUAAQAHAAAEACQAFADAAAHQAAAPgHAAQgIAAgCgHIgGAAQgTAAAAAEQAAAEAMAEIAUALQAMAHAAALQAAAMgNAIQgKAFgOAAQgLAAgIgDgAjbAjIgMAFQgGACgEAAQgTAAgJgLQgJgKAAgTQAAgSAOgNQANgNAUAAQAHAAAKAEQAMAFAAAHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAJIgBAKQAAANACAHIAEAHIADAIQAAAEgDADQgDADgEAAQgEAAgIgHgAj5gPQgIAJAAAIQAAALAEAFQAEAFAHAAQAFAAAEgCQAFgBAEgDQgDgRAAgJIABgFIABgIIgDgBIgCAAQgLAAgIAIgAB5AgQgNgJAAgTQAAgRAKgOQAMgPATAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgbAMQAEAEAFACQAGACAHAAQAKAAAHgEQAHgEAEAAQAIAAAAAIQAAAJgNAGQgLAEgMAAQgTAAgMgJgACJgTQgFAGgDAJIARgIQALgEAGgFQgFgCgJAAQgHAAgFAEgAk1AmQgEgDAAgEIAAgRIgBgQIAAgHQgMABgSADIgeAFIgBAOIgBARQAAAFgDACQgDADgEAAQgFAAgDgDQgDgDAAgEIABgXIACgVIAAgdIABgeQAAgEADgDQADgDAEAAQAFAAADADQADADAAAFIAAARIgBASIAAAHIgBAIIAegFQASgDAMgBIABgcQABgGADgIQAFgKAFAAQAEAAADADQAEADAAAFIAAACQgCAGAAAEIAAAHIgBAGIgBAXIAAAVIAAAPIABARQAAAFgDADQgDADgEAAQgFAAgDgDgAgIAlQgDgDAAgEIgBgPIAAgOIABgPIABgSQAAgFADgDQADgCAEAAQADAAADACQADADAAAFIgBASIAAAPIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAF2AKQAAgFAEgDQADgCAFAAQAMAAAAASQAAAEgEADQgDADgFAAQgMAAAAgSgAF5gaQgDgDAAgEIAAgDIgBgDQAAgEAEgDQADgCAFgBQALAAAAAQQAAAEgDADQgDADgFAAQgFAAgDgDgAgGg6QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_1.setTransform(248.8,40.2);

	this.happiness_txt = new cjs.Text("", "bold 16px Comic Sans MS");
	this.happiness_txt.lineHeight = 18;
	this.happiness_txt.lineWidth = 116;
	this.happiness_txt.setTransform(303.1,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACmBSQgEgDAAgEQAAgHARgkIgbgwIgEgGQgCgEAAgDQAAgEADgDQADgDAFAAQAFAAADADQALAPAPAcIAKgUQAFgMAGgJQADgFAGAAQAEAAAEACQADADAAAFIgBAFIgbA1QgKAVgFANIgFAPQgDAHgHAAQgFAAgDgDgAA+BIQAAgFACgCQADgDAFAAIAKACIALABQAMAAAFgHQAGgHABgPQgEAEgFACQgFACgGAAQgQAAgJgKQgKgKAAgQQAAgUANgNQANgNAXAAQAHAAAGACQAFABADAEQAKABAAALIgBAOQgEARAAAUQgBAZgIAMQgKAPgaAAQgeAAAAgMgABagMQgHAIAAALQAAAJAEAFQADAEAHAAQAHAAAGgHQAGgHABgHIAEgVIgGgDIgFAAQgNAAgHAIgAkQApQgJgIAAgZIACgeIABgfIgBgIIAAgIQAAgMALAAQADAAADACIARgDIAQgCQATAAAMAFQAHADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgLAAIgNABIgOACIgBAfIAegDIATgBQAFAAADADQAEADAAAFQAAAJgKABIgTACIghADIgBAOQAAAPACACQABABAJAAIAOAAIAPAAIAEgBIAFAAQAFAAADACQADADAAAGQAAAIgJACQgIABgYAAQgaAAgHgGgAiBAkIgDgQIgBgQIABgFIAAgHIAAgDIAAgEQAAgGgDAAQgHAAgGAIQgHAJgDALIgBAHIAAAHIgBAHIAAAHQAAAEgDADQgEADgEAAQgFAAgDgDQgDgDAAgEIAAgHIgBgHIABgVIABgTIAAgHIAAgHQAAgFADgDQADgDAFAAQAKAAABANIAAABQALgMANAAQAOAAAGAMQAEAJAAAQIAAAFIAAAEIACAQIABAPQAAAFgDACQgDADgFAAQgJAAgBgJgAgGAqQgCgDAAgEIAAgxIAAgIIAAgHQAAgEADgDQACgDADAAQAJAAABAJQAOgLARAAQAQAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgSADgIAPIABAmQAAAEgEADQgDADgEAAQgDAAgDgDgAhXAiQgOgJAAgSQAAgSALgOQALgPAUAAQAOAAAJAEQALAGAAAMQAAAJgJAHIgSAHIgaALQAEAEAFACQAFACAHAAQALAAAHgEQAGgEAEAAQAIAAAAAIQAAAJgNAGQgLAEgMAAQgTAAgLgJgAhHgQQgGAFgDAJIASgHQAKgFAHgEQgGgDgIAAQgHAAgFAFgAECAMQAAgFAEgCQADgDAFAAQAMAAAAASQAAAEgEADQgDADgFAAQgMAAAAgSgAEFgYQgDgDAAgEIAAgDIgBgCQAAgFAEgDQADgCAFAAQALAAAAAPQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_2.setTransform(464,40);

	this.energy_txt = new cjs.Text("", "bold 16px Comic Sans MS");
	this.energy_txt.lineHeight = 18;
	this.energy_txt.lineWidth = 116;
	this.energy_txt.setTransform(506.6,25.4);

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAFCFB").s().p("Egx/AF2IAArsMBj+AAAIAALsg");
	this.shape_3.setTransform(320,37.5);

	this.addChild(this.shape_3,this.energy_txt,this.shape_2,this.happiness_txt,this.shape_1,this.hunger_txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,75);


(lib.food_icon = function() {
	this.initialize();

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AC1EzIgBgBQgGgGgHgEIgbgPIgCADIgCAEQgBADgDABQgDABgEgBQgFgEACgGIAEgKIgGgDQgLgJgDgJQgEgKAIgNQAGgKAHAEQAGAFgFAJQgEAGAEAFQABAFAIAEIABACIAFgLQAGgKAHAEQAHAEgHALIgFAKIAOAJIAPAIQAKAGAFAEQAFAEgDAGQgCADgEACIgBAAIgFgBgAC1D5QgMgHgFgNQgGgOAIgOQAGgLANgBQALgCALAHQAMAHAGALQAFAOgHAMQgGALgLADIgIABQgIAAgJgEgAC0DRQgEAHADAIQAEAGAHADQAHAEAFgCQAEgBADgEQACgEgBgFQgBgHgGgDQgJgHgGAAQgFAAgDAFgADXC+QgMgGgGgMQgGgPAJgPQAGgKAMgBQALgCAMAGQAMAIAFAMQAGANgIANQgGAKgKADIgHABQgJAAgJgFgADVCXQgDAHADAIQAEAGAGAEQAHAEAFgCQAFgCACgDQADgFgBgFQgCgHgGgDQgJgGgGAAQgFAAgDAEgAD3CEQgOgJgFgNQgEgNAIgOIAEgGQADgDAEgCIgZgQQgGgEAEgHQACgDACAAQAEgBADACIAXAOQAPALAIAEQATALAIACIABABQADACABADIgCAHQgCADgFABQAAAFgCAEIgDAIQgHAMgMAEIgIABQgIAAgJgEgAD7BVIgGAGQgEAIACAGQACAHAJAGQAGADAHgCQAHgCADgFQADgFAAgDIgBgHIgBgCIgTgMQgFAAgDACgAkWjAQgFgEgEgHIgOgfIgDgIQgBgDACgCQACgEAEAAQAGgCADAGIAEAIIACAHIAGAPIADggQAAgIAHgCQAGgCAFAIIAHAPIAHAPIAAgmQAAgFAGgCIAGABQADABABAEIAAABIgBAtQAAAGgDAHQgCAEgEABQgIACgIgNQgDgFgFgOIgBAEIgDAYIgCAFQgBAFgFACIAAAAQgDAAgEgEgADSjEQgFgBAAgGIAAgNIADgLIABgEIABgEIABgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgGgCgGAEIgJAIQgFATgDADQgDAEgEgBQgDgBgCgCQgCgDABgDIABgCIAFgOQACgLAHgYIABgBIACgIIABgFIABgGQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAQACgCADABQAGABAAAGIgCAKIgCAKIgEAKQAFgCAFgBQAFAAAFABQAJACADAGQACAFgCAHIgDANIgCALIAAALIgBACQgBACgCACIgEABIgCgBgAjIjZQgKgFgEgOQgEgNAFgMQAFgOAQgEQAMgDAJAHQAIAHAEAMQADAOgEAMQgFAMgOADIgIABQgGAAgHgDgAi9kIQgHACgCAIQgCAGACAHQABAHAGADQAEADAEgCQAFgBADgEQADgGgCgHQgEgRgIAAIgDABgACGjYQgMgDgFgJQgHgJADgLQADgKAKgJQAMgLALADQAFACAHAFQAIAGgCAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAQgCACgDgBQgCAAgDgEQgCgDgGgCQgEgBgHAHQgHAGgCAGQgBAFADAEQADAEAGACIAKAAIAHgBQADAAABADQACACgBADQgBAEgKACIgJABIgFgBgABdjiQgEgBgBgFQgIABgHgCQgHgCgEgEQgFgGABgGQACgOACgKIAGgPQACgGAGACQADABACACQACADgBACIgDAIIgDAHIgCANQgCAFABAEIACACIACAAIAOACIACgJIACgJIAGgSQACgGAHACQADABABACQACADgBADIgGASIgDAKIgCALIgBADIgBADQAAADgDACIgDABIgDgBgAiGjnQgFgEgDgHIgOgfIgDgHQgBgDACgDQACgDADgBQAGgCADAGIAEAIIADAIIAGAOIACggQAAgIAHgCQAGgCAFAIIAHAPIAIAPIgBgmQAAgFAGgBQADgBADABQAEABABAEIAAACIgCAsIgCANQgCAEgFABQgHACgIgNQgEgFgFgOIgBAEIgDAZIgBAEQgCAFgFACIgBAAQgCAAgEgEgAAVj3QgHgCgFgDQgHgFABgGQACgFAGACIAHADIAGAEQAKACABgEQABgDgGgFQgKgHgCgDQgGgHACgIQADgKAMgBQAHAAAOADQAFABACADQADADgCAFQgCAJgFgBQgGgCABgEIgEgCQgNgDgBADQAAACAGAGIAMAKQAGAIgCAHQgCAJgKACIgGABIgLgCg");
	this.shape.setTransform(2.6,2.3);

	// dog
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DDB000").ss(0.6,1,1).p("AhjALQgpgZggghQAlgNAcgBQACgBABAAQAFAAAEAAQgHgGgTgPQA2gHAqAYQAJgFAKgDQANgGASgDQAWgEATAJQAxgNAngUQAOAAADAHQAGAagJASIgGADQAIAHgIARQgPAQgWARQgaAMgDAWIAAAAQgBACAAACQAAACAAACIgBAPQgBAQgCANQgCAMgDAKQgBACgBACABfgLQgBgGALgJIA5gfAgZhCQgNAIgNAJQgSgMgagBAgMAxQAJAMAQgD");
	this.shape_1.setTransform(-6.3,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAjBwQhngUgfhUQgpgZggghQAlgNAcgBIADgBIAJAAIgagVQA2gHAqAYQAJgFAKgDQANgGASgDQAWgEATAJQAxgNAngUQAOAAADAHQAGAagJASIgGADQAIAHgIARQgPAQgWARQgaAMgDAWIAAAAIgBAEIAAAEIgBAPIgDAdIgFAWIgCAEIgDAFQgBABgIAAQgMAAgZgDgAAHA4IAGgBIgGABIAAAAIAAAAQgMAAgHgKIAAAAIAAAAQAHAKAMAAIAAAAIAAAAgABfgOIAAgBQAAgGAKgIIA5gfIg5AfQgKAIAAAGIAAABgAgzg0QANgJANgIQgNAIgNAJQgSgMgagBQAaABASAMgABUBtIAAAAgABWBpIAFgWIgDARIgEAJIACgEg");
	this.shape_2.setTransform(-6.3,14.2);

	// circle
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgVDbQhMgFg+hAQg/g/ARhsQAQhuA1gzQA1g0BgAXQBhAXA6A8QA6A7gWBSQgYBUhABAQg7A6hDAAIgLAAgAhkh+QgpAcgZBeQgYBcA1A6QA0A5BDAGQBAAFA8g4QA8g5AVhJQAWhHhDgrQhCgshEgLQgTgEgSAAQgqAAgdATg");
	this.shape_3.setTransform(0.7,4.3);

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AkzFmQh2l6CelRQgFALBSAHQBTAHCxgJQCzgIAngIQByIThIC4QnkgYiZAYgAhihWQgqAdgaBfQgZBhA3A7QA2A7BEAHQBCAFA+g7QA/g6AVhMQAWhIhEgtQhFgthGgMQgTgEgTAAQgrAAgeAUg");

	// base red
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD5800").s().p("AlFFkQh2l6CelRIglg3QE7AbE4gNIgjApQByIThIC4IBAApQl7gQlzAigAh0hXQgqAcgaBfQgZBhA3A8QA2A6BEAHQBCAFA+g7QA/g6AVhMQAWhIhEgtQhFgshEgMQgVgEgTAAQgrAAgeAUg");
	this.shape_5.setTransform(1.8,0.1);

	// food
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6600").s().p("AhaCmIAAgfIANAAIAAAAQgEgDABgDQgJAEgKgFQgLgEAMgKIAEgDIgEgCQgFgEAEgHQAFgIAKABQABgCACgDIABgBQgHgEALgJIAEgDIgEgCQgFgEAEgHQAEgIALABQAAgCACgDIgHgCQgLgEAMgKIAEgDIgEgCQgFgEAEgHQAFgIAKABQABgCACgDIABAAQgHgDAJgIIgJACIgBACQgMANgTgGIgBAAQgNALgPgHQgKgEAMgIIAEgDIgEgCQgEgDABgDQgJAEgKgFQgLgEAMgKIAEgDIgEgCQgFgEAEgHQAFgIAKABQABgCACgDIABgBQgHgEALgJIAEgDIgEgCQgFgEAEgHQAEgIALABQAAgCADgDQAIgIAPAKQADgDAHgBQgFgEAKgJQATgNAKAJQACADABACIAAAAQABgDAGgFIAEgDIgEgCQgFgEAEgHQAEgIALABQAAgCADgDQAHgJASANIAEAEQAGgEAJAFQAEgFAIABQABgCACgDQAJgJAQAMQAEgHAKACQAAgDADgCQAJgKASAOQAJAIgEAFQAPACgGAKQgJALgNgBIABADIAHAEQAKAJgFAEQAQADgHAJQgEAFgFADQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAQADgHAJQgGAJgKABIgEADIAHAFQAJAIgEAFQAPACgGAKQgLAOgSgGQgEAFgGABQgBACgDACIgCAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAQABgHAJQgEAFgEADIAGAEQAKAJgFAEQAQADgHAJQgLAPgTgHIgCAAIgCABQAIAEgFAHQgJALgNgBQADAEgDADQAQADgHAJQgEAFgEADIAGAEQAKAJgFAEQAQADgHAJQgLAPgTgHIgCAAQgMAMgPgHQgKgEAKgIIgIgCIgBgBQgLALgLgEQgFACgFAAIgBACQgIAKgKAAIAAAPg");
	this.shape_6.setTransform(10.3,9.2);

	// circle base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFEFDF").s().p("AgcC3QhFgHg2g7Qg2g7AZhfQAZhhArgdQAqgcBGAMQBFAMBEAtQBFAtgWBKQgWBKg+A6Qg5A2g9AAIgKAAg");
	this.shape_7.setTransform(1.5,7.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-41.4,75.4,83.1);


(lib.idle_move_ears_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(17,0,1,1,0,0,0,-15.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},6).to({rotation:10.2},3).to({rotation:0},3).to({rotation:10.2},3).to({rotation:0},3).to({startPosition:0},10).to({startPosition:0},27).to({scaleX:0.74},5).to({startPosition:0},15).to({scaleX:1},6).to({startPosition:0},14).wait(1));

	// left
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(-16.8,0,1,1,0,0,0,15.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},28).to({startPosition:0},27).to({scaleX:0.74,scaleY:1.07},5).to({startPosition:0},15).to({scaleX:1,scaleY:1},6).to({startPosition:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.2);


(lib.idle_blink_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},18).to({scaleY:0.09},4).to({scaleY:1},4).to({startPosition:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.4,40.8,11.8);


(lib.food_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.food_icon();
	this.instance.setTransform(-1.7,0.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.14,y:0.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-1.5,y:0.6},0).wait(1).to({scaleX:1,scaleY:1,x:-1.6,y:0.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-41.5,75.4,83.1);


(lib.dead_tan = function() {
	this.initialize();

	// Eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(3,1,1).p("ADGAvIgtgtIg0A1ACZACIg5g3ADGgpIgtArAjFgpIAtArIA5g3AiYACIA0A1AjFAvIAtgt");
	this.shape.setTransform(0.4,10.4);

	// Nose
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABEQgKABgNgMIhAg+QgUgVAUgVQA0gUAjAAIADAAQAjABAyATQAUAVgUAVIhAA+QgLAKgKABIgDAAg");
	this.shape_1.setTransform(0,40);

	// Muzzle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AAAC/IgCAAQg2AAgvgSQhsgqgphnQgqhlBTg6QBTg7B3AAIADAAIAEAAIAAAAIACAAIAAAAIAAAAIADAAIAAAAIAEAAIADAAQB3AABTA7QBTA6gqBlQgpBnhsAqQgvASg2AAIgDAAg");
	this.shape_2.setTransform(0,43.6);

	// Face
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AAFF3IgFAAIAAAAIgEAAQjOAFh4iiQh4ijAlh6QAlh7BGhgQBHhgDpAJIACAAIADAAQDpgJBHBgQBHBgAkB7QAmB6h5CjQh0CdjFAAIgNAAg");
	this.shape_3.setTransform(0.1,21.5);

	// Ears
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(17,-15.1,1,1,30,0,0,-15.6,0);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(-16.8,-15.2,1,1,-40.1,0,0,15.7,0);

	this.addChild(this.instance_1,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-40.8,118.8,103.7);


(lib.menu_bar = function() {
	this.initialize();

	// btns
	this.feedPet = new lib.food_btn();
	this.feedPet.setTransform(-262.9,-0.6);
	new cjs.ButtonHelper(this.feedPet, 0, 1, 2, false, new lib.food_btn(), 3);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAFCFB").s().p("Egx/AJYIAAyvMBj/AAAIAASvg");

	this.addChild(this.shape,this.feedPet);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.9,-59.9,640,120);


(lib.idle_tan = function() {
	this.initialize();

	// Ears
	this.instance = new lib.idle_move_ears_tan();
	this.instance.setTransform(0,-15.2);

	// Eyes
	this.instance_1 = new lib.idle_blink_eyes();
	this.instance_1.setTransform(0,5.4);

	// Nose
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABEQgKABgNgMIhAg+QgUgVAUgVQA0gUAjAAIADAAQAjABAyATQAUAVgUAVIhAA+QgLAKgKABIgDAAg");
	this.shape.setTransform(0,40);

	// Muzzle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AAAC/IgCAAQg2AAgvgSQhsgqgphnQgqhlBTg6QBTg7B3AAIADAAIAEAAIAAAAIACAAIAAAAIAAAAIADAAIAAAAIAEAAIADAAQB3AABTA7QBTA6gqBlQgpBnhsAqQgvASg2AAIgDAAg");
	this.shape_1.setTransform(0,43.6);

	// Face
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AAFF3IgFAAIAAAAIgEAAQjOAFh4iiQh4ijAlh6QAlh7BGhgQBHhgDpAJIACAAIADAAQDpgJBHBgQBHBgAkB7QAmB6h5CjQh0CdjFAAIgNAAg");
	this.shape_2.setTransform(0.1,21.5);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.2,-44.8,96.5,107.7);


(lib.shibe_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,dead:5});

	// sprites
	this.instance = new lib.idle_tan();
	this.instance.setTransform(0,-9.5);

	this.instance_1 = new lib.dead_tan();
	this.instance_1.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-54.4,96.5,107.7);


(lib.Doge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tan:0});

	// shibes
	this.instance = new lib.shibe_tan();
	this.instance.setTransform(0,0,1,1,0,0,0,0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-53.7,96.5,107.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;