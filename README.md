Resources used:

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

https://www.w3schools.com/jsref/prop_style_background.asp
https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
https://www.w3schools.com/jsref/prop_style_backgroundimage.asp

https://www.w3schools.com/css/css3_gradients.html

## Requirements met

🎯 Inputs to change the background colours

🎯 Input to control the angle of the gradient

## Stretch Goals met

🏹 Allow the user to add more than 2 colours

## Reflection

The user can copy the CSS being applied from the inspect tool.

On line 12 of App.jsx, using the DOM style background property allows the user to see the css styles being applied to the body using the inspect tool, under the styles tab.
Initially I used the backgroundColor/backgroundImage properties to apply the styles to the DOM but using these properties did not display the styles being applied in the inspect tool. I found the background property on w3schools and tried this instead which worked.
