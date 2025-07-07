import NewsLetter from "../../views/component/newsletter/NewsLetter";
import Players from "../../views/component/players/Players";


const Body = ({credit, setCredit}) => {
    return (
        <>
            <Players 
            credit={credit} 
            setCredit={setCredit}
            />
            <NewsLetter />
        </>
    );
};

export default Body;