import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

const Writter = () => {
    let { addNote } = useContext(AppContext)

    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [color, setColor] = useState('')

    const saveNote = () => {
        if (!title) alert('Title s required')
        if (!description) alert('Description s required')

        if (!color) color = '#FFF'

        setTitle('')
        setDescription('')
        setColor('')
        document.querySelectorAll('.colors span').forEach(span => span.classList.remove('selected'))

        if (!title || !description) return
        addNote(title, description, color)
    }

    const handleColorChange = e => {
        setColor(e.target.dataset.noteColor)

        // Remove class from all other spans
        document.querySelectorAll('.colors span').forEach(span => span.classList.remove('selected'))

        // add class to current spans
        e.target.classList.add('selected')
    }

    return (
        <div className="contextbox">
            <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <textarea
                rows="8"
                value={description}
                placeholder="Description"
                onChange={e => setDescription(e.target.value)}
            />
            <div className="controls">
                <div className="colors">
                    <span className="c1" data-note-color="#D8E2DC" onClick={handleColorChange} />
                    <span className="c2" data-note-color="#FFE5D9" onClick={handleColorChange} />
                    <span className="c3" data-note-color="#FBFAF0" onClick={handleColorChange} />
                    <span className="c4" data-note-color="#FFE9EE" onClick={handleColorChange} />
                    <span className="c5" data-note-color="#FFDDE4" onClick={handleColorChange} />
                </div>
                <button onClick={saveNote}>Add</button>
            </div>
        </div>
    )
}
export default Writter
