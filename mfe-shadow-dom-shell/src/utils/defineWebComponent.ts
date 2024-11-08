// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function defineWebComponent(tagName: string, component: any) {
   if(customElements.get(tagName)) {
      return 
   }

   customElements.define(tagName, component)
}