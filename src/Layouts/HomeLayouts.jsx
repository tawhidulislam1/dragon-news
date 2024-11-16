import Header from "../components/Header";
import Lastest from "../components/lastest";
import LeftAsideContainer from "../components/Leyout-Components/LeftAsideContainer";
import RightAside from "../components/Leyout-Components/RightAside";
import Navbar from "../components/Navbar";


const HomeLayouts = () => {
    return (
        <div className=" font-poppoin">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <Lastest></Lastest>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto py-2 grid grid-cols-12">
                <aside className="left col-span-3">
                    <LeftAsideContainer></LeftAsideContainer>
                </aside>
                <main className="main col-span-6">Main Contain</main>
                <aside className="right col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;