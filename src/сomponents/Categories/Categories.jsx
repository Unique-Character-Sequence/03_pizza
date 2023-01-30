import {useState} from "react";

export let Categories = () => {
    const [highlightedCategory, setHighlightedCategory] = useState("");
    const handleClick = (index) => setHighlightedCategory(index);
    const isHighlighted = (index) => highlightedCategory === index ? "active" : ""

    return (
        <div className="categories">
            <ul>
                <li className={isHighlighted(0)} onClick={() => handleClick(0)}>
                    Все
                </li>
                <li className={isHighlighted(1)} onClick={() => handleClick(1)}>
                    Мясные
                </li>
                <li className={isHighlighted(2)} onClick={() => handleClick(2)}>
                    Вегетарианская
                </li>
                <li className={isHighlighted(3)} onClick={() => handleClick(3)}>
                    Гриль
                </li>
                <li className={isHighlighted(4)} onClick={() => handleClick(4)}>
                    Острые
                </li>
                <li className={isHighlighted(5)} onClick={() => handleClick(5)}>
                    Закрытые
                </li>
            </ul>
        </div>
    );
}