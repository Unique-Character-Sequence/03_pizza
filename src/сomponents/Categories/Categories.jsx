import {useState} from "react";

export let Categories = () => {
    const [highlightedCategory, setHighlightedCategory] = useState(0);
    const handleClick = (index) => setHighlightedCategory(index);
    const isHighlighted = (index) => highlightedCategory === index ? "active" : ""
    const categories = [
        "Все",
        "Мясные",
        "Вегетарианские",
        "Гриль",
        "Острые",
        "Закрытые"
    ];
    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>
                    <li onClick={() => handleClick(index)} className={isHighlighted(index)}>{category}</li>)}
            </ul>
        </div>
    );
}