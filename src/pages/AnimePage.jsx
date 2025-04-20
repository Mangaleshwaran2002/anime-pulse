import {  useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimeDetail from "../components/AnimeDetail";
import FooterSection from "../components/Footer";
function AnimePage(){
    const { id } = useParams()
   
    return (
        <>
        <NavBar/>
        <AnimeDetail id={id} />
        <FooterSection/>
        </>
    );
}

export default AnimePage;