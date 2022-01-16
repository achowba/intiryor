import gsap from 'gsap';
import { useRef, useEffect } from 'react';

import './App.css';
import Layout from './containers/Layout/Layout';

function App() {
    const tl = gsap.timeline();

    let appRef = useRef(null);

    useEffect(() => {
        tl.to(appRef, { duration: 1, css: { visibility: 'visible' } }, 0.1);
    }, [tl])
    return (
        <div className="App" ref={el => appRef = el}>
            <Layout/>
        </div>
    );
}

export default App;
