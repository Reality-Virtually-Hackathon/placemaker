class Utils{
	constructor() {
    console.log('ES6 Class Utils loaded!');
  	}

	objToValues(obj){
			return Object.keys(obj).map(key => obj[key])
		}

	setAttributes(el, attrs) {
		  attrs.forEach((attr) => {
		    el.setAttribute(attr[0], attr[1]);
		  });
		}

	createAndSetAttributes(el, parentEl, className, reqEvent = false, func = null, attrs) {
		this.clearElement(parentEl, className);
		  const newEl = document.createElement(el);
		  if(reqEvent) newEl.addEventListener('animationend', function(){func(parentEl, className)},false);
		  attrs.forEach((attr) => {
		    newEl.setAttribute(attr[0], attr[1]);
		    newEl.classList.add(className);
		  });
		  parentEl.appendChild(newEl);
		}

	clearElement(el, className){
		try{
		  el.removeChild(el.querySelector(className));
		}catch(e){};
	}
		
	hadnleRotationSide(elm){
			return elm.model.getAttribute('rotation').y > 180-elm.params.origRot ? 360-elm.params.origRot : 0-elm.params.origRot;
		}
	lookupForUnselectedNavItems(items){
			const unselectedIcons = [];

			Array.from(items).forEach(navItem => { 
				if(navItem.dataset.state !== 'selected')
					unselectedIcons.push(navItem);
			});
			return unselectedIcons;
		}
	itemVisibility(action, item) {
		Array.from(this.lookupForUnselectedNavItems(item)).forEach(navItem => {
  			navItem.setAttribute('visible', action);
  		});
	};

}

export default (new Utils);