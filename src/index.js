import { map } from 'immutable'

let book = new Map({
    title: 'Fight Club'
})

function publish(book) {
    book.set('isPublished', true)
}

book = publish(book)

console.log(book.toJs())