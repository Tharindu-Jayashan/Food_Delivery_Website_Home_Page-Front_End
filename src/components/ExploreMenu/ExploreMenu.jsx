import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../images/assets';


const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>Choose from a divers menu featuring a delectable array of dishes crafted with the finest ingredients and culnary expertise. Oyr mission is to satisfy your cravings and elative your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">

            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                    
                )
            })}
           
               {/* <ul className="explore-menu-list-item">

                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_1.png' alt="" /> </li> 
                        <p>Salad</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_2.png' alt="" /> </li> 
                        <p>Rolls</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_3.png' alt="" /> </li> 
                        <p>Desert</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_4.png' alt="" /> </li> 
                        <p>Sandwich</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_5.png' alt="" /> </li> 
                        <p>Cake</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_6.png' alt="" /> </li> 
                        <p>Pure Veg</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_7.png' alt="" /> </li> 
                        <p>Pasta</p>
                    </div>
                    <div className="explore-menu-list-items">
                        <li> <img src='./images/menu_8.png' alt="" /> </li> 
                        <p>Noodles</p>
                    </div>
                    
                </ul> */}

                <ui>
                </ui>
                
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu