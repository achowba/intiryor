import { useRef, useEffect } from 'react';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import gsap, { Power3, Power4 } from 'gsap';


import './Article.css';

// assets
import imgHome from '../../assets/img/home.jpg';
// import imgAuthor from '../../assets/img/author.jpg';
import iconArrow from '../../assets/img/arrow-right.svg';

const Article = () => {
    gsap.registerPlugin(CSSRulePlugin, CSSRulePlugin);
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    // use useRef hooks to select html elements
    // let app = useRef(null);
    let articleImageRef = useRef(null);
    // let articleTitleRef = useRef(null);

    useEffect(() => {
        const articleImage = articleImageRef;
        const articleTitleOverlay = CSSRulePlugin.getRule(`.article-title > span::before`);

        tl.from(articleImage, { duration: 1, y: '100vh', ease: Power4.easeInOut }, 'start')
            .from(articleImage.firstElementChild, { duration: 1, scale: 1.1, ease: Power3.easeOut }, .2)
            .to(articleTitleOverlay, { duration: 1.5, cssRule: { scaleY: 0 } }, .5)

    }, [tl]);

    return (
        <div className="article-wrapper">
            <div className="article-category">
                <p>Category</p>
            </div>
            <div className="article">
                <div className="article-image" ref={el => articleImageRef = el}>
                    <img src={imgHome} alt="House" />
                </div>
                <div className="article-text">
                    <img className="article-author" src="https://thispersondoesnotexist.com/image" alt="Author" />
                    <div className="article-date">
                        <p>20 January 2021</p>
                        <span></span>
                        <p>Blog</p>
                    </div>
                    <h1 className="article-title" ref={el => articleTitleRef = el}>
                        <span>We create a dream</span> <br />
                        <span>beautiful home</span>
                    </h1>
                    <div className="article-points">
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
                    <button className="btn-read-more">
                        READ MORE
                        <img src={iconArrow} alt="Arrow Right" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Article;
