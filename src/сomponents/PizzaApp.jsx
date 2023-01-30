import '../scss/app.scss'
import {Header} from "./Header";
import {TopBar} from "./TopBar";
import {PizzaBlock} from "./PizzaBlock";

export let PizzaApp = () => (
    <div className="wrapper">
        <Header/>
        <div className="content">
            <div className="container">
                <TopBar/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {/*{objects.map((object, i) => <ObjectRow obj={object} key={i} />)}*/}
                    <PizzaBlock name={"Pepperoni"} price={300}/>
                    <PizzaBlock name={"Diablo"} price={320}/>
                    <PizzaBlock name={"5 Cheeses"} price={310}/>
                    <PizzaBlock name={"Rancho"} price={315}/>
                    <PizzaBlock name={"Capricioasa"} price={340}/>
                    <PizzaBlock name={"BBQ"} price={300}/>
                    <PizzaBlock name={"Margherita"} price={315}/>
                    <PizzaBlock name={"Mario"} price={335}/>
                    <PizzaBlock name={"Fattoria"} price={300}/>
                </div>
            </div>
        </div>
    </div>
)