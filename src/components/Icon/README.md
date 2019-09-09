# Icon

To use Icon component import as follows
```jsx
import Icon from "./Icon";
```

After adding import into your project you can use it simply like:
```jsx
<Icon iconName="FaTwitter"/>
```
### Available Props
| props             | Type      | Description |
| :------------     |:-------   | :----------------------- |
| iconName          | `string`  | The icon name to render. 
| size              | `number`  | add value in `px`
| color             | `string`  | HEX or RGB format. Ex: #CD5C5C, RGB(205, 92, 92)
| provider          | `string`  | By default render icon as per name from FontAwesome. So provider is not required by default.  

### To use provider prop must import as follows
```jsx
import { MaterialDesign } from './Icon/providers';
<Icon iconName="Md3DRotation" provider={MaterialDesign}/>
```

```jsx
import { Typicons } from './Icon/providers';
<Icon iconName="TiAdjustBrightness" provider={Typicons}/>
```

```jsx
import { Ionicons } from './Icon/providers';
<Icon iconName="IoIosAirplane" provider={Ionicons}/>
```

```jsx
import { Feather } from './Icon/providers';
<Icon iconName="FiActivity" provider={Feather}/>
```

```jsx
import { Octicons } from './Icon/providers';
<Icon iconName="GoAlert" provider={Octicons}/>
```

```jsx
import { Gameicons } from './Icon/providers';
<Icon iconName="GiFlame" provider={Gameicons}/>
```


```jsx
import { Weathericons } from './Icon/providers';
<Icon iconName="WiCelsius" provider={Weathericons}/>
```

```jsx
import { Devicons } from './Icon/providers';
<Icon iconName="DiApple" provider={Devicons}/>
```

Check icon names on demo page to get know more icons.


