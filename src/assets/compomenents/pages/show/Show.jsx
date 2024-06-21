import React, { useState, useEffect } from 'react';
import axios from 'axios';
import showPageStyles from './show.module.scss';
import { useParams } from 'react-router-dom';

const Show = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Funzione per formattare la data
    const formatDate = (dateString) => {
        return dateString.slice(0, 10);
    }

    // Chiamata per ottenere il dettaglio del post
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${slug}`)
            .then(response => {
                setPost(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Qualcosa è andato storto', error);
                setIsLoading(false);
            });
    }, [slug]);

    if (isLoading) {
        return <div>Caricamento...</div>;
    }

    // Mi è servito per debbugare
    if (!post) {
        return <div>Post non trovato</div>;
    }

    return (
        <main >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center'>{post.title}</h1>
                    </div>
                </div>
            </div>
            <figure >
                <img src={post.image} alt={post.title} />
            </figure>
            <p><strong>Creato il:</strong> {formatDate(post.createdAt)}</p>
            <div >{post.content}</div>
        </main>
    );
}

export default Show;
