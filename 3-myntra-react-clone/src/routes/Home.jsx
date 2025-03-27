
import HomeItem from "../components/HomeItem";
import {useSelector} from "react-redux";

const Home=()=>{

const items = useSelector(store=>store.items);

    return (
        <>
        <main>
            <div className="items-container">
                {items.map((item)=>(
                <HomeItem key={item.id} item={item}></HomeItem>))} {/*use () in map or when you dont write return keyword, write return keyword inside {} if you use these {} as () returns implicitly and {} do not returns implicitly therefore you have to write return inside {}*/}
                
            </div>
        </main>
        </>
    );
}

export default Home;