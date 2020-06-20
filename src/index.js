import { produce } from 'immer'

let book = { title: 'Fight Club' }

function publish(book) {
    produce(book, draftBook => {
        draftBook.isPublished = true 
    })
}

let updated = publish(book)

console.log(book)
console.log(updated)