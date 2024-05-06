import { useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Link, useParams } from "react-router-dom";
import LayoutDefault from "../layout/LayoutDefault";
import { client } from "../util/createClient";

function PagePost() {
    const [post, setPost] = useState(null);

    const { slug } = useParams();
    
    // Criar um método getPost do tipo async
    // chamar ele dentro do useEffect
    // buscar o post pelo slug usando o client do contentful
    const getPost = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogPost',
                'fields.postSlug': slug
            });

            setPost(response.items[0] || null);
        } catch (error) {
            console.log('Erro ao carregar o post', error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <LayoutDefault>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="my-5">
                            {post && (
                                <>
                                    <h1>{post.fields.postTitle}</h1>
                                    <p>{post.fields.postDescription}</p>
                                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(post.fields.postContent)}}></div>
                                </>
                            )}
                            
                            <Link to="/" className="btn btn-primary">
                                Voltar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}

export default PagePost;