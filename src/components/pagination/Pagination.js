import './Pagination.css'

function Pagination(props) {

    return(
        <div className="pagination-container">
            <span>{props.name}</span>
        </div>
    )
}

export default Pagination