import "./Hero.css";
import heroImg from "../../../assets/banner-main.png"
import { toast } from "react-toastify";

const Hero = ({ handelCedit }) => {
    const handelCreditAddBtn = (coin, coinAdded) => {
        if (coinAdded) {
            handelCedit(coin);
            toast.success("Credit Added Successfully!");
        }
    }
    return (
        <>
            <div className="banner-area">
                <img className="mx-auto mb-4" src={heroImg} alt="" />
                <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => handelCreditAddBtn(1000000, true)}>Claim Free Credit</button>
            </div>
        </>
    );
};

export default Hero;