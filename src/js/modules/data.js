class Data {
  constructor() {
    this.navItemSelected = false; 
    this.icons = [];
    this.navToSets = ['back', 'eat', 'recreation', 'health', 'home'];
    this.navState = 'default';
    this.navItemMouseOn = {
	    position: {x:"0", y: "0", z:"-1"},
	    rotation: "0 0 0",
	    scale: "0.5 0.5 0.5",
	    scaleUp: "0.8 0.8 0.8"
	};
	this.navItemMouseClick = {
	    position: {x:"1", y: "1", z:"1"},
	    rotation: "0 0 0",
	    scale: "0.5 0.5 0.5",
	    scaleUp: "0.8 0.8 0.8"
	};
	this.navItemMouseClicked = {
	    position: {x:"1", y: "1", z:"1"},
	    rotation: "0 0 0",
	    scale: "0.5 0.5 0.5",
	    scaleUp: "0.8 0.8 0.8"
	};
    this.navItemFrontInParams = {
	    position: "1 1 1",
	    rotation: "0 0 0",
	    scale: "0.5 0.5 0.5",
	    scaleUp: "0.8 0.8 0.8"
	};
	this.navItemFrontOutParams = {
	    position: {x:"1", y: "1", z:"1"},
	    rotation: "0 0 0",
	    scale: "0.25 0.25 0.25"
	};
	
  }

  initData(){
  	this.navHolder2 = document.querySelector('#navHolder2');
  	this.backbtn = document.querySelector('#backbtn');
  	this.roomenvironment = document.querySelector('#sky');
  	this.global_layout = document.querySelector('#global_layout');
  	this.restaurants_room = document.querySelector('#restaurants_room');
  	this.mapElement = document.querySelector('#mapPlane');
  	this.switchItemEl1 = document.querySelector('.item_select1');
	this.navAssets = document.querySelectorAll('.navAsset');
	this.navbtns = document.querySelectorAll('.navarrow');
	this.navContentHolder = document.querySelector('#navHolder');
	this.temp_item = document.querySelector('#tempItem');
  }
}

export default (new Data);