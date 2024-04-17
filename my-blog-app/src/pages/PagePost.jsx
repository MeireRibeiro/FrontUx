import { useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import LayoutDefault from "../Layout/LayoutDefault";
import { client } from "../util/createClient";

const SLUG_TMP = 'meu-primeiro-post';

function PagePost() {
    const [post, setPost] = useState(null);
    
    // Criar um método getPost do tipo async
    // chamar ele dentro do useEffect
    // buscar o post pelo slug usando o client do contentful
    const getPost = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogPost',
                'fields.postSlug': SLUG_TMP
            });

            console.log(response.items[0]);

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
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}

export default PagePost;