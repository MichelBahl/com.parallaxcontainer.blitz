# com.parallaxcontainer.blitz
Alloy Parallax Widget

## Overview
The widget provide an container view to
pu an an parallax item in.


## Features
* Parallax effect
* Defin parralax Intensity
* Working for ios and android


## Known issues
* On android the first move is not smooth
* On Android parallax only working while fingers on screen, a fast short swipe won't cause any effect


### How to

* Add the widget to your *Scrollableview:

```xml
<Alloy>
	<Window class="container">
		<TableView id="tableView">
			<TableViewRow height="150dp">
				<Label text="HEADER"></Label>
			</TableViewRow>			
			<TableViewRow height="200dp">
				<Widget id="parallaxWidget" src="com.parallaxcontainer.blitz"
						height="120"
						parallaxIntensity="10"
						innerMargin="1200">
					<ImageView image="/images/elevator.jpg"></ImageView>
				</Widget>
			</TableViewRow>			
			<TableViewRow>
				<Label text="Some other Information"></Label>
			</TableViewRow>			
			<TableViewRow backgroundColor="#DEDEDE"></TableViewRow>			
		</TableView>
	</Window>
</Alloy>
```

##Init the Widget

```javascript
$.parallaxWidget.setViewWithScrollAbility($.tableView);
```



Android:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/PVIwb0coEO4/0.jpg)](https://youtu.be/PVIwb0coEO4)

iOS:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/rfsXbTPSaK0/0.jpg)](https://youtu.be/rfsXbTPSaK0)



## Testing
There is a test app in [example](https://github.com/MichelBahl/de.blitz.infiniteImageScrollableview/tree/example) branch.
