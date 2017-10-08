import Data from './data';
import Utils from './utils';
import Animate from './animate';

class MenuNavHandler{
	constructor() {
    console.log('ES6 Class Utils loaded!');
  	}

	createMenuItems(){
		let yRot = -220;
		let yPos = 0.1;
		
		for (let i = 0; i <= 5; i++) {
		  const navItem = Data.temp_item.cloneNode(true);
		  if(i == 5){
		  	Data.temp_item.parentNode.removeChild(Data.temp_item);
		  }
		  else{
		  	yPos += 1;
		  	Utils.setAttributes(navItem, [
			    ['position', `0 ${yPos} 0`], ['src', `#${Data.navAssets[i].id}`]
			]);
			navItem.position = `0 ${yPos} 0`.split(' ');	
			console.log(navItem.position);
			Data.icons.push({navItem: navItem, params: {
				origPos: {x:navItem.position[0], y:navItem.position[1], z:navItem.position[2]},//String(navItem.getAttribute('position').toString().replace(/[,]/g, ' ')),
				origRot: yRot,
				src: Data.navAssets[i].id
			}});
			Data.navContentHolder.appendChild(navItem);
		  }
		};
	}

	setupNavItemsEvents(){
		Array.from(Data.icons).forEach(navItem => {
			navItem.navItem.addEventListener('click', () => {
				if(!Data.navItemSelected){
					Data.navItemSelected = true;
					navItem.navItem.dataset.state = 'selected';
					navItemFrontIn(object);
				}
				else if(navItem.navItem.dataset.state == 'selected'){
					Data.navItemSelected = false;
					navItem.navItem.dataset.state = 'default';
					navItemFrontOut(object);
				}
					
			});
			navItem.navItem.addEventListener('mouseenter', () => {
				if(!Data.navItemMoOn && !Data.navItemSelected){
					Data.navItemMoOn = true;
					Animate.SpecificIn(navItem.navItem, 'position', Data.navItemMouseOn.position, navItem.params);
				}
					
			});
			navItem.navItem.addEventListener('mouseleave', () => {
				if(Data.navItemMoOn && !Data.navItemSelected){
					Data.navItemMoOn = false;
					Animate.SpecificOut(navItem.navItem, 'position', navItem.params, navItem.params);
				}
					
			});
		});//forEach
	}	
}

export default (new MenuNavHandler);

