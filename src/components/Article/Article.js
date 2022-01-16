import { useRef, useEffect } from 'react';
import gsap, { Power3, Power4 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

import './Article.css';

// assets
import imgHome from '../../assets/img/home.jpg';
// import imgAuthor from '../../assets/img/author.jpg';
import iconArrow from '../../assets/img/arrow-right.svg';

const Article = () => {
    gsap.registerPlugin(CSSRulePlugin, CSSRulePlugin);
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    // use useRef hooks to select html elements
    let btnReadMoreRef = useRef(null);
    let articleDateRef = useRef(null);
    let articlePointRef = useRef(null);
    let articleImageRef = useRef(null);
    let articleAuthorRef = useRef(null);
    let articleCategoryRef = useRef(null);

    useEffect(() => {
        const articleTitleOverlay = CSSRulePlugin.getRule(`.article-title > span::before`);

        tl.from(articleImageRef, { duration: 1, y: '100vh', ease: Power4.easeInOut }, 'start')
            .from(articleImageRef.firstElementChild, { duration: 1, scale: 1.1, ease: Power3.easeOut }, 0.2)
            .to(articleTitleOverlay, { duration: 2, cssRule: { scaleY: 0 } }, 0.4)
            .from([...articlePointRef.children, ...articleDateRef.children], { duration: 0.8, y: 20, opacity: 0, ease: Power3.easeOut }, 0.6)
            .from([btnReadMoreRef, articleCategoryRef], { duration: 0.8, y: 500, ease: Power3.easeOut }, 0.4)
            .from(articleAuthorRef, { duration: 0.8, scale: 0, ease: Power3.easeOut }, 0.4)

    }, [tl]);

    return (
        <div className="article-wrapper">
            <div className="article-category" ref={el => articleCategoryRef = el}>
                <p>Category</p>
            </div>
            <div className="article">
                <div className="article-image" ref={el => articleImageRef = el}>
                    <img src={imgHome} alt="House" />
                </div>
                <div className="article-text">
                    <img className="article-author" src="https://thispersondoesnotexist.com/image" alt="Author" ref={el => articleAuthorRef = el} />
                    <div className="article-date" ref={el => articleDateRef = el}>
                        <p>20 January 2021</p>
                        <span></span>
                        <p>Blog</p>
                    </div>
                    <h1 className="article-title">
                        <span>We create a dream</span> <br />
                        <span>beautiful home</span>
                    </h1>
                    <div className="article-points" ref={el => articlePointRef = el}>
                        <div className="article-point">
                            <h4>Experience</h4>
                            <p>
                                We have been implementing projects <br />
                                for many years. We have already <br />
                                been trusted by hundreds of <br />
                                customers who enjoy living in their <br />
                                own home.
                            </p>
                        </div>
                        <div className="article-point">
                            <h4>Knowledge</h4>
                            <p>
                                We are a team of experience people <br />
                                who implement the most advanced <br />
                                projects.<br />
                            </p>
                        </div>
                    </div>
                    <button className="btn-read-more" ref={el => btnReadMoreRef = el}>
                        READ MORE
                        <img src={iconArrow} alt="Arrow Right" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Article;
