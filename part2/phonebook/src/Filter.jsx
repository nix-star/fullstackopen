const Filter = ({ search, handler }) => 
    <form>
      <div>
        filter shown with <input value={search} onChange={handler}/>
      </div>
    </form>

export default Filter
