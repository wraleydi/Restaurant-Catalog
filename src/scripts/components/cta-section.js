class CtaApp extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .cta_container {
  position: relative;
  display: flex;
  height: 100vh;
  padding: 5rem;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.cta_container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('images/cta/cta-image.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.7);
  z-index: 1; 
}

.cta_description {
  max-width: 750px;
  font-size: 1.5rem;
  font-family: Poppins, sans-serif;
  padding-inline-start: 3rem;
  color: white;
  z-index: 999;
}

.cta_description p {
  font-size: 1.4rem;
  font-family: Quicksand, sans-serif;
  margin: 0;
}

.cta_description h1 {
  margin-block-end: 0.5rem;
}

.cta_description button {
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  background-color: orange;
  color: #13181d;
  margin-block-start: 3rem;
  transition: ease-in-out 0.5s;
  cursor: pointer;
}

.cta_description button:hover {
  background-color: #13181d;
  color: orange;
}

@media (max-width: 670px) {
  .cta_description p {
    font-size: 1rem;
  }

  .cta_container {
    padding-inline: 2rem;
  }
}

@media (max-width: 420px) {
  .cta_description h1 {
    font-size: 1.2rem;
  }

  .cta_description p {
    font-size: 0.8rem;
  }

  .cta_description {
    padding: 0;  
  }

  .cta_description button {
    padding: 1rem;  
    font-size: 1rem;
  }
}

        </style>
        <div class="cta_discover">
          <div class="cta_container">
            <div class="cta_description">
              <h1>Temukan Restoran Yang Membuat Lidah Anda Bergoyang –</h1>
              <p>Dari Hidangan Lokal Hingga Cita Rasa Internasional!</p>
              <button>Jelajahi Restoran</button>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('cta-section', CtaApp);