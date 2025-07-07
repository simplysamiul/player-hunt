import Menu from "../../views/component/menu/Menu";


const Navbar = ({credit}) => {
    return (
        <div className="w-11/12 mx-auto">
            <Menu credit={credit} />
        </div>
    );
};

export default Navbar;