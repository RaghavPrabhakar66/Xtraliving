import "./Events.css"
import  offers from  "./Offers.webp"
import line from "./line.png"
import { BsArrowRight } from 'react-icons/bs';
const Events =()=>{
    return(
        <div className="Events"
        style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
            <img src={offers} alt="" height={550} />
            <button>Know More <BsArrowRight/></button>
        </div>
    )
}
export default Events