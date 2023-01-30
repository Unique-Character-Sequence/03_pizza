import {useState} from "react";

export let Categories = () => {
    const [highlightedCategory, setHighlightedCategory] = useState(0);
    const handleClick = (index) => setHighlightedCategory(index);
    const isHighlighted = (index) => highlightedCategory === index ? "active" : ""
    const categories = [
        {index: 0, name: "Все"},
        {index: 1, name: "Мясные"},
        {index: 2, name: "Вегетарианская"},
        {index: 3, name: "Гриль"},
        {index: 4, name: "Острые"},
        {index: 5, name: "Закрытые"},
    ];
    return (
        <div className="categories">
            <ul>
                {categories.map(category => (
                    <li key={category.index}
                        className={isHighlighted(category.index)}
                        onClick={() => handleClick(category.index)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}