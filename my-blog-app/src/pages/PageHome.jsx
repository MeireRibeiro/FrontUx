import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import LayoutDefault from "../layout/LayoutDefault";
import { client } from "../util/createClient";

function PageHome() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [feedbackPosts, setFeedbackPosts] = useState('Carregando posts...');

    const getPosts = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogPost',
                limit: 3,
                order: "-sys.createdAt"
            });
    
            setPosts(response.items);
        } catch (error) {
            setFeedbackPosts('Erro ao carregar os posts, run to the hills!');
        }
    };

    const getPagePosts = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogPost',
                limit: 3,
                skip: (page - 1) * 3 
              }); 
            setPosts(response.items);
        } catch (error) {
            setFeedbackPosts('Erro ao carregar os posts, run to the hills!');
        }
    };

    const getCategories = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogCategory'
            });
    
            setCategories(response.items);
        } catch (error) {
            console.log('Erro ao carregar categorias', error);
        }
    }

    // Criar um método getCategories do tipo async
    // chamar ele dentro do useEffect
    // criar um estado para armazenar as categorias
    // listar as categorias na tela (usando o UL - LI)

    useEffect(() => {
        getPosts();
        getPagePosts();
        getCategories();
    }, [page]); 
    
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

                        <Link to={"/page/todos-os-posts"} className="btn btn-primary">
                            Ver todos os posts
                        </Link>
                    </main>
                    <aside className="col-md-4">
                        <h2 className="my-3">Categorias</h2>

                        <ul>
                            {categories.map((category) => (
                                <li key={category.sys.id}>
                                    {category.fields.categoryTitle}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <br />
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
                <button onClick={() => setPage(page + 1)} disabled={page === 3}>Próxima</button>
            </div>
        </LayoutDefault>
    )
}

export default PageHome;