export const createElement = () => {
   // object to proxy
  let target = {}
   // Handler object with a trap (get method)
  let handler = {
    get(target: object, tag: unknown) {
      return (props = {}, children = []) => {
        const element: HTMLElement = document.createElement(tag as string)
        const event = (key: string) => key.substr(2).toLowerCase()
        Object.entries(props).forEach(([key, value]) => {
          key.startsWith("on") && typeof value === "function"
            ? element.addEventListener(event(key), value as EventListenerOrEventListenerObject)
            : element.setAttribute(key, value as string)
        })
        if (!Array.isArray(children)) {
          children = [children];
        }
        children.map(child => {
          return typeof child === "string"
            ? (element.textContent = child)
            : element.appendChild(child);
        });
        return element;
      }
    }
  }
  return new Proxy(target, handler)
}