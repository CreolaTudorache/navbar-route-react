import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {
const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems()
    }, []);
  
 const fetchItems = async () => {
    const data = await fetch (`www.thecocktaildb.com/api/json/v1/1/random.php`);
    const items = await data.json()
    console.log(items)
    setItems(items)
 }
  return (
    <div>
        {items.map(item => (
            <h1> item</h1>
        ))}
    </div>
  );
};
export default Shop;