import Utils from './utils';
import Data from './data';



class Animate{
	constructor() {
    this.mapState = false;
  	}

	ScaleIn(elm, scaleF) {
  	//elm.components.sound.playSound();
	  const animationEl = document.createElement('a-animation');
	  Utils.setAttributes(animationEl, [
	    ['attribute', 'scale'],
	    ['to', `${scaleF}`],
	    ['dur', '900'],
	    ['easing', 'ease-out']
	  ]);
	  elm.appendChild(animationEl);
	}

	PositionIn(elm, scaleF) {
	  const animationEl = document.createElement('a-animation');
	  Utils.setAttributes(animationEl, [
	    ['attribute', 'position'],
	    ['to', `${scaleF}`],
	    ['dur', '900'],
	    ['easing', 'ease-out']
	  ]);
	  elm.appendChild(animationEl);
	}

	SpecificIn(elm, attribute, values, origparams) {
	  Utils.createAndSetAttributes('a-animation', elm, attribute, false, function(){}, [
	    ['attribute', `${attribute}`],
	    ['to', `${origparams.origPos.x} ${origparams.origPos.y} ${Data.navItemMouseClick.position.z}`],
	    ['dur', '900'],
	    ['easing', 'ease-out']
	  ]);
	}
	SpecificOut(elm, attribute, origparams, values) {

	  Utils.createAndSetAttributes('a-animation', elm, attribute, false, function(){}, [
	    ['attribute', `${attribute}`],
	    ['to', `${origparams.origPos.x} ${origparams.origPos.y} ${origparams.origPos.z}`],
	    ['dur', '900'],
	    ['easing', 'ease-out']
	  ]);
	}


	navItemFrontIn(icoElm){

		Utils.createAndSetAttributes('a-animation', icoElm.navItem, 'position', false, function(){}, [
	    ['attribute', 'position'],
	    ['to', `${icoElm.params.origPos.x} ${icoElm.params.origPos.y} ${Data.navItemMouseClick.position.z}`],
	    ['dur', '900'],
	    ['easing', 'ease-out']
	  ]);

	}

	navItemFrontOut(icoElm){

		Utils.createAndSetAttributes('a-animation', icoElm.navItem, 'position', false, function(){}, [
	    ['attribute', 'position'],
	    ['to', `${icoElm.params.origPos.x} ${icoElm.params.origPos.y} ${Data.navItemMouseClick.position.z}`],
	    ['dur', '900'],
	    ['easing', 'ease-out']
	  ]);

	}

	showMap(){
		if(!this.mapState){
			Utils.createAndSetAttributes('a-animation', Data.mapElement, 'opacity', false, function(){}, [
		    ['attribute', 'opacity'],
		    ['from', '0'],
		    ['to', '1'],
		    ['dur', '1500'],
		    ['fill', 'both'],
		    ['easing', 'ease-out']
		  ]);
			this.mapState = !this.mapState;
		}
	}
	hideMap(){
		if(this.mapState){
			Utils.createAndSetAttributes('a-animation', Data.mapElement, 'opacity', false, function(){}, [
		    ['attribute', 'opacity'],
		    ['from', '1'],
		    ['to', '0'],
		    ['dur', '1500'],
		    ['fill', 'both'],
		    ['easing', 'ease-out']
		  ]);
			this.mapState = !this.mapState;
		}
	}


}

export default (new Animate);