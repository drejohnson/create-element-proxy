# Create Element Proxy

## Usage

```
const { div, h1, img, p } = createElement();

const Card = (title, description, image_url) =>
    div({ class: "card", onClick: () => console.log('clicked') }, [
    img({ src: image_url, alt: 'Image title' }),
    div({ class: "card-info" }, [
      h1({ class: "card-title" }, `Title: ${title}`),
      p({ class: "card-description" }, `Description: ${description}`)
    ])
  ]);
```