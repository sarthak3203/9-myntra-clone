import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import {useSelector} from "react-redux";

const Bag = () => {

  const bagItems=useSelector((store)=>store.bag);
  const items=useSelector((store)=>store.items);
  const finalItems=items.filter((item)=>{ //using filter method to create a new array
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0; //if its true then add it in the array finalItems
    //here we are finding which elements are in the bag array and storing them in the finalItems. and then will display it using finalItems
  });

  return (
    <>

      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {
              finalItems.map((item)=>(<BagItem item={item}></BagItem>)) /*displaying the elements  in the bag which are in the finalItems*/
            }

          </div>
          <BagSummary></BagSummary>

        </div>
      </main>



    </>
  );
}

export default Bag;