const Filters = () => {
    let { setfilterColor, filterColor, colors, notes } = useContext(AppContext)

    return (
        <div className="filter">
            <button onClick={() => setfilterColor('all')}>All ({notes.length})</button>
            {colors.map(({ color, count }, i) => (
                <button
                    className={filterColor !== 'all' && filterColor === color ? 'selected' : null}
                    key={i}
                    style={{ backgroundColor: color }}
                    onClick={() => setfilterColor(color)}
                >
                    {count}
                </button>
            ))}
        </div>
    )
}

export default Filters
