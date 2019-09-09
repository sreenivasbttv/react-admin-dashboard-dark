# Button

To use Button component import as follows
```jsx
import Button from "./button2";
```

After adding import into your project you can use it simply like:
```jsx
<Button>I am Button</Button>
```
### Available Props
| props             | Type      | Description |
| :------------     |:-------   | :----------------------- |
| variant           | `string`  | Available in 6 variants light, dark, primary, accent, success and danger. These are like filled background buttons bases on different variants.
| outline           | `string`  | Show only outline without background color as colors are primary, accent, success, danger, light and dark.
| rounded           | `boolean` | To show borders rounded
| size              | `string`  | Available in 4 sizes xs, sm, default, lg. For default sizes no need to use the **size** prop.
| hasIcon           | `boolean` | If placed icon inside button then this property remove unwanted CSS properties like min-width and align icon and text using inline-flex property. 
| iconOnly          | `boolean` | To show only Icon with in circular button.

### change colors

The default color codes available for entire theme available at [colors.js](../../colors.js).

### Use Button as hyperlink

To use Button component and render as hyperlink use **as** prop with "a" value
Example
```jsx
<Button as="a"> Goto </Button>
```

### Use Icons inside Button Component
```jsx
<Button hasIcon> <Icon iconName="FaTwitter"></Icon> Twitter </Button>
```
*Note: To use icons first need to import Icon component.*

Navite to know more details about [Icon](../Icon/) Component
