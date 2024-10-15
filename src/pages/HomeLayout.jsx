import { Outlet } from 'react-router-dom';
import {Header} from "../components/index.js";
import {Navbar} from "../components/index.js";

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <section className='align-element py-20'>
                <Outlet/>
            </section>
        </>
    );
};
export default HomeLayout;