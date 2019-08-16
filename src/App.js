import React, { useContext } from 'react'

import Writter from './components/Writter'
import Note from './components/Node'
import { AppContext } from './context/AppContextProvider'
import Filters from './components/Filters'

const App = () => {
    let { notes, filterColor } = useContext(AppContext)
    return (
        <div className="app">
            <div className="header">
                <h1 className="app-title">React Notes</h1>
            </div>
            <Writter />
            <Filters />

            <div className="notes">
                {notes
                    .filter(note => (filterColor === 'all' ? true : note.color === filterColor))
                    .map(note => (
                        <Note key={note.id} bgColor={note.color} {...note} />
                    ))}
            </div>
        </div>
    )
}
export default App
