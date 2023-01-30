import {Sort} from "./Sort";
import {Categories} from "./Categories/Categories";

export let TopBar = () => (
    <div className="content__top">
        <Categories/>
        <Sort/>
    </div>
)