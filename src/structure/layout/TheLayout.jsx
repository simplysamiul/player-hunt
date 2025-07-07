import { useState } from "react";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../nav/Navbar";
import { ToastContainer } from "react-toastify";

const TheLayout = () => {
    // credit clame
    const [credit, setCredit] = useState(0);
    const handelCedit = (coin) => {
        setCredit(credit + coin);
    }
    return (
        <>
            {/* menubar section */}
            <nav className="sticky top-0 bg-white/30 backdrop-blur-sm">
                <Navbar credit={credit} />
            </nav>
            <div className="w-11/12 mx-auto">
                {/* hero section */}
                <header>
                    <Header handelCedit={handelCedit} />
                </header>
                {/* website body section */}
                <main>
                    <Body
                        credit={credit}
                        setCredit={setCredit}

                    />
                </main>
            </div>
            {/* website footer section */}
            <footer className="bg-[#06091A] pt-40 pb-16 ">
                <Footer />
            </footer>

            <ToastContainer
                position="bottom-right"
                autoClose={1500}
            />
        </>
    );
};

export default TheLayout;