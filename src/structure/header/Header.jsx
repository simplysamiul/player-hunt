import Hero from "../../views/component/hero/Hero";

const Header = ({handelCedit}) => {
    return (
        <>
            <Hero handelCedit={handelCedit} />
        </>
    );
};

export default Header;