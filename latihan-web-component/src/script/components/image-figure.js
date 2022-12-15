class ImageFigure extends HTMLElement {
  // konfigurasi awal: untuk menentukan event listerner, shadow DOM
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }

  // jika element berhasil ditambahkan ke DOM.
  // untuk konfigurasi awal mendapatkan data, mengatur attribute
  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || this.getAttribute("caption") || null;
    this.caption = this.getAttribute("caption") || null;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
      
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
        
        figure>img {
          max-width: 220px;
        }
        
        figure>figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
      </style>

      <figure>
        <img src="${this.src}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }

  // jika element dihapus
  // untuk membersihkan data event, state, dan objek yang masih tersimpan di elemen

  // jika element dipindahkan

  // Jika nilai attribute berubah melalui *static get observedAttributes/
  // untuk memuat ulang data
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["src", "alt", "caption"];
  }
}

customElements.define("image-figure", ImageFigure);
