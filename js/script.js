new Vue({
  el: '#vue',
  data: {
    registration: true,
    name: '',
    email: '',
    selectedCountry: 'Kraj Pochodzenia',
    checked: true,
    countries: ["Kraj Pochodzenia", "Polska", "Albania", "Algeria"],
    fail: false

  },
  methods: {
    change() {
      this.registration = !this.registration;
    },
    validate() {
      if(this.name === '') {
        this.fail = true;
      } else if (!(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(this.email))) {
        this.fail = true;
      } else if (this.selectedCountry === 'Kraj Pochodzenia') {
        this.fail = true;
      } else if (!this.checked) {
        this.fail = true;
      } else {
        this.fail = false;
        this.change();
      }
    }
  }
})
