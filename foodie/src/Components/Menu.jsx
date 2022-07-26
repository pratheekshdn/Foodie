import Menuitems from "./Menuitem"
import Menuproducts from "./Menuproducts"

function Menu(){
    return(
        <div className="menuitems-map">
            {
                Menuitems.map((item,ind)=>{
                    return <div key={ind} className="menu-div">
                        <Menuproducts item_name={item.item} price={item.price} image={item.image}/>
                    </div>
                })
            }
        </div>
    )
}
export default Menu