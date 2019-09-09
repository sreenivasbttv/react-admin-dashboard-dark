# Button Group

Used to place number of buttons in a group.

To use Button Group component import as follows
```jsx
import ButtonGroup from "./ButtonGroup";
```

After adding import into your project you can use it simply like:
```jsx
<ButtonGroup>    
  <Button variant="light">Left</Button>
  <Button variant="light">Middle</Button>
  <Button variant="light">Right</Button>
</ButtonGroup>
```
### Available Props
| props             | Type        | Description |
| :------------     |:-------     | :----------------------- |
| vertical          | `boolean`   | To show vertical buttons group. Default value is `false`
| rounded           | `boolean`   | To show round corners of border. Default value is `false`
| condensed         | `boolean`   | If more buttons are there inside ButtonGroup using "condensed" prop it removes all padding and shown like pager.
