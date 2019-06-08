A primitive to render token's value

```jsx harmony
<SwatchValue>13px</SwatchValue>
```

Use `color` prop to customize color:

```jsx harmony
<SwatchValue color="primary">24px</SwatchValue>
```

or `css` and `style` to customize everything else:

```jsx harmony
<SwatchValue
  css={{
    fontSize: "24px"
  }}
  style={{
    background: "yellow"
  }}
>
  Custom value
</SwatchValue>
```
