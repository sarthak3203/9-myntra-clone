
import {useSelector} from "react-redux";

const BagSummary = () => {

  const bagItems=useSelector((store)=>store.bag);

  const items=useSelector((store)=>store.items);
  const finalItems=items.filter((item)=>{ //using filter method to create a new array
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0; //if its true then add it in the array finalItems
    //here we are finding which elements are in the bag array and storing them in the finalItems. and then will display it using finalItems
  });

  const CONVENIENCE_FEES=99;

    let totalItem = bagItems.length;
    let totalMRP = 0;
    let totalDiscount = 0;


  //we cant directly use this loop on the bagItems array as it only contains the id so we took all the items whose id is present inside bagItems in the finalItems array which contains every item's everything
    finalItems.forEach(bagItem => {
      totalMRP += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });
  
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;


    return (

        <div className="bag-summary">


            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    );
}

export default BagSummary;