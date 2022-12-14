class ImageFigure extends HTMLElement {
  // konfigurasi awal: untuk menentukan event listerner, shadow DOM

  // jika element berhasil ditambahkan ke DOM.
  // untuk konfigurasi awal mendapatkan data, mengatur attribute
  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || this.getAttribute("caption") || null;
    this.caption = this.getAttribute("caption") || null;
    this.render();
  }

  render() {
    this.innerHTML = `
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
