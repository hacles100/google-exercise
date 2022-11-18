import { useRef, useState } from "react";
import "./Continua.css"

function Continua() {
    const shopRef = useRef();
    const shopCart = ["Abiu", "Açaí", "Acerola", "Akebi", "Ackee", "African-Cherry-Orange", "American-Mayapple", "Apple", "Apricot", "Araza", "Avocado", "Banana",
        "Bilberry", "Blackberry", "Blackcurrant", "Black-sapote", "Blueberry", "Boysenberry", "Breadfruit", "Cactus-pear", "Canistel", "Cashew",
        "Cempedak", "Cherimoya", "Cherry", "Chico-fruit", "Cloudberry", "Coco-De-Mer", "Coconut", "Crab-apple", "Cranberry", "Currant", "Damson",
        "Dragonfrui", "Durian", "Egg-Fruit", "Elderberry", "Feijoa", "Fig", "Finger-Lime", "Caviar-Lime", "Goji-berry", "Gooseberry",
        "Grape", "Raisin", "Grapefruit", "Grewia-asiatica", "Guava", "Hala-Fruit", "Honeyberry", "Huckleberry", "Jabuticaba", "Plinia", "Jackfruit",
        "Jambul", "Japanese-plum", "Jostaberry", "Jujube", "Juniper-berry", "Kaffir-Lime", "Kiwano", "horned-melon", "Kiwi", "Kumquat", "Lemon",
        "Lime", "Loganberry", "Longan", "Loquat", "Lulo", "Lychee", "Magellan-Barberry", "Mamey-Apple", "Mamey-Sapote", "Mango", "Mangosteen", "Marionberry",
        "Melon", "Cantaloupe", "Galia-melon", "Honeydew", "Mouse-melon", "Musk-melon", "Watermelon", "Miracle-fruit", "Momordica-fruit", "Monstera-deliciosa",
        "Mulberry", "Nance", "Nectarine", "Orange", "Blood-orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passion-fruit", "Pawpaw", "Peach", "Pear", "Persimmon",
        "Plantain", "Plum", "Prune", "Pineapple", "Pineberry", "Plumcot", "Pluot", "Pomegranate", "Pomelo", "Purple-mangosteen", "Quince", "Raspberry", "Salmonberry", "Rambutan",
        "Mamin-Chino", "Redcurrant", "Rose-apple", "Salal-berry", "Salak", "Sapodilla", "Sapote", "Satsuma", "Shine-Muscat", "Vitis-Vinifera", "Sloe", "Hawthorn-Berry",
        "Soursop", "Star-apple", "Star-fruit", "Strawberry", "Surinam-cherry", "Tamarillo", "Tamarind", "Tangelo", "Tayberry", "Ugli-fruit", "White-currant", "White-sapote",
        "Ximenia", "Yuzu"]
        
    const [SearchResult, setSearchResult] = useState([])
    // const [toBuy, setToBuy] = useState([])
    const [myCart, setMyCart] = useState([])
    
    function whatWeGot() {
        let results = [];
        const shoppingRef = shopRef.current.value;
        for (let item of shopCart) {
            if (item.toLowerCase().includes(shoppingRef.toLowerCase())) {
                results.push(item);
            }
        }
        setSearchResult(results);
        if (shoppingRef === "") { setSearchResult([]) }
    }
    // function buyThis(i) {

    // }

    // const removeIt = i => {
    //     myCart.splice(i, 1);
    //     const newList = [...toBuy];
    //     setMyCart(newList);
    // }

    return <>
        <span>{myCart}</span><br></br>
        <input onChange={whatWeGot} ref={shopRef} type="text" placeholder="Pesquise sua fruta predileta"></input>
        <span >{SearchResult.map((item, i) =>
            <div key={i}>
                {item} 
            </div>
        )}</span>


    </>
}
export default Continua