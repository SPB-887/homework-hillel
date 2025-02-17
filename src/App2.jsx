import { useState } from "react";
import { iphones } from "./script.js";
import "./App.css";

export const App2 = () => {
  const [basket, setBasket] = useState([]);
  const [iphoneList, setIfoneList] = useState(iphones);

  return (
    <div className="box">
      <div className="box-flex">
        <h1>Basket</h1>
        <h2>
          Загальна сума:
          {basket.reduce(function (acc, item) {
            const result = item.price * item.counter;
            return acc + result;
          }, 0)}
          USD
        </h2>
        <ul>
          {basket.map(function ({ model, price, counter }, i) {
            return (
              <li key={i} className="basket-item">
                <p>Модель {model}</p>
                <p>Ціна {price}</p>
                <h2>
                  Кількість в корзині {counter}
                  <button
                    onClick={function () {
                      const updatedBasket = basket.map(function (item) {
                        if (item.model === model) {
                          if (item.counter <= 1) return item;
                          item.counter -= 1;
                          return item;
                        }
                        return item;
                      });
                      setBasket(updatedBasket);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={function () {
                      const updatedBasket = basket.map(function (item) {
                        if (item.model === model) {
                          item.counter += 1;
                          return item;
                        }
                        return item;
                      });
                      setBasket(updatedBasket);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="remove"
                    onClick={function () {
                      const updatedBasket = basket.filter(function (item) {
                        if (item.model === model) {
                          return false;
                        }
                        return true;
                      });

                      setBasket(updatedBasket);
                    }}
                  >
                    X
                  </button>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="box-flex">
        <h1>Iphone Store</h1>

        <ul className="iphone-list">
          {iphoneList.map(function ({
            model,
            price,
            inStock,
            releaseYear,
            img,
          }) {
            const redBorder = inStock ? "" : "red-border";
            return (
              <li className={`iphone-item ${redBorder}`} key={model}>
                <h2 className="iphone-model">Модель: {model}</h2>
                <img src={img} alt="" />
                <span className="iphone-price">Ціна: {price}</span>
                <p className="iphone-in-stock">
                  {inStock ? "Є в наявності" : "Нема в наявності"}
                </p>
                <p className="iphone-year">Дата випуску Iphone {releaseYear}</p>
                {inStock ? (
                  <button
                    type="button"
                    onClick={function () {
                      const updatedBasket = basket.map(function (item) {
                        if (item.model === model) {
                          item.counter += 1;
                          return item;
                        }
                        return item;
                      });

                      const isExisting = basket.find(
                        (item) => item.model === model
                      );

                      if (!isExisting) {
                        setBasket([{ model, price, counter: 1 }, ...basket]);
                      } else {
                        setBasket(updatedBasket);
                      }
                    }}
                  >
                    Купити
                  </button>
                ) : (
                  <button>Скоро у продажі</button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
