class FooterApp extends HTMLElement {
    static observedAttributes = ['my-footer']
    constructor() {
        super()
        this['_my-footer'] = this.getAttribute('my-footer')
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        
      <p>${this['_my-footer']}</p>
        `
    }
}

customElements.define('footer-app', FooterApp)