import React, { useContext } from 'react'
import moment from 'moment'
import { AppContext } from '../context/AppContextProvider'

const Note = ({ bgColor = '#fff', title, description, time, id }) => {
    let { deleteNote } = useContext(AppContext)

    return (
        <div className="note" style={{ backgroundColor: bgColor }}>
            <div>
                <h3 className="title">{title}</h3>
                <p>{description}</p>
            </div>
            <p className="time">{moment(time).fromNow()}</p>

            <div className="buttons">
                <button className="delete" onClick={() => window.confirm('Sure to delete?') && deleteNote(id)}>
                    &times;
                </button>
            </div>
        </div>
    )
}
export default Note
