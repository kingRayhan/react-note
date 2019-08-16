import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

const Note = ({ bgColor = '#fff' }) => (
    <div className="note" style={{ backgroundColor: bgColor }}>
        <h3 className="title">Lorem ipsum dolor sit amet.</h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolorem ea fugiat ad maiores distinctio
            impedit dignissimos possimus blanditiis veritatis eligendi earum dolorum commodi quasi quam a, incidunt
            illo. Illum.
        </p>
        <p className="time">5 minutes ago</p>
    </div>
)

const Filters = () => {
    return (
        <div className="filter">
            <button>All (8)</button>
            <button style={{ backgroundColor: '#D8E2DC' }}>4</button>
            <button style={{ backgroundColor: '#FFE5D9' }}>4</button>
            <button style={{ backgroundColor: '#FBFAF0' }}>4</button>
            <button style={{ backgroundColor: '#FFE9EE' }}>4</button>
            <button style={{ backgroundColor: '#FFDDE4' }}>4</button>
        </div>
    )
}

const Writter = () => (
    <div className="contextbox">
        <input type="text" placeholder="Title" />
        <textarea rows="8" placeholder="Description" />
        <div className="controls">
            <div className="colors">
                <span className="c1" data-note-color="#D8E2DC" />
                <span className="c2" data-note-color="#FFE5D9" />
                <span className="c3" data-note-color="#FBFAF0" />
                <span className="c4" data-note-color="#FFE9EE" />
                <span className="c5" data-note-color="#FFDDE4" />
            </div>
            <button>Add</button>
        </div>
    </div>
)

const App = () => {
    return (
        <div className="app">
            <div className="header">
                <h1 className="app-title">React Notes</h1>
            </div>
            <Writter />
            <Filters />
            <div className="notes">
                <Note bgColor="#d8e2dc" />
                <Note bgColor="#ffe5d9" />
                <Note bgColor="#fbfaf0" />
                <Note bgColor="#ffe9ee" />
                <Note bgColor="#ffdde4" />
                <Note />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
