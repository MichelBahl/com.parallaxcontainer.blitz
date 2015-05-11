var args = arguments[0] || {};

var offset 					= 0;
var calculatedOffset		= 0;
var movement 				= 0;
var bounce 					= 0; 
var isOnScreen		 		= false; 

var parallaxIntensity		= parseInt(args.parallaxIntensity) || 5 
var parallaxItem 			= args.children && args.children[0];
var apiname					= "";


init(args);

function init(args){
    
    if(args.children[0]){
		
		parallaxItem.height = parseInt(args.height) + parseInt(args.innerMargin); 
		parallaxItem.top = parallaxItem._top = - args.innerMargin / 2;
		
		parallaxItem.addEventListener('postlayout', postlayout);

		Ti.API.info("parallaxItem.top: "  + parallaxItem.top);
			
    	$.parallaxContainerView.add(parallaxItem);
    }
}

function setViewWithScrollAbility(parent){
	/*
	 * 
	 */ 	
 	if(OS_IOS){
	 	parent.addEventListener('scroll', updateScroll);
 	}
 	else if(OS_ANDROID){
	 	parent.addEventListener('touchend', touchend);
	 	parent.addEventListener('touchmove', updateScroll);
	 }
 	//----------------------------------------------------------------------
	
}


/* postlayout is used to determine whether the UI element is on screen or not
 * AFAIK there is no UI element property which tells whether it's currently rendered on screen or not 
 */
function postlayout(e){
	
	if(!isOnScreen){
		calculatedOffset = 0;
	}
	
	isOnScreen = true;
}
//----------------------------------------------------------------------....


function updateScroll(e){
	if(OS_IOS){
		 parallaxItem.top = parallaxItem._top + (e.contentOffset.y  / parallaxIntensity);
	}
	else if (OS_ANDROID){
		
		if (e.source.getApiName( ) != apiname){
				/*If start scrolling while hit a Label or any other small UI element
				 *it might happen happen that the element changes which bubbles the touchmove event.
				 *Cause e.y delivers relative values you have to reset the bounce when the bubbling event changes.
				 * Otherwise the e.y value might change in an inapprioriate way. 
				*/
				apiname = e.source.getApiName( );
				bounce = e.y;
		}
		
		if(isOnScreen){
			calculatedOffset =  ((e.y  - bounce)  * -1) + movement;
		}

		//Only update offset if it fits to the treshold
		if(Math.abs(calculatedOffset) < Math.abs(parallaxItem._top) && calculatedOffset >= 0){
			offset = calculatedOffset;
		}
		
		parallaxItem.top = parallaxItem._top + ( offset / parallaxIntensity );		
	}
};

function touchend(e){
	if (OS_ANDROID){
			apiname = "";
			bounce = 0;
			movement = offset;
			isOnScreen = false;
	}
};


exports.setViewWithScrollAbility = setViewWithScrollAbility;
exports.init = init;