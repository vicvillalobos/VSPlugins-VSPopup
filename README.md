# VSPlugins-VSPopup

This is a simple Javascript/jQuery plug-in that will let you pop up a single HTML element above the main content.

### Installation ###

1. Download the css and js files inside **src** folder

2. Paste the following code inside the ***HEAD*** of your html file to load the CSS.
```
<link href="src/vs.popup.css" rel="stylesheet" type="text/css">
```

3. Paste the following code **AFTER** loading jQuery in your html file, inside the **BODY** or **HEAD** tag.
```
<script src="src/vs.popup.js"></script>
```

### Usage ###

Any element with the class `vs-popup` will become a **pop-up container**. Make sure to specify an ID.
Example: 
```
<div id="example1" class="vs-popup">Example Pop-up</div>
```

To reveal a pop-up, just create a HTML element with the attribute `data-vs-popup-id` with the container's ID as value.
Example: 
```
<a href="#" data-vs-popup-id="example1">Open pop-up</a>
```

### Extra ###

You can add one element with the class `vs-popup-close` inside the container and it will close the popup on click.
Example:
```
<div id="example1" class="vs-popup">
  <div class="vs-popup-close">Close</div>
  <p>
    Example Pop-up.
  </p>
</div>
```
