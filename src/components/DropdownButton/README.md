# Dropdown Button

To use Dropdown Button component import as follows
```jsx
import DropdownButton from "./DropdownButton";
```
This component use Dropdown Menu component to render list.

To create Dropdown Items use DropdownItem component.
```jsx
import DropdownItem from '../Dropdown2/DropdownItem';
```

After adding import into your project you can use it simply like:
```jsx
<DropdownButton title="Action" variant="primary">
  <DropdownItem>Action</DropdownItem>
  <DropdownItem>Another Action</DropdownItem>
  <DropdownItem>Something Else</DropdownItem>
</DropdownButton>
```
### Available Props
| props             | Type        | Description |
| :------------     |:-------     | :----------------------- |
| open              | `boolean`   | To open list inside DropdownButton.
| variant           | `string`    | Available in 6 variants light, dark, primary, accent, success and danger.
| title             | `string`    | Used to title of Dropdown Button.
