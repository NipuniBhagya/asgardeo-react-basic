import { DefaultLayout } from "../layouts/Default";
import ResourceList from "../data.json";
import { useState, useEffect } from "react";

export const HomePage = () => {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        setCategories(ResourceList);  
    }, [ ResourceList ]);

    return (
        <DefaultLayout>
            <div className='container'>
                <div className='hero-section'>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <h1>Naruto: Shippuden</h1>
                            <p>
                                a young ninja who dreams of becoming the Hokage, the strongest ninja and leader of his
                                village. Despite facing adversity due to the nine-tailed fox demon sealed within him,
                                Naruto's determination and unwavering belief in his dreams inspire those around him.
                            </p>
                            <button className='hero-button'>Watch now</button>
                        </div>
                    </div>
                </div>
                <div className="movie-list-container">
                    {
                        categories && categories.map((category, index) => {
                            return (
                                <section className='category' key={index}>
                                    <h2>{ category.catergoryName }</h2>
                                    <div className='carousel'>
                                        <div className='carousel-content'>
                                            {
                                                category.resources.map((resource, index) => {
                                                    return (
                                                        <div className='movie-card' key={ index }>
                                                            <div className='card-content'>
                                                                <img className="movie-image" src={resource.image} alt='movie poster' />    
                                                                <h2>{resource.title}</h2>
                                                                <p>{resource.description}</p>
                                                                <a href='#' className='service-link'>
                                                                    Watch now <span>➔</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </section>
                            );
                        })
                    }
                </div>
            </div>
        </DefaultLayout>
    );
};
