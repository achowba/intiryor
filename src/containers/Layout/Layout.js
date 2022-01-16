import './Layout.css';

import Nav from "../../components/Nav/Nav";
import Article from "../../components/Article/Article";

const Layout = () => {
    return (
        <div className='layout-wrapper'>
            <Nav/>
            <Article/>
        </div>
    );
}

export default Layout;
