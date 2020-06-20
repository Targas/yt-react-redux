import store from './store'

import * as actions from './actions'

const unsubscribe = store.subscribe(() => {
    console.log('store changed!', store.getState())
})

// store.dispatch(bugAdded('bug 1'))

// unsubscribe()

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })

store.dispatch(actions.bugResolved(1))

console.log(store.getState())