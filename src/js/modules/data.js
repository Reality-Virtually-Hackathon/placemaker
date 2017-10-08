class Data {
  constructor() {
    this.navItemSelected = false; 
    this.icons = [];
    this.navState = 'default';
    this.navItemMouseOn = {
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
  	this.switchItemEl1 = document.querySelector('.item_select1');
	this.navAssets = document.querySelectorAll('.navAsset');
	this.navbtns = document.querySelectorAll('.navarrow');
	this.navContentHolder = document.querySelector('#navHolder');
	this.temp_item = document.querySelector('#tempItem');
  }
}

export default (new Data);