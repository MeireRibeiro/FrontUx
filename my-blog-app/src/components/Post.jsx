import { Link } from "react-router-dom"

function Post({ title, description, slug }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/post/${slug}`} className="card-link">
                    Ver post
                </Link>
            </div>
        </div>
    )
}

export default Post