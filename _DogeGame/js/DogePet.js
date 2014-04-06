(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.DogePet = function() {
	this.initialize();

	// Game
	this.game = new lib.game();
	this.game.setTransform(320,240);

	this.addChild(this.game);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


// symbols:
(lib.Tween37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEB052").s().p("AgMgBIACgBIABgBIACAAIACAAIAFgCIAAACIADADIAEAAIAEAAIABAAIABAAIgBACQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABQgIgDgKgEg");
	this.shape.setTransform(-3.4,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(-7.1,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_2.setTransform(-5.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2A44D").s().p("AgHAIIgEACIACgDIACgEIgBgDIgBgDIgBgDIABgDIADAAIAEADIACACQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgCgDIANAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgEABQgBAEgCAAIgCAAIgCADIAAgBIgCABIgBAEIgCADg");
	this.shape_3.setTransform(-2.8,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2B159").s().p("AAKAOIgEgDIAJAAIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEgCgAgMgGIgDgJIADADIABACIABgBIACACIAAAJQgCgCgCgEg");
	this.shape_4.setTransform(-4.2,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5CB7A").s().p("AgPALIAEgJQABgCAAgFIABgDIABgDIgBgCIgBgCQADgEAAgHIACADIADAIQACAFAAADIAAAEIAAADIABABIABABIAGAAIAGAAIgBADIABAEIABADIABAEIgCAEIgDAEIgCAAIgCAAIgBACIgCABQgKgHgJgJg");
	this.shape_5.setTransform(-5.2,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED88B").s().p("AgGAIIgBgEIgBgEIABgBIABgCIABgBIABgFIABABIABAFIACADQABACAEACIACABIADAAIgIAAIgFAAIgBAFg");
	this.shape_6.setTransform(-4.6,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_7.setTransform(-3.9,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DFC677").s().p("AAEAHIgCgBQgCgCgCgDIgDgCIgBgFIAEADIACADIABAAIADACIADAAIAAAFIgDAAg");
	this.shape_8.setTransform(-4.3,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#927D49").s().p("AgCABIACgBIADgCIAAADIgDAAIAAABIgCgBg");
	this.shape_9.setTransform(-4,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#39331F").s().p("AABACIgBgCIgCAAIAAAAIACgBIACgCIABAAIAAADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCgCg");
	this.shape_10.setTransform(-4.1,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_11.setTransform(-2.3,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_12.setTransform(2.8,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIAEgBIAGAAIgCgBIgBgBIAAgCIgCgDIABgCIADgBIADgDIAEgBIADgCIACgCIADgCQAAAHgDAEQgDAGgFADQgDADgEAAIgJAAg");
	this.shape_13.setTransform(1,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_14.setTransform(1.3,7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8C173").s().p("AghAXIgCgBIABgBIgCgBIgBgBIgDAAIgEAAIgEgEIACgDIACgEIACgBIACABIABgEIACABQACgCACgDIADAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAbAAQAGAAAIgDQAHgCAHgFIAEgEIAFgBIAEgCIACgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABABIACABIABACQgCACABAEIgBAEIAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgEACIgDADQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgDAAIADgGIADgEIAAgCIAAgCIAAgCIAAgCIgBgBIgDgBIgEAAIgDACIgEACIgBAAIgCABIgCADIgDAEIgDAAIgEADIgDABIgCAAIgCABIgCACIgBAAIgCABIgEACIgFABIgDAEIgEADIgCACIgCACIgCgBIgDACIgDACg");
	this.shape_15.setTransform(1.4,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape_16.setTransform(5.4,5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0993A").s().p("AAAgGIABACIACgBIABACIABACIgDAEIgCABIAAABIgCABIgCAAIAEgMg");
	this.shape_17.setTransform(5.7,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA847").s().p("AgEANIACAAIACgBIABgBIABgBIADgGIgBgCIgBgCIgCABIAAgBQACgIAAgMIACAJIACAEIABAEIABADIABAFIAAAGIAAADIgBgCIgBAEIgBADIgCgCIgCgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBADIgEACIgEAAIAFgIg");
	this.shape_18.setTransform(5.7,2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(0.2,-2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(0.1,-2.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_21.setTransform(4.3,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B59544").s().p("AgBAAIACgCIABADIgBACIgCgDg");
	this.shape_22.setTransform(4.2,-4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DCDAD7").s().p("AgDABIACgBIABgDIAAAAIAEADIgEAEIgDgDg");
	this.shape_23.setTransform(3.2,-4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#543E26").s().p("AgBADIACgDIgBABIAAgBIgCAAIgDABIgBgBIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_24.setTransform(3.5,-5.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#927238").s().p("AAAAKIADgGIACgFQgFAAgEABIgBAAIgCACIgBgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACgCIAEgEIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADADIACAGIgDAJIgEADg");
	this.shape_25.setTransform(3.7,-5.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_26.setTransform(2.3,-5.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B89844").s().p("AAAANIgBgBIgCgBIgBgBIgDAAIABgCIgCABIAFgIIAAgBIADgDIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBIADAFIADAEQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIgEABIgDACIgCACQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAABIAAABIAAABIADgCIACAAIgBACIACgBIgDADg");
	this.shape_27.setTransform(3.2,-6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBA94C").s().p("AAAgBQABgBACgEQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAFQgBgFADgCg");
	this.shape_28.setTransform(3.1,-6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_29.setTransform(4.2,-6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AC8132").s().p("AAAAHIAEgEIgIgBIgLAAIAIgBIAHgBIACAAIAEAAIAFgDIAFgEQgDADABAEIgBABIgBgCQgDAFgDAEIgGgBg");
	this.shape_30.setTransform(1.4,-6.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D2B257").s().p("AgJABIADAAIADgBIADgBIACgDIgCgEIABAAIADAAIAEACIACADIgDADIgCACIgEADIgCABIgIADg");
	this.shape_31.setTransform(0.6,-1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DFCD88").s().p("AgNgLIAHgDIAFgBIABgDIADgEIADgDIABABQAEAFACAIQABAIAAAFIgDACIgDADIgCACIgFABIgCACIgDADIgCADIADACIAAACIABABIACACIgHAAIgDABIgDABIAAgmgAgNgXIAEADIgEAAg");
	this.shape_32.setTransform(1,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7E3DB").s().p("AgHANIgDABIgBgEIAAgEIAAgFIAAgBIAAgNIAAAAIAAAGIAAAEIACACIgBABIAAACQAOAFAIgGIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCADIgHADQgDABgDACIgDgCg");
	this.shape_33.setTransform(-2.3,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_34.setTransform(-3.3,-0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DFC57C").s().p("AgCAAIgCAAIADAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAIADABIADgBIAAADQgGgCgCAAg");
	this.shape_35.setTransform(-4.2,-1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#938357").s().p("AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_36.setTransform(-4.1,-2.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6BD62").s().p("AAAAEQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIADgEIAAgBIAAgBIABgBIADgCIAAAHIgDACIgBgBg");
	this.shape_37.setTransform(-4.1,-2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#242110").s().p("AAAATIgHgDQAEgBADABIAIACIAAACIgIgBgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAEAAIgDgCIAGAAIAAABIAAAAIgDABIgDABIgCgDg");
	this.shape_38.setTransform(-4.4,-0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8F3E4").s().p("AgKAuIgMAAIgIAAIgDAAIgGAAIgFAAIgCgBIAAgCIAAgFIAAgEIAAgLIAAgEIAIAAIAHAAIAAgGIAAgDIABADIADgBIADACQADgCAFgBIAHgCIACgEQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAIAAAAQgDgBgFABIgHABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgCIAAgDQABgDADgCIABgIQgCgCgDgBIAAgGIAAgJIAAAAIACgBIADgBIACgCIACgBIAEgBIgBADIAAAEIACAEIABAEIABAFIACgBIAAgEIACADIACABIABADIABAEIAGgEIABgFIAAgCIgCgBIgCgCQAAgDADgDIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBABIAAADIAAADIAAABIAAAIIAAAmIAAABIAIAAQAGgBADgCQAFgEADgGQACgFABgGQAAgHgBgIQgCgIgEgFIAEgBIAIABQAFAAADAAQADABAAADIABAGIABAGIABAEIgCAHIgDAGQgFALgHAKIAEgBIADgBIgEAEIACACIgBAEIADgBQABADgCADIgEAEIADgBIADAAIACgBIACgBIADABQgHAFgHACQgIACgIABg");
	this.shape_39.setTransform(-0.3,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAIACgBIAAACIgCACIgFAAg");
	this.shape_40.setTransform(-2,-2.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F5F2E6").s().p("AgCAAIACgBIABgBIABAAIABABIgCABIgBAAIAAADIgBAAIgBgDg");
	this.shape_41.setTransform(-4.1,-3.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_42.setTransform(-2.5,-5.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_43.setTransform(-4.9,-3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6342").s().p("AAAAMIgDgEIgBgBIAAgBIgBgCIAAgCIgCgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgHIABgDIABgBIAAAAIgBABIAAABIABACIADAGIACADIAAgBIADAAIADABIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgEIAAANIgIgDQgCAAgEABIAGADIAIABIAAAEIgDADIgEACIgCgDg");
	this.shape_44.setTransform(-4.6,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#252211").s().p("AgaANIgDgGIgBgCIAAgBIABgBIAAAAIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQADgBAHADIAAAHIAAAAIgDAEIgDACIgDABIgBADIgEgEgAARgFIAAgBIAFAAIgFgDIAAgDQADgBADgDIADAAIAFAEIgDADIgFADIgCABIgEAAgAAXgLIAAAAIABAAIAAgBIgBABgAAXgNIAAAAIAAgBIAAAAg");
	this.shape_45.setTransform(-2.2,-1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5EDB6").s().p("AgCAAIACgBIACAAIgBABIAAAAIgBAAIAAABIgCABg");
	this.shape_46.setTransform(-6.4,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3E19D").s().p("AAAAXIgBgDIgCgCQgEgIgBgJIAAgDIACACIABADIADAAIABAAQABgCAAgBIgBABIgBgBIgBgBIgBgEIAAgDIgBABIAAgBIABgCIgCAAIAAAAIABgBIABgCIADgFIgBADIAAAFIABACIABAAIAAgFIAAgFIADgEIADgDIAEACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAABIgBABIAAAEIgBAGQgBABAAAAQAAABABAAQAAAAAAABQAAAAABABIABABIAAABIABACIAAACIgBAFIgBABIgBACIgBADIABAEIABAEIgBACIgBgDg");
	this.shape_47.setTransform(-5.6,0.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCAAIgDABIAHgBg");
	this.shape_48.setTransform(-7.2,-0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4ECB4").s().p("AgFAPIgCgEIAAAFIgBgHIACgCIABAAIAAgBIABAAIACAAIAAADIABADIABACIAAACIAAACIgEABIgBgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgCABIgBABIgDABIAAgDIAAAAIABgGQABgEACgDIAEgDIgBAEIACgEQACgCADgBIABAHIACAAIgBACIgDACIgEAEIgBADIAAAGIAAgBg");
	this.shape_49.setTransform(-5.8,-0.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5C66B").s().p("AgCAFIABgBIgCgBIgBgEIABgEIADABIAAAAIAEADIABABIgCABIgDAEIgBABg");
	this.shape_50.setTransform(-4.6,-2.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_51.setTransform(-5.7,-3.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4EFC8").s().p("AgFADIABgDQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgFgBIgBACQgBAAgCADIgEAEIABgFg");
	this.shape_52.setTransform(-5.3,-2.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A78E32").s().p("AgEALQABgIACgDQABgIAFgEIAAADQgFAHgCAJIgCAHIAAgDg");
	this.shape_53.setTransform(-5.7,-3.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3EBDB").s().p("AAcAwQABgDAAgCIgEAAIABgEIgBgCIAEgEIgEABIgDACQAHgLAFgLIADgHIACgHIgBgDIgBgFIgBgGQAAgDgDgCQgEABgEgBIgJgBIgDABIgBgBIgDgDIgEgCIgCAAIgDAAIgCgBIgEgBIgEACIgCACIgFAEQADAEAFACIAAAGIgGADIgBgDIgBgEIgCgBIgCgCIAAADIgCABIgBgFIgCgEIgCgEIABgDIAAgEIgDABIgCACIgDACIgCABIgCAAIAAAAIABgDIABgCIgCABQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIABgCQgDgCgDABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgBAFIgFAAIACgDIgCgCIgCgBIAAgLIAAgDIAAgDIABgDIAOAAIABAAIAAAAIADAAIAPAAIAfAAIAFAAIAEACIADAAIABABIACABIADABIgDAEIgCADIAEADIAFgHIACACIAFADQAHAHAEAKQAEAJABALIABAEQAAAMgDAJIgGAOIgGAIIgEAEIgDgBIgCABIgCABIgEABIgDAAIAFgEgAAlggIgCACIgBACIAEAEIADAEQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgEIgBAAQACgEgCgDIgEABg");
	this.shape_54.setTransform(0.4,-0.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_57.setTransform(-0.3,-5.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DFC068").s().p("AgCAOIACgFIAAgGIAAgGIAAgIIAAgCIADAEIABAEQgBAFgBAEQgCAGgCAEg");
	this.shape_58.setTransform(-3.2,-6.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B58634").s().p("AgBAJIgBgBIgCgEIABgEIgBgEIgCgFQAEACACADIABAFQABAEAFADIAAACQgGgCgBACg");
	this.shape_59.setTransform(-2.2,-7.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A78F33").s().p("AgBANIABgJIAAgIIAAgEIABgEIABAJIAAAGIgCAFIAAAFg");
	this.shape_60.setTransform(-3.4,-6.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIADgBIgBABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_61.setTransform(0,-1.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C79C3B").s().p("AgFAOQAEgEABgFQAAgFAAgFIAAgDIgCgEIACgCIAAABIABAGIABAFIAAADIABADIABACIACABIgCACIgEACIgCADg");
	this.shape_62.setTransform(-2.9,-7);

	this.addChild(this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-10,20.1,20.1);


(lib.Tween29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("Ai4ACQgTgEAAgCQAAgCASAEQARACAZAAQAYAAASgDQAQgDAAACQAAACgPACQgRAFgYACIgJAAQgTAAgPgFgABpABQgUgEABgCQAAgCARAEQARADAYAAQAZgBASgDQARgDAAACQAAACgQADQgRAEgYACIgJAAQgTAAgOgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.7,40.8,1.5);


(lib.Tween28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABEQgKABgNgMIhAg+QgUgVAUgVQA0gUAjAAIADAAQAjABAyATQAUAVgUAVIhAA+QgLAKgKABIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-6.8,19.7,13.7);


(lib.Tween27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AAFF3IgFAAIAAAAIgEAAQjOAFh4iiQh4ijAlh6QAlh7BGhgQBHhgDpAJIACAAIADAAQDpgJBHBgQBHBgAkB7QAmB6h5CjQh0CdjFAAIgNAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.3,-37.5,84.8,75.1);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AAAC/IgCAAQg2AAgvgSQhsgqgphnQgqhlBTg6QBTg7B3AAIADAAIAEAAIAAAAIACAAIAAAAIAAAAIADAAIAAAAIAEAAIADAAQB3AABTA7QBTA6gqBlQgpBnhsAqQgvASg2AAIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-19,53.6,38.3);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2BA6B").s().p("AgWAHIADgBIAEgDIAEgCIAGgBIAFAAIAAABIAGgCIAIgEIAGgCQAEgBADACQgNAGgNADQgMAFgOABIADgCg");
	this.shape.setTransform(3.9,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECD592").s().p("AgSARIgBgBIAFgCIAEgBQAGABAEgBIgDgDIgBgCIAAgBIgEgEIADgDIADgDIAEgDIAHgCIADgCIADgEIAFgCQgBAKgEAGQgEAIgHAGQgEACgGABIgMAAg");
	this.shape_1.setTransform(1.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0993A").s().p("AgGAJQAFgIABgJIACABIADAAIABACIABADIgEAGIgDABIAAACIgDACIgBAAIgCAAg");
	this.shape_2.setTransform(7.8,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA9040").s().p("AgRAdIADgCIADgEIAEgDIAEgDIADgGIADgEIAEgGQADgBgBgDIABgFIAAgGQABgGABgDQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIABgFIADADIABAIIAAAJIABAVQgNAOgOAIQgDgCgDABIgGADIACgEg");
	this.shape_3.setTransform(7.4,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA847").s().p("AgGASIADAAIADgCIAAgBIADgCIAEgIIgBgDIgBgCIgDAAIgCAAQAEgLAAgRIAEAMIABAGIACAGIABAEQAAACABAFIACAIIgBAFIgDgDIgBAFQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAIgCgCQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABIgCACQgCADgDAAIgHABQAFgEADgHg");
	this.shape_4.setTransform(7.8,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0CD81").s().p("Ag3AZIAFgCQAAgDADgCIADABIACACIAFgCIAEgDIACACIADgDIAEgDIAFgFIAEgEIAGgCQAEgBACAAIADgBIACgBIADgCIACgCIAEABIADgBIAFgEIAFgEIADgEIAEgFIACgBIADgBIAEgDQADgCACAAIAFAAIAEABIABACIABADIgBADIABACIAAADIgFAJIgEAHIAEAAIgDACIgEADIgDADIgDADIgDAEIgIAEIgIADIAAgDIgFACIgGABIgEACIgEADIgBABIgDACIgLABQgVAAgTgGg");
	this.shape_5.setTransform(1.7,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C2A44D").s().p("AgKALIgGADIADgFIADgGIgCgDIgBgFIAAgEQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIADAAIAFAFQADACABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIgBgEIAQAAQgDADAAAEIgEABQgCAFgDABIgCAAIgCAEIgBgBIgCABIgDAGIgDAEg");
	this.shape_6.setTransform(-3.8,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8C173").s().p("AguAgIgCgBIABgDIgCgBIgCgBIgFAAIgFAAQgDgBgCgEIADgFIADgFIACgBIADABIACgFIACAAQADgCACgEIAEgBQAAgDADgDIAlAAQAJABALgEQAKgDAIgHQAEgCADgEIAGgBQAEAAACgCIAEgDQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAABABIABADQgBADgBAFIAAAGIgBAGQABADgDADIgEADIgEAFIgEAFIgEAAIAEgIIAEgHIAAgCIAAgDIAAgDIAAgCIgBgCIgFgBIgEAAQgCAAgDACIgFADIgCAAIgDABIgDAFIgEAEIgFACIgEAEIgEABIgDAAIgDACIgCACIgCABIgEABQgBACgEAAIgGADIgFAEIgEAEIgEADIgEAEIgBgCIgFADIgFACIgCgCg");
	this.shape_7.setTransform(1.9,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CEB052").s().p("AgRgBIACgCIACgCIADAAIADAAIAHgDIAAADQABAEADABIAFAAIAGAAIACAAIABAAIgBADQgDACAAACIgFACQgNgFgNgFg");
	this.shape_8.setTransform(-4.8,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5CB7A").s().p("AgUAPIAEgMIACgKIAAgFIACgFIgBgCIgBgCQAEgHAAgIIACADIAEAMQADAGACAEIAAAGIAAAFIAAACIACABIAIAAIAIAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIABAFIABAFIABAFIgDAFIgDAGIgDAAIgDAAIgBACIgDACQgOgKgLgMg");
	this.shape_9.setTransform(-7.2,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2B159").s().p("AAOATIgEgEIALAAIABAEQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgDgCgAgRgJIgEgMIADAEIADADIABgBIADABIAAAOQgEgDgCgGg");
	this.shape_10.setTransform(-5.9,6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C1A956").s().p("AAAAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBAAIgBAAIgBABIABgBg");
	this.shape_11.setTransform(-9.8,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7C27C").s().p("AgBACIABgBIACgEQgBADgBADg");
	this.shape_12.setTransform(-8,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EED88B").s().p("AgJAMIgCgGIgBgGIABgCIABgDIADAAIACgIIABACIACAGIACAFQABADAGAEIADAAIADAAIgKABIgIAAIAAAGg");
	this.shape_13.setTransform(-6.4,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DFC677").s().p("AAGAKIgDgBQgEgEgCgDIgDgEIgCgHIAFAFIADAEIACAAIAEACIADABIAAAHIgDAAg");
	this.shape_14.setTransform(-6,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4A859").s().p("AAAABIgCgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIADAAIAAADIgDgBg");
	this.shape_15.setTransform(-5.4,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#927D49").s().p("AgEABIAEgBIAEgDIAAAEIgDAAQgBABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgDgCg");
	this.shape_16.setTransform(-5.5,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6D6D5").s().p("AgPAAIAAgDQACADAEAAIAHABIAIgBQAFgBAFABQgGAEgJAAQgGAAgKgEg");
	this.shape_17.setTransform(-3.2,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DFDDD9").s().p("AgCACIAAgLQACACADADIgCAJQgBACgBADIgBgIg");
	this.shape_18.setTransform(-4.6,-0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39331F").s().p("AABACIgBgCIgEAAIAAgBIAEgBIACgCIACAAIABAEQAAADgBACIgDgDg");
	this.shape_19.setTransform(-5.7,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7E3DB").s().p("AgKASIgFABIgBgFIAAgGIAAgGIAAgCIAAgTIAAAAIABAIIAAAHIACABIgBADIgBADQAUAHALgIIABAAIgBAFIgDAGIgLACQgEACgEADQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAg");
	this.shape_20.setTransform(-3.2,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6BD62").s().p("AAAAGQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIACgEIACgDIAAgBQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIADgCIAAAKIgDABIgCAAIAAAAg");
	this.shape_21.setTransform(-5.6,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#938357").s().p("AAAABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIACAAIADABIgDAAIAAAAg");
	this.shape_22.setTransform(-5.7,-3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#242110").s().p("AAAAaIgKgDQAFgCAFABIAKADIAAADIgKgCgAADgWQgDgCAAgDIAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFAAIgEgDIAIAAIgBABIAAABIgDACIgDABIgBAAg");
	this.shape_23.setTransform(-6.1,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5F2E6").s().p("AgDAAIACgCIACgBIABABIACABIgDABIgBAAIAAAEIgDABIAAgFg");
	this.shape_24.setTransform(-5.7,-4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6E6342").s().p("AAAAPIgFgFIgBgBIAAgCIgBgEIgDgDQgCgCABgDIABgJIABgEIABAEIAFAHIADAHIAAgDIAFAAIADADIADAAQABAAgBgDIgBgFIgBgBIAEgFIAAASIgLgDQgFgBgFABIAJADIAMADIAAAGIgFADIgFADIgDgEg");
	this.shape_25.setTransform(-6.3,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DFC57C").s().p("AgEAAIgDAAIAFgBQAAAAABAAQABgBAAAAQAAAAAAABQAAAAABAAIADAAIAEgBIAAAFQgIgDgEAAg");
	this.shape_26.setTransform(-5.8,-2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F5EDB6").s().p("AgDAAIADgCIAEABIgDABIgBABIgDACg");
	this.shape_27.setTransform(-8.8,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3E19D").s().p("AAAAgIgCgEIgCgDQgGgLgCgMIABgFIACADIACAGIAFgCIABABQABgEAAgCIgBADIgCgCIgCgCIAAgFIAAgDIgDAAIAAAAIAAgBIADgDIgDgBIgBAAIACgBIACgCIAEgIIgBAGIAAAFIABADIABACIAAgIIABgIQABgDADgBIAFgEIADACQgDABgCACQgDACgBADIAAABIAAADIAAgBIgBAFIgCAJQAAADACACIACADIABAEIABACIgCAIIgDAAIgBADIgBADIABAGIACAHIgBABIgCgDg");
	this.shape_28.setTransform(-7.8,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BFA64C").s().p("AAFAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDABIgEAAQADgBAGAAg");
	this.shape_29.setTransform(-9.9,-0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4ECB4").s().p("AgIAVIgBgGIgCAIIAAgLIACgCIACgBIAEgBIAAAEIAAAEIACAEIABADIgBACIgEABIgDgFgAAAAGIgBgCIABgEIAAgFIgDAGIgCACIgDABIgDACIAAgFIAEAAIgEAAIABgJQACgFADgEIADgFIAAAGIAEgFQADgDADgBIABAJIAEABIgBACIgGADQgCACgBADIgCAFIgBAIIAAgCg");
	this.shape_30.setTransform(-8,-0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5C66B").s().p("AgDAHIABgCIgDAAIgBgIIABgEIAFAAIABAAQABADADACIACABIgEADIgCAEIgDACg");
	this.shape_31.setTransform(-6.3,-3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBCC73").s().p("AgGAQIADgJQADgOAHgJIAAAPQgBAAgCACIgEAEQAAAFgDADIgDAEg");
	this.shape_32.setTransform(-7.9,-4.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4EFC8").s().p("AgJAEQADgDABgCIAFgEQAAgEABgBIAAAHIADABIAFAAIAAABIgHAAIgBACQgBABgDADIgGAGIAAgHg");
	this.shape_33.setTransform(-7.3,-3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCFCF4").s().p("AgBADIAAgFIABABIACABIgCADIgBAAg");
	this.shape_34.setTransform(-6.8,-4.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A78E32").s().p("AgGAQQABgLADgGQACgLAHgGIAAAFQgHAJgDAOIgDAJIAAgDg");
	this.shape_35.setTransform(-7.9,-4.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DCBA5A").s().p("AgJAEIAFgEIAEgCIAEAAIADABIABABIABAEg");
	this.shape_36.setTransform(-3.5,-8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A78F33").s().p("AgCASQACgGAAgHIABgMIAAgFQAAgDABgCQgBAEACAHIAAAKIgCAHIgCAHg");
	this.shape_37.setTransform(-4.8,-9.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C79C3B").s().p("AgHAUQAFgGACgHQAAgHAAgHIAAgFIgDgFIACgCIABABIACAIQABAEAAAEIAAADIABAFIABACIADACIgDACIgFAEIgDAEg");
	this.shape_38.setTransform(-4,-9.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DFC068").s().p("AgEATIAEgHIAAgHIAAgKQAAgHAAgEIAAgCIAEAFIABAFQAAAIgCAGQgCAHgDAGg");
	this.shape_39.setTransform(-4.5,-9.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B58634").s().p("AgCANIgCgDIgBgEIAAgGQABgCgCgEIgCgIQAFADADAFQACAEABAEQABAFAFAEIAAADQgHgDgCAEIgCgCg");
	this.shape_40.setTransform(-3.1,-10.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6DED7").s().p("AgBADQgDgDAAgBIABgCIABgDIAFgCQACAFgCAEIACAAIAAAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgDgGg");
	this.shape_41.setTransform(5.9,-4.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_42.setTransform(0.2,-3.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_43.setTransform(0,-3.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#252211").s().p("AgkARIgEgHIgBgEIAAgDIAAgBQABgCADgBQACgCADgBQAGAAAIADIAAALIAAAAIgEAFIgDACIgFABIgBAGIgFgHgAAYgIIAAAAIAAAAIAAAAIAGAAQgEgCgCgDIAAgEQAEgBADgFIAFAAIAAAAIAGAFIgEAGIgGAEIgEAAIgEAAgAAggRIABABIAAAAIAAgBgAAfgTIABAAIAAAAIgBgBIAAABg");
	this.shape_44.setTransform(-3.1,-1.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D7D7D5").s().p("AAIAFIAIgFIADgBIAEgCIAFAAIAGADIgGAAIgEAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCAAQgEADAAAEIABADIADACIAAABQgIgCgEgGgAgbAAIABgFIABgBIADgBIgCgBIgBgCIgEACIgCAEIAAAEIgBAAIgBAAIAAgBIACgHQADgDACgBQAEgBAEADIgCACIAAADIADgCIAAAEIgCADIgIAAg");
	this.shape_45.setTransform(-2.9,-3.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8F3E4").s().p("AAVA/IgjAAIgQAAIgMAAIgDAAIgIAAIgIAAIgCgBIgBgDIAAgGIAAgGIAAgPIABgGIAKAAIAKAAIAAgHIAAgFIABAEIAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAEgDAGgCIALgDIADgFIABgGIgBAAQgEgBgGABIgKADIgHgCQgDgCgCAAIABgDIgCgCIAAgGQABgDADgCIACgLQgDgDgEgCIAAgHIAAgNIAAgBIADAAIADgBIADgDIADgDIAFgCIAAAGIgBAFIADAFIACAGIABAGIACgBIABgEIADACIACACIACAFIACAEIAIgEIAAgIIAAgBIgDgCIgBgDQAAgEAEgEIABAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAEAAQgDAEgCABIAAAFIAAAEIAAABIAAALIAAA1IAAABIALAAQAIAAAEgDQAHgFAEgJQAEgIABgIQABgLgDgJQgCgLgGgJIAGAAIALABQAHABAEgBQADACABAFIABAIIABAHQACAEAAACQAAAFgCAFIgFAIQgHAQgKAOIAFgCIAGgCIgGAGIACACIgBAGIAFAAQAAADgDAEIgFAGIAEgBIAFgBIADgBIACgCIADACQgIAGgKAEQgJADgKAAIgDAAg");
	this.shape_46.setTransform(-0.5,1.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DFCD88").s().p("AgTgQQAGAAAFgDIAGgDIADgDIADgFIAFgGIABABQAGAJACALQADAJgBAJIgFADIgDADIgDADIgHACIgEACIgDAFIgDADIAEAEIAAACIABACIADACQgEABgGgBIgEABIgFACIAAg1gAgSgcIgBAAIABgEQACACAEACIgGAAg");
	this.shape_47.setTransform(1.3,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D2B257").s().p("AgNABIAAAAIAEAAIAEAAIAFgCIADgGIgEgFIADAAIAEAAIAEADIAEADIgEAGIgEADIgEAEIgEACQgGADgFAAg");
	this.shape_48.setTransform(0.7,-2.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8C6228").s().p("AgDAHQADgGAEgIIAAAFIgEAIIACgBIgCADIgDgBg");
	this.shape_49.setTransform(3.2,-8.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D2A83E").s().p("AgTAGIgBgDIgBgDIgDAAIgFAAIAEgCQADgEAHADIARADIANAAIAOAAIgEAGg");
	this.shape_50.setTransform(-0.5,-8.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AC8132").s().p("AABAKIAEgHIgMgBIgNAAIAJgCIAKAAIAEAAIAFAAIAHgEIAHgGQgEAEAAAGIgBABIAAgDQgFAIgEAFIgHgBg");
	this.shape_51.setTransform(1.9,-8.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B59544").s().p("AgCAAIADgCIACADIgCADIgDgEg");
	this.shape_52.setTransform(5.7,-6.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3EBDB").s().p("AAmBCQADgDgBgEIgFAAIACgGIgCgCIAFgGIgFACIgFADQAKgPAHgPIAEgLQACgFAAgEQABgBgCgEIgCgHIAAgIQgBgEgDgDQgFABgHgBIgLgBIgGAAIgBgBIgEgDIgEgDIgEAAIgEAAIAAAAIgEgCIgGgBIgEADIgDADIgHAFQADAGAJACIgBAIIgIAEIgBgEIgCgFIgDgCIgCgCIgBAEIgDABIAAgGIgDgGIgCgEIAAgGIABgGIgFADIgDACIgDADIgDABIgEAAIABAAIACgEIABgDIgEACIAAgDIACgCQgEgEgDACQgDABgCADIgCAHIgGAAIACgEIgCgCIgCgCIAAgOIAAgFIAAgEIABgFIASAAIABAAIACAAIAEAAIAUAAIArAAIAHABIAFACIAEABIABABIADABIAEABIgDAGIgEADIAGAFIAIgJIADACIAFAEQAKAJAGAPQAGANABAOIAAAGQAAARgDAMQgDALgFAIQgEAHgEAEQgEAEgDACIgDgBIgDABIgDABIgEABIgFABIAGgGgAAygtIgBADIgBADQAAACADADIAFAGQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABgBIAAgFIgDAAQADgGgCgFIgHACg");
	this.shape_53.setTransform(0.5,-0.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DCDAD7").s().p("AgGACIAEgCIACgFIAAAAIAGAEIABAAIgHAHIgGgEg");
	this.shape_54.setTransform(4.4,-6.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#543E26").s().p("AgCAEIADgEIgBABIAAgCIgDABIgEABIgCgBIACgBIABgCIADgCQAFgCAIAAQAAAEgDADIgEAIIgFgEg");
	this.shape_55.setTransform(4.7,-7.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#927238").s().p("AABAOIgBAAIAFgJQACgFAAgCQgHAAgGACIgCAAIgCADIgBgCQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAgBIAEgDIAFgFIAEgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAFAGQACADgBADQAAAIgEAHIgFAEg");
	this.shape_56.setTransform(5,-7.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CBA94C").s().p("AAAgBQACgDADgEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAIgEAGIgEAHQAAgIAEgCg");
	this.shape_57.setTransform(4.2,-9.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B89844").s().p("AAAASIgCgBIgEgBIAAgBIgEgBIACgEIgDABIAFgKIABgBIAFgFIADgHQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIAAAAIAFAEIAEAGQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABIgFACIgFACIgCAEQgBAAgBABQAAAAAAABQgBABAAAAQAAABAAAAIACABIgCADIACABIADgCIADgCIgCAEIAEgBIgFAEg");
	this.shape_58.setTransform(4.4,-8.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BA9F33").s().p("ABdBXIgBgIIgBgIIABgGIgBgIQgCgFABgDQAAgEgCgHIgDgKIgCgIIgCgHQgBgNgGgNQgGgOgKgKIACgCIACADQACgCABgEIABgIQACgFgBgIIgCgMIgBgHQgCgEgCgCQgDgCgEABQgEAAgCAEIAAABQgDAEgEADIgHAGIgHAGIgFAAIgFgBIgKABIgIACIgTgDIAAgCQgFgEgBgFQgBgGgDgEQgEgFgFgDIgCgBIgCACIgBACQgBACAAADIAAAGIgBANQgCAIgCAFIgSAAIgBAFIAAAEQgHAGgEALQgEAIgBALIAAADIAAABQgDAEgBAEIgCAKIAFAAIgFABIAAAFIAEgCIABAAIgFACIAAAEIACgBIADgBIAAAAIgDABIgCACIABALQACAMAGALQAAAJgEAGIABACIABADIgCAEIAAAFIgCAMIgEAMQgOgPgJgSQgJgTgDgUQgDgSADgUQADgRAIgQQAKgWARgQQAQgRAWgKQARgHATgDQARgCATADQATADASAJQASAIAOAOQASARAKAWQALAWACAWQACAbgKAbQgJAagTAUIgBgXgAhgAYIgDABIgBACIACgBIACAAIABgBIAAgBIgBAAgAhpAQIAFAAIAFgCQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQgIABgEACg");
	this.shape_59.setTransform(0,-1.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A17C34").s().p("AACAXIgCgGQADgHABgKQAAgBgCgDIgCgGIgEgGIgFgFQACgEAEAAQADgBACACQACACACAEIABAHIACALQABAHgCAFIgBAIQgBAEgCACIgCgDg");
	this.shape_60.setTransform(5.8,-8.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7A6A2A").s().p("AgBCFQgTAAgSgGQgSgGgQgKQgQgLgNgPQgNgOgHgSQgJgUgCgWQgCgVAGgVQAFgVAMgTQAMgTASgNQARgOAUgHQAVgIAWAAQAQAAASAEQASAFAQAJQARALAOAOQANAPAJARQAJAUADAVQACASgDAUQgFAcgQAYQgQAYgYAOQgQALgTAFQgRAFgRAAIgCAAgAgQiAQgTACgRAIQgWAKgQAQQgRARgKAWQgIAQgDATQgDASADASQADAUAJATQAJASAOAPQALAMAQAKQAOAIAOAEQAYAIAZgDQAOgBAOgEQANgEANgIQAQgIANgOQATgUAJgaQAKgbgCgZQgCgZgLgVQgKgXgSgRQgNgNgTgIQgSgJgTgEQgKgBgKAAIgQABgAg+ADIAAACIgBADgAhXAAIAAAAIgDABgAhJgJIAAABIgBAEIABgFgAhDgWIABAAIACACg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#988430").s().p("AgoCDQgXgHgTgPQgUgOgNgVQgLgQgFgUQgGgUABgSQAAgWAHgXQAIgVAPgSQARgWAZgOQAZgNAbgDQAUgCAWAFQAWAFASAMQASALAOAPQAOAQAJATQAJATACAWQADAUgFAVQgEAVgLAUQgLATgQAOQgQAPgUAJQgUAJgWADIgOAAQgUAAgUgGgAgBiEQgWABgVAHQgUAHgRAOQgSANgMATQgMATgFAVQgGAWACAUQACAWAJAUQAHASANAPQANAOAQALQAQALASAFQASAGATAAQARABATgGQATgFAQgLQAYgOAQgYQAQgYAFgbQADgVgCgSQgDgVgJgTQgJgSgNgPQgOgOgRgLQgQgJgSgEQgQgFgRAAIgBAAgABYAYIgBgGIgCgFIgEgNIAAgFIACAFIACAIIADAKQACAHAAAEIgCgFg");

	this.addChild(this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-13.7,27.5,27.6);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEhkQASgOAUgMIgHgNQgHgOARgNQAGgFAGgEQAPgMAQgJIAGgDIAAAAIAHgEQAQgIATgFIAOgEQAVgGAHAOIAGANQATgJAXgIQDHg9EAAmQjhAWjABMIgrASIACADQAHANgLAKIgRANQgNALgRAJIgGADIgBABIgGACQgQAJgSAHIgUAGQgPADgHgNIgCgEQgTALgUAOQitBtiVCqQB1jlCnh9g");
	this.shape.setTransform(0,-24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("ADMHvImXsYQASgHAQgIIAGgDIABAAIAGgDQARgJAPgLIGYMYQADAHgOAHIg0AaQgHAEgEAAQgEAAgCgDgAkanEQgFgHANgMQAWgXAdgDQAQgCADAGIAMAWQgTAGgQAHIgHAEIAAABIgGADQgQAIgPANg");
	this.shape_1.setTransform(12.8,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.1,-50.4,96.3,100.9);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AAAC/IgCAAQg2AAgvgSQhsgqgphnQgqhlBTg6QBTg7B3AAIADAAIAEAAIAAAAIACAAIAAAAIAAAAIADAAIAAAAIAEAAIADAAQB3AABTA7QBTA6gqBlQgpBnhsAqQgvASg2AAIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-19,53.6,38.3);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABEQgKABgNgMIhAg+QgUgVAUgVQA0gUAjAAIADAAQAjABAyATQAUAVgUAVIhAA+QgLAKgKABIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-6.8,19.7,13.7);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAJA7QgFgbgPgeQhfiLCLBIIADAGQAVAzgKAqQgLAsgLAKQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgFgfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-9,10.2,18.2);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(1,1,1).p("AjwlAQAaGBDCEAIEFkEQi0jtktiQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AjwlAQEtCQC0DtIkFEEQjCkAgamBg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-32.1,48.3,64.3);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AhPDqQgNgWgMgXQhTiaghi/IgFgaQgKhDgFhHQEtCQC0DtIkFEEQgfgqgcgtg");
	this.shape.setTransform(9.5,-2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-34.2,48.3,64.3);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXgBQAYABARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(-4.5,-13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA/QgXgkgrgjQgtgkAfguQA9AXAoATQApAdgVBsQgEACgEAAQgPAAgSgcg");
	this.shape_1.setTransform(48.5,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AlaE0Ih5hIQhKh3gGhFQgHhEAEhXQADhXASgUQASgVAHgFIBGhAQA/g6BogJQA/gIBIAEIgMgBQBRADBNAWQA1ASAuA4QAeAlAMAwQAIAjAoANQBxAAByAsQggAuAtAkQAtAjAXAkQAYAjARgJQgEAWgLAkIgCAJQgOAlghAgQhnBkkhA2QhJAIhAAAQi7AAh2hFgAhTivQgRARAAAZQAAAYARARQASASAYAAQAZAAAQgSQAQgRAAgYQAAgZgQgRQgQgRgZAAQgYAAgSARg");
	this.shape_2.setTransform(-0.2,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-37.7,111.3,75.6);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AAFF3IgEAAIgBAAIAAAAIgEAAQjOAFh4iiQh4ijAlh6QAlh7BGhgQBHhgDpAJIACAAIABAAIACAAQDpgJBHBgQBHBgAkB7QAmB6h5CjQh0CdjFAAIgNAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.3,-37.5,84.8,75.1);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AACC/IgCAAIgCAAQg2AAgvgSQhsgqgphnQgqhlBTg6QBTg7B3AAIADAAIAEAAIAAAAIACAAIAAAAIAAAAIACAAIABAAIAAAAIAEAAIADAAQB3AABTA7QBTA6gqBlQgpBnhsAqQgvASg2AAIgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-19,53.6,38.3);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACBEIgCAAQgKABgNgMIhAg+QgUgVAUgVQA0gUAjAAIACAAIABAAQAjABAyATQAUAVgUAVIhAA+QgLAKgKABIgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-6.8,19.7,13.7);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AjLAGQAAgCAQgEQARgDAYgCQAYgBASAGQAUAEgBACQAAACgRgEQgRgEgYABQgZABgSADIgOACQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgABWAFQAAgCAPgDQARgEAYgCQAYgBATAGQATAEAAACQAAACgSgEQgRgDgZAAQgYABgSADIgOACQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.7,40.8,1.5);


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


(lib.mining_sprite_tan = function() {
	this.initialize();

	// Helmet
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E7D601").ss(1,1,1).p("AjkgGQDhAaDogZ");
	this.shape.setTransform(-3.6,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FEEB01").ss(1,1,1).p("AHKgHQALBAABAnQACAogFAgQgFAggOAYQgNAYgSAlQiBiqibgPQggALggAGQkuAPjtgMQA7gxAdidQAeigEfggQEdgfByB2QBxB2ALBCg");
	this.shape_1.setTransform(12.4,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7D601").s().p("ACWBIQgUgHgFgtQgEgoAhgxIABgDQgQApACAgQABAiAOAGQAKAEALgJQAGgGAGgJIAGgJIATgbQgCATgMAYIgJASIgGAJQgPASgNAAIgHgBgAjBBIQgQgHgDgtQgDgoAZgxIACgDQgNApABAgQABAiAMAGQALAGAOgaIAUgkQgCAbgRAiQgNAbgNAAIgGgBgAggBIQgagHgGgtQgGgoAsgxIACgDQgVApABAgQACAiATAGQAUAGAWgaQAUgVALgPQgCAbgcAiQgVAbgWAAIgJgBg");
	this.shape_2.setTransform(-2.4,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEEB01").s().p("ACFBkQggALggAGQkuAPjtgMQA7gxAdidQAeigEfggQEdgfByB2QBxB2ALBCQALBAABAnQACAogFAgQgFAggOAYQgNAYgSAlQiBiqibgPgAidBVQBuAABugNIAFAAIgFAAQhuANhuAAIAAAAIAAAAQhyAAhvgOIgGAAIAGAAQBvAOByAAIAAAAIAAAAgAAFiUQgfAxAEAqQAFAtASAHQARAFASgWIAGgJIAKgSQAMgYABgVIgSAdIgGAJQgHAJgGAGQgKAJgKgEQgNgGgBgiQgBgiAOgpgAlSiUQgaAxADAqQAEAtAQAHQAPAGARggQAQgiACgdIgTAmQgOAagMgGQgMgGAAgiQgBgiAMgpgAiviUQgrAxAFAqQAGAtAbAHQAaAGAcggQAcgiACgdQgMAQgUAWQgYAagTgGQgUgGgBgiQgBgiAUgpg");
	this.shape_3.setTransform(12.4,-10);

	// Nose
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBCIgCgBQgHACgIgMIglg+QgMgVANgOIAEgFQAbgSAUAAIACAAIABAAIACAAQATABATAEQAUAFAQAOQAPAPgPATIg8A+QgGAIgIACIgCABIgBAAg");
	this.shape_4.setTransform(-22.4,34.8);

	// Muzzle
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("ABoC4IhhgCQglgCg5gSQg4gSgrhxQgqhvBVg2QBWg1A7AFIA/AFIACAAIABAAIADAAIABAAIABAAIACAAIADAAIALACQAJABARAXQAQAWAoAnQAoAngOA/QgNBCgpAuQgqAuAfAHQAcAHgvAAIgJAAg");
	this.shape_5.setTransform(-12.3,40.4);

	// Glasses
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("Ag+BjIAAgCQAIggACggQAGhDgUhAIAAgXIBeBFQApBRgCBdQgsgYhVABg");
	this.shape_6.setTransform(38.1,10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.4)").s().p("ABNC8QgugHgMgeQgTguhNgbQgugPhAAJQhBAJgUAyQgfBQgNg3QgZiIA8huQCajAGzClIACAFQATBAgFBDQgDAggHAgIgBABQgHAfgLAfQgNAYgoANQgoALgwAAQgkAAgpgGg");
	this.shape_7.setTransform(0.4,11.8);

	// Eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("ABGApQgRgRAAgYQAAgXARgSQARgRAZAAQAYAAARARQASASAAAXQAAAYgSARQgRARgYABQgZgBgRgRgAifApQgLgRAAgYQAAgXALgSQALgRAPAAQAPAAALARQALASAAAXQAAAYgLARQgLARgPABQgPgBgLgRg");
	this.shape_8.setTransform(-4.9,10.8);

	// Face
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC66").s().p("AglF3IgBAAIgEAAIgEAAQikAFhfiiQhgijAeh6QAdh7A4hgQA4hgC6AJIADAAIACAAIABAAQDmgJBHBgQBHBgAkB7QAmB6h5CjQh0CdjDAAIgNAAg");
	this.shape_9.setTransform(7,21.5);

	// Ears
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFCC66").ss(3,1,1).p("ADWDeQimkLjmiwIgfF0QDXBKDUgDg");
	this.shape_10.setTransform(33.6,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC66").s().p("AjVCXIAfl0QDmCwCmELIgTAAQjJAAjPhHg");
	this.shape_11.setTransform(33.6,2.2);

	// Helmet_Back
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(1,1,1).p("ADyBoQkhAajCgpQAQgLAYgDQA/i3DcgF");
	this.shape_12.setTransform(-5.4,-10.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7D601").s().p("AhFhQIB4BQIAMAYQAmApiVAQg");
	this.shape_13.setTransform(47.7,13.5);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-38.6,94.2,97.6);


(lib.shop_icon = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEB052").s().p("AgMgBIACgBIABgBIACAAIACAAIAFgCIAAACIADADIAEAAIAEAAIABAAIABAAIgBACQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABQgIgDgKgEg");
	this.shape.setTransform(-3.7,-15.1,1.07,1.07);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(-7.6,-23.6,1.07,1.07);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_2.setTransform(-6.2,-23,1.07,1.07);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2A44D").s().p("AgHAIIgEACIACgDIACgEIgBgDIgBgDIgBgDIABgDIADAAIAEADIACACQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgCgDIANAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgEABQgBAEgCAAIgCAAIgCADIAAgBIgCABIgBAEIgCADg");
	this.shape_3.setTransform(-2.9,-16.8,1.07,1.07);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2B159").s().p("AAKAOIgEgDIAJAAIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEgCgAgMgGIgDgJIADADIABACIABgBIACACIAAAJQgCgCgCgEg");
	this.shape_4.setTransform(-4.5,-19.2,1.07,1.07);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5CB7A").s().p("AgPALIAEgJQABgCAAgFIABgDIABgDIgBgCIgBgCQADgEAAgHIACADIADAIQACAFAAADIAAAEIAAADIABABIABABIAGAAIAGAAIgBADIABAEIABADIABAEIgCAEIgDAEIgCAAIgCAAIgBACIgCABQgKgHgJgJg");
	this.shape_5.setTransform(-5.6,-18.2,1.07,1.07);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED88B").s().p("AgGAIIgBgEIgBgEIABgBIABgCIABgBIABgFIABABIABAFIACADQABACAEACIACABIADAAIgIAAIgFAAIgBAFg");
	this.shape_6.setTransform(-4.9,-21.4,1.07,1.07);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_7.setTransform(-4.1,-21.6,1.07,1.07);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DFC677").s().p("AAEAHIgCgBQgCgCgCgDIgDgCIgBgFIAEADIACADIABAAIADACIADAAIAAAFIgDAAg");
	this.shape_8.setTransform(-4.6,-21.6,1.07,1.07);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#927D49").s().p("AgCABIACgBIADgCIAAADIgDAAIAAABIgCgBg");
	this.shape_9.setTransform(-4.2,-21.9,1.07,1.07);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#39331F").s().p("AABACIgBgCIgCAAIAAAAIACgBIACgCIABAAIAAADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCgCg");
	this.shape_10.setTransform(-4.4,-23.7,1.07,1.07);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_11.setTransform(-2.5,-22.7,1.07,1.07);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_12.setTransform(3,-14.7,1.07,1.07);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIAEgBIAGAAIgCgBIgBgBIAAgCIgCgDIABgCIADgBIADgDIAEgBIADgCIACgCIADgCQAAAHgDAEQgDAGgFADQgDADgEAAIgJAAg");
	this.shape_13.setTransform(1,-22.2,1.07,1.07);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_14.setTransform(1.4,-16.4,1.07,1.07);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8C173").s().p("AghAXIgCgBIABgBIgCgBIgBgBIgDAAIgEAAIgEgEIACgDIACgEIACgBIACABIABgEIACABQACgCACgDIADAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAbAAQAGAAAIgDQAHgCAHgFIAEgEIAFgBIAEgCIACgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABABIACABIABACQgCACABAEIgBAEIAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgEACIgDADQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgDAAIADgGIADgEIAAgCIAAgCIAAgCIAAgCIgBgBIgDgBIgEAAIgDACIgEACIgBAAIgCABIgCADIgDAEIgDAAIgEADIgDABIgCAAIgCABIgCACIgBAAIgCABIgEACIgFABIgDAEIgEADIgCACIgCACIgCgBIgDACIgDACg");
	this.shape_15.setTransform(1.5,-17.3,1.07,1.07);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape_16.setTransform(5.7,-17.8,1.07,1.07);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0993A").s().p("AAAgGIABACIACgBIABACIABACIgDAEIgCABIAAABIgCABIgCAAIAEgMg");
	this.shape_17.setTransform(6.1,-21,1.07,1.07);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA847").s().p("AgEANIACAAIACgBIABgBIABgBIADgGIgBgCIgBgCIgCABIAAgBQACgIAAgMIACAJIACAEIABAEIABADIABAFIAAAGIAAADIgBgCIgBAEIgBADIgCgCIgCgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBADIgEACIgEAAIAFgIg");
	this.shape_18.setTransform(6,-21.7,1.07,1.07);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(0.2,-26.7,1.07,1.07);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(0.1,-26.9,1.07,1.07);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_21.setTransform(4.6,-27.4,1.07,1.07);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B59544").s().p("AgBAAIACgCIABADIgBACIgCgDg");
	this.shape_22.setTransform(4.4,-29,1.07,1.07);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DCDAD7").s().p("AgDABIACgBIABgDIAAAAIAEADIgEAEIgDgDg");
	this.shape_23.setTransform(3.4,-28.9,1.07,1.07);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#543E26").s().p("AgBADIACgDIgBABIAAgBIgCAAIgDABIgBgBIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_24.setTransform(3.7,-29.8,1.07,1.07);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#927238").s().p("AAAAKIADgGIACgFQgFAAgEABIgBAAIgCACIgBgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACgCIAEgEIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADADIACAGIgDAJIgEADg");
	this.shape_25.setTransform(3.9,-30.3,1.07,1.07);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_26.setTransform(2.5,-30.5,1.07,1.07);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B89844").s().p("AAAANIgBgBIgCgBIgBgBIgDAAIABgCIgCABIAFgIIAAgBIADgDIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBIADAFIADAEQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIgEABIgDACIgCACQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAABIAAABIAAABIADgCIACAAIgBACIACgBIgDADg");
	this.shape_27.setTransform(3.4,-30.9,1.07,1.07);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBA94C").s().p("AAAgBQABgBACgEQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAFQgBgFADgCg");
	this.shape_28.setTransform(3.3,-31.6,1.07,1.07);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_29.setTransform(4.5,-30.6,1.07,1.07);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AC8132").s().p("AAAAHIAEgEIgIgBIgLAAIAIgBIAHgBIACAAIAEAAIAFgDIAFgEQgDADABAEIgBABIgBgCQgDAFgDAEIgGgBg");
	this.shape_30.setTransform(1.4,-30.9,1.07,1.07);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D2B257").s().p("AgJABIADAAIADgBIADgBIACgDIgCgEIABAAIADAAIAEACIACADIgDADIgCACIgEADIgCABIgIADg");
	this.shape_31.setTransform(0.6,-26.2,1.07,1.07);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DFCD88").s().p("AgNgLIAHgDIAFgBIABgDIADgEIADgDIABABQAEAFACAIQABAIAAAFIgDACIgDADIgCACIgFABIgCACIgDADIgCADIADACIAAACIABABIACACIgHAAIgDABIgDABIAAgmgAgNgXIAEADIgEAAg");
	this.shape_32.setTransform(1,-23.8,1.07,1.07);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7E3DB").s().p("AgHANIgDABIgBgEIAAgEIAAgFIAAgBIAAgNIAAAAIAAAGIAAAEIACACIgBABIAAACQAOAFAIgGIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCADIgHADQgDABgDACIgDgCg");
	this.shape_33.setTransform(-2.5,-22.9,1.07,1.07);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_34.setTransform(-3.6,-24.7,1.07,1.07);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DFC57C").s().p("AgCAAIgCAAIADAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAIADABIADgBIAAADQgGgCgCAAg");
	this.shape_35.setTransform(-4.5,-25.8,1.07,1.07);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#938357").s().p("AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_36.setTransform(-4.4,-27.1,1.07,1.07);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6BD62").s().p("AAAAEQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIADgEIAAgBIAAgBIABgBIADgCIAAAHIgDACIgBgBg");
	this.shape_37.setTransform(-4.3,-26.5,1.07,1.07);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#242110").s().p("AAAATIgHgDQAEgBADABIAIACIAAACIgIgBgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAEAAIgDgCIAGAAIAAABIAAAAIgDABIgDABIgCgDg");
	this.shape_38.setTransform(-4.7,-25,1.07,1.07);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8F3E4").s().p("AgKAuIgMAAIgIAAIgDAAIgGAAIgFAAIgCgBIAAgCIAAgFIAAgEIAAgLIAAgEIAIAAIAHAAIAAgGIAAgDIABADIADgBIADACQADgCAFgBIAHgCIACgEQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAIAAAAQgDgBgFABIgHABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgCIAAgDQABgDADgCIABgIQgCgCgDgBIAAgGIAAgJIAAAAIACgBIADgBIACgCIACgBIAEgBIgBADIAAAEIACAEIABAEIABAFIACgBIAAgEIACADIACABIABADIABAEIAGgEIABgFIAAgCIgCgBIgCgCQAAgDADgDIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBABIAAADIAAADIAAABIAAAIIAAAmIAAABIAIAAQAGgBADgCQAFgEADgGQACgFABgGQAAgHgBgIQgCgIgEgFIAEgBIAIABQAFAAADAAQADABAAADIABAGIABAGIABAEIgCAHIgDAGQgFALgHAKIAEgBIADgBIgEAEIACACIgBAEIADgBQABADgCADIgEAEIADgBIADAAIACgBIACgBIADABQgHAFgHACQgIACgIABg");
	this.shape_39.setTransform(-0.4,-22.9,1.07,1.07);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAIACgBIAAACIgCACIgFAAg");
	this.shape_40.setTransform(-2.2,-27.1,1.07,1.07);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F5F2E6").s().p("AgCAAIACgBIABgBIABAAIABABIgCABIgBAAIAAADIgBAAIgBgDg");
	this.shape_41.setTransform(-4.4,-27.5,1.07,1.07);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_42.setTransform(-2.7,-30.3,1.07,1.07);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_43.setTransform(-5.3,-27.5,1.07,1.07);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6342").s().p("AAAAMIgDgEIgBgBIAAgBIgBgCIAAgCIgCgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgHIABgDIABgBIAAAAIgBABIAAABIABACIADAGIACADIAAgBIADAAIADABIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgEIAAANIgIgDQgCAAgEABIAGADIAIABIAAAEIgDADIgEACIgCgDg");
	this.shape_44.setTransform(-4.9,-23.4,1.07,1.07);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#252211").s().p("AgaANIgDgGIgBgCIAAgBIABgBIAAAAIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQADgBAHADIAAAHIAAAAIgDAEIgDACIgDABIgBADIgEgEgAARgFIAAgBIAFAAIgFgDIAAgDQADgBADgDIADAAIAFAEIgDADIgFADIgCABIgEAAgAAXgLIAAAAIABAAIAAgBIgBABgAAXgNIAAAAIAAgBIAAAAg");
	this.shape_45.setTransform(-2.4,-25.3,1.07,1.07);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5EDB6").s().p("AgCAAIACgBIACAAIgBABIAAAAIgBAAIAAABIgCABg");
	this.shape_46.setTransform(-6.9,-24.1,1.07,1.07);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3E19D").s().p("AAAAXIgBgDIgCgCQgEgIgBgJIAAgDIACACIABADIADAAIABAAQABgCAAgBIgBABIgBgBIgBgBIgBgEIAAgDIgBABIAAgBIABgCIgCAAIAAAAIABgBIABgCIADgFIgBADIAAAFIABACIABAAIAAgFIAAgFIADgEIADgDIAEACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAABIgBABIAAAEIgBAGQgBABAAAAQAAABABAAQAAAAAAABQAAAAABABIABABIAAABIABACIAAACIgBAFIgBABIgBACIgBADIABAEIABAEIgBACIgBgDg");
	this.shape_47.setTransform(-6,-23.1,1.07,1.07);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCAAIgDABIAHgBg");
	this.shape_48.setTransform(-7.7,-24.5,1.07,1.07);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4ECB4").s().p("AgFAPIgCgEIAAAFIgBgHIACgCIABAAIAAgBIABAAIACAAIAAADIABADIABACIAAACIAAACIgEABIgBgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgCABIgBABIgDABIAAgDIAAAAIABgGQABgEACgDIAEgDIgBAEIACgEQACgCADgBIABAHIACAAIgBACIgDACIgEAEIgBADIAAAGIAAgBg");
	this.shape_49.setTransform(-6.2,-24.8,1.07,1.07);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5C66B").s().p("AgCAFIABgBIgCgBIgBgEIABgEIADABIAAAAIAEADIABABIgCABIgDAEIgBABg");
	this.shape_50.setTransform(-4.9,-26.5,1.07,1.07);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_51.setTransform(-6.1,-27.6,1.07,1.07);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4EFC8").s().p("AgFADIABgDQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgFgBIgBACQgBAAgCADIgEAEIABgFg");
	this.shape_52.setTransform(-5.6,-27,1.07,1.07);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A78E32").s().p("AgEALQABgIACgDQABgIAFgEIAAADQgFAHgCAJIgCAHIAAgDg");
	this.shape_53.setTransform(-6.1,-27.8,1.07,1.07);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3EBDB").s().p("AAcAwQABgDAAgCIgEAAIABgEIgBgCIAEgEIgEABIgDACQAHgLAFgLIADgHIACgHIgBgDIgBgFIgBgGQAAgDgDgCQgEABgEgBIgJgBIgDABIgBgBIgDgDIgEgCIgCAAIgDAAIgCgBIgEgBIgEACIgCACIgFAEQADAEAFACIAAAGIgGADIgBgDIgBgEIgCgBIgCgCIAAADIgCABIgBgFIgCgEIgCgEIABgDIAAgEIgDABIgCACIgDACIgCABIgCAAIAAAAIABgDIABgCIgCABQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIABgCQgDgCgDABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgBAFIgFAAIACgDIgCgCIgCgBIAAgLIAAgDIAAgDIABgDIAOAAIABAAIAAAAIADAAIAPAAIAfAAIAFAAIAEACIADAAIABABIACABIADABIgDAEIgCADIAEADIAFgHIACACIAFADQAHAHAEAKQAEAJABALIABAEQAAAMgDAJIgGAOIgGAIIgEAEIgDgBIgCABIgCABIgEABIgDAAIAFgEgAAlggIgCACIgBACIAEAEIADAEQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgEIgBAAQACgEgCgDIgEABg");
	this.shape_54.setTransform(0.4,-24.4,1.07,1.07);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");
	this.shape_55.setTransform(0,-24.1,1.07,1.07);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");
	this.shape_56.setTransform(0,-24.1,1.07,1.07);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_57.setTransform(-0.3,-30.5,1.07,1.07);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DFC068").s().p("AgCAOIACgFIAAgGIAAgGIAAgIIAAgCIADAEIABAEQgBAFgBAEQgCAGgCAEg");
	this.shape_58.setTransform(-3.4,-31.6,1.07,1.07);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B58634").s().p("AgBAJIgBgBIgCgEIABgEIgBgEIgCgFQAEACACADIABAFQABAEAFADIAAACQgGgCgBACg");
	this.shape_59.setTransform(-2.3,-32,1.07,1.07);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A78F33").s().p("AgBANIABgJIAAgIIAAgEIABgEIABAJIAAAGIgCAFIAAAFg");
	this.shape_60.setTransform(-3.7,-31.5,1.07,1.07);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIADgBIgBABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_61.setTransform(0,-25.7,1.07,1.07);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C79C3B").s().p("AgFAOQAEgEABgFQAAgFAAgFIAAgDIgCgEIACgCIAAABIABAGIABAFIAAADIABADIABACIACABIgCACIgEACIgCADg");
	this.shape_62.setTransform(-3.1,-31.6,1.07,1.07);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CEB052").s().p("AgHAAIABAAIABgBIABAAIACAAIACgCIAAACIACABIACAAIADAAIAAAAIABAAIAAABIgCACIgCABQgFgCgGgCg");
	this.shape_63.setTransform(-3.7,-15.2,1.706,1.706);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E5CB7A").s().p("AgIAHIACgGIAAgDIABgDIAAgCIAAgBIgBgBQACgDAAgEIABACIACAFIACAFIAAADIAAABIAAABIAAAAIAEAAIAEAAIgBACIABACIAAACIABADIgBACIgCADIgCAAIgBAAIgBABIgBABQgFgFgFgFg");
	this.shape_64.setTransform(-5.6,-18.3,1.706,1.706);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C2A44D").s().p("AgEAFIgDABIACgCIABgDIgBgBIAAgBIgBgCIABgCIACAAIACACIABABQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIgBgCIAIAAIgBADIgCAAIgDACIgBAAIgBABIAAAAIAAAAIgBADIgCACg");
	this.shape_65.setTransform(-3,-16.9,1.706,1.706);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D2B159").s().p("AAGAJIgCgCIAFAAIABACQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCgBgAgIgDIgBgGIABACIABACIABgBIACABIAAAFIgEgDg");
	this.shape_66.setTransform(-4.5,-19.2,1.706,1.706);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D6D6D5").s().p("AgGAAIAAgBIADABIACAAIADAAIAFAAQgDACgEAAIgGgCg");
	this.shape_67.setTransform(-2.5,-22.8,1.706,1.706);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C4A859").s().p("AAAAAIAAAAIAAAAIABAAIAAABIgBgBg");
	this.shape_68.setTransform(-4.2,-21.6,1.706,1.706);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E7E3DB").s().p("AgEAIIgCAAIgBgCIAAgCIAAgDIAAgBIAAgIIABAEIAAAAIAAADIABABIgBAAIAAABQAIAEAFgFIAAADIgBADIgFABIgDACIgCgBg");
	this.shape_69.setTransform(-2.5,-23,1.706,1.706);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DFDDD9").s().p("AAAAAIAAgDQAAAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAIgBADIAAACIAAgEg");
	this.shape_70.setTransform(-3.6,-24.7,1.706,1.706);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DFC677").s().p("AACAEIgBAAIgCgDIgBgBIgBgDIACACIABABIABAAIABABIACAAIAAADIgCAAg");
	this.shape_71.setTransform(-4.6,-21.7,1.706,1.706);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#927D49").s().p("AgBAAIABAAIACAAIAAAAIgCAAIAAABg");
	this.shape_72.setTransform(-4.3,-22,1.706,1.706);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EED88B").s().p("AgDAFIgBgDIgBgCIABAAIABgBIABgBIABgDIAAAAIABAEIAAABIADACIABABIACAAIgEAAIgDAAIAAADg");
	this.shape_73.setTransform(-5,-21.5,1.706,1.706);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D7C27C").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_74.setTransform(-6.2,-23.1,1.706,1.706);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#39331F").s().p("AAAAAIAAAAIgBAAIAAAAIABAAIABgBIAAAAIABABIAAACIgCgCg");
	this.shape_75.setTransform(-4.4,-23.7,1.706,1.706);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C1A956").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_76.setTransform(-7.6,-23.7,1.706,1.706);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F5EDB6").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAAAIAAABg");
	this.shape_77.setTransform(-6.9,-24.2,1.706,1.706);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BFA64C").s().p("AgBAAIADAAIgBAAIgBAAIgBAAg");
	this.shape_78.setTransform(-7.7,-24.5,1.706,1.706);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6E6342").s().p("AAAAHIgBgCIgBAAIAAgCIgBgBIAAgBIgBgBIAAgBIAAgEIABgCIAAACIACAEIABABIAAAAIACAAIABAAIACAAIAAAAIgBgCIAAAAIABgDIAAAHIgFgCIgDABIADABIAFABIAAAEIgCABIgCABIgBgCgAgDgIIAAAAIAAAAIAAABg");
	this.shape_79.setTransform(-4.9,-23.5,1.706,1.706);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F3E19D").s().p("AAAAOIAAgCIgBgBQgDgFgBgGIAAgBIABABIABACIADgBIAAABIAAgCIAAAAIgBAAIAAgBIgBgBIAAgCIgBAAIABgCIgBAAIgBAAIABgBIABAAIACgEIAAACIAAADIAAABIAAABIAAgEIAAgDIACgCIACgCIACABIgDABIgBADIAAAAIgBABIAAAAIAAABIAAABIgBAEIABADIABAAIAAAAIAAABIABACIgBADIgBABIgBABIAAABIAAADIABADIgBABIAAgCg");
	this.shape_80.setTransform(-6,-23.2,1.706,1.706);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F4ECB4").s().p("AgDAJIgBgCIAAADIAAgEIABgBIAAgBIABAAIAAAAIABAAIAAACIABABIAAABIAAACIAAABIgCAAIgBgCgAAAADIAAgCIAAgBIAAgBIgBABIgBABIgBABIgBAAIAAgCIAAgCIACgFIACgCIAAADIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAAADIABABIAAABIgCACIgCACIgBABIAAAEIAAgBg");
	this.shape_81.setTransform(-6.2,-24.8,1.706,1.706);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DFC57C").s().p("AgBAAIgBAAIACAAIAAAAIACAAIABAAIAAABQgDgBgBAAg");
	this.shape_82.setTransform(-4.5,-25.8,1.706,1.706);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#938357").s().p("AAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_83.setTransform(-4.4,-27.1,1.706,1.706);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E5C66B").s().p("AgBAEIABgBIgCgBIAAgCIAAgDIACABIAAAAIACACIABAAIgCABIgBACIAAABg");
	this.shape_84.setTransform(-4.9,-26.6,1.706,1.706);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EBCC73").s().p("AgCAHIABgEQABgFADgFIAAAHIgCAAIgBACIAAAEIgCACg");
	this.shape_85.setTransform(-6.1,-27.7,1.706,1.706);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F4EFC8").s().p("AgDACIACgCIABgCIABgCIAAAEIAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgDADIAAgDgAABAAIABAAIACAAIAAAAg");
	this.shape_86.setTransform(-5.7,-27,1.706,1.706);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCFCF4").s().p("AAAABIAAgBIAAAAIAAAAIAAABg");
	this.shape_87.setTransform(-5.3,-27.6,1.706,1.706);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A78E32").s().p("AgCAHQAAgFACgCQAAgEADgDIAAACQgDAEgBAFIgBAEIAAgBg");
	this.shape_88.setTransform(-6.1,-27.9,1.706,1.706);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E6BD62").s().p("AAAACIgBABIABgDIAAAAIAAAAIABgBIABgBIAAAEIgBABIgBgBg");
	this.shape_89.setTransform(-4.4,-26.6,1.706,1.706);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#242110").s().p("AAAAMIgEgCIAEAAIAEACIAAABIgEgBgAAAgLIAAAAIABABIACAAIgCABIgBgCgAADgKIAAAAgAABgMIAEABIgBAAIgBABg");
	this.shape_90.setTransform(-4.7,-25,1.706,1.706);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F5F2E6").s().p("AgBAAIABAAIAAAAIAAgBIABABIABAAIgBAAIgBAAIAAABIAAABIgBgCg");
	this.shape_91.setTransform(-4.4,-27.6,1.706,1.706);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DCBA5A").s().p("AgDABIACgBIABAAIABAAIACAAIABAAIAAABg");
	this.shape_92.setTransform(-2.7,-30.4,1.706,1.706);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B58634").s().p("AgBAFIgBgDIABgCIgBgCIgBgDIADADIABADQAAAAAAABQAAAAABABQAAAAABABQAAAAABABIAAABQgDgBgBABg");
	this.shape_93.setTransform(-2.3,-32,1.706,1.706);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C79C3B").s().p("AgCAJIACgGIAAgFIAAgDIgBgCIABgBIAAABIABADIAAAEIAAAAIABADIABABIgBABIgCACIgBACg");
	this.shape_94.setTransform(-3.1,-31.7,1.706,1.706);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A78F33").s().p("AAAAIIAAgGIAAgEIAAgCIABgDIAAAGIAAACIgBAEIAAADg");
	this.shape_95.setTransform(-3.7,-31.6,1.706,1.706);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DFC068").s().p("AgBAIIABgDIAAgDIAAgDIAAgGIAAAAIACACIAAACIAAAFIgCAGg");
	this.shape_96.setTransform(-3.5,-31.6,1.706,1.706);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D2BA6B").s().p("AgKADIACgBIACgBIACgBIACAAIACAAIAAAAIACAAIAEgBIADgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAIgMADIgLADIABgBg");
	this.shape_97.setTransform(3,-14.7,1.706,1.706);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E0CD81").s().p("AgYALIACgBIACgCIABABIABABIACgBIACgCIABABIABgBIACgCIACgCIACgCIADgBIADAAIAAAAIABAAIABgBIABgBIACAAIABAAIADgCIACgBIABgCIACgDIABAAIABAAIACgCIADgBIACABIACAAIAAABIAAABIAAABIAAABIAAABIgCAFIgCACIACAAIgBABIgCABIgBACIgCABIgBACIgEABIgDACIAAgBIgDAAIgCABIgCABIgCABIAAABIgBABIgFAAQgKAAgIgDg");
	this.shape_98.setTransform(1.3,-16.4,1.706,1.706);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BA9040").s().p("AgHANIACgBIABgBIACgCIABgBIABgDIABgCIADgCIAAgBIABgDIAAgCIABgFIAAgCIABgCIABABIAAAFIABADIAAAJQgGAGgFAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDABIABgCg");
	this.shape_99.setTransform(5.7,-17.8,1.706,1.706);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D8C173").s().p("AgUAOIgBAAIAAgBIAAgBIgBAAIgCAAIgDAAIgDgDIACgCIABgDIABAAIACAAIABgCIABABIACgDIACAAIABgCIARAAIAIgCQAEgBAEgDIAEgDIACAAIADgCIABgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIABACIgBAEIAAACIgBADIAAADIgDAAIgCACIgCADIgBAAIABgEIACgCIAAgBIAAgBIAAgBIAAgCIAAgBIgCAAIgCAAIgDABIgCABIgBABIgBAAIgBACIgCACIgCAAIgDACIgBAAIgBAAIgBABIgCABIAAAAIgBABIgCABIgDABIgDACIgCACIgBABIgCACIgBgBIgCABIgCABg");
	this.shape_100.setTransform(1.5,-17.4,1.706,1.706);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C0993A").s().p("AAAgDIABABIABgBIAAACIABABIgCACIgBAAIAAABIgBAAIgBABIACgHg");
	this.shape_101.setTransform(6.1,-21.1,1.706,1.706);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCA847").s().p("AgFANIADgEIACgBIAAgBIAAgBIABAAIACgDIgBgBIAAgCIgBABIgBgBQACgFAAgHIABAGIABACIABADIABABIAAADIAAADIAAADIgBgCIAAADIgBACIgBgBIgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIAAABIgCABIgDAAg");
	this.shape_102.setTransform(6,-21.8,1.706,1.706);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ECD592").s().p("AgHAHIAAAAIABgBIACAAIAEAAIgBgCIAAAAIAAgBIgCgCIABgBIACAAIABgCIADgBIABgBIABgBIADgBIgDAGQgCAEgCACQgCABgCAAIgFAAg");
	this.shape_103.setTransform(1,-22.2,1.706,1.706);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DFCD88").s().p("AgIgHIAFgBIADgBIAAgBIABgDIACgDIABABQADADABAFQABAGgBACIgCACIgBABIgBABIgEABIAAABIgCACIgBACIACACIAAABIAAAAIABABIgEAAIgCABIgCAAIAAgXgAgIgOIADACIgDABg");
	this.shape_104.setTransform(1,-23.9,1.706,1.706);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_105.setTransform(0.1,-26.8,1.706,1.706);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F8F3E4").s().p("AgGAcIgHAAIgFAAIgCAAIgEAAIgDAAIgBAAIAAgBIAAgDIAAgDIAAgHIAAgCIAFgBIAEAAIAAgDIAAgCIABACIACAAIACAAIAEgBIAFgCIABgCIABgDIgFAAIgFABIgDgBIgCAAIAAgBIgBgBIAAgCIAAgBIACgCIABgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAgDIAAgGIACgBIABAAIABgCIACgBIACAAIAAACIAAACIABADIABACIAAADIABgBIABgBIABABIABABIABACIAAACIAEgCIAAgEIAAAAIgBgBIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAAAAIAAgBIACAAIgCACIAAACIAAADIAAAFIAAAXIAAAAIAFAAQADAAACgBQADgCACgFIACgFQABgFgBgFQgBgFgDgEIACAAIAGABIAFgBIACAEIAAADIABADIAAADIgBAFIgCADQgDAHgFAGIADgBIACAAIgCACIABABIgBADIACAAIgBADIgCADIACgBIACAAIABgBIABAAIACAAQgEADgFACIgKABg");
	this.shape_106.setTransform(-0.4,-22.9,1.706,1.706);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D7D7D5").s().p("AAEACIADgCIABAAIACgBIADABIACAAIgCAAIgDAAIAAAAIgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIABABIABABIAAABQgEgBgBgDgAgLAAIAAgBIABgBIABgBIgBAAIAAgBIgDABIAAABIAAgBIACgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAAABIAAACIABgBIAAABIgBABIgDAAgAgOAAIAAAAIAAAAIAAgBIABABg");
	this.shape_107.setTransform(-2.2,-27.1,1.706,1.706);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAg");
	this.shape_108.setTransform(0,-27,1.706,1.706);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#252211").s().p("AgQAIIgBgDIgBgCIAAAAIABgBIAAgBIAAAAIABgBIACgBQADAAAEABIAAAFIgCACIgBABIgDAAIAAABIAAABIgDgCgAAMgCIgBAAIACgBIgCgCIAAgCIADgDIACAAIADADIgCADIgCACIgDAAgAAPgHIAAABIAAAAIAAgBgAAOgIIABAAIgBAAg");
	this.shape_109.setTransform(-2.4,-25.4,1.706,1.706);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D2B257").s().p("AgFABIABAAIADAAIABgBIABgCIgBgDIAAAAIACAAIACACIACABIgCACIgCACIgCABIAAABIgFABg");
	this.shape_110.setTransform(0.6,-26.3,1.706,1.706);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D2A83E").s().p("AgIACIAAgBIgBgBIgBAAIgCAAIABAAQACgCADABIAGABIAHAAIAGAAIgCACg");
	this.shape_111.setTransform(-0.3,-30.6,1.706,1.706);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DCDAD7").s().p("AgBAAIABAAIAAgBIAAAAIADABIgDACIgBgCg");
	this.shape_112.setTransform(3.4,-29,1.706,1.706);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#543E26").s().p("AAAACIAAgCIAAAAIAAAAIgBAAIgCAAIAAAAIAAAAIABgBIABgBIAFAAIgBACIgCAEIgBgCg");
	this.shape_113.setTransform(3.7,-29.9,1.706,1.706);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8C6228").s().p("AgBACQABgCABgDIABADIgCACIAAAAIAAABIgBgBg");
	this.shape_114.setTransform(2.5,-30.5,1.706,1.706);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AC8132").s().p("AAAAEIACgDIgEAAIgHAAIAFgBIAEAAIABAAIADAAIACgBIAEgDQgCACAAACIgBAAQgBACgDADIgDgBg");
	this.shape_115.setTransform(1.5,-30.9,1.706,1.706);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CBA94C").s().p("AAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgBACIgBADQAAgEABAAg");
	this.shape_116.setTransform(3.3,-31.7,1.706,1.706);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E6DED7").s().p("AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgBIAAgBIABgBIAAADIABAAIAAACIgCACIAAgDg");
	this.shape_117.setTransform(4.6,-27.4,1.706,1.706);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F3EBDB").s().p("AARAeIABgDIgCAAIABgDIgBgBIACgCIgCAAIgDABQAFgGADgHIACgFIABgEIgBgCIgBgDIAAgDIgCgEIgEABIgGgBIgCAAIgBAAIgCgCIgCgBIgCAAIgBAAIgBgBIgDAAIgCABIgBABIgDACQABADAEABIAAAEIgEACIAAgCIgBgCIgCgBIgBgBIAAABIgBABIgBgDIAAgCIgBgDIAAgCIAAgCIgCAAIgCABIgBACIgCAAIgBABIAAgBIABgBIAAgCIgBABIAAgBIAAgBQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCACIAAAAIgBABIAAACIgDAAIABgCIgBgBIAAgBIAAgHIAAgCIAAgCIAAgCIAIAAIABAAIAAAAIACAAIAJAAIATAAIADABIACABIACAAIABABIACAAIABABIgBACIgCACIADACIADgEIABABIADACQAEAEADAGQADAGAAAHIABABQAAAIgCAGIgEAJIgDAEIgEADIgBAAIgBAAIgBABIgCAAIgDABIADgDgAAWgTIAAABIgBABQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABIACACIACgBIAAgDIgBAAIAAgEIgEABg");
	this.shape_118.setTransform(0.4,-24.4,1.706,1.706);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B59544").s().p("AAAAAIABAAIAAAAIAAABIgBgBg");
	this.shape_119.setTransform(4.4,-29,1.706,1.706);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#927238").s().p("AAAAGIACgEIABgCIgFAAIgBAAIgBABIAAAAIAAgBIACgBIACgDIACAAIABgCIABACIABADIgBAGIgDACg");
	this.shape_120.setTransform(3.9,-30.3,1.706,1.706);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7A6A2A").s().p("AgQA5QgJgCgHgFQgHgEgGgHQgGgHgDgIQgEgJgBgLQgBgIADgJQACgKAGgIQAFgJAIgHQAIgFAJgEQAKgEAJABQAHAAAIABQAIADAIAEQAIAFAFAGQAHAHAEAIQAEAJABAKQABAHgBAJQgCANgIAKQgHALgLAHQgHAFgJACQgIACgIAAQgIAAgIgDgAgGg6QgJACgIADQgJAEgIAIQgIAIgEAKQgEAHgBAJQgCAHACAIQABAKAEAHQAEAJAGAHQAGAFAHAFQAGAEAHACQALADAKgBIANgCIAMgGQAHgEAGgGQAJgJAEgMQAEgNgBgKQAAgLgFgKQgFgKgIgHQgHgHgIgEQgIgEgJgCIgJAAIgGAAgAgegJIABAAIABABg");
	this.shape_121.setTransform(0,-24.2,1.706,1.706);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#988430").s().p("AgRA8QgKgDgJgHQgJgHgGgJQgFgIgDgJQgCgJAAgIQAAgJADgKQAEgKAGgJQAIgKAMgGQALgGANgBQAIgBAKADQAKACAIAFQAIAFAHAHQAGAHAEAJQAEAJABAKQABAHgCAKQgBAKgFAJQgFAIgIAHQgHAHgJAEQgJAEgKABIgHAAQgJAAgIgCgAgTg4QgJAEgIAGQgIAGgFAJQgGAIgCAKQgDAKABAIQABAKAEAJQADAIAGAHQAGAHAHAFQAHAEAJADQAIADAIAAQAIAAAIgCQAJgDAHgFQALgHAHgKQAIgLACgNQABgJgBgHQgBgKgEgJQgEgIgHgGQgFgHgIgFQgIgEgIgCQgIgCgHAAQgJAAgKADgAAoALIAAgDIgBgCIgCgGIAAgBIABABIABADIABAFIABAFIgBgCg");
	this.shape_122.setTransform(0,-24.2,1.706,1.706);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A17C34").s().p("AAAAKIAAgDIACgHIgBgBIgBgDIgBgDIgCgCIACgCQABAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIABACIABADIABAFQAAADgBACIAAAEIgCADIgBgCg");
	this.shape_123.setTransform(4.5,-30.7,1.706,1.706);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BA9F33").s().p("AArAoIgBgEIAAgEIAAgDIgBgDIAAgEIgBgFIgBgFIgBgDIgBgDQAAgGgDgFQgDgHgEgEIAAgBIABACIACgDIAAgEQABgCAAgEIgBgGIgBgDIgBgCQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgCACIgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABIgDACIgDADIgCAAIgDAAIgEAAIgDABIgIgBIAAgBQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgCgFIgEgDIgBgBIgBABIAAABIgBACIAAADIAAAGIgCAGIgJAAIAAACIAAACQgDADgCAEQgCAEAAAFIAAABIAAABIgCADIgBAFIAAACIACgBIAAAAIgCABIAAACIACgBIgBABIgBABIABAEQAAAGADAFQAAAEgCACIABACIAAABIAAACIgBACIAAAGIgDAFQgGgHgEgIQgEgIgBgKQgCgIACgJQABgHAEgHQAEgKAIgIQAIgHAJgFQAIgDAJgCQAHgBAIACQAJABAIAEQAIAEAHAHQAIAHAFAKQAFAKAAAJQABANgEAMQgEAMgJAJIAAgKgAgsALIAAABIABAAIAAgBIABAAIgBAAIgBAAgAgvAHIADAAIACgBIABAAIgGABg");
	this.shape_124.setTransform(0,-25.7,1.706,1.706);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B89844").s().p("AAAAIIAAgBIgBAAIgBgBIgCAAIABgBIgBAAIADgFIABgBIAAgDQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIADACIACADIgBACIgEAAIgBABIgBACIAAACIAAAAIAAABIAAABIABgBIABgBIgBACIACgBIgCACg");
	this.shape_125.setTransform(3.4,-31,1.706,1.706);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#CCCCCC").ss(0.6,1,1).p("AAABsIAAjX");
	this.shape_126.setTransform(0,16.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF9933").s().p("AD6BiQhKgEh0gCQisgDiVAKQgsACgqAEIBaiYQATggAygHQC8gkC4AhQA3AKATAgIBaCYQgggFhCgCg");
	this.shape_127.setTransform(0,-18);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#33CCFF").s().p("AjiC8QgeAAAAgkIAAlBIABgKQCVgJCsACQB0ACBKAEIABALIAAFBQAAAkgeAAgAhIg1QgNADAAAVIAAC7QAAAYARAAICWAAQANAAADgQIAAgIIAAi8QAAgXgRAAIiUAAIgFAAg");
	this.shape_128.setTransform(-0.5,9.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhKB2QgRAAAAgYIAAi7QAAgVANgDIAFAAICTAAQASAAAAAXIAAC8IgBAIQgDAQgNAAgAAABuIAAjXg");
	this.shape_129.setTransform(0,16.3);

	this.addChild(this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-34.9,69.6,63.7);


(lib.moon_icon = function() {
	this.initialize();

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6E6E6E").ss(0.6,1,1).p("AEJkIQBuBuAACaQAACbhuBuQhuBuibAAQiaAAhuhuQhuhuAAibQAAiaBuhuQBuhuCaAAQCbAABuBug");

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,0,1).p("AFGCzQiPhIgziWQgziYBIiQAlFizQCQBIAzCWQAzCYhJCQ");
	this.shape_1.setTransform(-0.2,0.1);

	// dark patches
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AAOEuQgagbAAgnQAAgoAagbIALgKQgRAYAAAfQAAAnAbAcQAcAbAnAAQAfAAAYgRIgKALQgbAcgoAAQgnAAgbgcgAjNDfQgRgRAAgYQAAgZARgRIAHgGQgLAPAAATQAAAZARARQARARAYAAQAUAAAPgLIgHAHQgRARgYAAQgYAAgRgRgACuCPQg2gfgQg8QgQg6Afg3QAgg2A8gQQAMgDAMgBQgrASgaArQgfA3AQA6QAQA9A3AfQArAZAvgGQgLAGgMADQgUAFgUAAQgnAAgkgVgAgrBCQgZgKgLgYQgLgZAJgYIAFgJQgEAUAIARQALAZAaAKQAZAKAXgLQAUgIAJgTIgDAKQgJAagZALQgLAGgMAAQgNAAgMgFgAkVA3QgagSgHgfQgGgeARgbIAJgJQgLAWAFAYQAHAeAaARQAbASAfgGQAagFAPgSQgCAGgEAFQgRAaggAHQgJACgIAAQgWAAgTgNgAgviiQggggAAguQAAgtAgggIAOgMQgVAcAAAkQAAAuAgAgQAeAgAuAAQAkAAAcgVIgMAOQggAggtAAQgsAAggggg");
	this.shape_2.setTransform(-0.3,-1.5);

	// base
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6E6E6E").ss(0.6,1,1).p("AEJkIQBuBuAACaQAACbhuBuQhuBuibAAQiaAAhuhuQhuhuAAibQAAiaBuhuQBuhuCaAAQCbAABuBug");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AkIEIQhuhtAAibQAAiaBuhuQBuhuCaAAQCbAABtBuQBvBuAACaQAACbhvBtQhtBvibAAQiaAAhuhvg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.4,-37.4,75,75);


(lib.mine_icon = function() {
	this.initialize();

	// coin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7C27C").s().p("AgDAFIADgEIAEgHQgBAGgEAHg");
	this.shape.setTransform(-1.5,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1A956").s().p("AgDACQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCACIgBAAIgCAAg");
	this.shape_1.setTransform(-5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5EDB6").s().p("AgHAAIAIgFIAHABIgFAEIgEADIgGADg");
	this.shape_2.setTransform(-3.2,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFA64C").s().p("AALgCQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHACIgKABQAHgDAOgCg");
	this.shape_3.setTransform(-5.3,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2BA6B").s().p("AguANIAHgCIAIgFQAEgEAEgBIALgBIALgCIAAAEIAOgFIAPgIQAHgEAFgBQAHgCAGAEQgZAOgaAHQgaAIgbACQABgCAEgCg");
	this.shape_4.setTransform(21.8,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CEB052").s().p("AgjgEQADAAACgDIADgFIAGAAIAGAAIANgFIACAFQACAHAHAEIAKAAIALAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIACABIgCAFQgEAEgBAFIgLAEQgZgJgbgNg");
	this.shape_5.setTransform(4.7,25.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2B159").s().p("AAcAnIgJgJIAXAAIACAIQAAAEgFABQgFAAgGgEgAgjgTQgEgKgEgNQADACADAEIAGAIIABgEIAHAEIAAAcQgHgHgFgMg");
	this.shape_6.setTransform(2.6,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5CB7A").s().p("AgpAdQAGgMADgLQADgKAAgLQgBgEACgGIAEgJQAAgCgCgCIgDgGQAIgLAAgRIAFAHQADANAEAJQAFAMAGAIIAAAMIAAALIABAEQABABAAAAQAAABABAAQABAAAAAAQABAAAAAAIAQAAIAPAAQgCADAAAGIABAJQAAAEACAGIADAKIgFAKIgGALIgGAAIgGAAIgDAEQgCADgDABQgegUgWgYg");
	this.shape_7.setTransform(0,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2A44D").s().p("AgVAXIgMAFIAGgKIAFgKIgDgIQgCgGAAgEIgBgJQAAgGACgDIAHAAIAJAJQAGAEAEAAQAEAAAAgFIgCgIIAgAAQgGAGAAAGIgIADQgDAKgGADIgFAAIgEAIIgDgBQgEgBgBACIgGALIgGAKg");
	this.shape_8.setTransform(6.5,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6D6D5").s().p("AgeAAIABgGQAEAFAGABQAGADAGABIASgEQAMgCAJACQgMAHgSAAQgNAAgTgHg");
	this.shape_9.setTransform(7.8,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DFC677").s().p("AAMAUIgGgBQgJgIgEgHIgHgKQgDgHgBgGIAKAJIAIAIIAFADIAGADIAIADIAAANIgHAAg");
	this.shape_10.setTransform(2.3,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EED88B").s().p("AgTAXIgDgMIgEgLIADgFIADgGIAEgBIAEgOIACACQAAAGAEAHIAGALQACAFAMAIIAGACIAGAAIgTAAIgSAAIgBAMg");
	this.shape_11.setTransform(1.6,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4A859").s().p("AAAACIgFgCQACgCADgBIAGgBIAAAJIgGgDg");
	this.shape_12.setTransform(3.6,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#927D49").s().p("AgIADIAIgFIAJgEIAAAJIgHABQgDABgCACIgFgEg");
	this.shape_13.setTransform(3.3,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#39331F").s().p("AADAGIgEgGIgJAAIABgDIAJgDQACgBADgCIADAAIACAJQABAGgCAEIgGgEg");
	this.shape_14.setTransform(2.9,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6342").s().p("AgCAgIgJgIIgDgDIgBgFIgBgHIgFgJQgEgEABgFIADgQIADgOIgBACIAAADQAAAFACADIAIANQAFAIAEAFIAAgFIAJAAIAGAFIAGADQACgDgBgFIgCgLIgDAAIAIgJIAAAjIgWgFQgKgCgKADQAIAEAMACIAWAFIAAAMIgKAFIgJAGIgIgIg");
	this.shape_15.setTransform(1.7,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DFDDD9").s().p("AgGAEIAAgXQAHADAGAHIgFATQgEADgCAHQAAgGgCgKg");
	this.shape_16.setTransform(5,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7E3DB").s().p("AgVAkIgKABIgCgJIAAgLIAAgNIAAgEIAAglIAAgCQACAKgBAHIAAAMIAEADIgBAGIgBAGQAoAPAWgRIACABQAAAFgDAGIgGAKIgVAGQgKADgHAGQgDgEgFAAg");
	this.shape_17.setTransform(7.7,6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECD592").s().p("AglAhIgBgCIAJgEQAFgCAEABQALACAJgCIgIgFIgBgEIgBgDIgIgIIAHgGIAFgHQAEgDAHgCIANgEIAGgGIAGgGIAJgEQgCASgGAOQgIARgOAJQgIAHgNAAIgZAAg");
	this.shape_18.setTransform(16.7,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BA9040").s().p("AgiA6QADgBADgFIAFgGIAIgGQAFgEACgDQACgEAGgGIAHgKIAIgKQAFgEgBgGIABgMIABgLQABgKADgGQADgDABgGIACgKQADAEABADIACARIACAQIABArQgZAbgeARQgFgDgHABQgFABgHAEIAFgHg");
	this.shape_19.setTransform(28.7,19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0CD81").s().p("AhuAyIALgEQABgFAFgFQADAAACACIAEAFQAEgBAGgEIAIgGIAEAFIAHgHIAHgGQAEgCAFgHQAGgGADgCQAEgCAIgCQAIgCADgBQACgCAFgBIAFgBIAFgEIAFgEIAHAAQAFAAACgCIAJgHIAJgIQAEgCADgGQAFgHACgCIAFgCIAFgCIAJgFQAFgEAEgBIAJABIAJABIACAFIABAFIgBAFQAAADABACQABADgBACIgIARIgJAQIAIAAQgCABgFAEIgIAFIgFAHQgDAFgDABIgFAHIgPAIIgQAHIAAgGIgLACIgLADQgEABgEAEIgIAFIgFACQgEACgCACIgWABQgoAAgmgLg");
	this.shape_20.setTransform(17.6,22.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8C173").s().p("AhbA/QgDgCgDAAIACgFIgCgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAABIgLAAIgKAAQgHgEgEgHIAHgKIAFgKQABgCAEAAIAFACIAEgJIAGAAQAFgFADgIIAIgCQABgHAFgFIBJAAQAUAAAUgGQAVgHAQgNQAGgEAHgIIAMgBQAHgCAEgEQADgDAFgCQAEgCAFAAQADABABADIAEAFQgEAHAAAKIgCALIAAALQAAAGgEAGIgIAIIgJAKQgGAGgCAFIgIAAIAJgQIAIgPQABgCgBgEQgBgCAAgDIABgFIgBgFIgDgEIgIgCIgJAAQgEAAgGAEIgJAGIgEABIgFACQgDACgEAHQgDAHgEACIgJAFIgJAIQgCACgFAAIgHgBIgFAEIgFAEIgGACQgEABgCACQgEADgIABQgHACgEADQgEACgFAGQgGAGgDACIgIAGIgHAHIgDgEIgJAGQgFADgEABIgEgEg");
	this.shape_21.setTransform(17.9,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0993A").s().p("AgMASQAJgQAEgTIAEACIAFgBIACAFIACAFQgCAHgFAHIgGACIgDADIgFAEIgDABIgCAAg");
	this.shape_22.setTransform(29.5,10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCA847").s().p("AgMAkQADACADgCIAEgEIAEgDIAGgDQAEgHACgIIgCgFIgBgGIgGACIgDgCQAGgYABggIAHAYIAEALQACAGAAAGQAAADAEAGQgCAEADAKIACAPIgBAMQgBgEgEgDIgCAKQAAAFgDAEIgEgGQgBgDgDAAQgFgBgEACQgDACgDAEQgEAEgHABIgMABQAIgHAIgOg");
	this.shape_23.setTransform(29.4,9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6DED7").s().p("AgCAHQgGgGgBgEIABgEIADgGIALgEQAFAKgGAJIAFAAIAAAJQgCAFgEACQgCgDgEgIg");
	this.shape_24.setTransform(25.8,-5.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DCDAD7").s().p("AgMAEIAHgGIAFgJIAAAAIANAIIABAAIAAABQgKAJgEAFIgMgIg");
	this.shape_25.setTransform(22.8,-9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B59544").s().p("AgFAAIAIgHIADAKIgDAEIgIgHg");
	this.shape_26.setTransform(25.4,-9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#543E26").s().p("AgFAJIAIgJIgFACIACgFIgIADQgFAAgDACIgDgCIADgDIAEgFQACgCACgBQANgEAPgBQgBAIgEAIIgJARIgLgIg");
	this.shape_27.setTransform(23.5,-11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8C6228").s().p("AgIANQAIgLAIgRIABAJIgKASIAEgDIgDAHIgIgDg");
	this.shape_28.setTransform(20.5,-12.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#927238").s().p("AACAcIgBgBIAJgQQAFgKAAgGQgPAAgMAFQgDAAgCABIgDAFIgEgDQAAgDAFgDIAIgHQADgFAHgEIAKgFQAEgBAAgGQAGAGADAFQAEAHgBAGQgCASgGANIgKAIg");
	this.shape_29.setTransform(24,-12.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A17C34").s().p("AAEAtIgDgLQAGgOACgTQABgEgEgHQgDgFgEgGQgCgGgFgGIgKgLQADgGAIgBQAHgBAFAEQAEAEADAHIAEANQADAQAAAIQABAOgCALIgDAOQgDAIgEAFIgEgHg");
	this.shape_30.setTransform(25.6,-13.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CBA94C").s().p("AgCgDQAGgFAGgJQAAAGgCADIgIAMIgJAOQAAgPAHgGg");
	this.shape_31.setTransform(22.5,-15.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B89844").s().p("AAAAlIgFgEIgHgBIgBgDIgIgCIADgHIgGADIAMgUIABgCIAJgMIAHgOQADgDgBgGIAAgCIAKAKQAFAGADAGQgBAGgDABIgMAGQgHACgCAEIgHAHQgFAEAAAEIADADIgDAEIADADQADgDAFgBIAGgDIgCAHIAHgCIgKAJg");
	this.shape_32.setTransform(22.8,-14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#988430").s().p("AhPECQgtgOgmgdQgmgdgagoQgVghgLgmQgLgnAAglQAAgtAQgrQAPgrAcgjQAigrAxgaQAxgbA2gFQApgEArAKQAqAKAlAWQAjAVAbAfQAcAfARAlQARAmAFArQAFAogJAqQgIAqgVAmQgWAlgfAdQgfAdgoASQgoASgqAEIgdACQgpAAgmgMgAgEkEQgqAAgpAPQgoAOghAaQgjAbgXAlQgZAlgKAqQgKAqADApQAEAsARAnQAPAjAZAdQAZAdAfAVQAfAVAkALQAkALAlAAQAkABAlgKQAlgLAggUQAvgdAfgvQAfguAJg2QAHgogFgnQgGgpgRglQgRgjgbgdQgagdgigUQgfgSgjgJQgggIghAAIgFAAgACuAvQAAgFgDgGIgDgLIgIgZIAAgMQACAEABAIIAEAPIAHAVQAEAMgBAJQgDgGAAgEg");
	this.shape_33.setTransform(14.2,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D2B257").s().p("AgbAEIAAAAIAIgBIAIAAQAGgDAFgDQADgFAEgGIgKgJIAGgBIAJABQAEABAEADIAIAHIgIAKIgHAIQgDAFgHADIgJAFQgLAFgKABg");
	this.shape_34.setTransform(15.7,-2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DFCD88").s().p("AgmggQAKgBALgGIALgEQAGgEACgEIAHgKIAIgKIACACQAMAQAFAVQAEATgCAVIgIAEIgGAGIgGAGIgOAEQgGACgEADIgGAIIgGAHIAIAIIABADIABAEIAHAFQgJACgLgCQgEgBgFACIgIAEIAAhpgAgmg4IAAgJQAEAFAIAEIgMAAg");
	this.shape_35.setTransform(16.8,3.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#71694F").s().p("AAAAAIABAAIAAAAIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_36.setTransform(14.5,-3.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#696148").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBAAIAAABIAAAAg");
	this.shape_37.setTransform(14.3,-4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4ECB4").s().p("AgQApIgDgLIgDAPIgCgWIAFgDIAFgCIAGgCIAAAIIABAIIADAHIAEAGIgDAEIgJADQgCgDgCgIgAgBANQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgKIABgLQgDAGgEAJQgBACgCACIgFACIgIAEIABgKIAJgBIgKABIAEgTQADgLAFgIIAIgIIgBALIAJgKQAHgHAGgCIACATIAGABIgCADIgKAHQgGAFgBAEQgDAHgBAHIgBAOIgCgDg");
	this.shape_38.setTransform(-1.5,1.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DFC57C").s().p("AgKACIgFgCIAJgDQAFgDADACQADABAEgBIAHgBIAAALQgQgFgKABg");
	this.shape_39.setTransform(2.6,-1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3E19D").s().p("AAAA+QgCgEgDgCIgFgGQgMgWgDgYIACgNIADAJQACAIADADIAJgDIABACQAFgIAAgFIgEAHIgDgEIgEgHIgBgIIAAgIIgGACIABgCIABAAIAEgGIgGgBIgCAAIAFgCQADgCAAgCQAEgLADgGIAAALIgBAMQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIABgOQAAgJACgHQACgEAGgFIAJgHIAIAGQgHAAgFADQgGAFAAAGIgEARIgDAQQAAAFADAGIAGAIIABAGIABAGIgDAOIgFABIgDAGIgCAGIADAMIADAMIgCAEIgEgIg");
	this.shape_40.setTransform(-1.1,5.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#252211").s().p("AhIAiIgIgOQgCgDAAgFIAAgCIAAgCIABgEQAAgEAGgFQAFgDAHAAQALgBAQAFIAAABIAAAXIAAABIgIAJQgDACgEACIgJACIgCALQgFgFgFgIgAAvgQIAAgCIABAAIAMAAQgJgFgDgEIAAgJQAHgBAGgJIAKABIABAAIALAJQgDAGgFAFQgFAFgHADIgIAAIgHABgAA/giQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACgBIAAgCIgBAAIgCABgAA+gmIABgBIABgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIAAADg");
	this.shape_41.setTransform(8,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCFCF4").s().p("AgDAGIAAgMIADADQADABABACIgEAHIgDgBg");
	this.shape_42.setTransform(0.6,-5.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4EFC8").s().p("AgSAKQAEgHACgGQAFgCAEgGIAGgJIAAAOIAGABIAKgBIAAACIgPAAIgBAGQgEADgGAGIgLAKIAAgLg");
	this.shape_43.setTransform(-0.1,-4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8F3E4").s().p("AArB7IhHAAIggAAIgXAAIgHAAIgQAAIgPAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBIgBgFIgBgMIAAgMIAAgcIACgNIAUAAIATAAIAAgNIAAgLIADAJIAJgBQAGAAADAEQAGgGANgDIAVgGIAFgKQAEgGgBgFIgCgBQgIgCgMADIgUAFQgGgBgGgDQgHgDgEgDIACgGIgEgDIAAgMQACgHAGgEIAEgVQgFgGgJgEIAAAAIAAgOIAAgYIAAgCIAHgCIAGgCIAFgFQADgEADgBIALgEIgBALIgCAKIAFAKIAFALIABAMIAFgCIACgIIAFAFIAFAEIADAJIADAJQAIgGAIgCIABgRIAAgCIgFgEQgDgDAAgDQgBgIAIgHIAEABQACgBAAgEIAJAAQgGAJgFABIAAAJIAAAJIAAACIAAAVIAABpIAAADIAXAAQAPAAAJgHQANgJAIgSQAHgPABgRQACgWgEgTQgFgVgMgQIAMgBIAWADQANABAJgCQAGAEACAJIABAQQAAAEADAJQADAIAAAFQAAAJgEALIgJARQgOAfgTAcIAKgEIAKgEIgKAMIAEADIgDAMIAJAAQABAHgGAHIgKAMIAIgDIAJgBQACAAAEgCIAFgDIAGADQgQAMgVAHQgTAHgTAAIgDgBg");
	this.shape_44.setTransform(13,6.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E5C66B").s().p("AgHAOIACgDIgGgBIgCgRIABgIIANAAIABAAQAEAHAFADIADACIgGAHQgFAFgBAEIgHADg");
	this.shape_45.setTransform(1.6,-2.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E6BD62").s().p("AgFAEIAFgHIgCgDQACABAEgDQAFgEACAAIAAAWIgHACQgEABAAgBQgFgCgFADQABgEAEgFg");
	this.shape_46.setTransform(3.1,-2.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#242110").s().p("AAAAzQgNgCgIgEQAKgDALACIAVAGIAAAGIgVgFgAAGgtQgFgDgBgGIABAAQAAAFAEABQADABAGgBIgGgHIAOABIgBABIAAACQgCAAgFAEQgEACgDAAIgBAAg");
	this.shape_47.setTransform(2.1,0.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#938357").s().p("AgBACQgEAAAAgEIAFAAIAGAEIgFABIgCgBg");
	this.shape_48.setTransform(2.9,-4.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A78E32").s().p("AgOAfQADgVAHgOQAFgUAOgMIAAAIQgQATgGAdQgBAGgGALIAAgGg");
	this.shape_49.setTransform(-1.3,-6.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F5F2E6").s().p("AgHABQABgCADgDQADgDACgBIADACIADADIgFACIgDABIAAAJIgGAAIgBgIg");
	this.shape_50.setTransform(3,-5.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D7D7D5").s().p("AASALQAEgFAJgGIAHgDQAEgEAEAAQAFgBAFACIAKAEIgJAAIgKAAQAAACgDAAIgEAAQgIAHAAAIQAAADADACIAGAEIAAADQgRgFgGgLgAg2gCIABgIIAEgDIAEgCIgCgDIgDgCQgFABgDADQgDADgBAEIABAIIgDAAIgBAAIAAgCQABgIADgFQAEgHAGgCQAHgCAHAHIgEAEQgCADACACIAHgDIgCAHIgEAGIgOgBg");
	this.shape_51.setTransform(8.4,-4.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EBCC73").s().p("AgOAgQAGgMABgGQAGgcAQgUIAAAeIgIAIQgEAFgDACQgCAJgEAGIgIAIg");
	this.shape_52.setTransform(-1.3,-5.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3EBDB").s().p("ABLCCQAGgHgCgHIgJAAIADgMIgEgDIAKgMIgKAEIgKAEQAUgcAOgfIAIgTQAEgLAAgIQABgEgDgIQgDgJAAgEIgCgQQgCgJgFgEQgKACgNgBIgWgDIgMABIgCgDIgHgGQgEgEgFgBIgIgBIgIABIAAAAIgKgFQgFgBgFAAQgEABgEADIgHAGQgJAGgEAFQAGALARAEIgBARQgJACgHAGIgDgJIgDgJIgFgEIgFgFIgCAIIgFACIgCgMIgEgLIgFgKIABgKIABgLIgKAEQgDABgDAEIgGAFIgGACIgGACIAAgCIAEgGIACgHIgHAEQgCgDACgDIAEgEQgHgHgHADQgGACgEAGQgDAGgBAHIgLABIAEgIQgBgDgDgCIgFgCIAAgeIAAgIIAAgJIACgJIAkAAIACAAIAEAAIAHAAIAnAAIBXAAQAIAAAGACIALADIAHACIABADIAHABIAHAEIgGAJIgIAIIANAIQAGgFAJgLIAAgBIAFAEIAKAIQAVATAMAbQALAaACAdIAAANQAAAggHAaQgFAVgKAQQgIANgIAIQgHAHgGAFIgGgDIgGADQgDACgDAAIgIABIgJADIALgMgABjhZIgDAFIgBAFQABAFAGAHQAGAHACAEQAEgCACgFIAAgJIgFAAQAGgMgFgJIgNAEg");
	this.shape_53.setTransform(15.2,2.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DCBA5A").s().p("AgSAHIAJgHIAJgGIAIABQAEAAACACQADACABACIABAGg");
	this.shape_54.setTransform(7.2,-12.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B58634").s().p("AgFAaIgEgFQgCgEAAgGIABgLQAAgFgCgIIgFgPQAJAFAHAJQAEAKADAIQACAJAKAKIAAAEQgOgFgEAHIgFgDg");
	this.shape_55.setTransform(8.1,-16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A78F33").s().p("AgGAkQAFgLABgPQACgKAAgOIAAgLQAAgGACgEQgBAIACAOQACANgBAHQAAAHgEAIIgGAOg");
	this.shape_56.setTransform(4.7,-15.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C79C3B").s().p("AgPAoQAJgLAFgQQACgNAAgOQAAgGgBgFIgIgKIAEgEIAEACIAEAPQADAJgBAGIAAAJQAAAGACAEIADAFIAFADIgGAEIgKAHIgIAJg");
	this.shape_57.setTransform(6.2,-15.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DFC068").s().p("AgKAmIAIgOQACgIAAgHQABgHgBgNQgBgOABgIIAAgEIAHAKQAEAFAAAGQAAAPgFAMQgFAQgHALg");
	this.shape_58.setTransform(5.3,-15.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D2A83E").s().p("AgmALIgCgGQgBgEgCgBQgDgBgEAAIgHgBIAGgEQAGgHAOAEIAiAHIAcAAQARgBAKACQgGAGgDAGg");
	this.shape_59.setTransform(13.2,-12.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AC8132").s().p("AACAVQADgGAHgIQgLgCgPAAIgbAAQAHgCAMgBIAUgCIAIABQAGABAEgBQAGgCAIgIQAIgKAEgCQgGAHAAAOIgBACIgBgHQgJARgJAKQgGgBgIAAg");
	this.shape_60.setTransform(17.9,-13.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BA9F33").s().p("AC3CrIgBgQIgCgQIABgMIgCgPQgDgKABgFQABgJgEgNIgHgUIgEgPQgBgKgCgFQgCgbgLgaQgMgbgVgTIAEgFIAEAHQAEgEACgIIADgPQADgLgBgOQgBgKgDgPIgDgNQgDgIgFgDQgGgEgHABQgJABgDAGIAAACQgGAJgIAFQgFADgIAJQgIAJgGADQgDABgHgBIgKgBIgUACQgLABgGADIgkgHIAAgDQgKgKgDgJQgCgLgHgJQgGgJgKgFIgFgCIgEAEIgBAEQgCAEAAAGIgBAKQAAAPgCAMQgCAOgFALIgkAAIgCAJIAAAJQgOAMgHAUQgHAQgDAVIAAAGIAAADQgFAIgDAJIgEAVIAKgBIgJABIgBAKIAIgEIACAAIgKAFIAAAIIAFgDIAGgCIgBABIgFACIgFAEIACAVQAEAYAMAWQAAARgIALIADAFQACADAAACIgEAJQgCAGABAEQAAALgDAMQgDAKgGANQgcgdgRgkQgSgkgGgoQgFgkAGgmQAFgjAQghQATgqAighQAhggAqgTQAhgPAmgFQAjgFAlAGQAmAGAjARQAkASAbAaQAjAhAUArQAVAsADAtQAFA2gTA0QgTA0glAmIgCgtgAi+AwIgEACQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIADgBIADgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIgBgBIgBAAgAjOAhIAJgBIAJgDQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQgPADgHAEg");
	this.shape_61.setTransform(14.2,-0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7A6A2A").s().p("AgDEFQglAAgkgLQgkgLgfgVQgfgVgZgdQgZgdgPgjQgRgngEgsQgDgpAKgqQAKgqAZglQAXglAjgbQAhgaAogOQApgPAqAAQAigBAkAJQAjAJAfASQAiAUAaAdQAbAdARAjQARAlAGApQAFAngHAoQgJA2gfAuQgfAvgvAdQggAUglALQghAJgjAAIgFAAgAggj9QgmAFghAPQgqATghAhQgiAhgTApQgQAhgFAmQgGAkAFAkQAGAnASAkQARAlAcAcQAWAYAgAUQAaAPAcAJQAwAPAygEQAbgCAcgJQAagIAZgPQAfgRAagbQAlgnATg0QATg0gFg0QgDgvgVgrQgUgsgjggQgbgbgkgRQgjgSgmgGQgUgDgUAAQgPAAgRACgAh6AFIgBAFIgCAGgAirAAIAAAAIgGACgAiQgZIAAADIgDAOIADgRgAiFgtIACACIAFADg");
	this.shape_62.setTransform(14.2,3.1);

	// blade
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCCCCC").s().p("AimgfIAVgcIgHgIQgJgIAJgNQALgSAOgOIADgDIAAgBIAEgEQAOgNASgLQANgJAJAIIAHAIIAcgVQCAhbDAgfQicBEh5BiIgZAXIACACQAIAIgGAKQgMATgPAQIgEAEIAAAAIgEADQgQAQgTANQgKAFgIgIIgCgCIgWAZQhjB4hECdQAfjABbiAg");
	this.shape_63.setTransform(-11.3,-8.6);

	// pole
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#996666").s().p("AEFE1Io5o5QgEgEAGgMQALgWATgIQAMgGAEAEII5I6QAFAEgJAIIgfAfQgGAGgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_64.setTransform(3.5,6.2);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.3,-37.6,81.7,75);


(lib.fechar_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(10,1,1).p("ACCiBIiCCBICCCCAiBCCICBiCIiBiB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0000").ss(10,1,1).p("ACfhbIifBbIBcCfAieBcICehcIhbie");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC0000").ss(10,1,1).p("AB9hHIh9BHIBIB9Ah8BIIB8hIIhHh8");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-12.9,26,26);


(lib.food_red_icon = function() {
	this.initialize();

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AC1EzIgBgBQgGgGgHgEIgbgPIgCADIgCAEQgBADgDABQgDABgEgBQgFgEACgGIAEgKIgGgDQgLgJgDgJQgEgKAIgNQAGgKAHAEQAGAFgFAJQgEAGAEAFQABAFAIAEIABACIAFgLQAGgKAHAEQAHAEgHALIgFAKIAOAJIAPAIQAKAGAFAEQAFAEgDAGQgCADgEACIgBAAIgFgBgAC1D5QgMgHgFgNQgGgOAIgOQAGgLANgBQALgCALAHQAMAHAGALQAFAOgHAMQgGALgLADIgIABQgIAAgJgEgAC0DRQgEAHADAIQAEAGAHADQAHAEAFgCQAEgBADgEQACgEgBgFQgBgHgGgDQgJgHgGAAQgFAAgDAFgADXC+QgMgGgGgMQgGgPAJgPQAGgKAMgBQALgCAMAGQAMAIAFAMQAGANgIANQgGAKgKADIgHABQgJAAgJgFgADVCXQgDAHADAIQAEAGAGAEQAHAEAFgCQAFgCACgDQADgFgBgFQgCgHgGgDQgJgGgGAAQgFAAgDAEgAD3CEQgOgJgFgNQgEgNAIgOIAEgGQADgDAEgCIgZgQQgGgEAEgHQACgDACAAQAEgBADACIAXAOQAPALAIAEQATALAIACIABABQADACABADIgCAHQgCADgFABQAAAFgCAEIgDAIQgHAMgMAEIgIABQgIAAgJgEgAD7BVIgGAGQgEAIACAGQACAHAJAGQAGADAHgCQAHgCADgFQADgFAAgDIgBgHIgBgCIgTgMQgFAAgDACgAkWjAQgFgEgEgHIgOgfIgDgIQgBgDACgCQACgEAEAAQAGgCADAGIAEAIIACAHIAGAPIADggQAAgIAHgCQAGgCAFAIIAHAPIAHAPIAAgmQAAgFAGgCIAGABQADABABAEIAAABIgBAtQAAAGgDAHQgCAEgEABQgIACgIgNQgDgFgFgOIgBAEIgDAYIgCAFQgBAFgFACIAAAAQgDAAgEgEgADSjEQgFgBAAgGIAAgNIADgLIABgEIABgEIABgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgGgCgGAEIgJAIQgFATgDADQgDAEgEgBQgDgBgCgCQgCgDABgDIABgCIAFgOQACgLAHgYIABgBIACgIIABgFIABgGQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAQACgCADABQAGABAAAGIgCAKIgCAKIgEAKQAFgCAFgBQAFAAAFABQAJACADAGQACAFgCAHIgDANIgCALIAAALIgBACQgBACgCACIgEABIgCgBgAjIjZQgKgFgEgOQgEgNAFgMQAFgOAQgEQAMgDAJAHQAIAHAEAMQADAOgEAMQgFAMgOADIgIABQgGAAgHgDgAi9kIQgHACgCAIQgCAGACAHQABAHAGADQAEADAEgCQAFgBADgEQADgGgCgHQgEgRgIAAIgDABgACGjYQgMgDgFgJQgHgJADgLQADgKAKgJQAMgLALADQAFACAHAFQAIAGgCAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAQgCACgDgBQgCAAgDgEQgCgDgGgCQgEgBgHAHQgHAGgCAGQgBAFADAEQADAEAGACIAKAAIAHgBQADAAABADQACACgBADQgBAEgKACIgJABIgFgBgABdjiQgEgBgBgFQgIABgHgCQgHgCgEgEQgFgGABgGQACgOACgKIAGgPQACgGAGACQADABACACQACADgBACIgDAIIgDAHIgCANQgCAFABAEIACACIACAAIAOACIACgJIACgJIAGgSQACgGAHACQADABABACQACADgBADIgGASIgDAKIgCALIgBADIgBADQAAADgDACIgDABIgDgBgAiGjnQgFgEgDgHIgOgfIgDgHQgBgDACgDQACgDADgBQAGgCADAGIAEAIIADAIIAGAOIACggQAAgIAHgCQAGgCAFAIIAHAPIAIAPIgBgmQAAgFAGgBQADgBADABQAEABABAEIAAACIgCAsIgCANQgCAEgFABQgHACgIgNQgEgFgFgOIgBAEIgDAZIgBAEQgCAFgFACIgBAAQgCAAgEgEgAAVj3QgHgCgFgDQgHgFABgGQACgFAGACIAHADIAGAEQAKACABgEQABgDgGgFQgKgHgCgDQgGgHACgIQADgKAMgBQAHAAAOADQAFABACADQADADgCAFQgCAJgFgBQgGgCABgEIgEgCQgNgDgBADQAAACAGAGIAMAKQAGAIgCAHQgCAJgKACIgGABIgLgCg");
	this.shape.setTransform(2.6,2.3);

	// dog
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DDB000").ss(0.6,1,1).p("AhjALQgpgZggghQAlgNAcgBQACgBABAAQAFAAAEAAQgHgGgTgPQA2gHAqAYQAJgFAKgDQANgGASgDQAWgEATAJQAxgNAngUQAOAAADAHQAGAagJASIgGADQAIAHgIARQgPAQgWARQgZAMgEAWQAAACAAACQgBACAAACIgBAPQgBAQgCANQgCAMgDAKQgBACAAACABfgLQgBgGALgJIA5gfAgZhCQgNAIgNAJQgSgMgagBAgMAxQAJAMAQgD");
	this.shape_1.setTransform(-6.3,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAjBwQhngUgfhUQgpgZggghQAlgNAcgBIADgBIAJAAIgagVQA2gHAqAYQAJgFAKgDQANgGASgDQAWgEATAJQAxgNAngUQAOAAADAHQAGAagJASIgGADQAIAHgIARQgPAQgWARQgZAMgEAWIAAAEIgBAEIgBAPIgDAdIgFAWIgBAEIgDAFQgCABgHAAQgMAAgagDgAAHA4IAFgBIABAAIgBAAIgFABIAAAAIgBAAQgKAAgGgIIgBAAIAAgBIgBgBIABABIAAABIABAAQAGAIAKAAIABAAIAAAAgABfgOIAAgBQAAgGAKgIIA5gfIg5AfQgKAIAAAGIAAABgAgzg0QANgJANgIQgNAIgNAJQgSgMgagBQAaABASAMgABVBtIAAAAgABWBpIAFgWIgDARIgDAJIABgEg");
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


(lib.food_blue_icon = function() {
	this.initialize();

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22FFBB").s().p("ABgFCQgGgEgFgIQgFgIgNgZIgEgJQgBgEABgEQADgCAEgCQAGgCAEAHQADADACAFIAEAJIAIAQIAAglQAAgKAHgCQAHgDAGAJIAKARIAJARIgDgsQgBgGAHgCQAEgBADACQAEABABADIABACQACAdgBAXQABAGgDAIQgCAGgFAAQgJADgKgOIgLgVIAAAFIgCAdQAAADgCACQgBAFgFACIgBAAQgDAAgEgEgAiaE7QgDgCAAgEIgHgDIgGgFQgIgHgCgLQgBgLAIgJQAJgLAMAAQAMgCAKAJIAFAFIADAFIAQgRQAGgEADAEQADACAAADQAAACgCACQgFAHgLAKIgPAQQgNAOgEAGIgBABQgBACgDAAIgFgCgAiWEJQgGABgHAGQgDAEAAAGQABAGAEAEIAFADIAHABIACgBIAMgOIAAgHQAAgDgDgCQgFgEgEAAIgDAAgAC3EhQgMgGgGgPQgFgOAFgOQAFgRASgGQANgFALAIQAKAIAEAOQAFAPgEANQgEAPgQAFQgFACgFAAQgHAAgHgDgADADrQgHACgCAJQgCAIADAIQACAIAGADQAFACAEgCQAGgBADgGQADgGgCgIQgFgSgKAAIgEABgAECEMQgGgEgFgIQgFgIgNgZIgEgJQgBgEABgEQADgDAEgBQAGgCAEAHQADACACAGIAEAIIAIARIAAglQAAgKAHgCQAIgDAFAJIAKARIAJARIgDgsQgBgGAHgCQAEgBADACQAEABABADIABACQACAdgBAXQABAGgDAIQgCAGgFAAQgIADgLgOIgLgVIAAAFIgCAdIgBAEQgCAGgFACIgBAAQgDAAgEgEgAjXEGQgHgGgBgJQgBgLAIgJQAHgJALgCQAOgEAKALQAIAGgBAKQgBAKgIAJQgHAIgLACIgGABQgIAAgHgHgAjDDmQgGACgEAFQgEAEAAAFQABAEACACQAEADAEABQAFgBAFgFQAMgLgHgGQgDgEgEAAIgFABgAkBDiQgHgIgBgJQgBgKAIgKQAHgIALgDQANgCALAJQAIAGgBALQgBAJgHAJQgIAJgLACIgFABQgJAAgHgGgAjtDBQgGABgEAFQgFAFABAFQABAEADACQADADAEAAQAFAAAFgEQALgNgHgGQgCgDgEAAIgFABgAkyC9IgCgEQAAgDACgCIAAgCIALgJIARgTIgDgDIgCgBQgDgDABgCQgBgDACgCQADgEAFADIAIAFIAEgEQAJgHAHgCQAJgCAKAJQAHAHgEAFQgFAEgGgFQgFgFgGACQgDABgFAFIgBABIAHAGQAIAGgEAFQgFAGgIgIIgIgGIgKALIgJAKQgGAIgEADIgEACQgDAAgDgDgAkhhoIgFgHIgJgRIgFgGIgEgIQgCgEgBgEQAAgFADgBQADgCADABQADABABACIACAEQADgMAGgEQAHgEAGAEQABgEADgDQADgDAEgDQAJgFAJAHIAIALIASAXQACACgBAEQgBACgDACQgFADgEgEIgJgMIgKgOQgGgHgCABQgBAAgCAFIgDAHIAJAOIAKAPQACADgBACQgBADgDACQgCABgDgBQgDAAgBgDIgKgPIgKgPIgEgEQgDAGgCAKIAAACIAJAOIABAEIACADQACADgCACIgDAFIgEABIgEgCgAjSiUQgHAAgEgFQgJgLgFgJIgGgPQgCgFAGgDQACgCADABQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIADAHIADAHIAHAKIAGAIIADgBIACgBQAFgCAFgGIgEgIIgFgHIgJgRQgCgGAGgDIAFgBQADAAABADIAJARIAGAJIAFAJIABADIADACQABADgBADQgBADgDABQgEACgDgCQgFAGgGAEQgGAEgFAAIgCgBgADpifQgFgCAAgEQgFABgFgBIgKgEQgNgGgGgNQgFgNAHgOQAHgQAOgHQANgFAPAGIAIAFQAEACACADIAOgbQAEgHAHADQAEACABACQABAEgCAEQgDAJgKARIgNAaIgMAeIAAABQgCAEgEABIgGgBgADajdQgHACgFALQgCAGACAIQAEAGAFADIAIADIAIgCIACgBIAKgWQAAgFgCgEQgCgDgFgCQgEgCgEAAQgFAAgDACgAikiyQgKgCgGgKQgFgJABgOQAAgPAKgGQAFgDAIgBQAKgBACAFQABABAAAEQgBADgCABIgGABQgEgBgGADQgEACAAAJQABAKACAEQADAFAFABQAFABAFgDQADgCADgFIAEgGQADgBADABQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQACAEgGAIQgFAHgEADQgIAFgIAAIgFgBgACKjHQgKgFgFgMQgFgNAFgNQAGgOANgIQAPgIARAIQAMAFACANQADAMgHANQgGAOgMAHQgHAEgHAAQgHAAgHgDgACWj3QgGAEgEAIQgDAHACAGQADAEAEACQAFADAGgCQAGgDADgGQAKgTgLgGIgFgBQgFAAgFADgAh0jKQgDgBgCgCIAAgEIgHgMIgSgfIgBgBIgDgIIgDgEIgDgDQgCgDABgDQACgDACgBQAEgDAFAEIAFAIIAGAKIAFAJQABgGADgDIAHgHQAIgFAGADQAFACAEAGIAHALIAGAJIAHAIIABACIABAFQgBADgDABQgFADgDgEIgJgJIgGgLIgCgDIgCgDIgDgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgFADgBAHQgBAEAAAIQAKASAAAEQABAFgFACIgDABIgCAAgABJjlQgLgEgFgMQgFgNAFgNQAFgPAOgHQAPgJARAIQAMAFACAOQADAMgGAMQgGAOgMAHQgHAEgIAAQgGAAgHgDgABVkUQgHAEgDAIQgEAHADAGQACAEAEACQAGADAEgCQAHgDAEgGQAKgTgMgGIgFgBQgEAAgFADgAgLjnQgZgKAFgJQABgEADAAQAEgCADACIAHAFIAJAFQAHAEAHgFQAGgCAHgMQgFABgFAAQgEAAgFgCQgKgFgFgMQgDgLAFgNQAIgQANgGQAPgFASAHQAFACADAEQAEADABAFQAIADgEAIIgGAMQgJAOgHAPQgKATgKAGQgGAEgIAAQgHAAgKgFgAATkzQgIAEgFAJQgDAIACAEQABAFAFADQAFACAHgEQAHgDAEgGIAKgQIgCgEIgFgDQgFgCgEAAQgFAAgEADg");
	this.shape.setTransform(-0.1,0);

	// dog
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DDB000").ss(0.6,1,1).p("AhjALQgpgZggghQAlgNAcgBQACgBABAAQAFAAAEAAQgHgGgTgPQA2gHAqAYQAJgFAKgDQANgGASgDQAWgEATAJQAxgNAngUQAOAAADAHQAGAagJASIgGADQAIAHgIARQgPAQgWARQgZAMgEAWQAAACAAACQgBACAAACIgBAPQgBAQgCANQgCAMgDAKQgBACAAACABfgLQgBgGALgJIA5gfAgZhCQgNAIgNAJQgSgMgagBAgMAxQAJAMAQgD");
	this.shape_1.setTransform(-6.3,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAjBwQhngUgfhUQgpgZggghQAlgNAcgBIADgBIAJAAIgagVQA2gHAqAYQAJgFAKgDQANgGASgDQAWgEATAJQAxgNAngUQAOAAADAHQAGAagJASIgGADQAIAHgIARQgPAQgWARQgZAMgEAWIAAAEIgBAEIgBAPIgDAdIgFAWIgBAEIgDAFQgCABgHAAQgMAAgagDgAAHA4IAFgBIABAAIgBAAIgFABIAAAAIgBAAQgKAAgGgIIgBAAIAAgBIgBgBIABABIAAABIABAAQAGAIAKAAIABAAIAAAAgABfgOIAAgBQAAgGAKgIIA5gfIg5AfQgKAIAAAGIAAABgAgzg0QANgJANgIQgNAIgNAJQgSgMgagBQAaABASAMgABVBtIAAAAgABWBpIAFgWIgDARIgDAJIABgEg");
	this.shape_2.setTransform(-6.3,14.2);

	// circle
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22FFBB").s().p("AgVDbQhMgFg+hAQg3g3AGhaIADgaQAQhuA1gzQA1g0BgAXQBhAXA6A8QA3A4gSBNIgBAIQgYBUhABAQg7A6hDAAIgLAAgAhkh+QgpAcgZBeIgDAJQgSBWAyA3QA0A5BDAGQBAAFA8g4QA8g5AVhJQAEgMABgLQAGg3g4gkQhCgshEgLQgTgEgSAAQgqAAgdATg");
	this.shape_3.setTransform(0.7,4.3);

	// base
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399FF").s().p("AkzFmQgxiegBiWIC9AAIi9AAQgCjSBcjFQgFALBSAHQBTAHCxgJQCfgHAwgIIAAGWIhKAAQAHg5g6gmQhFgthGgMQhEgMgrAcQgqAdgaBfIgCAMQgTBYAzA4QA2A7BEAHQBCAFA+g7QA/g6AVhMQAEgLABgLIBKAAIAAmWIALgBQByIThIC4QnkgYiZAYg");

	// base red
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3366FF").s().p("AlFFkQgxidgBiXIC9AAQgTBZAzA4QA2A6BEAHQBCAFA+g7QA/g6AVhMQAEgLABgLQAHg5g6gmQhFgshEgMQhGgNgrAdQgqAcgaBfIgCAMIi9AAQgCjSBcjFIgBgCIIhAAIAAGZIhKAAIBKAAIAAmZIohAAIgkg1QE7AbE4gNIgjApQByIThIC4IBAApQl7gQlzAigAkelpg");
	this.shape_5.setTransform(1.8,0.1);

	// food
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6600").s().p("AhaCmIAAgfIANAAIAAAAQgEgDABgDQgJAEgKgFQgLgEAMgKIAEgDIgEgCQgFgEAEgHQAFgIAKABQABgCACgDIABgBQgHgEALgJIAEgDIgEgCQgFgEAEgHQAEgIALABQAAgCACgDIgHgCQgLgEAMgKIAEgDIgEgCQgFgEAEgHQAFgIAKABQABgCACgDIABAAQgHgDAJgIIgJACIgBACQgMANgTgGIgBAAQgNALgPgHQgKgEAMgIIAEgDIgEgCQgEgDABgDQgJAEgKgFQgLgEAMgKIAEgDIgEgCIgCgDQgCgDADgFQAFgIAKABQABgCACgDIABgBQgHgEALgJIAEgDIgEgCQgFgEAEgHQAEgIALABQAAgCADgDQAIgIAPAKQADgDAHgBQgFgEAKgJQATgNAKAJQACADABACIAAAAQABgDAGgFIAEgDIgEgCQgFgEAEgHQAEgIALABQAAgCADgDQAHgJASANIAEAEQAGgEAJAFQAEgFAIABQABgCACgDQAJgJAQAMQAEgHAKACQAAgDADgCQAJgKASAOQAJAIgEAFQAPACgGAKQgJALgNgBIABADIAHAEQAKAJgFAEQAQADgHAJQgEAFgFADQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAQADgHAJQgGAJgKABIgEADIAHAFQAEADABADIkMAAIEMAAQACAEgCADQAPACgGAKQgLAOgSgGQgEAFgGABQgBACgDACIgCAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAQABgHAJQgEAFgEADIAGAEQAKAJgFAEQAQADgHAJQgLAPgTgHIgCAAIgCABQAIAEgFAHQgJALgNgBQADAEgDADQAQADgHAJQgEAFgEADIAGAEQAKAJgFAEQAQADgHAJQgLAPgTgHIgCAAQgMAMgPgHQgKgEAKgIIgIgCIgBgBQgLALgLgEQgFACgFAAIgBACQgIAKgKAAIAAAPg");
	this.shape_6.setTransform(10.3,9.2);

	// circle base
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFEFDF").s().p("AgcC3QhFgHg2g7Qgzg3AThXIFzAAQgBALgDALQgWBKg+A6Qg5A2g9AAIgKAAgAC8gZIlzAAIADgMQAZhhArgdQAqgcBGAMQBFAMBEAtQA6AmgHA7gAi3gZg");
	this.shape_7.setTransform(1.5,7.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-41.4,75.4,83.1);


(lib.confirm_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBNQgDgDAAgGIAAhuIAAgMIAAgLQAAgGAEgDQAEgEAGgBQADAAADACIATgDIARgBQALABARAEQAVAGAAAHQAAAGgEAEQgEAEgFAAIgFgBQgNgEgSAAIgOAAIgPADIAAAgQANgDAKAAQASAAANACQANABAAALQAAAHgEABQgEAEgGAAIgPgBIgPAAQgHgBgQAFIAAA9QAAAGgEADQgFAEgFAAQgGAAgEgEgAHIBAIgGgYQgFgSgFgeIgPAnIgFASIgIASQgFAIgJABQgKgBgEgKIgGgSQgIgagGgZIgMAtIgEAWQgEAOgKAAQgHAAgEgEQgDgEAAgGQAAgPAHgXIAKgkIAGgeQAFgUAFgHQAFgIAIABQAIgBAFAKQAEAIAEAbQAEAZAJAcQALgcAKgiIAFgXQAFgOALAAQALAAAFAQQACAHADASQAFAnAJAeIAJAhQAAAFgFAFQgEADgGAAQgKAAgFgPgAjCBLQgEgEAAgGIABgMIABgMIAAgRIAAgSIAAgQIAAgTIgBgRIgCgSQAAgFAFgFQAFgFAHAAQAHAAAJANQAsA/ArAmIAAgOIgBhAIgBgKIgBgLQAAgNAPAAQAPAAAAAxIAAAQIAAA7IgCAPQgCANgMAAQgHAAgJgHQglgjgwg7IAAAeIAAAWIABAYQAAAdgPgBQgHAAgEgDgAlTA8QgVgRAAgdQAAgfAUgbQAYgfAjAAQAiAAARAQQARAPAAAgQAAAfgTAbQgWAfgjAAQgdAAgVgRgAk+gcQgPAVAAAVQAAAQANALQAMAKATgBQAVAAAOgUQAOgUAAgWQAAgVgKgIQgIgHgXAAQgWAAgPAUgADGBGQgEgEAAgFIAAgVIAAgXIAAhMQAAgHAEgFQAFgHAJABIAYACQAOABAJAGQAqAUAAAfQAAANgJAIQgIAKgSAHQAaAOANAPQAEAEAAAFQAAAGgFADQgEAEgFAAQgGAAgEgEQgegcgjgKIABAfQAAAFgEAEQgEAFgGAAQgFAAgEgFgADdAAIAEAAQAYAAALgDQAFgDAFgEQAEgFAAgCQAAgKgOgLQgNgJgPgBIgLgBgABTBGQgEgDAAgGQAAgFAEgEQAEgEAGAAIATgBIAAgsQAAgZACgYIgWAAQgFAAgEgDQgEgEAAgGQAAgFADgEQAEgEAFAAIAdgBQATAAAdAEQALACAAALQAAAHgEADQgEADgEAAIgagCIgBAtIgBAsIAbAAQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGgBIgRABIgRAAIgUACIgTACQgGAAgEgFgAnWA6QgPgQAAgVQAAgfAdgiQAYgcAZgBIAIAAIAGABQAFgDAGAAQAKgBACALQACAJAAALQAAAFgDADQgEAGgHAAQgJAAgEgJQgCgFgCgBIgIAAQgMAAgQATQgXAaAAAWQAAAKAIAJQAHAHAKAAQAJAAAKgFIAPgKQAIgFAEAAQAGAAAEAFQADAEAAAFQAAAFgFAEQgaAYgcAAQgWAAgPgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape,p:{scaleX:1.162,scaleY:1.162}}]},1).to({state:[{t:this.shape,p:{scaleX:0.792,scaleY:0.792}}]},1).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1}}]},1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(5,1,1).p("ALIi/I2PAAQgeAAAAAeIAAFDQAAAeAeAAIWPAAQAeAAAAgeIAAlDQAAgegeAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArHDAQgeAAAAgeIAAlDQAAgeAeAAIWPAAQAeAAAAAeIAAFDQAAAegeAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(5,1,1).p("AM7jeI51AAQgjAAAAAiIAAF5QAAAiAjAAIZ1AAQAjAAAAgiIAAl5QAAgigjAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("As6DfQgjAAAAgjIAAl4QAAgiAjAAIZ1AAQAjAAAAAiIAAF4QAAAjgjAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9900").ss(5,1,1).p("AI0iXIxnAAQgYAAAAAYIAAD/QAAAYAYAAIRnAAQAYAAAAgYIAAj/QAAgYgYAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AozCYQgXAAAAgYIAAj/QAAgYAXAAIRnAAQAXAAAAAYIAAD/QAAAYgXAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-19.2,148.5,38.5);


(lib.bed_icon = function() {
	this.initialize();

	// Top Blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AjVFAQh4hBggiPQgfiQBPiDQBPiDCrgsQCngtB9AuQB9AuAUC3QAVC1hSB3QhSB3ihAkQg7AOg0AAQhcAAhMgpgAgzktQiVAng0BfQg1BfAJBGQAJBDAWAdIAPASQAVAVAmAYQBQA0BvgZQBxgZBFgyQBEgyAOghQArhlgNhXQgOhXhcgtQgxgZhCAAQg5AAhDASg");

	// Pillow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DDDDDD").ss(0.3,1,0,3).p("ABjAxQgnAjg5AYAhigmQAsgpBAgc");
	this.shape_1.setTransform(-13.6,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglB2QhNgygIhVQgOghAagPQAxgrA9gVQAYgPAPAZQBAA3AUBZQAPAagaAPQgoA3hHAJQgHAFgIAAQgOAAgJgRgAAABsQA4gYAngjQgnAjg4AYgAhlgmQAsgpBAgcQhAAcgsApg");
	this.shape_2.setTransform(-13.3,5.6);

	// Bottom Blue
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008FBF").s().p("AjGCaQgmgZgUgUQgCiMBahaQBZhaChAfQCjAfANCrQgOAhhFAyQhFAyhuAaQglAIghAAQhGAAg2gjg");
	this.shape_3.setTransform(0.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A8DF").s().p("AkIDGQgWgdgJhFQgKhGA1hdQA1hfCVgnQCTgnBcAuQBcAtANBXQAOBVgrBnQgNisijgeQihgfhZBaQhaBXACCOIgPgSg");
	this.shape_4.setTransform(0,-10.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.4,-36.1,75,72.3);


(lib.arrow_nav = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3,1,1).p("AhlAAQAAADABADQABAGAOAUQAlAzA8AyQArAiAfhQQAQgpAAgsQAAgBAAgBQAAAAAAgBQAAgsgQgpQgfhQgrAiQg8AyglAzQgOAUgBAGQgBADAAAC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAMCFQg8gyglgzQgOgUgBgGQgBgDAAgDIAAAAQAAgCABgDQABgGAOgUQAlgzA8gyQArgiAfBQQAQAqAAArIAAABIAAACQAAArgQAqQgVA4gcAAQgMAAgNgKg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-14.3,20.5,28.7);


(lib.Tween36 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(17,0,1,1,0,0,0,-15.6,0);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(-16.8,0,1,1,0,0,0,15.7,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.2);


(lib.side_running_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Face
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(7.6,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.8},3).to({y:16.1},3).wait(1));

	// Left Ear
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(-1,-10.9,1,1,0,0,0,30.3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-11,y:-9.1},3).to({rotation:0,y:-10.8},3).wait(1));

	// Right Ear
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(-18.8,-6.3,1,1,0,0,0,22,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:22.1,rotation:-11.3,x:-18.6,y:-5.2},3).to({regX:22,rotation:0,x:-18.7,y:-6.2},3).wait(1));

	// tongue
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(55.5,32.7,1,1,0,0,0,-1.9,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-4.5,rotation:15,y:34.5},3).to({regY:-4.6,rotation:0,y:32.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-49.2,128.3,103.2);


(lib.resting_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Zzz
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5800").s().p("ABXDtIgWgGIgWgHIh1geIh3geQgRgFgJgLQgJgMAEgRQAFgTAXgWIAogfIB0hYQBCg0A4gdQgqgIgVgFIhngcIgIgCIgJgCQgPgEgIgMQgJgNAEgRQAKgjA0AOQASAFAjAMIAzAQIA8APIA8APQBNAVgJAhQgGAWgoAPIgpANQg1AVhRA9Ih7BjIgBABIBcAVQA4AMAhAJQAmAKAMAHQAdAPgFAXQgEARgPAHQgIADgIAAQgGAAgHgCg");
	this.shape.setTransform(70.3,-71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD5800").s().p("AhYDtIgXgGIgWgHIh3geIh3geQgRgFgIgLQgKgMAFgRQAFgTAXgWIAogfIBzhYQBFg0A3gdQgpgIgWgFIhogcIgJgCIgIgCQgPgEgJgMQgJgNAFgRQAJgjA1AOQASAFAjAMIA0AQIA9APIA8APQBLAVgKAhQgFAWgpAPIgnANQg0AVhSA9Ih8BjIgCABIBcAVQA6AMAiAJQAlAKAMAHQAdAPgFAXQgDARgQAHQgHADgIAAQgGAAgHgCgADnBlIgNgKIgLgKIhCguIhAgtQgKgHgCgJQgDgJAGgKQAIgKATgIIAggJIBcgbQA2gQApgDIgjgYIg5gqIgFgDIgEgDQgJgGgCgJQgCgLAGgJQAPgTAcAVQAKAHATAQIAbAXIAhAYIAhAXQArAfgOASQgJAMgcAAIgcgDQglAAhBATIhjAeIgCAAIA0AhIAyAkQAVAOAFAIQAOAQgIANQgHAJgLABQgJgBgIgFg");
	this.shape_1.setTransform(88.1,-71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD5800").s().p("AjuDtIgXgGIgWgHIh3geIh3geQgRgFgIgLQgKgMAFgRQAFgTAXgWIAogfIBzhYQBFg0A3gdQgpgIgWgFIhogcIgJgCIgIgCQgPgEgJgMQgJgNAFgRQAJgjA1AOQASAFAjAMIA0AQIA9APIA8APQBNAVgKAhQgFAWgpAPIgpANQg0AVhSA9Ih8BjIgCABIBcAVQA6AMAiAJQAlAKAMAHQAdAPgFAXQgDARgQAHQgHADgJAAQgGAAgGgCgABRBlIgNgKIgLgKIhAguIhAgtQgKgHgCgJQgDgJAGgKQAIgKATgIIAggJIBagbQA2gQApgDIgjgYIg5gqIgFgDIgEgDQgJgGgCgJQgCgLAGgJQAPgTAcAVQAKAHATAQIAbAXIAhAYIAhAXQArAfgOASQgJAMgcAAIgcgDQglAAhBATIhhAeIgCAAIAyAhIAyAkQAVAOAFAIQAOAQgIANQgHAJgLABQgJgBgIgFgAGXAyQgGgCgFgGIgHgJIgGgJIgmgrIgkgtQgFgHAAgHQgBgHAHgFQAHgGAPgCIAYAAIBGgCQApAAAdAEIgUgXIgggoIgDgDIgDgDQgEgGAAgHQAAgIAHgFQANgKAQAUIAQAVIAPAWIATAWIATAXQAXAegNAKQgIAGgTgFIgUgHQgagHgxABIhMADIgBAAIAeAiIAcAgQAMAOADAGQAHAOgJAIQgFAEgGAAIgDAAg");
	this.shape_2.setTransform(103.1,-71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape_1}]},17).to({state:[{t:this.shape_2}]},17).to({state:[]},17).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape_1}]},17).to({state:[{t:this.shape_2}]},17).wait(17));

	// Eyes
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("Ai4ACQgTgEAAgCQAAgCASAEQARACAZAAQAYAAASgDQAQgDAAACQAAACgPACQgRAFgYACIgJAAQgTAAgPgFgABpABQgUgEABgCQAAgCARAEQARADAYAAQAZgBASgDQARgDAAACQAAACgQADQgRAEgYACIgJAAQgTAAgOgFg");
	this.shape_3.setTransform(0,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(136));

	// Nose
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},32).to({y:38.5},22).to({startPosition:0},43).to({y:40},24).to({startPosition:0},14).wait(1));

	// Muzzle
	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.setTransform(0,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},32).to({y:42.1},22).to({startPosition:0},43).to({y:43.6},24).to({startPosition:0},14).wait(1));

	// Face
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AAFF3IgFAAIAAAAIgEAAQjOAFh4iiQh4ijAlh6QAlh7BGhgQBHhgDpAJIACAAIADAAQDpgJBHBgQBHBgAkB7QAmB6h5CjQh0CdjFAAIgNAAg");
	this.shape_4.setTransform(0.1,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(136));

	// Left Ear
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(17.1,-15.2,1,1,15,0,0,-15.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},32).to({rotation:0,y:-15},22).to({startPosition:0},43).to({rotation:15,y:-15.1},24).to({startPosition:0},14).wait(1));

	// Right Ear
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(-16.8,-15.2,1,1,-20.1,0,0,15.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},32).to({rotation:-5},22).to({startPosition:0},43).to({rotation:-20},24).to({startPosition:0},14).wait(1));

	// Bed
	this.instance_4 = new lib.bed_icon();
	this.instance_4.setTransform(1,24.4,2.189,2.189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-54.7,164.2,158.3);


(lib.nope_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eyes
	this.instance = new lib.Tween29("synched",0);
	this.instance.setTransform(0,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,x:-4.2},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:5.4},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:-4.2},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:5.4},6).to({startPosition:0},1).to({scaleX:1,x:0},6).wait(1));

	// Nose
	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9,x:-12.8},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:14},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:-12.8},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:14},6).to({startPosition:0},1).to({scaleX:1,x:0},6).wait(1));

	// Muzzle
	this.instance_2 = new lib.Tween22("synched",0);
	this.instance_2.setTransform(0,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0.2},6).to({startPosition:0},1).to({x:0},6).to({x:0.8},6).to({startPosition:0},1).to({x:0},6).to({x:0.2},6).to({startPosition:0},1).to({x:0},6).to({x:0.8},6).to({startPosition:0},1).to({x:0},6).wait(1));

	// Face
	this.instance_3 = new lib.Tween27("synched",0);
	this.instance_3.setTransform(0.1,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9,x:6.2},6).to({startPosition:0},1).to({scaleX:1,x:0.1},6).to({scaleX:0.9,x:-4.8},6).to({startPosition:0},1).to({scaleX:1,x:0.1},6).to({scaleX:0.9,x:6.2},6).to({startPosition:0},1).to({scaleX:1,x:0.1},6).to({scaleX:0.9,x:-4.8},6).to({startPosition:0},1).to({scaleX:1,x:0.1},6).wait(1));

	// Ears
	this.instance_4 = new lib.Tween36("synched",0);
	this.instance_4.setTransform(0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.9,x:7},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:-4.6},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:7},6).to({startPosition:0},1).to({scaleX:1,x:0},6).to({scaleX:0.9,x:-4.6},6).to({startPosition:0},1).to({scaleX:1,x:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-44.8,96.5,107.7);


(lib.idle_ears_tan = function(mode,startPosition,loop) {
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


(lib.eating_ears_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(17,0,1,1,0,0,0,-15.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.2},3).to({rotation:0},3).wait(1));

	// left
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(-16.8,0,1,1,0,0,0,15.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-9.5},3).to({rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.2);


(lib.dead_tan = function() {
	this.initialize();

	// Eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(3,1,1).p("ADGgpIgtArIg5g3ACZACIg0A1ADGAvIgtgtAjFAvIAtgtIA0A1AiYACIA5g3AjFgpIAtAr");
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


(lib.spend_coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween37("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-22.8,alpha:0},11).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2A44D").s().p("AgHAIIgEACIACgDIACgEIgBgDIgBgDIgBgDIABgDIADAAIAEADIACACQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgCgDIANAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgEABQgBAEgCAAIgCAAIgCADIAAgBIgCABIgBAEIgCADg");
	this.shape.setTransform(-2.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEB052").s().p("AgMAAIACgBIABgDIACAAIACAAIAFgCIAAACIADAEIAEAAIAEAAIABAAIABAAIgBABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABIgEACQgIgEgKgDg");
	this.shape_1.setTransform(-3.4,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2B159").s().p("AAKAOIgEgDIAJAAIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEgCgAgMgGIgDgJIADADIABACIABgBIACACIAAAJQgCgCgCgEg");
	this.shape_2.setTransform(-4.2,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5CB7A").s().p("AgPALIAEgJQABgCAAgFIABgDIABgDIAAgCIgCgCQADgEAAgHIACADIADAIQACAFAAADIAAAEIAAADIABABIABABIAGAAIAGAAIgBADIABAEIABADIABAEIgCAEIgDAEIgCAAIgCAAIgBACIgCABQgKgHgJgJg");
	this.shape_3.setTransform(-5.2,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_4.setTransform(-3.9,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DFC677").s().p("AAEAHIgCAAQgCgDgCgDIgDgCIgBgFIAEADIACADIABAAIADABIADABIAAAFIgDAAg");
	this.shape_5.setTransform(-4.3,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED88B").s().p("AgGAIIgBgEIgBgEIABgBIABgCIABAAIABgGIABABIABAFIACADQABACAEADIACAAIADAAIgIAAIgFAAIgBAFg");
	this.shape_6.setTransform(-4.6,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_7.setTransform(-5.8,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5EDB6").s().p("AgCAAIACgBIACAAIgBABIgBAAIgCACg");
	this.shape_8.setTransform(-6.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_9.setTransform(-7.1,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCABIgDAAIAHgBg");
	this.shape_10.setTransform(-7.2,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4ECB4").s().p("AgFAPIgCgEIAAAFIgBgHIACgCIABgBIADAAIAAADIABADIABACIAAACIAAACIgEABIgBgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgCABIgBABIgDABIAAgDIAAAAIABgGQABgEACgDIAEgDIgBAEIACgEQACgCADgBIABAHIACAAIgBACIgDACIgEAEIgBADIAAAGIAAgBg");
	this.shape_11.setTransform(-5.8,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3E19D").s().p("AAAAXIgBgDIgCgCQgEgIgBgJIAAgDIACACIABADIADAAIABAAQABgDAAAAIgBABIgBgBIgBgCIgBgDIAAgCIgCAAIAAAAIABAAIABgDIgCAAIAAAAIABgBIABgCIADgGIgBAFIAAADIABADIABABIAAgGIAAgGIADgDIADgCIAEABQgBABgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAABIgBABIAAAEIgBAGQgBAAAAABQAAABABAAQAAABAAAAQAAABABAAIABABIAAABIABACIAAACIgBAGIgBAAIgBACIgBACIABAFIABAEIgBACIgBgDg");
	this.shape_12.setTransform(-5.6,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_13.setTransform(-5.7,-3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#938357").s().p("AAAABQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_14.setTransform(-4.1,-2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5C66B").s().p("AgCAFIABgBIgCgBIgBgEIABgEIADABIAAAAIAEADIABABIgCABIgDAEIgBABg");
	this.shape_15.setTransform(-4.6,-2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4EFC8").s().p("AgFADIABgDQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgFgBIgBACQgBAAgCADIgEAEIABgFg");
	this.shape_16.setTransform(-5.3,-2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_17.setTransform(-4.9,-3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5F2E6").s().p("AgCAAIACAAIABgCIABABIABABIgCAAIgBAAIAAACIgBABIgBgDg");
	this.shape_18.setTransform(-4.1,-3.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#927D49").s().p("AgCABIACgBIADgCIAAADIgDAAIAAACIgCgCg");
	this.shape_19.setTransform(-4,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_20.setTransform(-2.3,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6342").s().p("AAAAMIgDgDIgBgBIAAgCIgBgCIAAgCIgCgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgGIABgFIAAgBIAAABIAAABIAAABIABADIADAFIACADIAAgBIADABIADAAIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgDIAAAMIgIgCQgCgBgEABIAGADIAIABIAAAFIgDACIgEACIgCgDg");
	this.shape_21.setTransform(-4.6,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39331F").s().p("AABABIgBgBIgCAAIAAAAIACgBIACgBIABAAIAAACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCgDg");
	this.shape_22.setTransform(-4.1,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7E3DB").s().p("AgHANIgDAAIgBgDIAAgEIAAgFIAAgBIAAgNIAAgBIAAAHIAAAEIACACIgBABIAAACQAOAFAIgGIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCADIgHACQgDABgDADIgDgCg");
	this.shape_23.setTransform(-2.3,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6BD62").s().p("AAAAEIgDAAIADgDIAAgBIAAgBIABgBIADgCIAAAHIgDABIgBAAg");
	this.shape_24.setTransform(-4.1,-2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DFC57C").s().p("AgCAAIgCAAIADAAIABgBIADABIADgBIAAADQgGgCgCAAg");
	this.shape_25.setTransform(-4.2,-1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_26.setTransform(-3.3,-0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#242110").s().p("AAAATIgHgCQAEgBADAAIAIADIAAABIgIgBgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAEAAIgDgDIAGABIAAABIAAAAIgDACIgDABIgCgEg");
	this.shape_27.setTransform(-4.4,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAIACgBIAAACIgCACIgFAAg");
	this.shape_28.setTransform(-2,-2.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_29.setTransform(0.2,-2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(0.1,-2.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#252211").s().p("AgaAMIgDgEIgBgEIAAAAIABgBIAAgBIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAAHACIAAAHIAAABIgDADIgDABIgDABIgBAEIgEgFgAARgFIAAgBIAFAAIgFgDIAAgEQADAAACgDIAEAAIAFADIgDAFIgFACIgCABIgEAAgAAXgMIAAABIABAAIAAgBIgBAAgAAWgOIABAAIAAAAIgBAAg");
	this.shape_31.setTransform(-2.2,-1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_32.setTransform(2.8,8.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQABgCABgCIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape_33.setTransform(5.4,5.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_34.setTransform(1.3,7.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D8C173").s().p("AghAXIgCgBIABgBIgCgBIgBgBIgDAAIgEAAIgEgEIACgDIACgEIACgBIACABIABgEIACABQACgCACgDIADAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAbAAQAGAAAIgDQAHgCAHgFIAEgEIAFgBIADgCIADgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABABIACABIABACQgCACABAEIgBAEIAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgEACIgDADQgDACAAACIgDAAIADgGIADgEIAAgCIAAgCIAAgCIAAgCIgBgBIgDgBIgEAAIgDACIgEACIgBAAIgCABIgCADIgDAEIgDAAIgEADIgDABIgCAAIgCABIgCACIgBAAIgCABIgEACIgFABIgDAEIgEADIgCACIgCACIgCgBIgDACIgDACg");
	this.shape_35.setTransform(1.4,6.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C0993A").s().p("AAAgGIABABIACAAIABACIABACIgDADIgCABIAAABIgCACIgCABIAEgNg");
	this.shape_36.setTransform(5.7,2.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIAEAAIAGAAIgCgCIgBgCIAAgBIgCgDIACgCIACgCIADgCIAEgBIADgCIACgDIADgBQgBAHgCAEQgDAGgFAEQgDACgDAAIgKAAg");
	this.shape_37.setTransform(1,1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D2B257").s().p("AgJABIADAAIADgBIADAAIACgFIgCgDIABAAIADAAIADACIADACIgDAEIgCACIgEADIgCACIgIACg");
	this.shape_38.setTransform(0.6,-1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DFCD88").s().p("AgNgLIAHgCIAFgCIABgDIADgEIADgEIABACQAEAFACAIQABAHAAAHIgDABIgDACIgCACIgFACIgCACIgDADIgCACIADAEIAAABIABABIACACIgHAAIgDAAIgDABIAAglgAgNgXIAEADIgEAAg");
	this.shape_39.setTransform(1,0.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8F3E4").s().p("AgKAuIgMAAIgIAAIgDAAIgGAAIgFAAIgCgCIAAgBIAAgEIAAgFIAAgLIAAgEIAIAAIAHAAIAAgGIAAgDIABADIADAAIADABQADgCAFgBIAHgDIACgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAIAAAAQgDgBgFABIgHACQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgBIAAgFQABgDADgBIABgIQgCgCgDgBIAAgGIAAgJIAAAAIACAAIADgBIACgCIACgCIAEgCIgBAFIAAADIACAEIABAEIABAFIACgCIAAgDIACACIACACIABAEIABACIAGgCIABgHIAAgBIgCgBIgCgCQAAgDADgDIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBAAIAAAEIAAADIAAABIAAAIIAAAlIAAACIAIAAQAGAAADgDQAFgDADgHQACgGABgEQAAgJgBgHQgCgIgEgFIAEgBIAIABQAFABADgBQADACAAACIABAHIABAEIABAFIgCAIIgDAFQgFALgHALIAEgCIADgBIgEAEIACABIgBAFIADAAQABACgCADIgEAEIADAAIADgBIACgBIACgBIADABQgHAEgHADQgIADgIAAg");
	this.shape_40.setTransform(-0.3,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_41.setTransform(4.3,-3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCA847").s().p("AgEAOIACgBIACgCIABgBIABgBIADgFIgBgCIgBgCIgCAAIAAAAQACgIAAgMIACAJIACAEIABAFIABACIABAFIABAFIgBAFIgBgDIgBAEIgBADIgCgCIgCgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgBABIgEACIgEABIAFgHg");
	this.shape_42.setTransform(5.7,2.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B59544").s().p("AgBAAIACgBIABABIgBACIgCgCg");
	this.shape_43.setTransform(4.2,-4.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DCDAD7").s().p("AgDABIACgBIABgDIAAAAIAEADIgEAEIgDgDg");
	this.shape_44.setTransform(3.2,-4.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#543E26").s().p("AgBADIACgDIgBAAIAAAAIgCAAIgDAAIgBAAIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_45.setTransform(3.5,-5.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_46.setTransform(2.3,-5.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#927238").s().p("AAAAKIADgHIACgEQgFAAgEABIgBAAIgCACIgBgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACgDIAEgDIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIADAFIACAEIgDALIgEACg");
	this.shape_47.setTransform(3.7,-5.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CBA94C").s().p("AAAAAQABgCACgEQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAGQgBgHADAAg");
	this.shape_48.setTransform(3.1,-6.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B89844").s().p("AAAANIgBgBIgCAAIgBgBIgDgBIABgDIgCACIAFgIIAAAAIADgEIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBIADAEIADAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACIgDACIgCACQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAACIAAABIAAABIADgBIACgBIgBACIACAAIgDACg");
	this.shape_49.setTransform(3.2,-6.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_50.setTransform(4.2,-6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AC8132").s().p("AAAAHIAEgFIgIgBIgLAAIAIgBIAHAAIACAAIAEAAIAFgCIAFgFQgDADABAEIgBAAIgBgBQgDAFgDAEIgGgBg");
	this.shape_51.setTransform(1.4,-6.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_52.setTransform(-2.5,-5.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_53.setTransform(-0.3,-5.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B58634").s().p("AgBAJIgBgBIgCgEIABgEIgBgEIgCgFQAEACACADIABAFQABAEAFADIAAACQgGgCgBACg");
	this.shape_54.setTransform(-2.2,-7.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DFC068").s().p("AgCAOIACgFIAAgGIAAgGIAAgIIAAgCIADAEIABAEQgBAFgBAEQgCAGgCAEg");
	this.shape_55.setTransform(-3.2,-6.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A78F33").s().p("AgBANIABgKIAAgIIAAgDIABgEIABAIIAAAGIgCAGIAAAFg");
	this.shape_56.setTransform(-3.4,-6.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C79C3B").s().p("AgFAOQAEgDABgGQAAgFAAgEIAAgFIgCgDIACgBIAAABIABAFIABAGIAAABIABAFIABABIACABIgCACIgEADIgCACg");
	this.shape_57.setTransform(-2.9,-7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A78E32").s().p("AgEALQABgHACgEQABgIAFgFIAAAEQgFAGgCAKIgCAGIAAgCg");
	this.shape_58.setTransform(-5.7,-3.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F3EBDB").s().p("AAcAwQABgDAAgCIgEAAIABgEIgBgCIAEgEIgEABIgDACQAHgLAFgLIADgHIACgHIgBgDIgBgFIgBgGQAAgDgDgCQgEABgEgBIgJgBIgDABIgBgBIgDgDIgEgCIgCAAIgDAAIgCgBIgEgBIgEACIgCACIgFAEQADAEAFACIAAAGIgGADIgBgDIgBgEIgCgBIgCgCIAAADIgCABIgBgFIgCgEIgCgEIABgDIAAgEIgDABIgCACIgDACIgCABIgCAAIAAAAIABgDIABgCIgCABQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBIABgCQgDgCgDABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgBAFIgFAAIACgDIgCgCIgCgBIAAgLIAAgDIAAgDIABgDIAOAAIABAAIAAAAIADAAIAPAAIAfAAIAFAAIAEACIADAAIABABIACABIADABIgDAEIgCADIAEADIAFgHIACACIAFADQAHAHAEAKQAEAJABALIABAEQAAAMgDAJIgGAOIgGAIIgEAEIgDgBIgCABIgCABIgEABIgDAAIAFgEgAAlggIgCACIgBACIAEAEIADAEQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgEIgBAAQACgEgCgDIgEABg");
	this.shape_59.setTransform(0.4,-0.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIAEgCIAAABIgCABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_60.setTransform(0,-1.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-10,20.1,20.1);


(lib.shop_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoA/QgWgSAAgcQAAggAVgbQAYgfAjAAQAiAAARAQQARAQAAAfQAAAfgTAbQgWAfgjAAQgdAAgVgQgAA9gZQgPAUAAAWQAAAQANAKQAMAKATAAQAVAAAOgVQANgUAAgWQABgVgKgIQgJgHgWAAQgWAAgPAVgAkFBEQgMgJAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAFAMAUAAQARAAAQgIQAQgHAAgJQAAgMgKgEQgIgDgVgBQgRAAgOgGQgRgGAAgPQAAgTAUgQQAUgQAYAAQAKAAAOAEQASAGAAAHQgBAFgDAEQgEAEgGAAIgOgCIgOgCQgNABgKAGQgMAGgBAHQAAADAFADQADACAHABIAZACQAWABAMAKQAOAKAAAVQAAAZgcANQgXAKgcAAQgZAAgOgLgAgSBKQgFgEAAgFIgBgVIAAgWIAAgKQgPABgXAEIglAHIgBAVIgBAVQgBAFgEADQgDAEgGAAQgGAAgEgEQgDgEAAgFIACgdIABgcIABgjIAAglQAAgFAFgEQADgEAGAAQAGAAAEAEQADAEAAAFIgBAXIAAAWIAAAJIgBAKIAlgHQAXgEAPAAIABgkQAAgIAFgJQAGgNAGAAQAGAAABAEQAFAEAAAFIAAADQgCAHgBAGIAAAIIgBAJIgBAbIgBAaIABAVIACAWQAAAFgDAEQgDAEgFAAQgHAAgDgEgAC1BIQgDgEAAgFIAAgbIACgrIACgtQAAgZAOABIAJgCIAOAAQAUAAAQAMQATAOAAAUQAAAZgUANQgSANgXAAIgJgBIAAAtQAAAFgEAEQgDAEgGAAQgGAAgEgEgADPgnIgBAiIAHABQAPAAAJgIQAMgHAAgNQgBgIgJgHQgKgGgMAAIgFAAIgFAAIAAAOg");
	this.shape.setTransform(0,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.shop_icon();
	this.instance.setTransform(0,0.2,1.078,1.077,0,0,0,0,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.29,scaleY:1.29,y:-0.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:0.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-34.2,75,68.6);


(lib.price_and_counter = function() {
	this.initialize();

	// price
	this.price = new cjs.Text("99", "bold 14px Comic Sans MS");
	this.price.textAlign = "right";
	this.price.lineHeight = 16;
	this.price.lineWidth = 41;
	this.price.setTransform(5.9,-65.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEB052").s().p("AgMgBIACgBIABgCIACAAIACAAIAFgBIAAABIADAEIAEAAIAEAAIABAAIABAAIgBACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIgEABQgIgDgKgEg");
	this.shape.setTransform(21,-48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_1.setTransform(27.3,-47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQABgCABgCIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape_2.setTransform(29.9,-50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_3.setTransform(25.8,-49.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA847").s().p("AgEANIADAAIABgCIAAAAIACgBIADgGIgBgCIgBgCIgCABIgBgBQADgIAAgMIADAJIABAEIABAEIABADIAAAFIABAGIAAADIgCgCIAAAEIgBADIgCgCIgCgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgBACIgEABIgEABIAFgIg");
	this.shape_4.setTransform(30.2,-54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0993A").s().p("AAAgFIABABIACgBIABACIABACIgDAEIgCABIAAAAIgCACIgCAAIAEgLg");
	this.shape_5.setTransform(30.2,-53.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8C173").s().p("AghAXIgCgBIABgBIgBgBIgBgBIgFAAIgDAAIgEgEIACgDIACgEIACgBIACABIABgEIADABQACgCABgDIADAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAbAAQAGAAAHgDQAIgCAHgFIAEgEIAFgBIADgCIAEgCQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABABIABABIACACQgBACgBAEIAAAEIAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgDACIgEADQgDACAAACIgDAAIADgGIADgEIAAgCIAAgCIAAgCIgBgCIAAgBIgDgBIgEAAIgDACIgDACIgCAAIgCABIgCADIgDAEIgEAAIgDADIgCABIgDAAIgCABIgCACIAAAAIgDABIgEACIgFABIgDAEIgDADIgDACIgDACIgBgBIgDACIgEACg");
	this.shape_6.setTransform(25.9,-50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2A44D").s().p("AgGAIIgGACIADgDIACgEIgBgDIgBgDIgBgDIABgDIADAAIADADIADACQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIgBgDIALAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgEABQgBAEgCAAIgCAAIgBADIgBgBIgCABIgCAEIgBADg");
	this.shape_7.setTransform(21.7,-49.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_8.setTransform(20.6,-54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#927D49").s().p("AgCAAIACAAIADgBIAAACIgDAAIAAABIgCgCg");
	this.shape_9.setTransform(20.5,-54.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_10.setTransform(22.1,-55.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7E3DB").s().p("AgHANIgDAAIgBgCIAAgFIAAgEIAAgCIAAgNIAAAAIAAAGIAAAEIACABIgBACIAAACQAOAGAIgHIAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgCAEIgHADQgDABgDABIgDgBg");
	this.shape_11.setTransform(22.1,-55.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_12.setTransform(21.1,-56.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(24.7,-58.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(24.6,-59.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIAEgBIAGAAIgCgCIgBgBIAAgBIgCgDIABgCIADgBIACgCIAGgCIACgCIACgDIADgBQAAAHgDAEQgDAGgFADQgDADgEAAIgJAAg");
	this.shape_15.setTransform(25.5,-54.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D2B257").s().p("AgJABIADAAIADAAIADgCIACgDIgDgEIACAAIADAAIADACIADACIgDAEIgCACIgEACIgDACIgHADg");
	this.shape_16.setTransform(25.1,-58.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DFCD88").s().p("AgNgLIAHgDIAFgCIABgCIADgEIADgEIABABQAEAGACAIQABAIAAAFIgDACIgDADIgCABIgFACIgCACIgDADIgCACIADADIAAACIABABIACACIgHAAIgDABIgDAAIAAglgAgNgXIAEADIgEABg");
	this.shape_17.setTransform(25.5,-56.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DCDAD7").s().p("AgEABIADgBIABgDIAAAAIAEADIgEAEIgEgDg");
	this.shape_18.setTransform(27.7,-60.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_19.setTransform(28.8,-59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B59544").s().p("AgBAAIACgCIABADIgBABIgCgCg");
	this.shape_20.setTransform(28.7,-61);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_21.setTransform(28.7,-62.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#543E26").s().p("AgBADIACgDIgBABIAAgBIgCAAIgDABIgBgBIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_22.setTransform(28,-61.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#927238").s().p("AAAAKIADgGIACgFQgFAAgEABIgCAAIgBACIgBgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACgCIAEgEIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAEAEIABAFIgDAKIgEAEg");
	this.shape_23.setTransform(28.2,-62.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_24.setTransform(26.8,-62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CBA94C").s().p("AAAgBQABgBACgDQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAFQgBgGADgBg");
	this.shape_25.setTransform(27.6,-63.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B89844").s().p("AAAAOIgBgCIgDgBIAAgBIgDAAIABgDIgCABIAEgHIABgBIADgDIABgFQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIAEADIADAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgFABIgDACIgCADQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIABABIgBACIABABIADgCIACgBIgBADIACgBIgDAEg");
	this.shape_26.setTransform(27.7,-62.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AC8132").s().p("AAAAIIAEgGIgIAAIgLAAIAIgBIAHgBIACAAIAEAAIAFgDIAEgEQgCADABAEIgBABIAAgCQgEAFgDAEIgGAAg");
	this.shape_27.setTransform(25.9,-62.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_28.setTransform(21.9,-62.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_29.setTransform(24.1,-62.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A78F33").s().p("AgBANIABgKIAAgHIAAgEIABgEIABAIIAAAHIgCAFIAAAFg");
	this.shape_30.setTransform(21,-63.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DFC068").s().p("AgDAOIADgFIAAgGIAAgGIAAgIIAAgCIADAEIABAEQgBAFgBAEQgCAGgCAEg");
	this.shape_31.setTransform(21.2,-63.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C79C3B").s().p("AgFAPQAEgFABgFQAAgFAAgFIAAgDIgCgEIACgCIAAABIABAGIABAGIAAABIABAEIABACIACABIgCACIgEACIgCAEg");
	this.shape_32.setTransform(21.5,-63.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B58634").s().p("AgBAJIgBgBIgBgEIAAgEIgBgEIgCgFQAEACACADIABAFQACAEADADIAAACQgFgCgBACg");
	this.shape_33.setTransform(22.3,-63.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8F3E4").s().p("AgKAtIgMAAIgIAAIgDAAIgGAAIgFAAIgCgBIAAgBIAAgFIAAgEIAAgKIAAgFIAIgBIAHAAIAAgEIAAgEIABADIADgBIADACQADgCAFgBIAHgDIACgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBgBIAAAAQgDAAgFABIgHABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgCIAAgEQABgCADgBIABgIQgCgDgDgBIAAgFIAAgJIAAgBIACAAIADgCIACgCIACgBIAEgBIgBADIAAAEIACAEIABAEIABAEIACgBIAAgCIACACIACABIABADIABAEIAGgEIABgFIAAgBIgCgCIgCgCQAAgDADgDIABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBABIAAADIAAAEIAAAAIAAAIIAAAlIAAABIAIAAQAGABADgDQAFgDADgHQACgFABgGQAAgHgBgIQgCgIgEgGIAEAAIAIABQAFABADgCQADACAAAEIABAFIABAGIABAEIgCAHIgDAGQgFALgHAKIAEgBIADgBIgEAEIACACIgBAEIADgBQABADgCADIgEAEIADgBIADgBIACAAIACgBIADABQgHAEgHADQgIADgIgBg");
	this.shape_34.setTransform(24.1,-55.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5CB7A").s().p("AgOALIADgJQACgCgBgFIAAgDIACgDIgBgCIgBgCQADgEAAgHIACADIADAIQABAFABADIAAAEIAAADIABABIACABIAFAAIAGAAIgBADIABAEIAAADIABAEIgBAEIgDAEIgCAAIgCAAIgCACIgBABQgKgHgIgJg");
	this.shape_35.setTransform(19.2,-50.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D2B159").s().p("AAKAOIgEgDIAJAAIABADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgEgCgAgMgGIgDgJIADADIABACIABgBIACACIAAAJQgDgCgBgEg");
	this.shape_36.setTransform(20.2,-51.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_37.setTransform(18.7,-55.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DFC677").s().p("AAEAHIgCAAQgCgDgCgDIgCgCIgBgFIADADIACADIACAAIACABIACABIAAAFIgCAAg");
	this.shape_38.setTransform(20.1,-54.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EED88B").s().p("AgGAIIgCgEIAAgEIAAgBIABgCIACgBIABgFIACABIABAFIABADQABACAEADIACAAIACAAIgHAAIgFABIgBAEg");
	this.shape_39.setTransform(19.8,-53.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#39331F").s().p("AABACIgBgCIgDAAIAAAAIADgBIACgCIABAAIAAADQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAIgCgBg");
	this.shape_40.setTransform(20.3,-56);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DFC57C").s().p("AgDAAIgBAAIACAAIADgBIACABIACgBIAAADQgFgCgDAAg");
	this.shape_41.setTransform(20.2,-58);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3E19D").s().p("AAAAXIgBgCIgCgDQgEgIgBgJIAAgDIABACIACAEIAEgBIAAABQABgEAAAAIAAABIgCgBIgBgBIgBgDIAAgEIgCABIAAgBIACgCIgCAAIgBAAIACgBIABgBIADgHIAAAEIAAAFIAAABIABABIAAgFIAAgGIADgDIAEgDIACADQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAABIgBABIgBAEIgBAGQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIACABIAAABIABACIAAACIgBAFIgCABIgBACIAAACIAAAFIACAEIgBABIgBgCg");
	this.shape_42.setTransform(18.8,-55.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6E6342").s().p("AAAAMIgDgEIgBgBIAAgCIgBgBIAAgCIgCgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgGIABgDIABgBIAAAAIgBABIAAAAIABADIADAGIACADIAAgBIADAAIADABIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgEIAAANIgIgCQgCgBgEABIAGACIAIACIAAAFIgDACIgEABIgCgCg");
	this.shape_43.setTransform(19.8,-55.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#252211").s().p("AgaANIgDgGIgBgDIAAAAIABgBIAAAAIAAgBQAAgBAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAFACIAAAHIAAAAIgCAEIgDACIgEAAIAAAEIgEgEgAASgFIAAAAIAEgBIgEgDIAAgDQACgBACgDIAEAAIAEAEIgCADIgFAEIgDAAIgCAAgAAXgMIAAABIABAAIAAgBIgBAAgAAWgNIABAAIAAgBIgBAAg");
	this.shape_44.setTransform(22.2,-57.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");
	this.shape_45.setTransform(24.5,-56.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F4ECB4").s().p("AgFAPIgCgEIAAAFIgBgHIACgCIABAAIABgBIAAAAIACAAIAAADIABADIAAACIABACIAAACIgDABIgCgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgBABIgCABIgDABIAAgDIAAAAIABgGQACgEACgDIACgDIAAAEIACgEQADgCACgBIABAHIACAAIgBACIgDACIgEAEIgBADIAAAGIAAgBg");
	this.shape_46.setTransform(18.7,-57);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6BD62").s().p("AAAAEIgDABIADgEIAAgBIAAgBIABgBIADgBIAAAHIgDABIgBgBg");
	this.shape_47.setTransform(20.4,-58.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5EDB6").s().p("AgBAAIABgBIACAAIgCABIAAAAIAAAAIAAABIgBABg");
	this.shape_48.setTransform(18,-56.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_49.setTransform(17.3,-56);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCAAIgDABIAHgBg");
	this.shape_50.setTransform(17.2,-56.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#938357").s().p("AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_51.setTransform(20.3,-59.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#242110").s().p("AAAATIgHgDQAEAAADAAIAHACIAAADIgHgCgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAEAAIgCgDIAFABIgBAAIAAABIgCABIgDABIgCgDg");
	this.shape_52.setTransform(20,-57.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E5C66B").s().p("AgCAFIABgBIgCgBIgBgEIABgEIADABIABAAIACADIACABIgCABIgDAEIgBABg");
	this.shape_53.setTransform(19.9,-58.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_54.setTransform(19.5,-59.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F5F2E6").s().p("AgCAAIACgBIABgBIABAAIABABIgCABIgBAAIAAACIgBABIgBgDg");
	this.shape_55.setTransform(20.3,-59.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIACgBIAAACIgCACIgFAAg");
	this.shape_56.setTransform(22.4,-59.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_57.setTransform(18.7,-59.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F4EFC8").s().p("AgGADIACgDQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgFgBIgBACQgBAAgCADIgEAEIAAgFg");
	this.shape_58.setTransform(19.2,-59.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A78E32").s().p("AgEAMQABgIACgFQABgHAFgEIAAACQgFAIgCAJIgCAHIAAgCg");
	this.shape_59.setTransform(18.7,-59.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIADgBIgBABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_60.setTransform(24.5,-57.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F3EBDB").s().p("AAcAwQABgDAAgCIgDAAIABgEIgCgCIAEgEIgDABIgFACQAIgLAFgLIADgHIABgHIAAgDIgBgFIgBgGQgBgDgCgCQgDABgFgBIgIgBIgFABIAAgBIgDgDIgEgCIgDAAIgCAAIgDgBIgDgBIgEACIgCACIgFAEQACAEAHACIgBAGIgGADIgBgDIgBgEIgCgBIgCgCIgBADIgBABIgBgFIgBgEIgDgEIABgDIABgEIgFABIgBACIgCACIgDABIgDAAIABAAIABgDIABgCIgDABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgCQgDgCgCABQgBAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgCAFIgDAAIABgDIgBgCIgDgBIAAgLIAAgDIAAgDIABgDIANAAIABAAIABAAIAEAAIAOAAIAfAAIAFAAIAEACIADAAIAAABIADABIADABIgDAEIgDADIAFADIAFgHIADACIADADQAIAHAEAKQAFAJAAALIABAEQgBAMgCAJIgGAOIgGAIIgEAEIgDgBIgCABIgCABIgDABIgEAAIAFgEgAAlggIgBACIgBACIADAEIACAEQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgEIgBAAQACgEgCgDIgEABg");
	this.shape_61.setTransform(24.9,-56.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");
	this.shape_62.setTransform(24.5,-56.4);

	// amount
	this.amount = new cjs.Text("99", "bold 14px Comic Sans MS");
	this.amount.textAlign = "center";
	this.amount.lineHeight = 16;
	this.amount.lineWidth = 19;
	this.amount.setTransform(-0.9,9.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF9900").ss(3,1,1).p("ACAiVIkAAAQgVAAAAAbIAAD1QAAAbAVAAIEAAAQAWAAAAgbIAAj1QAAgbgWAAg");
	this.shape_63.setTransform(0,19);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ah/CWQgWAAAAgbIAAj1QAAgbAWAAID/AAQAVAAABAbIAAD1QgBAbgVAAg");
	this.shape_64.setTransform(0,19);

	// arrows
	this.down = new lib.arrow_nav();
	this.down.setTransform(0,58.1,1,1,-89.9);
	new cjs.ButtonHelper(this.down, 0, 1, 1);

	this.up = new lib.arrow_nav();
	this.up.setTransform(0,-20,1,1,90);
	new cjs.ButtonHelper(this.up, 0, 1, 1);

	this.addChild(this.up,this.down,this.shape_64,this.shape_63,this.amount,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.price);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.5,-66.5,69.2,134.8);


(lib.moon_rolling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moon_icon();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},3).to({rotation:180},3).to({rotation:270.1},3).to({rotation:360},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-37.4,75,75);


(lib.moon_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJODHIACgfQACgqAAg0QAAgGAEgDQADgEAHAAQAFAAAFAEQADADAAAGQAAA0gCAsIgCAYQAXgBAkgKIAFgBQAFAAAFAEQADAEAAAFQAAAJgJAEQgMAFgYAEQgVADgPAAQgYAAABgVgAG8DHIADgfQACgqAAg0QAAgGAEgDQADgEAGAAQAGAAAFAEQADADAAAGQAAA0gCAsIgDAYQAYgBAkgKIAFgBQAFAAAFAEQADAEAAAFQAAAJgJAEQgMAFgYAEQgWADgOAAQgYAAAAgVgAotDMIgGgYQgFgRgFghIgOApIgGASIgIASQgFAJgJAAQgJAAgFgLIgGgSQgHgZgGgcIgNAwIgEAWQgDAOgLAAQgGAAgFgFQgDgEAAgFQAAgQAHgXIALgmIAFgeQAFgUAFgHQAFgHAIAAQAJAAAEAJQAEAIAEAbQAFAZAIAeQALgdAKgjIAGgXQAFgOAKAAQALAAAFARQACAGADASQAGAqAIAdIAJAhQAAAGgEAEQgFADgFAAQgLAAgFgPgAhXDXQgDgEAAgGIAAgMIABgMIAAgRIAAgRIAAgTIAAgSIgBgSIgBgRQAAgGAEgFQAGgEAGAAQAIAAAIAMQAtBAApAoIAAgPIgBhBIgBgLIgBgLQAAgNAOAAQAQAAAAAxIAAAQIgBA9IgCAQQgBAMgNAAQgHAAgJgHQgjgigwg9IAAAfIAAAXIABAXQAAAdgPAAQgGAAgFgEgAkLDJQgVgSAAgcQAAgiAUgbQAYgfAkAAQAhAAARAQQASAQgBAfQABAhgUAbQgWAfgjAAQgdAAgVgQgAj2BvQgOAUAAAYQAAAQAMAKQANAKASAAQAVAAAPgVQANgUAAgYQAAgVgKgIQgIgHgWAAQgXAAgPAVgAnNDJQgVgSgBgcQAAgiAVgbQAYgfAjAAQAiAAARAQQARAQAAAfQAAAhgTAbQgWAfgkAAQgcAAgVgQgAm4BvQgPAUAAAYQAAAQANAKQAMAKASAAQAVAAAPgVQAOgUAAgYQAAgVgKgIQgJgHgWAAQgWAAgPAVgABzDTQgGgFAAgFIAAhoIAAgNIAAgNQACgJAQgCQAHgCASAAQASAAARAMQATAOAAAUQAAAMgDAHQgEAHgIAHQAJAEAIAKQAIAKAAAKQAAANgOAMQgKAIgKADQgWAJgjAAQgGAAgEgFgACIC9QARgBATgFQASgFgBgGQABgHgLgGQgJgFgHgBIgbAAgACIB+IAOAAQAdgCABgUQAAgHgJgGQgKgHgJAAIgQAAgAFrDEQgEgMgFgPQgGACgRABIgYACIgPAgQgFAHgHAAQgGAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQAAgFAJgCQAOgYASgaQAXglAHAAQAKAAADANIAHAfIAPBBIAEAMQAEAJAAAEQAAAGgFAEQgEADgFAAQgIAAgIgSgAFCCWIANgCIAOgBIgHghIgUAkgAiYhOIACgfQACgqAAg0QABgGAEgDQADgEAGAAQAGAAAEAEQADADAAAGQAAA0gCAsIgCAYQAXgBAlgKIAEgBQAGAAAEAEQAEAEAAAFQAAAJgJAEQgMAFgYAEQgWADgOAAQgYAAAAgVgADMg+QgEgEgBgGQAAgFAVgjIgWghIgegxQgCgDgBgEQAAgGAFgEQAEgDAGAAQAGAAAFAGIAHAMIARAcIASAcIAVgtIAJgUQAEgJAJAAQAFAAAFADQAEAEAAAGQAAADgFAMIgVAsQgMAdgJAQIgQAeQgGAIgHAAQgGAAgEgDgABbhRQgEgMgFgPQgGACgRABIgYACIgPAgQgFAHgHAAQgFAAgDgDQgEgEAAgFQAAgFAMgdIgBgGQAAgFAKgCIAegyQAYglAHAAQAKAAADANIAHAfIAPBBIAEAMQAEAJAAAEQAAAGgFAEQgDADgGAAQgHAAgJgSgAAyh/IANgCIAOgBIgGghIgVAkgAkihDQgDgEgBgFIAAgbIACgtIADgtQAAgZANABIAJgCIAPAAQATAAARAMQATAOAAAUQgBAZgTAPQgSANgYAAIgJgBIAAAtQAAAFgDAEQgEAEgFAAQgHAAgDgEgAkIi0IgCAiIAHABQAPAAAKgIQALgHAAgNQAAgIgKgHQgKgGgLAAIgGAAIgEAAIAAAOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.moon_icon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-37.4,75,75);


(lib.stopMine_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkfDXIgGgYQgFgSgFggIgPApIgFASIgIARQgFAJgJAAQgKAAgEgLIgGgSQgIgZgGgbIgMAvIgEAWQgEAOgKAAQgHAAgEgEQgDgEAAgGQAAgPAHgXIAKgmIAGgeQAFgVAFgHQAFgHAIAAQAIAAAFAJQAEAJAEAaQAEAaAJAdQALgdAKgjIAFgWQAFgOALAAQALAAAFAQQACAHADASQAFApAJAeIAJAhQAAAFgFAEQgEAEgGAAQgKAAgFgPgACLDhQgEgEAAgFIAAgMIABgMIAAgRIABgSIgBgSIAAgTIgBgRIgBgSQAAgGAFgEQAFgFAGAAQAIAAAIANQAtA/ArAoIAAgPIgBhBIgBgKIgBgLQAAgOAOAAQAQAAAAAyIAAAPIgBA+IgCAPQgBANgNAAQgHAAgIgIQgmgigvg9IgBAfIABAXIAAAYQAAAcgOAAQgHAAgEgEgAiDDhQgEgEAAgFIAAgMIABgMIAAgRIABgSIgBgSIAAgTIgBgRIgBgSQAAgGAFgEQAFgFAGAAQAIAAAIANQAtA/ArAoIAAgPIgBhBIgBgKIgBgLQAAgOAOAAQAOAAAAAyIAAAPIgBA+IgCAPQgBANgLAAQgHAAgIgIQgmgigvg9IgBAfIABAXIAAAYQAAAcgOAAQgHAAgEgEgAExDXQgNgOAAgbQAAgZAMgbQANgaATgQQAOgMAPAAQAKAAAQAHQATAIAAAJQAAAGgEAEQgEAEgGAAQgDAAgKgFQgKgGgIAAQgJAAgPATQgVAbAAAhQAAAQAEAGQAFAGAPAAQAPAAALgJQAMgJAGgRQgXACgQAIIgGABQgHAAgEgFQgDgEAAgFQAAgPAjgGQAUgDAbAAQAGAAAEAEQADAEAAAFQAAAHgFAEQgHAdgUASQgVARgbAAQgaAAgNgNgAAYDdQgEgDAAgGQAAgFAEgEQAEgEAGAAIATgCIAAgsQAAgaACgYIgWAAQgFAAgEgEQgEgEAAgFQAAgGADgEQAEgDAFAAIAdgBQATAAAdAEQALACAAALQAAAHgEADQgEADgEAAIgagCIgBAvIgBAsIAbAAQAGAAAEAEQADAEAAAFQAAAGgDAEQgEADgGAAIgRABIgRAAIgUACIgTABQgGAAgEgEgAj2DdQgEgDAAgGQAAgFAEgEQAEgEAGAAIATgCIAAgsQAAgaACgYIgWAAQgFAAgEgEQgEgEAAgFQAAgGADgEQAEgDAFAAIAdgBQATAAAdAEQALACAAALQAAAHgEADQgEADgEAAIgagCIgBAvIgBAsIAbAAQAGAAAEAEQADAEAAAFQAAAGgDAEQgEADgGAAIgRABIgRAAIgUACIgTABQgGAAgEgEgAAdhWQgVgSAAgcQAAghAUgbQAYgfAjAAQAiAAARAPQARAQAAAfQAAAigTAbQgWAfgjAAQgdAAgVgRgAAyiwQgPAUAAAYQAAAQANAKQAMAKATAAQAVAAAOgVQAOgTAAgZQAAgUgKgIQgIgIgXAAQgWAAgPAVgAkBhQQgMgKAAgMQAAgGAEgEQADgEAHAAQAJAAAEAJQAFAMAUAAQARAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgVAAQgRgBgOgFQgSgJABgPQAAgTAUgQQAUgQAYAAQAKAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgOgCQgNAAgLAGQgMAGAAAHQAAAEAEACQAEADAHABIAZABQAVACANAKQAOAMAAAVQAAAZgdANQgWAKgcAAQgZAAgOgLgACrhNQgEgDAAgGIAAgbIACgtIACgtQAAgZAOABIAJgBIAPgBQATAAARANQASAOAAAUQAAAZgUAOQgRANgYAAIgJAAIAAAsQAAAGgEADQgDAEgGAAQgGAAgDgEgADFi9IgCAhIAHABQAPAAAKgHQALgIAAgMQAAgJgKgGQgKgGgMAAIgFAAIgEAAIAAAOgAhKhOQgFgEAAgFIABgFIAAgEIAAgNIgBgOQAAgNgCgXIgDgjIgFAAQgWAAgMgDQgLgDAAgKQAAgFADgEQAEgFAHABIAQABIAPACIASgBIASAAIAWABIAWABQAGAAADAEQADAEAAAFQAAAGgDAEQgDAEgGAAIgXgBIgYgBIACAnQADAZAAAPIAAAKIABAKQAAAHgDAGQgEAIgIAAQgFAAgEgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.mine_icon();
	this.instance.setTransform(-0.2,0,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:1.14,scaleY:1.14,y:0.1},0).wait(1).to({regY:-0.1,scaleX:0.87,scaleY:0.87,y:0},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-37.4,81.7,75);


(lib.startMine_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC0DfQgLgJAAgfIACgoIACgnIgBgKIgBgKQAAgPAOAAQAFAAADACIAVgEIAUgBQAYAAAQAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgQABIgSADIgBAmIAngDIAXgCQAGAAAEAEQAEAEAAAFQAAAMgMACIgXABIgrAEIAAAVQAAASACADQABABAMAAIASAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMADQgJABgfAAQggAAgKgJgAj6DfQgGABgDgEQgEgEABgGIAAgrIgFAAQgTABAAgNQABgNARgBIAGAAIAAg3QAAgFAEgFQAGgGAGAAQADAAANAHIASAIQAeALAUASQAXAWAAAdQAAARgIAPQgJAPgPAJQgPALgeAAQgUAAgOgJgAjrDJQAKAFAJAAQAVAAAJgGQAJgFAFgKQAFgJAAgLQAAgXgYgRQgMgHgggNIAAAkIALABIALABQAHAAADAEQAEADAAAGQAAAGgEAEQgDADgHAAIgLgBIgLgBIAAAigAAqDXQgOgNAAgbQAAgZANgbQAMgaATgRQAOgLAPAAQAKAAAQAHQATAIAAAJQAAAFgEAFQgEAEgFAAQgDAAgLgFQgJgHgJAAQgIABgPASQgWAcAAAhQAAAQAFAFQAEAHAPAAQAPAAALgJQANgJAFgRQgXACgQAHIgGABQgGABgEgFQgEgEAAgFQAAgPAjgGQAVgDAaAAQAGAAAEADQADAFABAFQgBAHgFAEQgHAdgUASQgVARgbAAQgZAAgNgOgAhqDUQgVgSAAgcQAAghAUgcQAYgeAkAAQAhAAAPAPQASAQgBAfQABAigTAaQgVAggjAAQgdAAgVgRgAhVB6QgOAUAAAYQAAAQAMAKQANAKASAAQAVAAAPgVQANgTAAgZQAAgUgKgJQgIgHgWAAQgXAAgPAVgAC5hKQgMgJAAggIADgnIACgnIgBgKIgBgKQAAgPANAAQAEAAAEACIAVgEIAUgBQAZAAAOAFQAKAEAAAJQgBAFgDAEQgEAEgGAAIgFAAQgPgEgPgBIgQACIgRADIgBAmIAmgDIAYgCQAFAAAEAEQAEAEAAAFQAAAMgMACIgYACIgpADIgBAUQAAAUADADQAAAAALAAIATAAIASAAIAGAAIAFgBQAGAAAEADQAFADAAAHQAAALgLADQgLABgeAAQggAAgJgJgAiLhSIgFgYQgFgRgGggIgPAoIgFASIgHASQgGAJgJAAQgKAAgEgLIgFgSQgJgZgGgcIgMAwIgDAWQgFAOgKAAQgGAAgEgFQgEgDAAgGQAAgQAHgWIAKgmIAGgfQAFgUAFgHQAFgHAIAAQAJAAAEAJQAEAJAFAaQADAaAJAdQALgdAKgjIAFgWQAGgOAKgBQALAAAGARQACAGACATQAFApAKAeIAIAgQAAAGgFAEQgEADgGABQgKgBgFgPgAAPhHQgEgEAAgGIAAgLIACgMIAAgRIAAgSIAAgSIAAgTIgCgRIgBgSQAAgGAFgEQAFgFAGAAQAIAAAJAMQAsBAArAoIAAgPIgBhBIgBgKIgBgLQAAgOAPAAQAPAAAAAyIAAAPIAAA9IgDAQQgBAMgMAAQgIABgIgIQglgigwg9IAAAfIAAAXIABAYQAAAcgPAAQgHAAgEgEgAhihLQgEgDAAgGQAAgFAEgEQAEgFAGAAIATgBIAAgsQAAgbACgXIgWAAQgFAAgEgEQgEgEAAgGQAAgFADgEQAEgDAFAAIAdgBQATAAAdADQAMACAAAMQgBAHgEADQgDADgFAAIgagCIgBAvIgBAsIAbAAQAGAAAEADQADAEABAGQgBAFgDAEQgEAEgGAAIgRABIgQAAIgVABIgTACQgGAAgEgEg");
	this.shape.setTransform(-0.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.mine_icon();
	this.instance.setTransform(-0.2,0,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:1.14,scaleY:1.14,y:0.1},0).wait(1).to({regY:-0.1,scaleX:0.87,scaleY:0.87,y:0},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-37.4,81.7,75);


(lib.pickaxe_mine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{noCoin:0,getCoin:25,"noCoin":26});

	// pickaxe
	this.instance = new lib.Tween20("synched",0);
	this.instance.setTransform(0.1,0,1,1,-35.1,0,0,35,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:42.4,rotation:36.2},9).to({rotation:36.2},11).to({regY:42.5,rotation:-35},5).to({rotation:-35},21).wait(1));

	// Doge
	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.setTransform(-105.6,-20.2,1.945,1.945);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({startPosition:0,_off:false},0).to({y:-90.1,alpha:0},12).to({_off:true},1).wait(9));

	// stone
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0CD81").s().p("Al5hIQDtglByBpQBwBoA3B7QjXkvkvAIgABBg2IAPgZQApg9A/gyQBchIBmBWQiRghiQCOIgSATIgWAYIAQgeg");
	this.shape.setTransform(-85,-16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA9F33").s().p("AqfIwQhihSiNhnQiNhnATiAQAUiBCDiSQBuh9E3AbQBiiWDUheICWhgQCXhgDcCGQCbBegdBhIgGArQDOBaC3CdQDTCzhMDJQhNDIijASQlhAukIhNQhIA3jlgBIhsASQh/AVhcAAQiOAAg7gygACUBYQg3h6hwhpQhyhqjtAmIAQAAQElAADREngADAlFQhAAygoA9IgQAYIgQAfIAXgZIASgTQCQiNCRAhQg4gvg0AAQgsAAgqAhg");
	this.shape_1.setTransform(-85.7,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.3,-83.4,207.1,141.2);


(lib.mine_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.startMine_btn();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.startMine_btn(), 3);

	this.instance_1 = new lib.stopMine_btn();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.stopMine_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-37.4,81.7,75);


(lib.idle_blink_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},18).to({scaleY:0.09},4).to({scaleY:1},4).to({startPosition:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-0.4,40.8,11.8);


(lib.food_red_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkqBPQgEgEAAgFIAAhvIABgLIAAgLQAAgGAEgEQAEgEAGAAQADAAADABIAVgCIARgBQALAAARAFQAVAFAAAIQAAAGgEADQgEAEgFABIgGgCQgMgEgSAAIgOABIgRACIAAAhQAPgEAJAAQASAAAOACQANABAAAMQAAAGgEABQgEAFgGAAIgPgBIgQgBQgGAAgSAEIAAA+QAAAFgEAEQgFAEgFAAQgHAAgDgEgADRBQQgLgCgHgFQgFAAgEgDQgEgFAAgFIABgdIABgeIAAgeIgBghQAAgFAFgFQAFgFAGgBQADAAAOAHQAOAHAEABQAcAJAUATQAZAYAAAaQAAAQgJAPQgIAQgPAJQgQALgeAAQgHAAgJgCgADOAzQAEACAFABQAFACAFAAQAWAAAJgGQAJgFAFgKQAEgJABgLQAAgWgdgSQgJgGgfgNgAAYBJQgLgJAAgfIACgmIACgnIgBgKIgBgKQAAgPANAAQAFAAADACIAWgEIAUgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgFAFgFgBIgFgBQgQgDgOAAIgQABIgSADIgBAmIAmgDIAYgCQAFAAAFAEQADAEAAAFQABAKgMACIgYABIgqAEIAAAVQAAASACADQABABALAAIASAAIASAAIAHgBIAFAAQAFAAAFADQAEAEAAAGQAAALgLACQgKACgfAAQgfAAgKgJgAiGBJQgLgJAAgfIACgmIACgnIgBgKIgBgKQAAgPANAAQAFAAADACIAWgEIAUgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgEAFgGgBIgFgBQgPgDgPAAIgRABIgRADIgBAmIAmgDIAYgCQAGAAADAEQAEAEAAAFQAAAKgMACIgXABIgqAEIAAAVQgBASADADQABABALAAIASAAIASAAIAGgBIAGAAQAFAAAFADQAEAEAAAGQAAALgLACQgKACgeAAQghAAgJgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// img
	this.instance = new lib.food_red_icon();
	this.instance.setTransform(-1.7,0.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.14,y:0.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-1.5,y:0.6},0).wait(1).to({scaleX:1,scaleY:1,x:-1.6,y:0.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-41.5,75.4,83.1);


(lib.food_blue_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkqBPQgEgEAAgFIAAhvIABgLIAAgLQAAgGAEgEQAEgEAGAAQADAAADABIAVgCIARgBQALAAARAFQAVAFAAAIQAAAGgEADQgEAEgFABIgGgCQgMgEgSAAIgOABIgRACIAAAhQAPgEAJAAQASAAAOACQANABAAAMQAAAGgEABQgEAFgGAAIgPgBIgQgBQgGAAgSAEIAAA+QAAAFgEAEQgFAEgFAAQgHAAgDgEgADRBQQgLgCgHgFQgFAAgEgDQgEgFAAgFIABgdIABgeIAAgeIgBghQAAgFAFgFQAFgFAGgBQADAAAOAHQAOAHAEABQAcAJAUATQAZAYAAAaQAAAQgJAPQgIAQgPAJQgQALgeAAQgHAAgJgCgADOAzQAEACAFABQAFACAFAAQAWAAAJgGQAJgFAFgKQAEgJABgLQAAgWgdgSQgJgGgfgNgAAYBJQgLgJAAgfIACgmIACgnIgBgKIgBgKQAAgPANAAQAFAAADACIAWgEIAUgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgFAFgFgBIgFgBQgQgDgOAAIgQABIgSADIgBAmIAmgDIAYgCQAFAAAFAEQADAEAAAFQABAKgMACIgYABIgqAEIAAAVQAAASACADQABABALAAIASAAIASAAIAHgBIAFAAQAFAAAFADQAEAEAAAGQAAALgLACQgKACgfAAQgfAAgKgJgAiGBJQgLgJAAgfIACgmIACgnIgBgKIgBgKQAAgPANAAQAFAAADACIAWgEIAUgBQAYAAAPAFQAJAEAAAJQAAAFgDAEQgEAFgGgBIgFgBQgPgDgPAAIgRABIgRADIgBAmIAmgDIAYgCQAGAAADAEQAEAEAAAFQAAAKgMACIgXABIgqAEIAAAVQgBASADADQABABALAAIASAAIASAAIAGgBIAGAAQAFAAAFADQAEAEAAAGQAAALgLACQgKACgeAAQghAAgJgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// img
	this.instance = new lib.food_blue_icon();
	this.instance.setTransform(-1.7,0.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.14,y:0.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-1.5,y:0.6},0).wait(1).to({scaleX:1,scaleY:1,x:-1.6,y:0.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-41.5,75.4,83.1);


(lib.wakeup_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdDdQgagUAAgxIABgOIAAgOIABgLIAAgLQAAgIADgGQADgJAHAAQAGAAAEADQAEAEAAAFIAAARIAAAQIgBAOIAAAOQAAAPADANQAFAPAHAGQAFADAPAAQAaABAJgtQAEgXAAgpQAAgGAEgFQAEgGAIAAQAFAAADAEQADAEAAAEQAAAngEAWQgFAhgPAWQgHAKgKAGQgMAIgNAAQgZAAgMgKgAAdDeQgEgDAAgGIAAgbIACgtIACgtQAAgZAOABIAJgBIAPgBQATAAARANQASAOAAAUQAAAZgUAOQgRANgYAAIgJAAIAAAsQAAAGgEADQgDAEgGAAQgGAAgDgEgAA3BuIgCAhIAHABQAPAAAKgHQALgIAAgMQAAgJgKgGQgKgGgMAAIgFAAIgEAAIAAAOgABChFQgDgFAAgFIABhBIAChBQAAgGADgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIgBAXIgBAYIAyg2QAFgFAGAAQAFAAAEAEQAFAEAAAFQAAAGgYAaQgRASgTASIAVAVIAXATQAFADAGACQAKADAAAKQAAAEgDAEQgDAFgHAAQgOAAgWgSIgfgeIAAAqQAAAEgDAEQgDAEgHAAQgHAAgFgGgADChIQgLgKAAgfIACgnIACgoIgBgKIgBgKQAAgPAOAAQAEAAAEADIAVgFIAUgBQAYAAAPAGQAJADAAAJQAAAFgDAEQgEAFgGAAIgFgBQgPgEgPAAIgQABIgSADIgBAnIAmgEIAYgCQAGAAAEAEQAEAEAAAGQAAALgMACIgYACIgqAEIAAAUQAAATACADQABABALAAIATAAIASgBIAGAAIAFgBQAGAAAEADQAFAEAAAGQAAALgMADQgKABgeAAQggAAgKgIgAiwhDQgFgDgBgGQgEgLgBgIIgMg+QgHATgHAQQgLAXgDAOIAAAEQAAAGgFAEQgFADgFAAQgHAAgFgDQgFgEAAgHIgDgMIgLgtQgGgXgPgrIgBgFQAAgGAEgDQAEgDAGAAQAHAAAFAGQACADADAJQAKAcAMA1QAIgTAIgaQAGgVAEgJQAKgWAKAAQAKAAAEALQACAFACANIADAUQACAQAKAtQALgYARguIAFgSQADgLAEgGQAFgHAIAAQAGAAAEAEQAEADAAAGIgEAKIgEAKIgFARIgSAqIgSAqIgHAQQgFAIgJAAQgGAAgEgDgAAMhYQgFgMgEgPQgFABgQABIgYADIgPAgQgFAHgHAAQgGAAgEgEQgEgDAAgGQAAgFAOgdIgBgFQAAgFAJgDIAfgyQAYglAGAAQAJAAADANIAHAgIAOBAIAFANQAEAIAAAFQAAAFgFAEQgEAEgFAAQgIgBgIgRgAgciHIAOgBIAOgCIgHghIgVAkg");
	this.shape.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(1,1,1).p("AAiAiQg5iFiOBMQCKisCWCvIApghQAJBYghBLQhUgChHgrIAxgfIBZg2");
	this.shape_1.setTransform(33.9,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgPBBIAxgfIBZg2IApghQAJBYghBLQhUgChHgrgAilgXQCKisCWCvIhZA2Qg5iFiOBMgAB7gUIAAAAg");
	this.shape_2.setTransform(33.9,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(1,1,1).p("ADphNQAMB/guBqQh4gChlg+IBGgsQhSi9jJBsQDDj1DWD4gAAwAwIB+hO");
	this.shape_3.setTransform(41.1,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgWBcIBGgsQhSi9jJBsQDDj1DWD4IA7gvQAMB/guBqQh4gChlg+gAAwAwIB+hOg");
	this.shape_4.setTransform(41.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9900").ss(1,1,1).p("ABZgOQhsh/hjB9QBmg3AoBgIBBgnIAdgYQAHA/gYA2Qg9gBgygfIAigW");
	this.shape_5.setTransform(29.1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgKAvIAigWIBBgnIhBAnQgohghmA3QBjh9BsB/IAdgYQAHA/gYA2Qg9gBgygfg");
	this.shape_6.setTransform(29.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.instance = new lib.bed_icon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-36.1,88.1,72.3);


(lib.rest_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABjDlQgLgDgHgEQgFAAgEgEQgEgEAAgGIABgdIABgdIgBghIAAggQAAgFAFgGQAFgFAGAAQADAAANAGQAPAIADAAQAdAKAUATQAYAXAAAcQAAARgIAPQgJAPgOAKQgQALgeAAQgHAAgJgCgABgDHQADADAFABQAFABAGABQAVAAAKgHQAIgFAFgJQAFgKAAgLQAAgXgcgSQgJgHgfgMgAgxDeQgLgJAAggIACgnIACgnIgBgLIgBgKQAAgOANAAQAFAAADACIAWgFIARgBQAZAAAPAGQAJAEAAAIQAAAGgEADQgEAFgGAAIgEgBQgQgEgPAAIgOABIgRAEIgBAmIAkgDIAYgDQAFABAEAEQAEADAAAGQAAALgMACIgXACIgoAEIgBAUQAAATADADQABABALAAIASAAIAQAAIAGgBIAGAAQAFAAAEACQAFAEAAAGQAAAMgLACQgKABgdABQggAAgJgJgAixDdQgFgFAAgFIAAhoIAAgNIAAgNQACgKAQgBQAHgCARAAQATAAAQAMQAUAOAAAUQAAAMgEAHQgDAHgIAGQAJAFAIAJQAIALAAAKQAAANgOALQgKAJgKADQgXAIgiAAQgGABgFgFgAibDHQARgBATgFQASgGgBgFQAAgIgLgFQgIgFgHgBIgbgBgAibCHIANABQAegCAAgUQAAgHgJgGQgJgHgKAAIgPAAgAlBhTQgNgNAAgcQAAgZAMgbQANgZATgRQAOgMAPAAQAKABAQAGQATAIAAAJQAAAGgEAEQgEAFgGAAQgDAAgKgGQgKgGgIAAQgJAAgPATQgVAbAAAhQAAAQAEAGQAFAGAPAAQAPAAALgJQAMgIAGgSQgXADgQAHIgGABQgHAAgEgFQgDgEAAgFQAAgPAjgFQAUgDAbgBQAGAAAEAEQADAEAAAGQAAAGgFAEQgHAdgUASQgVARgbAAQgaAAgNgNgADRhXQgWgSAAgcQAAghAVgbQAXgfAkAAQAiAAARAQQARAQAAAeQAAAigTAbQgWAfgkAAQgdAAgUgRgADlixQgOAUAAAYQAAAQAMAKQANALASgBQAVAAAPgUQANgUAAgZQAAgUgJgIQgJgHgWgBQgWABgQAUgAiuhXQgWgSAAgcQAAghAVgbQAXgfAkAAQAiAAARAQQARAQAAAeQAAAigTAbQgWAfgkAAQgdAAgUgRgAiaixQgOAUAAAYQAAAQAMAKQANALASgBQAVAAAPgUQANgUAAgZQAAgUgJgIQgJgHgWgBQgWABgQAUgABnhPQgEgEAAgFIAAgEIABgFIgBgNIAAgOQAAgNgDgXIgCgjIgFAAQgWABgNgEQgLgDAAgJQAAgGAEgDQAEgGAGABIAQABIAQACIASgBIARAAIAXABIAWACQAGAAAEADQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAoQACAZAAAOIABAKIAAAKQAAAHgDAHQgEAHgHAAQgGAAgEgEg");
	this.shape.setTransform(0,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(1,1,1).p("AAiAiIBZg2QiWiviKCsQCOhMA5CFgAB7gUIApghQAJBYghBLQhUgChHgrIAxgf");
	this.shape_1.setTransform(-22.8,-16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgPBBIAxgfIBZg2IhZA2Qg5iFiOBMQCKisCWCvIApghQAJBYghBLQhUgChHgrg");
	this.shape_2.setTransform(-22.8,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(1,1,1).p("ADVhGQAMB0grBhQhtgChdg4IBAgoQhLiui4BjQCzjgDEDjgAAsAtIB0hI");
	this.shape_3.setTransform(-27.9,-20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgUBVIBAgoQhLiui4BjQCzjgDEDjIA1grQAMB0grBhQhtgChdg4gAAsAtIB0hIg");
	this.shape_4.setTransform(-27.9,-20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9900").ss(1,1,1).p("AAZAZIBCgoQhviBhlB/QBog4AqBigABbgPIAegYQAHBAgZA4Qg+gCgzgfIAjgX");
	this.shape_5.setTransform(-18.3,-13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgKAwIAjgXIBCgoIhCAoQgqhihoA4QBlh/BvCBIAegYQAHBAgZA4Qg+gCgzgfg");
	this.shape_6.setTransform(-18.3,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.instance = new lib.bed_icon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-36.1,77,72.3);


(lib.bed_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rest_btn();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.rest_btn(), 3);

	this.restPet = new lib.wakeup_btn();
	new cjs.ButtonHelper(this.restPet, 0, 1, 2, false, new lib.wakeup_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.restPet}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-36.1,77,72.3);


(lib.moonball_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Moon_reverse
	this.instance = new lib.moon_rolling();
	this.instance.setTransform(361.9,34,0.8,0.8,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:-536.1},36).to({_off:true},1).wait(40));

	// Doge_reverse
	this.instance_1 = new lib.side_running_tan();
	this.instance_1.setTransform(501,13.9,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:-397},36).to({_off:true},1).wait(40));

	// Moon
	this.instance_2 = new lib.moon_rolling();
	this.instance_2.setTransform(140,34,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:536.1},20).to({_off:true},1).wait(85));

	// Doge
	this.instance_3 = new lib.side_running_tan();
	this.instance_3.setTransform(0.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:397},20).to({_off:true},1).wait(51).to({x:-387.1,_off:false},0).to({x:0.9},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-35.3,234.2,103.2);


(lib.mining_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sprite
	this.instance = new lib.mining_sprite_tan();
	this.instance.setTransform(65,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-13},6).to({y:-10},6).to({y:-13},6).to({y:-10},6).wait(1));

	// mine
	this.mine = new lib.pickaxe_mine();
	this.mine.setTransform(58,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mine}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.3,-77.9,255.9,141.2);


(lib.idle_tan = function() {
	this.initialize();

	// Ears
	this.instance = new lib.idle_ears_tan();
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


(lib.eating_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bowl
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("Am/BOQgvhDgjhkQIXAsINgyQggBogvBFQjhASjiAAQjfAAjhgSg");
	this.shape.setTransform(-0.1,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(7));

	// Food
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("AgxBJQgEgFgBgHQgIAEgEgBIgRgFQgEgBgDgDIgFABQgRAAgEgHQgEgFgBgHQgIAEgEgBIgFgBIACADQAFAFgIAKQgEAEgFADIgEAGQgJAKgQAAQgRAAgEgHQgEgFgBgHQgIAEgEgBIgRgFQgEgBgDgDIgFABQgRAAgEgHQgEgFgBgHIgGACQgDAEgEACQABAFgGAHQgJAKgQAAQgRAAgEgHQgEgFgBgHQgIAEgEgBIgRgFQgKgDgBgKQAAgEACgFQgJgCgDgEQgDgFgBgHQgIAEgEgBIgGgBIADADQAEAFgIAKQgIAKgRAAQgQAAgFgHQgDgFgBgHQgIAEgEgBIgRgFQgLgDAAgKQgBgHALgMQALgMAKADQAHADAHAEIABgEQADgGAIABQAIABAJAFIAFgGQALgMAJADQAJgHAHADIAGACIAFAAIAFABIAAAAQACgGAJABQAHAAAKAFIAFgGQALgMAJAEQAHACAIAFIABgEQACgGAJABQAIAAALAHQAIAEgDAMIAEAEIAAAAQAGgEAGADIANAGIACgCIABgBQACgGAJABQAIAAAJAGQADgFAIABQAHABAKAFIAFgGQALgMAJADIAMAGQABgJAKgKQALgMAJAEQAHACAIAFIABgEQACgGAJABQAHAAAKAFIAFgGQALgMAJAEQAHACAIAFIABgEQACgGAJABQAIAAAJAHQAIAEgDAMIAEAEIAAAAQAGgEAGADQAHACAIAFIABgEQACgGAJABQAIAAAKAGQAIgGAHADIAIADQACgHAIgJQALgMAJAEQAHACAIAFIABgEQACgGAJABQAHAAAKAFIAFgGQALgMAJAEQAHACAIAFIABgEQACgGAJABQAIAAALAHQAIAEgDAMIAEAEIAAAAQAGgEAGADQAHACAIAFIABgEQACgGAJABQAIAAALAHQADABABADIAKAFIABgEQADgGAIABQAIABAJAFIAFgGQALgMAKADQAHADAHAEIABgEQADgGAIABQAJABALAGQAHAFgCAMIADAEIAAAAQAHgEAGACQAHADAHAEIABgEQADgGAIABQAJABALAGQAHAFgCAMIADAEQAEAGAFAFQAEAFgIAKQgIAKgRAAIgJgBQACAFgGAJQgJAJgQAAQgRAAgEgHQgEgFgBgGQgIADgEAAIgRgFQgEgCgDgCIgFAAIgGAAQABAFgGAIQgIAJgRAAQgQAAgFgHIgDgFIgJABQgRAAgEgHIgCgDIgFgDQgHAEgLAAQgQAAgFgHIgCgEQABAEgBAFIADAEQAEAIAFAFQAEAGgIAKQgIAJgRAAQgQAAgFgHQgDgFgBgGQgIADgEAAIgRgFQgFgCgCgCIgGAAQgQAAgFgHQgDgFgBgGQgIADgEAAIgFgBIACACQAEAGgIAKQgIAJgRAAQgMAAgGgEIgIABQgQAAgFgHQgDgEgBgFIgDgBQgGACgDAAIgPgFQgFgCgCgCIgDAAIgBAIIAEAEQAEAHAEAGQADAFgGAKQgJAKgQAAQgRAAgEgHgADiAMIACADIAAgDIgCAAg");
	this.shape_1.setTransform(0.5,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(7));

	// Bowl Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AoRAMQBhgUBhgOIAHAKQARAUARASQh1gFh2gJgAFOgMIAKgOQBdANBeASQhxALhyAHQAQgRAOgSg");
	this.shape_2.setTransform(-0.1,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(7));

	// Ears
	this.instance = new lib.eating_ears_tan();
	this.instance.setTransform(0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-13.7},3).to({y:-15.1},3).wait(1));

	// Eyes
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(0,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.5},3).to({y:12.1},3).wait(1));

	// Nose
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:41.4},3).to({y:40},3).wait(1));

	// Muzzle
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(0,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:45},3).to({y:43.6},3).wait(1));

	// Face
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(0.1,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:22.9},3).to({y:21.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-44.8,106.2,109.5);


(lib.statusBar = function() {
	this.initialize();

	// status
	this.coin = new lib.spend_coin();
	this.coin.setTransform(616.5,78);

	this.doge_txt = new cjs.Text("999", "bold 16px Comic Sans MS");
	this.doge_txt.textAlign = "right";
	this.doge_txt.lineHeight = 18;
	this.doge_txt.lineWidth = 100;
	this.doge_txt.setTransform(601,65.4);

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

	this.addChild(this.energy_txt,this.shape_2,this.happiness_txt,this.shape_1,this.hunger_txt,this.shape,this.doge_txt,this.coin);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19.8,25.4,606.8,66.3);


(lib.shop_screen = function() {
	this.initialize();

	// x
	this.close = new lib.fechar_btn();
	this.close.setTransform(238.6,-127.1);
	new cjs.ButtonHelper(this.close, 0, 1, 2, false, new lib.fechar_btn(), 3);

	// products
	this.good = new lib.price_and_counter();
	this.good.setTransform(-26.4,43.6,1,1,0,0,0,0,0.8);

	this.plain = new lib.price_and_counter();
	this.plain.setTransform(-157.3,43.6,1,1,0,0,0,0,0.8);

	this.instance = new lib.food_blue_icon();
	this.instance.setTransform(-26.5,-69.3,1,1,0,0,0,1.8,0.1);

	this.instance_1 = new lib.food_red_icon();
	this.instance_1.setTransform(-157.4,-69.3,1,1,0,0,0,1.8,0.1);

	this.confirm = new lib.confirm_btn();
	this.confirm.setTransform(143.2,95.3);
	new cjs.ButtonHelper(this.confirm, 0, 1, 2, false, new lib.confirm_btn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQABgCABgCIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape.setTransform(204.3,53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0993A").s().p("AAAgGIABABIACAAIABACIABACIgDADIgCABIAAACIgCABIgCABIAEgNg");
	this.shape_1.setTransform(204.6,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCA847").s().p("AgDAOIACgBIABgBIAAgCIADgBIACgFIgBgCIAAgCIgCAAIgCAAQADgIAAgMIACAJIACAEIABAFIABACIAAAFIACAFIgBAFIgCgDIgBAEIgBADIgBgCIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBACIgEADIgFAAIAHgHg");
	this.shape_2.setTransform(204.6,49.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_3.setTransform(203.3,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B59544").s().p("AgBAAIACgBIABABIgBADIgCgDg");
	this.shape_4.setTransform(203.1,42.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_5.setTransform(203.2,41.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CEB052").s().p("AgMAAIACgBIABgCIACAAIACAAIAFgDIAAADIADADIAEAAIAEAAIABAAIABAAIgBABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAAAABIgEACQgIgEgKgDg");
	this.shape_6.setTransform(195.4,55.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2A44D").s().p("AgGAIIgGACIADgDIACgEIgBgDIgBgDIAAgDIABgDIACAAIADADIADACQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIgBgDIAMAAQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgDABQgBAEgCAAIgCAAIgCADIAAgBIgBABIgDAEIgCADg");
	this.shape_7.setTransform(196.1,54.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_8.setTransform(201.8,56.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_9.setTransform(200.2,54.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8C173").s().p("AghAXIgCgBIAAgBIgBgBIAAgBIgFAAIgDAAIgEgEIACgDIACgEIACgBIACABIACgEIACABQABgCABgDIAEAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAbAAQAGAAAIgDQAHgCAGgFIAFgEIAEgBIAFgCIADgCQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABIABABIACACQgCACAAAEIAAAEIgBAFQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgCACIgEADQgCACgBACIgDAAIADgGIADgEIAAgCIAAgCIAAgCIgBgCIAAgBIgDgBIgDAAIgEACIgDACIgCAAIgCABIgDADIgCAEIgDAAIgEADIgCABIgDAAIgCABIgCACIAAAAIgDABIgEACIgEABIgEAEIgDADIgDACIgDACIgBgBIgDACIgEACg");
	this.shape_10.setTransform(200.4,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_11.setTransform(191.8,47.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCAAIgDABIAHgBg");
	this.shape_12.setTransform(191.7,47);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIADAAIAHAAIgCgCIAAgBIAAgCIgEgDIADgCIACgCIACgCIAGgBIABgCIADgCIADgCQgBAHgCAEQgDAGgFAEQgDACgDAAIgKAAg");
	this.shape_13.setTransform(199.9,49.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_14.setTransform(195,49.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_15.setTransform(196.6,48.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D2B159").s().p("AAKAOIgDgDIAIAAIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEgCgAgNgGIgCgJIACADIACACIABgBIADACIAAAJQgDgCgDgEg");
	this.shape_16.setTransform(194.7,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5CB7A").s().p("AgOALIADgJQACgCgBgFIAAgDIACgDIAAgCIgCgCQADgEABgHIABADIACAIQADAFABADIAAAEIAAADIAAABIABABIAGAAIAGAAIgBADIAAAEIABADIABAEIgCAEIgCAEIgCAAIgCAAIgCACIgBABQgKgHgIgJg");
	this.shape_17.setTransform(193.7,52.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_18.setTransform(193.1,48.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#927D49").s().p("AgCABIACgBIADgCIAAADIgCAAIgBACIgCgCg");
	this.shape_19.setTransform(194.9,49.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DFC677").s().p("AAEAHIgCgBQgCgCgCgDIgDgCIAAgFIADADIACADIACAAIACACIACAAIAAAFIgCAAg");
	this.shape_20.setTransform(194.6,49.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EED88B").s().p("AgGAIIgCgEIgBgEIABgBIABgCIADgBIABgFIABABIAAAFIACADQABACAEACIACABIACAAIgGAAIgGAAIAAAFg");
	this.shape_21.setTransform(194.3,49.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5EDB6").s().p("AgCAAIACgBIADAAIgDABIAAAAIAAAAIAAABIgCABg");
	this.shape_22.setTransform(192.5,47.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3E19D").s().p("AAAAXIgBgDIgBgCQgGgIgBgJIABgDIABACIACADIAEAAIAAAAQABgDAAAAIAAABIgCgBIgBgCIAAgDIAAgCIgDAAIAAAAIADgDIgDAAIgBAAIACgBIACgCIACgFIAAADIAAAEIAAADIABABIAAgGIAAgFIADgEIADgCIADABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAABIAAABIgCAEIgBAGQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIACABIABABIAAACIABACIgBAFIgDABIgBACIAAADIAAAEIACAEIgBACIgBgDg");
	this.shape_23.setTransform(193.3,48.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7E3DB").s().p("AgHANIgDABIgBgEIAAgEIAAgFIAAgBIAAgNIAAgBIAAAHIAAAEIACACIgBABIAAACQAOAFAIgGIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCADIgHACQgDACgDACIgDgCg");
	this.shape_24.setTransform(196.5,48.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39331F").s().p("AABABIgBgBIgDAAIAAAAIADgBIABgBIABAAIABACQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgCgDg");
	this.shape_25.setTransform(194.8,47.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6E6342").s().p("AAAALIgDgDIgBAAIAAgCIgBgDIAAgBIgCgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgGIABgFIABgBIAAABIgBABIAAABIABADIADAEIACAEIAAgBIADABIADAAIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgDIAAAMIgIgDQgCAAgEABIAGADIAIABIAAAEIgDACIgEADIgCgEg");
	this.shape_26.setTransform(194.3,48);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_27.setTransform(195.5,46.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DFC57C").s().p("AgDAAIgCAAIADAAIADgBIACABIACgBIAAADQgFgCgDAAg");
	this.shape_28.setTransform(194.7,45.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4ECB4").s().p("AgFAPIgBgEIgBAFIgBgHIACgCIABAAIABgBIAAAAIACAAIAAADIAAADIABACIABACIAAACIgEABIgBgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgCABIgBABIgDABIABgDIgBAAIACgGQABgEABgDIADgDIAAAEIADgEQACgCACgBIAAAHIADAAIgBACIgEACIgCAEIgBADIgBAGIAAgBg");
	this.shape_29.setTransform(193.1,46.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6BD62").s().p("AAAAEIgDAAIACgDIABgBIAAgBIACgBIACgCIAAAHIgCABIgCAAg");
	this.shape_30.setTransform(194.8,45.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#938357").s().p("AAAABQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_31.setTransform(194.8,44.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#242110").s().p("AAAATIgHgCQAEgBADAAIAHADIAAABIgHgBgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIADAAIgCgCIAFAAIgBABIAAAAIgCACIgDAAIgCgDg");
	this.shape_32.setTransform(194.5,46.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5C66B").s().p("AgCAFIABgBIgDgBIAAgEIAAgEIAEABIAAAAIADADIACABIgDABIgCAEIgBABg");
	this.shape_33.setTransform(194.3,45.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_34.setTransform(193.9,44.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F5F2E6").s().p("AgCAAIACAAIABgCIABABIABABIgCAAIgBAAIAAADIgBAAIgBgDg");
	this.shape_35.setTransform(194.8,44.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_36.setTransform(193.2,44.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4EFC8").s().p("AgGADIADgDQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgGgBIAAACQgBAAgBADIgFAEIAAgFg");
	this.shape_37.setTransform(193.6,44.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A78E32").s().p("AgEALQABgHACgEQABgIAFgFIAAAEQgFAGgCAKIgCAGIAAgCg");
	this.shape_38.setTransform(193.2,43.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_39.setTransform(196.4,41.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A78F33").s().p("AgBANIABgJIAAgJIAAgDIABgEIABAJIAAAFIgCAGIAAAFg");
	this.shape_40.setTransform(195.4,40.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DFC068").s().p("AgDAOIADgFIAAgGIAAgGIAAgIIAAgCIACAEIABAEQAAAFgBAEQgCAGgBAEg");
	this.shape_41.setTransform(195.7,40.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B58634").s().p("AgBAJIgCgBIgBgEIABgEIgBgEIgBgFQADACACADIACAFQABAEADADIAAACQgFgCgBACg");
	this.shape_42.setTransform(196.7,40);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DFCD88").s().p("AgNgLIAHgCIAFgCIABgDIADgEIADgDIABABQAEAFACAIQABAHAAAHIgDABIgDACIgCADIgFABIgCACIgDADIgCADIADADIAAABIABABIACACIgHAAIgDAAIgDACIAAgmgAgNgXIAEADIgEAAg");
	this.shape_43.setTransform(199.9,47.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DCDAD7").s().p("AgDABIACgBIABgDIAAAAIAFADIgFAEIgDgDg");
	this.shape_44.setTransform(202.2,42.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D2B257").s().p("AgJABIADAAIADgBIADAAIACgFIgDgDIACAAIADAAIAEACIACADIgDADIgDACIgDADIgDACIgHACg");
	this.shape_45.setTransform(199.5,45.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(199.1,44.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(199,44.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#252211").s().p("AgaAMIgDgEIAAgDIAAgBIAAgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQAFgBAFADIAAAHIAAABIgDADIgCABIgEACIAAADIgEgFgAARgFIAAgBIAFAAIgFgDIAAgEQADAAADgDIADAAIAEADIgDAFIgDACIgEABIgDAAgAAYgLIAAAAIAAAAIABgBIgBABgAAXgOIAAAAIABAAIgBAAg");
	this.shape_48.setTransform(196.7,46.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8F3E4").s().p("AgKAuIgMAAIgIAAIgDAAIgGAAIgFAAIgCgBIAAgCIAAgEIAAgFIAAgLIAAgEIAIAAIAHAAIAAgGIAAgDIABADIADgBIADACQADgCAFgBIAHgCIACgEQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAIAAAAQgDgBgFABIgHACQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgCIAAgDQABgEADgBIABgIQgCgCgDgBIAAgGIAAgJIAAAAIACgBIADgBIACgBIACgCIAEgCIgBAFIAAADIACAEIABAEIABAFIACgBIAAgEIACACIACACIABAEIABACIAGgCIABgHIAAgBIgCgBIgCgCQAAgDADgDIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBAAIAAAEIAAADIAAABIAAAIIAAAmIAAABIAIAAQAGAAADgDQAFgEADgGQACgGABgEQAAgJgBgHQgCgIgEgFIAEgBIAIABQAFAAADAAQADACAAACIABAHIABAEIABAFIgCAIIgDAFQgFALgHALIAEgCIADgBIgEAEIACABIgBAFIADAAQABACgCADIgEAEIADAAIADgBIACgBIACgBIADABQgHAEgHADQgIADgIAAg");
	this.shape_49.setTransform(198.5,48.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIACgBIAAACIgCACIgFAAg");
	this.shape_50.setTransform(196.8,44.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#543E26").s().p("AgBADIACgDIgBAAIAAAAIgCAAIgDAAIgBAAIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_51.setTransform(202.4,42);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#927238").s().p("AAAAKIADgHIADgEQgGAAgEABIgCAAIgBACIgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIADgDIADgDIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACADIACAGIgDAKIgEACg");
	this.shape_52.setTransform(202.6,41.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_53.setTransform(201.3,41.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3EBDB").s().p("AAbAwQACgDAAgCIgDAAIABgEIgCgCIAEgEIgDABIgFACQAIgLAFgLIADgHIABgHIAAgDIgCgFIAAgGQAAgDgDgCQgDABgFgBIgIgBIgFABIgBgBIgCgDIgDgCIgEAAIgCAAIgCgBIgFgBIgCACIgDACIgFAEQADAEAGACIgBAGIgGADIgBgDIgBgEIgCgBIgCgCIgBADIgCABIAAgFIgCgEIgBgEIAAgDIABgEIgFABIgCACIgBACIgDABIgDAAIABAAIACgDIAAgCIgDABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACgCQgDgCgDABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgCAFIgEAAIACgDIgCgCIgBgBIAAgLIAAgDIAAgDIAAgDIANAAIABAAIACAAIADAAIAOAAIAfAAIAFAAIAEACIADAAIABABIACABIACABIgCAEIgCADIAEADIAGgHIACACIADADQAIAHAFAKQAEAJAAALIAAAEQABAMgDAJIgGAOIgGAIIgFAEIgCgBIgCABIgCABIgDABIgDAAIADgEgAAkggIgBACIAAACIACAEIAEAEQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAIAAgEIgCAAQACgEgBgDIgGABg");
	this.shape_54.setTransform(199.4,47.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_55.setTransform(198.6,41.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AC8132").s().p("AABAHIADgEIgIgCIgKAAIAHgBIAHAAIACAAIAEAAIAFgCIAEgFQgCADAAAEIAAAAIgBgBQgDAFgEAEIgEgBg");
	this.shape_56.setTransform(200.3,41);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CBA94C").s().p("AAAAAQABgCACgEQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAGQgBgHADAAg");
	this.shape_57.setTransform(202.1,40.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B89844").s().p("AAAANIgBgBIgCgBIgBAAIgDgBIABgCIgCABIAFgIIAAAAIADgEIABgFQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAEAFIADAEQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACIgDACIgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAABIABABIgBABIABABIACgBIACgBIgBACIADAAIgEACg");
	this.shape_58.setTransform(202.2,41);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");
	this.shape_59.setTransform(199,47.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIADgBIgBABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_60.setTransform(199,45.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C79C3B").s().p("AgFAOQAEgDABgGQAAgFAAgEIAAgFIgCgDIACgBIAAABIABAFIABAFIAAADIABADIABACIACABIgCACIgEADIgCACg");
	this.shape_61.setTransform(196,40.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");
	this.shape_62.setTransform(199,47.4);

	this.coinsRemaining = new cjs.Text("99", "bold 14px Comic Sans MS");
	this.coinsRemaining.textAlign = "right";
	this.coinsRemaining.lineHeight = 16;
	this.coinsRemaining.lineWidth = 62;
	this.coinsRemaining.setTransform(180.4,35.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape_63.setTransform(204.3,-9.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C0993A").s().p("AAAgFIABAAIACAAIABACIABACIgDADIgCABIAAABIgCACIgCAAIAEgLg");
	this.shape_64.setTransform(204.6,-12.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CCA847").s().p("AgDANIACAAIABgCIAAgBIADgBIACgFIgBgCIAAgCIgCAAIgCAAQADgIAAgMIACAJIACAEIABAEIABADIAAAFIACAFIgBAFIgCgDIgBAEIgBADIgBgCIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgBABIgEACIgFABIAHgIg");
	this.shape_65.setTransform(204.6,-13);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_66.setTransform(203.3,-18.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B59544").s().p("AgBAAIACgBIABABIgBACIgCgCg");
	this.shape_67.setTransform(203.1,-19.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_68.setTransform(203.2,-21.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_69.setTransform(201.8,-6.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_70.setTransform(200.2,-7.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CEB052").s().p("AgMAAIACgCIABgCIACAAIACAAIAFgCIAAACIADAEIAEAAIAEAAIABAAIABAAIgBABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIgEACQgIgEgKgDg");
	this.shape_71.setTransform(195.4,-6.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D8C173").s().p("AghAXIgCgBIAAgBIgBgBIAAgBIgFAAIgDAAIgEgEIACgDIACgEIACgBIACABIACgEIACABQABgCABgDIAEAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAbAAQAGAAAIgDQAHgCAGgFIAFgEIAEgBIAFgCIADgCQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABIABABIACACQgCACAAAEIAAAEIgBAFQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgCACIgEADQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgDAAIADgGIADgEIAAgCIAAgCIAAgCIgBgCIAAgBIgDgBIgDAAIgEACIgDACIgCAAIgCABIgDADIgCAEIgDAAIgEADIgCABIgDAAIgCABIgCACIAAAAIgDABIgEACIgEABIgEAEIgDADIgDACIgDACIgBgBIgDACIgEACg");
	this.shape_72.setTransform(200.4,-8.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C2A44D").s().p("AgGAIIgGACIADgDIACgEIgBgDIgBgDIAAgDIABgDIACAAIADADIADACQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIgBgDIAMAAQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgDABQgBAEgCAAIgCAAIgCADIAAgBIgBABIgDAEIgCADg");
	this.shape_73.setTransform(196.1,-8.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_74.setTransform(195,-12.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_75.setTransform(196.6,-13.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D2B159").s().p("AAKAOIgDgDIAIAAIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEgCgAgNgGIgCgJIACADIACACIABgBIADACIAAAJQgDgCgDgEg");
	this.shape_76.setTransform(194.7,-10.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E5CB7A").s().p("AgOALIADgJQACgCgBgFIAAgDIACgDIAAgCIgCgCQADgEABgHIABADIACAIQADAFABADIAAAEIAAADIAAABIABABIAGAAIAGAAIgBADIAAAEIABADIABAEIgCAEIgCAEIgCAAIgCAAIgCACIgBABQgKgHgIgJg");
	this.shape_77.setTransform(193.7,-9.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_78.setTransform(193.1,-14.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#927D49").s().p("AgCAAIACAAIADgBIAAACIgCAAIgBACIgCgDg");
	this.shape_79.setTransform(194.9,-13.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DFC677").s().p("AAEAHIgCAAQgCgDgCgDIgDgCIAAgFIADADIACADIACAAIACABIACABIAAAFIgCAAg");
	this.shape_80.setTransform(194.6,-12.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EED88B").s().p("AgGAIIgCgEIgBgEIABgBIABgCIADAAIABgGIABABIAAAFIACADQABACAEADIACAAIACAAIgGAAIgGABIAAAEg");
	this.shape_81.setTransform(194.3,-12.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#39331F").s().p("AABABIgBgBIgDAAIAAAAIADgBIABgCIABAAIABADQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAIgCgCg");
	this.shape_82.setTransform(194.8,-14.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6E6342").s().p("AAAALIgDgCIgBgBIAAgDIgBgCIAAgBIgCgCQAAAAgBAAQAAAAAAAAQAAgBAAgBQAAAAAAgBIABgFIABgFIABgBIAAABIgBABIAAAAIABAEIADAEIACAEIAAgBIADAAIADABIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgDIAAAMIgIgCQgCgBgEABIAGACIAIACIAAAFIgDABIgEACIgCgDg");
	this.shape_83.setTransform(194.3,-14.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#DFC57C").s().p("AgDAAIgCAAIADAAIADgBIACABIACgBIAAADQgFgCgDAAg");
	this.shape_84.setTransform(194.7,-16.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_85.setTransform(195.5,-15.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E7E3DB").s().p("AgHANIgDAAIgBgCIAAgFIAAgEIAAgCIAAgNIAAgBIAAAHIAAAEIACABIgBACIAAACQAOAGAIgHIAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgCAEIgHACQgDABgDACIgDgBg");
	this.shape_86.setTransform(196.5,-14.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIADAAIAHAAIgCgDIAAgBIAAgBIgEgDIADgCIACgCIACgBIAGgCIABgCIADgDIADgBQgBAHgCAEQgDAGgFAEQgDACgDAAIgKAAg");
	this.shape_87.setTransform(199.9,-13.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DFCD88").s().p("AgNgLIAHgCIAFgDIABgCIADgEIADgEIABABQAEAGACAIQABAIAAAGIgDABIgDACIgCACIgFACIgCACIgDADIgCACIADAEIAAABIABABIACACIgHAAIgDAAIgDABIAAglgAgNgXIAEADIgEABg");
	this.shape_88.setTransform(199.9,-14.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F3E19D").s().p("AAAAXIgBgCIgBgDQgGgIgBgJIABgDIABACIACAEIAEgBIAAABQABgDAAgBIAAABIgCgBIgBgCIAAgCIAAgEIgDABIAAgBIADgCIgDAAIgBAAIACgBIACgBIACgHIAAAFIAAADIAAACIABABIAAgFIAAgGIADgDIADgCIADACQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAABIAAABIgCAEIgBAGQAAAAAAABQAAAAAAABQABABAAAAQAAABAAAAIACABIABABIAAACIABACIgBAGIgDAAIgBACIAAACIAAAFIACAEIgBABIgBgCg");
	this.shape_89.setTransform(193.3,-14.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F5EDB6").s().p("AgCAAIACgBIADAAIgDABIAAAAIAAAAIAAABIgCABg");
	this.shape_90.setTransform(192.5,-15.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_91.setTransform(191.8,-14.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCABIgDAAIAHgBg");
	this.shape_92.setTransform(191.7,-15.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F4ECB4").s().p("AgFAPIgBgEIgBAFIgBgHIACgCIABAAIABgBIAAAAIACAAIAAADIAAADIABACIABACIAAACIgEABIgBgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgCABIgBABIgDABIABgDIgBAAIACgGQABgEABgDIADgDIAAAEIADgEQACgCACgBIAAAHIADAAIgBACIgEACIgCAEIgBADIgBAGIAAgBg");
	this.shape_93.setTransform(193.1,-15.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DCDAD7").s().p("AgDABIACgBIABgDIAAAAIAFADIgFAEIgDgDg");
	this.shape_94.setTransform(202.2,-19.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D2B257").s().p("AgJABIADAAIADAAIADgBIACgFIgDgDIACAAIADAAIAEACIACACIgDAEIgDACIgDACIgDADIgHACg");
	this.shape_95.setTransform(199.5,-17.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_96.setTransform(199.1,-17.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_97.setTransform(199,-17.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#252211").s().p("AgaAMIgDgEIAAgEIAAAAIAAgBIAAgBIAAAAQAAgBAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAFACIAAAHIAAABIgDADIgCABIgEABIAAAEIgEgFgAARgFIAAAAIAFgBIgFgDIAAgEQADAAADgDIADAAIAEADIgDAFIgDADIgEAAIgDAAgAAYgMIAAABIAAAAIABgBIgBAAgAAXgOIAAAAIABAAIgBAAg");
	this.shape_98.setTransform(196.7,-16.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_99.setTransform(201.3,-21.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#543E26").s().p("AgBADIACgDIgBAAIAAAAIgCAAIgDAAIgBAAIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_100.setTransform(202.4,-20.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#927238").s().p("AAAAKIADgHIADgEQgGAAgEABIgCAAIgBACIgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIADgDIADgDIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIACAFIACAEIgDALIgEADg");
	this.shape_101.setTransform(202.6,-20.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#AC8132").s().p("AABAIIADgGIgIgBIgKAAIAHgBIAHAAIACAAIAEAAIAFgDIAEgEQgCADAAAEIAAAAIgBgBQgDAGgEADIgEAAg");
	this.shape_102.setTransform(200.3,-21.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B89844").s().p("AAAAOIgBgCIgCAAIgBgBIgDgBIABgDIgCABIAFgHIAAgBIADgDIABgFQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIAEADIADAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACIgDACIgBADQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABABIgBACIABABIACgCIACgBIgBADIADAAIgEADg");
	this.shape_103.setTransform(202.2,-21.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CBA94C").s().p("AAAgBQABgBACgDQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAFQgBgFADgCg");
	this.shape_104.setTransform(202.1,-22.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6BD62").s().p("AAAAEIgDAAIACgDIABgBIAAgBIACgBIACgBIAAAHIgCAAIgCAAg");
	this.shape_105.setTransform(194.8,-17.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F8F3E4").s().p("AgKAtIgMAAIgIAAIgDAAIgGAAIgFAAIgCgBIAAgBIAAgEIAAgFIAAgKIAAgFIAIgBIAHAAIAAgEIAAgEIABADIADAAIADABQADgCAFgBIAHgDIACgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBgBIAAAAQgDAAgFABIgHACQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgBIAAgFQABgCADgBIABgIQgCgDgDgBIAAgFIAAgJIAAgBIACAAIADgBIACgDIACgBIAEgCIgBAFIAAADIACAEIABAEIABAEIACgBIAAgCIACABIACACIABAEIABACIAGgCIABgHIAAAAIgCgCIgCgCQAAgDADgDIABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBAAIAAAEIAAAEIAAAAIAAAIIAAAlIAAABIAIAAQAGAAADgCQAFgEADgGQACgGABgEQAAgIgBgIQgCgIgEgGIAEAAIAIABQAFAAADgBQADACAAAEIABAGIABAEIABAFIgCAHIgDAGQgFALgHALIAEgCIADgBIgEAEIACABIgBAFIADgBQABADgCADIgEAEIADgBIADgBIACAAIACgBIADABQgHAEgHADQgIACgIAAg");
	this.shape_106.setTransform(198.5,-14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#938357").s().p("AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_107.setTransform(194.8,-17.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#242110").s().p("AAAATIgHgDQAEgBADABIAHADIAAACIgHgCgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADAAIgCgDIAFABIgBAAIAAABIgCACIgDABIgCgEg");
	this.shape_108.setTransform(194.5,-16);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E5C66B").s().p("AgCAFIABgBIgDgBIAAgEIAAgEIAEABIAAAAIADADIACABIgDABIgCAEIgBABg");
	this.shape_109.setTransform(194.3,-17.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_110.setTransform(193.9,-18.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIACgBIAAACIgCACIgFAAg");
	this.shape_111.setTransform(196.8,-17.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F5F2E6").s().p("AgCAAIACAAIABgCIABABIABABIgCAAIgBAAIAAACIgBABIgBgDg");
	this.shape_112.setTransform(194.8,-18.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_113.setTransform(193.2,-18.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F4EFC8").s().p("AgGADIADgDQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgGgBIAAACQgBAAgBADIgFAEIAAgFg");
	this.shape_114.setTransform(193.6,-17.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A78E32").s().p("AgEAMQABgJACgEQABgHAFgFIAAADQgFAIgCAJIgCAGIAAgBg");
	this.shape_115.setTransform(193.2,-18.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_116.setTransform(198.6,-21.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F3EBDB").s().p("AAbAwQACgDAAgCIgDAAIABgEIgCgCIAEgEIgDABIgFACQAIgLAFgLIADgHIABgHIAAgDIgCgFIAAgGQAAgDgDgCQgDABgFgBIgIgBIgFABIgBgBIgCgDIgDgCIgEAAIgCAAIgCgBIgFgBIgCACIgDACIgFAEQADAEAGACIgBAGIgGADIgBgDIgBgEIgCgBIgCgCIgBADIgCABIAAgFIgCgEIgBgEIAAgDIABgEIgFABIgCACIgBACIgDABIgDAAIABAAIACgDIAAgCIgDABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIACgCQgDgCgDABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgCAFIgEAAIACgDIgCgCIgBgBIAAgLIAAgDIAAgDIAAgDIANAAIABAAIACAAIADAAIAOAAIAfAAIAFAAIAEACIADAAIABABIACABIACABIgCAEIgCADIAEADIAGgHIACACIADADQAIAHAFAKQAEAJAAALIAAAEQABAMgDAJIgGAOIgGAIIgFAEIgCgBIgCABIgCABIgDABIgDAAIADgEgAAkggIgBACIAAACIACAEIAEAEQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAIAAgEIgCAAQACgEgBgDIgGABg");
	this.shape_117.setTransform(199.4,-15.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_118.setTransform(196.4,-21);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A78F33").s().p("AgBANIABgKIAAgIIAAgDIABgEIABAIIAAAGIgCAGIAAAFg");
	this.shape_119.setTransform(195.4,-22.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DFC068").s().p("AgDAOIADgFIAAgGIAAgGIAAgIIAAgCIACAEIABAEQAAAFgBAEQgCAGgBAEg");
	this.shape_120.setTransform(195.7,-22.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C79C3B").s().p("AgFAPQAEgFABgFQAAgFAAgFIAAgEIgCgDIACgCIAAACIABAFIABAGIAAABIABAFIABABIACABIgCACIgEACIgCAEg");
	this.shape_121.setTransform(196,-22.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B58634").s().p("AgBAJIgCgBIgBgEIABgEIgBgEIgBgFQADACACADIACAFQABAEADADIAAACQgFgCgBACg");
	this.shape_122.setTransform(196.7,-22.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIADgBIgBABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_123.setTransform(199,-16.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");
	this.shape_124.setTransform(199,-15.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");
	this.shape_125.setTransform(199,-15.1);

	this.total = new cjs.Text("99", "bold 14px Comic Sans MS");
	this.total.textAlign = "right";
	this.total.lineHeight = 16;
	this.total.lineWidth = 62;
	this.total.setTransform(180.4,-27);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CEB052").s().p("AgMAAIACgBIABgDIACAAIACAAIAFgCIAAACIADAEIAEAAIAEAAIABAAIABAAIgBABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAAAABIgEACQgIgEgKgDg");
	this.shape_126.setTransform(195.4,-69.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C2A44D").s().p("AgGAIIgGACIADgDIACgEIgBgDIgBgDIAAgDIABgDIACAAIADADIADACQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIgBgDIAMAAQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgDABQgBAEgCAAIgCAAIgCADIAAgBIgBABIgDAEIgCADg");
	this.shape_127.setTransform(196.1,-70.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#ECD592").s().p("AgNAMIAAgBIADgBIADAAIAHAAIgCgCIAAgCIAAgBIgEgDIADgCIACgCIACgCIAGgBIABgCIADgDIADgBQgBAHgCAEQgDAGgFAEQgDACgDAAIgKAAg");
	this.shape_128.setTransform(199.9,-75.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#71694F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_129.setTransform(199.1,-80.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#696148").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_130.setTransform(199,-80.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#DFCD88").s().p("AgNgLIAHgCIAFgCIABgDIADgEIADgEIABACQAEAFACAIQABAHAAAHIgDABIgDACIgCACIgFACIgCACIgDADIgCACIADAEIAAABIABABIACACIgHAAIgDAAIgDABIAAglgAgNgXIAEADIgEAAg");
	this.shape_131.setTransform(199.9,-77.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C4A859").s().p("AAAABIgBgBIABAAIACAAIAAABIgCAAg");
	this.shape_132.setTransform(195,-75.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D6D6D5").s().p("AgKAAIAAgCIAEACQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAIAGgBQAEAAADAAQgEADgGAAQgEAAgHgDg");
	this.shape_133.setTransform(196.6,-76.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#927D49").s().p("AgCABIACgBIADgCIAAADIgCAAIgBACIgCgCg");
	this.shape_134.setTransform(194.9,-75.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D2B159").s().p("AAKAOIgDgDIAIAAIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEgCgAgNgGIgCgJIACADIACACIABgBIADACIAAAJQgDgCgDgEg");
	this.shape_135.setTransform(194.7,-73);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E5CB7A").s().p("AgOALIADgJQACgCgBgFIAAgDIACgDIAAgCIgCgCQADgEABgHIABADIACAIQADAFABADIAAAEIAAADIAAABIABABIAGAAIAGAAIgBADIAAAEIABADIABAEIgCAEIgCAEIgCAAIgCAAIgCACIgBABQgKgHgIgJg");
	this.shape_136.setTransform(193.7,-72.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D7C27C").s().p("AAAACIAAgCIABgBQAAABgBACg");
	this.shape_137.setTransform(193.1,-76.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#DFC677").s().p("AAEAHIgCgBQgCgCgCgDIgDgCIAAgFIADADIACADIACAAIACABIACABIAAAFIgCAAg");
	this.shape_138.setTransform(194.6,-75.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EED88B").s().p("AgGAIIgCgEIgBgEIABgBIABgCIADAAIABgGIABABIAAAFIACADQABACAEACIACABIACAAIgGAAIgGAAIAAAFg");
	this.shape_139.setTransform(194.3,-75.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E7E3DB").s().p("AgHANIgDAAIgBgDIAAgEIAAgFIAAgBIAAgNIAAgBIAAAHIAAAEIACACIgBABIAAACQAOAFAIgGIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCADIgHACQgDABgDADIgDgCg");
	this.shape_140.setTransform(196.5,-76.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#DFDDD9").s().p("AgBABIAAgHQABABACACIgBAGQgBABgBADIAAgGg");
	this.shape_141.setTransform(195.5,-78.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6E6342").s().p("AAAALIgDgCIgBgBIAAgCIgBgDIAAgBIgCgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIABgFIABgFIABgBIAAABIgBABIAAAAIABAEIADAEIACAEIAAgBIADABIADAAIACABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgEIgBAAIADgDIAAAMIgIgDQgCAAgEABIAGACIAIACIAAAEIgDACIgEADIgCgEg");
	this.shape_142.setTransform(194.3,-77);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#39331F").s().p("AABABIgBgBIgDAAIAAAAIADgBIABgBIABAAIABACQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgCgDg");
	this.shape_143.setTransform(194.8,-77.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E6BD62").s().p("AAAAEIgDAAIACgDIABgBIAAgBIACgBIACgCIAAAHIgCABIgCAAg");
	this.shape_144.setTransform(194.8,-79.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#DFC57C").s().p("AgDAAIgCAAIADAAIADgBIACABIACgBIAAADQgFgCgDAAg");
	this.shape_145.setTransform(194.7,-79.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#938357").s().p("AAAABQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABAAIACABIgCAAIAAAAg");
	this.shape_146.setTransform(194.8,-80.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#242110").s().p("AAAATIgHgCQAEgBADAAIAHADIAAABIgHgBgAAAgTIAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIADAAIgCgDIAFABIgBABIAAAAIgCACIgDABIgCgEg");
	this.shape_147.setTransform(194.5,-78.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E5C66B").s().p("AgCAFIABgBIgDgBIAAgEIAAgEIAEABIAAAAIADADIACABIgDABIgCAEIgBABg");
	this.shape_148.setTransform(194.3,-79.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F5F2E6").s().p("AgCAAIACAAIABgCIABABIABABIgCAAIgBAAIAAACIgBABIgBgDg");
	this.shape_149.setTransform(194.8,-80.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FCFCF4").s().p("AAAACIAAgDIAAABIABAAIgBACIAAAAg");
	this.shape_150.setTransform(193.9,-80.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EBCC73").s().p("AgEALIACgGQACgKAFgHIAAALIgDACQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAFIgDAEg");
	this.shape_151.setTransform(193.2,-80.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F4EFC8").s().p("AgGADIADgDQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgEIAAAGIACAAIAEAAIAAABIgGgBIAAACQgBAAgBADIgFAEIAAgFg");
	this.shape_152.setTransform(193.6,-80.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#A78E32").s().p("AgEALQABgHACgEQABgIAFgFIAAAEQgFAGgCAKIgCAGIAAgCg");
	this.shape_153.setTransform(193.2,-81.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#DCBA5A").s().p("AgGACIAEgCIACgBIACAAIADABIABAAIABACg");
	this.shape_154.setTransform(196.4,-83.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B58634").s().p("AgBAJIgCgBIgBgEIABgEIgBgEIgBgFQADACACADIACAFQABAEADADIAAACQgFgCgBACg");
	this.shape_155.setTransform(196.7,-85);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A78F33").s().p("AgBANIABgKIAAgIIAAgDIABgEIABAIIAAAGIgCAGIAAAFg");
	this.shape_156.setTransform(195.4,-84.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DFC068").s().p("AgDAOIADgFIAAgGIAAgGIAAgIIAAgCIACAEIABAEQAAAFgBAEQgCAGgBAEg");
	this.shape_157.setTransform(195.7,-84.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C79C3B").s().p("AgFAOQAEgDABgGQAAgFAAgEIAAgFIgCgDIACgBIAAABIABAFIABAFIAAACIABAFIABABIACABIgCACIgEADIgCACg");
	this.shape_158.setTransform(196,-84.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#DCDAD7").s().p("AgDABIACgBIABgDIAAAAIAFADIgFAEIgDgDg");
	this.shape_159.setTransform(202.2,-82.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#252211").s().p("AgaAMIgDgEIAAgEIAAAAIAAgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAFACIAAAHIAAABIgDADIgCABIgEABIAAAEIgEgFgAARgFIAAgBIAFAAIgFgDIAAgEQADAAADgDIADAAIAEADIgDAFIgDACIgEABIgDAAgAAYgMIAAABIAAAAIABgBIgBAAgAAXgOIAAAAIABAAIgBAAg");
	this.shape_160.setTransform(196.7,-78.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D2B257").s().p("AgJABIADAAIADgBIADAAIACgFIgDgDIACAAIADAAIAEACIACACIgDAEIgDACIgDADIgDACIgHACg");
	this.shape_161.setTransform(199.5,-79.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D7D7D5").s().p("AAGAEIAFgEIADAAIADgCIAEABIADABIgDAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQgDACAAADIACACIACACIAAABQgGgCgDgEgAgTAAIAAgDIACgBIABgBIgBgBIgBAAIgDABIgBADIAAACIgBAAIAAAAIAAAAIABgFQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQACgBADACIgBACQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIACgBIAAACIgCACIgFAAg");
	this.shape_162.setTransform(196.8,-80.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D2A83E").s().p("AgNAEIgBgDIgBgBIgDAAIgCAAIACgCQACgCAGACIALACIAKAAIAKAAIgDAEg");
	this.shape_163.setTransform(198.6,-83.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8C6228").s().p("AgCAEQACgDADgGIAAAEIgDAFIABgBIgBADIgCgCg");
	this.shape_164.setTransform(201.3,-83.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CBA94C").s().p("AAAAAQABgCACgEQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCADIgCAGQgBgHADAAg");
	this.shape_165.setTransform(202.1,-84.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#AC8132").s().p("AABAHIADgFIgIgBIgKAAIAHgBIAHAAIACAAIAEAAIAFgCIAEgFQgCADAAAEIAAAAIgBgBQgDAFgEAEIgEgBg");
	this.shape_166.setTransform(200.3,-84);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F3E19D").s().p("AAAAXIgBgDIgBgCQgGgIgBgJIABgDIABACIACADIAEAAIAAAAQABgDAAAAIAAABIgCgBIgBgCIAAgDIAAgCIgDAAIAAAAIADgDIgDAAIgBAAIACgBIACgCIACgGIAAAFIAAADIAAADIABABIAAgGIAAgGIADgDIADgCIADABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAABIAAABIgCAEIgBAGQAAAAAAABQAAABAAAAQABABAAAAQAAABAAAAIACABIABABIAAACIABACIgBAGIgDAAIgBACIAAACIAAAFIACAEIgBACIgBgDg");
	this.shape_167.setTransform(193.3,-76.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C1A956").s().p("AAAAAIAAAAIABAAIgBAAIAAAAIAAABIAAgBg");
	this.shape_168.setTransform(191.8,-77.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F5EDB6").s().p("AgCAAIACgBIADAAIgDABIAAAAIAAAAIAAABIgCABg");
	this.shape_169.setTransform(192.5,-77.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BFA64C").s().p("AAEAAIgCAAIgCABIgDAAIAHgBg");
	this.shape_170.setTransform(191.7,-78);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F4ECB4").s().p("AgFAPIgBgEIgBAFIgBgHIACgCIABAAIABgBIAAAAIACAAIAAADIAAADIABACIABACIAAACIgEABIgBgEgAAAAFIAAgCIAAgDIAAgDIgCAEIgCABIgBABIgDABIABgDIgBAAIACgGQABgEABgDIADgDIAAAEIADgEQACgCACgBIAAAHIADAAIgBACIgEACIgCAEIgBADIgBAGIAAgBg");
	this.shape_171.setTransform(193.1,-78.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D2BA6B").s().p("AgQAFIACgBIADgCIADgCIAEAAIAEAAIAAAAIAEAAIAGgDIAEgCQADgBACACQgJAEgKACQgIAEgKAAIACgBg");
	this.shape_172.setTransform(201.8,-68.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E0CD81").s().p("AgoASIAEgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIACABIACACIADgCIADgCIACABIACgCIADgCIADgDIAEgEIAEgBIAEgBIACAAIABAAIACgCIACgBIADAAIACgBIAEgDIADgCIADgEIACgDIACgBIACAAIADgCIAEgCIADAAIADABIABABIAAACIAAACIAAACIAAACIgDAGIgDAFIADAAIgCACIgDACIgCACIgCADIgDACIgFADIgGACIAAgCIgEABIgEABIgDACIgDACIgBABIgCABIgIAAQgPAAgOgEg");
	this.shape_173.setTransform(200.2,-70.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D8C173").s().p("AghAXIgCgBIAAgBIgBgBIAAgBIgFAAIgDAAIgEgEIACgDIACgEIACgBIACABIACgEIACABQABgCABgDIAEAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAbAAQAGAAAIgDQAHgCAGgFIAFgEIAEgBIAFgCIADgCQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABIABABIACACQgCACAAAEIAAAEIgBAFQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgCACIgEADQgCACgBACIgDAAIADgGIADgEIAAgCIAAgCIAAgCIgBgCIAAgBIgDgBIgDAAIgEACIgDACIgCAAIgCABIgDADIgCAEIgDAAIgEADIgCABIgDAAIgCABIgCACIAAAAIgDABIgEACIgEABIgEAEIgDADIgDACIgDACIgBgBIgDACIgEACg");
	this.shape_174.setTransform(200.4,-71.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BA9040").s().p("AgLAWIACgDIACgCIADgCIACgDQABgCABgCIADgDIADgEQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIABgEQAAgEABgCIABgDIABgEIACACIABAHIAAAGIABAOQgKAKgJAHQgCgCgDABIgFACIADgCg");
	this.shape_175.setTransform(204.3,-71.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C0993A").s().p("AAAgGIABABIACAAIABACIABACIgDADIgCABIAAABIgCACIgCABIAEgNg");
	this.shape_176.setTransform(204.6,-74.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CCA847").s().p("AgDAOIACgBIABgCIAAgBIADgBIACgFIgBgCIAAgCIgCAAIgCAAQADgIAAgMIACAJIACAEIABAFIABACIAAAFIACAFIgBAFIgCgDIgBAEIgBADIgBgCIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBACIgEACIgFABIAHgHg");
	this.shape_177.setTransform(204.6,-75.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F8F3E4").s().p("AgKAuIgMAAIgIAAIgDAAIgGAAIgFAAIgCgCIAAgBIAAgEIAAgFIAAgLIAAgEIAIAAIAHAAIAAgGIAAgDIABADIADAAIADABQADgCAFgBIAHgDIACgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAIAAAAQgDgBgFABIgHACQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgEgBIABgCIgCgBIAAgFQABgDADgBIABgIQgCgCgDgBIAAgGIAAgJIAAAAIACgBIADAAIACgCIACgCIAEgCIgBAFIAAADIACAEIABAEIABAFIACgCIAAgDIACACIACACIABAEIABACIAGgCIABgHIAAgBIgCgBIgCgCQAAgDADgDIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAEAAQgDADgBAAIAAAEIAAADIAAABIAAAIIAAAlIAAACIAIAAQAGAAADgDQAFgDADgHQACgGABgEQAAgJgBgHQgCgIgEgFIAEgBIAIABQAFABADgBQADACAAACIABAHIABAEIABAFIgCAIIgDAFQgFALgHALIAEgCIADgBIgEAEIACABIgBAFIADAAQABACgCADIgEAEIADAAIADgBIACgBIACgBIADABQgHAEgHADQgIADgIAAg");
	this.shape_178.setTransform(198.5,-76.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#988430").s().p("AgcBfQgRgFgOgLQgPgKgJgPQgIgMgEgPQgEgOAAgNQAAgQAGgQQAFgQALgNQAMgQATgKQASgKAUgCQAOgBAQAEQAQADANAJQANAHAKAMQALALAGAOQAGAOACAQQACAOgDAPQgDAQgIAOQgIAOgMAKQgLALgPAHQgPAHgQABIgKABQgOAAgOgFgAgBhgQgPAAgPAGQgPAFgNAKQgMAKgJAOQgJANgEAQQgEAPABAOQACARAGAOQAGANAJALQAJALAMAIQALAHAOAEQANAFAOAAQAMAAAOgEQAOgEALgHQASgLALgRQAMgSADgUQADgPgCgNQgCgPgHgOQgGgNgKgKQgKgLgMgIQgMgGgNgEQgMgDgLAAIgCAAgABAARIgBgEIgBgEIgDgJIAAgEIABAEIACAFIACAIQACAFgBADIgBgEg");
	this.shape_179.setTransform(199,-77.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#7A6A2A").s().p("AgbBcQgOgEgLgHQgMgIgJgLQgJgLgGgNQgGgOgCgRQgBgOAEgPQAEgQAJgNQAJgOAMgKQANgKAPgFQAPgGAPAAQAMAAANADQANAEAMAGQAMAIAKALQAKAKAGANQAHAOACAPQACANgDAPQgDAUgMASQgLARgSALQgLAHgOAEQgOAEgMAAQgOAAgNgFgAgLhdQgOACgNAFQgPAHgMANQgNAMgHAPQgGANgCANQgCANACANQACAPAHANQAGAOAKAKQAJAJAMAHQAJAGALADQARAGASgCQAKAAAKgEQAKgDAJgFQAMgHAJgKQAOgOAHgTQAHgUgCgSQgBgRgHgQQgIgQgNgMQgKgKgNgHQgNgGgPgDIgOgBIgLABgAgtACIAAABIAAACgAgxgQIABABIACABg");
	this.shape_180.setTransform(199,-77.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E6DED7").s().p("AAAACIgDgCIABgCIABgCIADgBQACADgCACIABAAIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgEg");
	this.shape_181.setTransform(203.3,-80.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#543E26").s().p("AgBADIACgDIgBAAIAAAAIgCAAIgDAAIgBAAIABAAIABgCIACgBQADgCAGAAIgCAFIgDAGIgDgDg");
	this.shape_182.setTransform(202.4,-83);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F3EBDB").s().p("AAbAwQACgDAAgCIgDAAIABgEIgCgCIAEgEIgDABIgFACQAIgLAFgLIADgHIABgHIAAgDIgCgFIAAgGQAAgDgDgCQgDABgFgBIgIgBIgFABIgBgBIgCgDIgDgCIgEAAIgCAAIgCgBIgFgBIgCACIgDACIgFAEQADAEAGACIgBAGIgGADIgBgDIgBgEIgCgBIgCgCIgBADIgCABIAAgFIgCgEIgBgEIAAgDIABgEIgFABIgCACIgBACIgDABIgDAAIABAAIACgDIAAgCIgDABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIACgCQgDgCgDABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIgCAFIgEAAIACgDIgCgCIgBgBIAAgLIAAgDIAAgDIAAgDIANAAIABAAIACAAIADAAIAOAAIAfAAIAFAAIAEACIADAAIABABIACABIACABIgCAEIgCADIAEADIAGgHIACACIADADQAIAHAFAKQAEAJAAALIAAAEQABAMgDAJIgGAOIgGAIIgFAEIgCgBIgCABIgCABIgDABIgDAAIADgEgAAkggIgBACIAAACIACAEIAEAEQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAIAAgEIgCAAQACgEgBgDIgGABg");
	this.shape_183.setTransform(199.4,-77.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B59544").s().p("AgBAAIACgBIABABIgBACIgCgCg");
	this.shape_184.setTransform(203.1,-82.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B89844").s().p("AAAANIgBgBIgCAAIgBgBIgDgBIABgDIgCACIAFgIIAAAAIADgEIABgFQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAEAEIADAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACIgDACIgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABACIgBABIABABIACgBIACgBIgBACIADAAIgEACg");
	this.shape_185.setTransform(202.2,-84);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#927238").s().p("AAAAKIADgHIADgEQgGAAgEABIgCAAIgBACIgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIADgDIADgDIADgCQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIACAFIACAEIgDALIgEACg");
	this.shape_186.setTransform(202.6,-83.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#BA9F33").s().p("ABEBAIgBgGIgBgHIABgEIgBgFIgBgGQABgDgCgFIgCgIIgCgFIgBgGQgBgJgEgJQgEgKgIgHIABgCIACADIACgFIABgGQABgEAAgFIgBgJIgCgFIgCgEQgDgCgDABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIAAABQgCAEgDABIgFAFIgFAEIgEAAIgEAAIgHABIgFABIgNgCIAAgCQgEgDgBgEIgDgHQgDgDgDgCIgCgBIgCABIAAACIgBAEIAAADIgBAKIgDAKIgNAAIgBADIAAADQgFAFgDAHQgCAGgBAIIAAACIAAACQgCACgBADIgCAHIABAAIgBAEIADgBIABAAIgEABIAAADIADgBIgBABIgCABIABAIQABAJAFAIQAAAGgDAEIABACIABACIgCADIAAAEQAAAEgBAFIgEAIQgKgKgGgOQgHgNgCgPQgCgOACgOQACgLAGgNQAHgPANgMQAMgNAPgHQANgFAOgCQAMgCANACQAPADANAGQANAHAKAKQANAMAIAQQAHAQABAPQACAUgHAUQgHATgOAOIAAgQgAhGASIgBAAIgBACIABgBIABAAIABgBIAAgBIgBABgAhMAMIAEAAIADgBIACgCIgJADg");
	this.shape_187.setTransform(199,-79.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A17C34").s().p("AABAQIgBgEIADgMIgBgDIgCgEIgCgEIgEgEQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAACABIACAEIACAFIABAIQAAAFgBAEIgBAFIgCAFIgCgDg");
	this.shape_188.setTransform(203.2,-83.7);

	this.coinsOwned = new cjs.Text("99", "bold 14px Comic Sans MS");
	this.coinsOwned.textAlign = "right";
	this.coinsOwned.lineHeight = 16;
	this.coinsOwned.lineWidth = 62;
	this.coinsOwned.setTransform(180.4,-89.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AphKjQgIgHAAgWIACgbIAAgcIAAgHIgBgHQAAgKAKAAQADAAADABIAOgCIAOgBQARAAALADQAFADABAGQgBAEgCACQgDAEgDAAIgEgBQgLgDgKAAIgLABIgNACIAAAbIAagCIARgBQAEAAADACQADADAAAEQAAAIgJABIgQACIgeACIAAAOQAAAOABACIAJAAIANAAIANAAIAEAAIAEgBQAEAAADACQADADAAAFQAAAHgIACQgHABgVAAQgXAAgGgGgAH8KlQgCgDAAgEIABgIIAAgJIAAgMIAAgMIAAgNIAAgNIgBgMIgBgMQAAgEADgEQAEgDAEAAQAGAAAGAJQAfAsAeAcIAAgKIgBguIAAgHIgBgIQAAgJAKAAQALAAAAAiIAAALIgBArIgBALQgBAJgIAAQgFAAgGgFQgbgYghgrIAAAWIAAAQIAAAQQABAVgLAAQgEAAgEgDgAgiKlQgDgDAAgEIABgIIAAgJIAAgMIAAgMIAAgNIAAgNIgBgMIgBgMQABgEADgEQADgDAFAAQAFAAAHAJQAcAsAfAcIAAgKIgBguIgBgHIgBgIQABgJAJAAQAMAAAAAiIAAALIgBArIgBALQgBAJgJAAQgFAAgGgFQgagYgfgrIAAAWIAAAQIAAAQQAAAVgKAAQgFAAgDgDgAjhKlQgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgNIAAgNIgBgMIgBgMQAAgEADgEQAEgDAEAAQAGAAAGAJQAfAsAeAcIAAgKIgBguIgBgHIAAgIQAAgJAKAAQALAAAAAiIAAALIgBArIgBALQgBAJgJAAQgFAAgGgFQgagYghgrIAAAWIAAAQIAAAQQAAAVgKAAQgEAAgEgDgAm0KdIgEgQIgHgkIgKAdIgEANQgDAHgCAFQgEAGgHAAQgGAAgEgHIgDgNIgKglIgIAiIgDAPQgDAKgIAAQgEAAgDgDQgCgDAAgEQAAgLAFgQIAHgaIAEgVQADgPAEgFQAEgFAFAAQAGAAADAHQADAGADASQADASAGAUQAIgUAGgYIAFgQQADgKAIAAQAHAAAEAMIADARQAEAdAGAVIAGAXQAAAEgDACQgDADgEAAQgHAAgEgLgABRKdQgKgJABgTQAAgSAJgSQAIgTAOgLQAJgIALAAQAGAAAMAFQAOAFAAAHQAAADgEADQgCADgEAAQgCAAgHgEQgIgDgFAAQgHAAgKANQgPATAAAXQAAALADAEQAEAEAKAAQAKAAAJgGQAIgGAEgMQgQABgMAGIgEABQgEAAgDgEQgDgCAAgEQAAgKAZgFQAOgCATAAQAEAAADADQADACAAAEQAAAFgFADQgFAUgOANQgOAMgTAAQgSAAgJgKgAJxKfQgIgHAAgIQAAgEACgDQADgDAEAAQAHAAACAGQAFAJANAAQAMAAALgGQALgFABgGQAAgJgIgCQgFgCgPgBQgMAAgJgEQgNgGAAgKQABgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgIABgJAEQgHAEgBAFQAAADADABIAIADIARABQAPABAJAHQAJAIAAAPQAAARgTAKQgQAGgUAAQgRAAgKgHgAFKKbQgPgNAAgTQAAgYAOgTQARgVAZAAQAYAAAMALQAMALgBAWQAAAXgNATQgPAVgaAAQgTAAgPgLgAFZJcQgLAOABARQgBALAKAHQAIAHAMAAQAQAAAKgPQAJgNAAgRQAAgPgHgFQgGgGgPAAQgPAAgLAPgAGsKiQgDgDABgEQAAgDACgDQADgDAFAAIAMgBIAAgfQAAgSACgRIgPAAQgEAAgDgCQgDgDABgEQgBgEADgDQADgCADAAIAUgBQAOAAAUADQAIABAAAIQAAAFgDACQgDACgDAAIgSgBIgBAhIAAAfIATgBQADAAADADQADADAAAEQAAAEgDACQgDADgEAAIgMAAIgLAAIgOACIgOABQgEAAgDgDgAhyKiQgDgDAAgEQAAgDADgDQADgDAEAAIANgBIAAgfQAAgSABgRIgPAAQgEAAgCgCQgDgDAAgEQAAgEADgDQACgCADAAIAVgBQANAAAUADQAJABgBAIQAAAFgCACQgEACgDAAIgSgBIgBAhIAAAfIATgBQAEAAADADQADADgBAEQAAAEgCACQgDADgFAAIgLAAIgLAAIgPACIgOABQgEAAgCgDgAkxKiQgCgDgBgEQAAgDAEgDQACgDAEAAIAOgBIAAgfQgBgSACgRIgPAAQgEAAgDgCQgCgDgBgEQABgEACgDQACgCAEAAIAUgBQANAAAVADQAIABAAAIQAAAFgDACQgDACgDAAIgSgBIgBAhIAAAfIATgBQAEAAADADQACADAAAEQAAAEgDACQgCADgFAAIgLAAIgMAAIgOACIgOABQgEAAgDgDgArAKiQgDgDABgEIAAgPIAAgPIAAg4QAAgEACgEQAEgEAGAAIARACQAJABAIADQAcAPAAAWQAAAJgFAGQgHAHgMAFQASAKAKALQACACAAAEQgBAEgCACQgDADgEAAQgDAAgEgDQgUgTgZgIIAAAWQAAAEgCADQgDADgEAAQgEAAgDgDgAqwJxIADAAQARAAAIgEIAHgFQACgDAAgBQABgIgKgHQgKgHgKgBIgIAAgAlSKYQgDgIgDgLIgRABIgQACIgLAXQgDAFgGAAQgDAAgDgDQgEgCAAgEQABgEAJgUIAAgEQAAgDAHgCIAVgjQARgaAEAAQAIAAACAJIAEAWIAKAtIAEAJQADAGgBADQAAAEgCADQgDACgEAAQgFAAgGgMgAlvJ3IAKgBIAJgBIgFgXIgOAZgADuKZQgKgLAAgPQAAgXAUgYQARgUASAAIAFAAIAEABQAEgDAEAAQAGAAADAIIAAAOQAAADgBADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFAAQgJAAgLANQgQATAAAQQAAAIAFAFQAFAFAHAAQAHAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgEADQgSAQgUAAQgQAAgKgLgAJ6AnIACgWQACgbAAglQAAgEADgCQACgDAFAAQAEAAACADQADACAAAEQAAAlgCAcIgCARQARAAAagIIACAAQAFAAADADQABADAAADQAAAGgFADQgIADgRADQgPADgLAAQgQAAgBgPgAgHAuQgRgOAAghIAAgJIAAgKIAAgIIABgIQAAgFABgFQADgGAFAAQADAAAEACQADADAAAEIAAALIAAAMIgBAJIAAAKQgBAIADAJQADALADAEQADACALABQASAAAGgfQAEgOAAgdQAAgEACgEQADgEAGAAQAEAAADADQACADAAADQgBAbgCAPQgEAVgLAPQgFAHgHAFQgJAFgJAAQgRAAgHgGgAjMAyQgEgDAAgEQAAgEAPgYIgQgVIgVgjQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEADgDQADgDAEAAQAFAAADAFIAFAIIAMAUIANATIAPgfIAGgPQADgGAFAAQAFAAACADQADACAAAEQAAADgDAIIgPAfIgOAdIgMAVQgEAGgFAAQgEAAgCgCgAFSAoQgPgNgBgTQAAgWAPgTQARgVAZAAQAXAAAMALQAMALAAAWQAAAVgOATQgPAVgZAAQgUAAgOgLgAFggVQgKAOAAAPQAAALAJAHQAJAHAMAAQAQAAAKgPQAIgNABgPQgBgPgGgFQgGgGgPAAQgQAAgLAPgAh6AoQgQgNAAgTQAAgWAPgTQAQgVAZAAQAYAAALALQANALAAAWQAAAVgOATQgQAVgYAAQgVAAgNgLgAhtgVQgJAOgBAPQABALAIAHQAJAHANAAQAPAAAKgPQAJgNAAgPQAAgPgGgFQgHgGgPAAQgPAAgMAPgABQAvQgCgDgBgEIAAgPIAAgPIAAg2QAAgEAEgEQADgEAGAAIARACQAKABAGADQAdAPABAWQgBAJgFAEQgHAHgMAFQASAKAKALQABACAAAEQABAEgDACQgDADgEAAQgEAAgDgDQgVgTgZgIIABAWQAAAEgDADQgCADgEAAQgEAAgDgDgABgAAIADAAQARAAAIgEIAGgFQADgDAAgBQAAgIgKgHQgJgHgKgBIgIAAgAJbAlQgEgIgCgLIgRABIgRACIgKAXQgDAFgGAAQgEAAgDgDQgDgCAAgEQAAgEAKgUIgBgEQABgDAGgCIAVghQARgaAEAAQAIAAADAJIAEAWIAKArIAEAJQACAGAAADQAAAEgDADQgDACgDAAQgGAAgFgMgAI9AEIAKgBIAJgBIgEgVIgPAXgAHZAtQgDgCAAgEIABgDIAAgDIAAgKIgBgJIgBgXIgDgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEADgCQADgEAEABIALABIALABIAMgBIANAAIAQABIAPABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIACAcIABAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgEAAgDgDgAEIAtQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgJgCQgHgCgBgHQABgEACgCQADgEAEABIAMABIALABIAMgBIANAAIAPABIAPABQAFAAADACQACADAAAEQAAAEgCADQgDACgFAAIgQAAIgRgBIACAcIACAZIAAAHIABAHQAAAFgCAFQgEAFgEAAQgEAAgDgDgAH8o8QgCgDAAgEIABgIIAAgIIAAgMIAAgMIAAgNIAAgNIgBgNIgBgMQAAgEADgDQAEgDAEAAQAGAAAGAIQAfAtAeAcIAAgLIgBgtIAAgIIgBgHQAAgJAKAAQALAAAAAiIAAALIgBArIgBALQgBAJgIAAQgFAAgGgGQgbgYghgqIAAAVIAAARIAAAQQABAUgLAAQgEAAgEgDgAgEpAQgRgOAAgiIAAgKIAAgKIAAgIIABgHQAAgGACgFQACgGAFAAQAEAAADACQADADAAAEIAAAMIAAALIgBAKIAAAKQAAAKACAJQABALAGAEQADACALAAQASAAAGgfQADgQAAgdQAAgEACgDQADgFAGAAQAFAAACAEQACACAAADQAAAbgCAPQgEAYgMAPQgFAHgGAEQgJAGgJAAQgSAAgHgHgAjJo8QgEgDABgEQAAgDAOgZIgPgXIgWgiQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQABgEADgDQADgCADAAQAFAAAEAEIAFAJIAMAUQAGAMAGAHIAPggIAHgOQACgGAGAAQAEAAADACQADADAAAEQAAACgEAIIgOAfIgPAgIgLAVQgFAGgEAAQgFAAgCgDgAJxpCQgIgGAAgJQAAgEACgDQADgDAEAAQAHAAACAHQAFAIANAAQAMAAALgFQALgFABgHQAAgIgIgDQgFgCgPAAQgMgBgJgEQgNgFAAgLQABgNAOgLQAOgMAQAAQAHAAAKAEQAMADAAAFQAAAEgCADQgDADgFAAIgJgCIgKgBQgIAAgJAEQgHAEgBAFQAAADADACIAIACIARABQAPABAJAIQAJAIAAAOQAAASgTAJQgQAHgUAAQgRAAgKgIgAFKpGQgPgMAAgUQAAgXAOgTQARgWAZAAQAYAAAMALQAMALgBAWQAAAXgNATQgPAWgaAAQgTAAgPgMgAFZqFQgLAOABARQgBALAKAIQAIAGAMAAQAQAAAKgOQAJgOAAgRQAAgOgHgGQgGgFgPAAQgPAAgLAOgAh3pGQgPgMgBgUQAAgXAPgTQARgWAZAAQAXAAAMALQAMALAAAWQAAAXgOATQgPAWgZAAQgUAAgOgMgAhpqFQgKAOAAARQAAALAJAIQAJAGAMAAQAQAAAKgOQAIgOABgRQgBgOgGgGQgGgFgPAAQgQAAgLAOgAGso+QgDgDABgEQAAgEACgDQADgCAFAAIAMgBIAAgfQAAgTACgRIgPABQgEAAgDgDQgDgDABgEQgBgEADgCQADgCADgBIAUAAQAOAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAhIAAAfIATAAQADAAADADQADACAAAEQAAAEgDADQgDACgEAAIgMABIgLAAIgOABIgOABQgEAAgDgCgABUo/QgDgCAAgEIAAgPIAAgQIAAg3QAAgEADgEQAEgFAFABIASABQAJABAHAEQAdAOAAAWQAAAJgGAHQgHAHgMAEQATALAJAKQACADAAADQAAAEgDADQgCADgFAAQgDAAgDgDQgVgUgZgHIABAWQAAAEgDACQgCADgEAAQgFAAgCgDgABkpwIADAAQAQAAAJgEIAGgEQADgDAAgCQAAgIgKgHQgJgGgKgBIgIgBgADupIQgKgLAAgOQAAgXAUgYQARgUASAAIAFAAIAEABQAEgDAEAAQAGAAADAIIAAANQAAADgBADQgDAEgFAAQgGAAgDgHQAAAAgBgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBQgJAAgLAOQgQASAAARQAAAHAFAGQAFAFAHAAQAHAAAHgEIAKgGQAGgEACAAQAFAAACADQADADAAADQAAAFgEADQgSAPgUAAQgQAAgKgLg");
	this.shape_189.setTransform(138.2,-40.9);

	// window
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FF9900").ss(8,1,1).p("EglQgT3MBKhAAAMAAAAnvMhKhAAAg");

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("EglQAT3MAAAgntMBKhAAAMAAAAntg");

	// overlay
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(204,204,204,0.498)").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");

	this.addChild(this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.coinsOwned,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.total,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.coinsRemaining,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.confirm,this.instance_1,this.instance,this.plain,this.good,this.close);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.9,-239.9,640,480);


(lib.food_multiple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrows
	this.amount = new cjs.Text("00", "bold 30px Comic Sans MS");
	this.amount.textAlign = "center";
	this.amount.lineHeight = 32;
	this.amount.lineWidth = 39;
	this.amount.setTransform(32.7,12.3);

	this.next = new lib.arrow_nav();
	this.next.setTransform(57.6,0,1,1,0,0,180);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.prev = new lib.arrow_nav();
	this.prev.setTransform(-59.6,0);
	new cjs.ButtonHelper(this.prev, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev},{t:this.next},{t:this.amount}]}).wait(2));

	// btns
	this.plain = new lib.food_red_btn();
	new cjs.ButtonHelper(this.plain, 0, 1, 2, false, new lib.food_red_btn(), 3);

	this.good = new lib.food_blue_btn();
	new cjs.ButtonHelper(this.good, 0, 1, 2, false, new lib.food_blue_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plain}]}).to({state:[{t:this.good}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.8,-41.5,137.6,99.6);


(lib.shibe_tan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,no:5,eating:9,moonball:15,resting:23,mining:30,dead:37});

	// sprites
	this.idle = new lib.idle_tan();
	this.idle.setTransform(0,-9.5);

	this.no = new lib.nope_tan();
	this.no.setTransform(0,-9.5);

	this.eating = new lib.eating_tan();
	this.eating.setTransform(0,-9.5);

	this.moonball = new lib.moonball_tan();
	this.moonball.setTransform(0,-9.5);

	this.resting = new lib.resting_tan();
	this.resting.setTransform(0,-9.5);

	this.mining = new lib.mining_tan();
	this.mining.setTransform(12.4,0.4,1,1,0,0,0,0,-0.2);

	this.dead = new lib.dead_tan();
	this.dead.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.idle}]}).to({state:[{t:this.no}]},5).to({state:[{t:this.eating}]},4).to({state:[{t:this.moonball}]},6).to({state:[{t:this.resting}]},8).to({state:[{t:this.mining}]},7).to({state:[{t:this.dead}]},7).wait(6));

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


(lib.menu_bar = function() {
	this.initialize();

	// btns
	this.shop = new lib.shop_btn();
	this.shop.setTransform(269.8,2.1);
	new cjs.ButtonHelper(this.shop, 0, 1, 2, false, new lib.shop_btn(), 3);

	this.feedPet = new lib.food_multiple();
	this.feedPet.setTransform(-234.3,-0.5,1,1,0,0,0,0.3,0);

	this.mineDoge = new lib.mine_btn();
	this.mineDoge.setTransform(150,0);

	this.restPet = new lib.bed_btn();
	this.restPet.setTransform(31.3,0);

	this.playPet = new lib.moon_btn();
	this.playPet.setTransform(-89.4,0);
	new cjs.ButtonHelper(this.playPet, 0, 1, 2, false, new lib.moon_btn(), 3);

	this.addChild(this.playPet,this.restPet,this.mineDoge,this.feedPet,this.shop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-304.5,-42.1,611.8,99.7);


(lib.game = function() {
	this.initialize();

	// Shop
	this.shop = new lib.shop_screen();

	// Status
	this.stats = new lib.statusBar();
	this.stats.setTransform(-323.1,-243);

	// Menu
	this.menu = new lib.menu_bar();
	this.menu.setTransform(-3,176.9);

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("Egx/gWfIAAvAMBj/AAAIAAPAMAAAApPIAASwMhj/AAAIAAywg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egx/AUnMAAAgpOMBj/AAAMAAAApOg");
	this.shape_1.setTransform(0,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF2CA").s().p("Egx/AlgIAAyxMBj/AAAIAASxgEgx/gWfIAAvAMBj/AAAIAAPAg");

	this.addChild(this.shape_2,this.shape_1,this.shape,this.menu,this.stats,this.shop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.9,-239.9,640,480);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;