# Navbar

Used to create menus either horizontal or vertical

To use Navbar component import as follows
```jsx
import { Navbar } from "./Navbar";
```

After adding import into your project you can use it simply like:
```jsx
<Navbar items={navigationData}/>
```
### Available Props
| props             | Type      | Description |
| :------------     |:-------   | :----------------------- |
| brand             | `string`  | To show the brand name or title of navigation. it is useful when responsive mode.
| items             | `array`   | Navigation items in array format.


An example of items array properties
```javascript
const navigationData = [
  {
    dropdown: false,
    title: "Dashboard",
    icon: {
      name: "FaThList"
    },
    href: "/dashboard"
  },
  {
    dropdown: true,
    title: "Icons",
    icon: {
      name: "FaSun"
    },
    items: [
      {
        name: "Font Awesome",
        href: "/icons/font-awesome"
      },
      {
        name: "Material Design",
        href: "/icons/material-design"
      },
      {
        name: "Typicons",
        href: "/icons/typicons"
      },
      {
        name: "Ionicons",
        href: "/icons/ionicons"
      },
      {
        name: "Feather",
        href: "/icons/feather"
      },
      {
        name: "Github Octicons",
        href: "/icons/github-octicons"
      },
      {
        name: "Game",
        href: "/icons/game"
      },
      {
        name: "Weather",
        href: "/icons/weather"
      },
      {
        name: "Devicons",
        href: "/icons/devicons"
      },
    ]
  },
]
```
