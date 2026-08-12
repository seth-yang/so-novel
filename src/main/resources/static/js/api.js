console.log ('[api.js] context-path = ', CONTEXT_PATH);
const Api = {

  getConfig() {
    return fetch('/so-novel/config').then(r => r.json())
  },

  getLocalBooks() {
    return fetch('/so-novel/local-books').then(r => r.json())
  },

  search(keyword) {
    return fetch(`/so-novel/search/aggregated?kw=${encodeURIComponent(keyword)}`)
      .then(r => r.json())
  },

  downloadBook(params) {
    return fetch(`/so-novel/book-fetch?${params.toString()}`)
  },

  deleteBook(filename) {
    return fetch(`/so-novel/book-delete?filename=${encodeURIComponent(filename)}`).then(r => r.json())
  },

  getSuggestions(kw) {
    return fetch(`/so-novel/suggestion?kw=${encodeURIComponent(kw)}`).then(r => r.json())
  },

  getSources() {
    return fetch('/so-novel/sources').then(r => r.json())
  },

  checkSources() {
    return fetch('/so-novel/sources/check').then(r => r.json())
  },

}