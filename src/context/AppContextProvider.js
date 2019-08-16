import React, { createContext, useState, useEffect } from 'react'
import id from 'uuid/v4'
export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    let [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    let [filterColor, setfilterColor] = useState('all')

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const noteColors = ['#D8E2DC', '#FFE5D9', '#FBFAF0', '#FFE9EE', '#FFDDE4', '#FFF']

    const colors = noteColors.map(color => {
        return {
            color,
            count: notes.filter(note => note.color === color).length,
        }
    })

    const addNote = (title, description, color) => {
        setNotes([
            {
                id: id(),
                title,
                description,
                color,
                time: Date.now(),
            },
            ...notes,
        ])
    }

    const deleteNote = id => {
        setNotes([...notes.filter(note => note.id !== id)])
    }

    return (
        <AppContext.Provider value={{ notes, addNote, colors, filterColor, setfilterColor, deleteNote }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
