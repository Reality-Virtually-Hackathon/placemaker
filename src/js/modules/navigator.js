import Utils from './utils';
import Data from './data';
import Animate from './animate';


class Navigator{
	constructor() {
    
  	}

  	navMeTo(point){
  		Animate.showMap();
  		console.log(point);
  		switch(point){
  			case Data.navToSets[0]:
  			// Nav back
  			break;
  			case Data.navToSets[1]:
  			// Nav eat
  				Data.restaurants_room.setAttribute("visible",true);;
  			break;
  			case Data.navToSets[2]:
  			// Nav recreation
  				Data.global_layout.setAttribute("visible",false);
  				Data.roomenvironment.setAttribute("src","assets/images/places/Champions_360.jpg");
  				Data.navHolder2.setAttribute("visible",true);
  			
  			break;
  			case Data.navToSets[3]:
  			// Nav health
  			break;
  			case Data.navToSets[4]:
  			// Nav home
  			break;
  		}

  	}


  	navToMap(){

  	}

}

export default (new Navigator);