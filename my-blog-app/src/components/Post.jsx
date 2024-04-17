function Post({ title, description, slug }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={'/post/${slug}'} className="card-link">
                    Ver post
                </a>
            </div>
        </div>
    )
}

export default Post