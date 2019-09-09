# Grid

Grid component has 3 sub components (Container, Row and Col). Based on device sizes as props `xs`, `sm`, `md`, `lg`, `xl` with 12 columns. 


To use Grid component import as follows
```jsx
import { Container, Row, Col} from "./Grid";
```

After adding import into your project you can use it simply like:
```jsx
<Container>
  <Row>
    <Col> Col 1</Col>
    <Col> Col 2</Col>
    <Col> Col 3</Col>
  </Row>
</Container>
```

### Breakpoints
| Breakpoint Device | pixels      |
| :------------     |:-------     |
| xs                | 320
| sm                | 768
| md                | 1024
| lg                | 1440
| xl                | 1920

An example of creating 3x3 grid so we can create any grid layout.
```jsx
<Container>
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} xl={3}> Col 1</Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={3}> Col 1</Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={3}> Col 1</Col>
  </Row>
</Container>
```
### Container Props
| prop              | type        | description                |
| :------------     |:-------     |:----------------------     |
| fluid             | `boolean`   | create 100% width. Otherwise it take max width as mentioned in `config.js`

### Row Props
| prop              | type        | description                |
| :------------     |:-------     |:----------------------     |
| reverse           | `boolean`   | to show columns in reverse order

### Col Props
| prop              | type        | description                |
| :------------     |:-------     |:----------------------     |
| offset            | `number`    | to offset particular column
| reverse           | `boolean`   | To show column content in reverse order

More configurations and customizations available through [config.js](./config.js)




