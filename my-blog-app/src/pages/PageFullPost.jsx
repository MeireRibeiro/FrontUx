import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import LayoutDefault from "../layout/LayoutDefault";
import { client } from "../util/createClient";

function PageFullPost() {
    const [posts, setPosts] = useState([]);
    const [feedbackPosts, setFeedbackPosts] = useState('Carregando posts...');

    const getFullPosts = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogPost',
                order: "-sys.createdAt"
            });
    
            setPosts(response.items);
        } catch (error) {
            setFeedbackPosts('Erro ao carregar os posts, run to the hills!');
        }
    };

    useEffect(() => {
        getFullPosts();
    }, []); 
    
    return (
        <LayoutDefault>
            <div className="container">
                <div className="row">
                    <main className="col-md-8">
                        <h2 className="my-3">Área dos posts</h2>

                        {posts.length === 0 && (
                            <p>{feedbackPosts}</p>
                        )}

                        {posts.map((post) => (
                            <Post
                                key={post.sys.id}
                                title={post.fields.postTitle}
                                description={post.fields.postDescription}
                                slug={post.fields.postSlug}
                            />
                        ))}
                    </main>
                    <div className="my-5">
                        <Link to="/" className="btn btn-primary">
                            Voltar
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}

export default PageFullPost;