import Utils from './modules/utils';
import Data from './modules/data';
import MenuNavHandler from './modules/MenuNavHandler'

	if(window.functions) throw new Error("functions is already loaded ");
	console.log("functions runned "); window.functions = {};

(function() {


	functions.init = function (params){
		Data.initData();
	    MenuNavHandler.createMenuItems();
	    MenuNavHandler.setupNavItemsEvents();
	}
	

})(window);