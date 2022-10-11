const app = Vue.createApp({//component controlling app section of webpage
  //data, functions, template
  //template: '<h2>I am the template</h2>'
  data() { //must create a function and return object inside that function
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true, //these are called data properties
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/sunset1.jpeg', isFav: true },
        { title: 'the way of kings', author: 'brandon rothfuss', img: 'assets/sunset2.jpeg', isFav: false },
        { title: 'the final empire', author: 'charles rothfuss', img: 'assets/sunset3.jpeg', isFav: true }
      ],
      x: 0,
      y: 0
    }//these variables can only be used in the vue app
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFavBook(book) {
      book.isFav = !book.isFav
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
  computed: {//properties that depend on other data properties
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  } 
})

app.mount('#app')//tells where to mount on DOM