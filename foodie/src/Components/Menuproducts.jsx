import '../Styles/Menu.css'

function Menuproducts(props)
{
    return(
        <div className="card">
            <div className='card-img-div'> 
                <img src={props.image} alt="Not available" />
            </div>
            <div className='card-rate-body'>
                <div>
                <h5>{props.item_name}</h5>
                <span>₹.{props.price}</span>
                </div>
                <div>
                    <button>Order Now</button>
                </div>
                
            </div>
        </div>
    )
}
export default Menuproducts