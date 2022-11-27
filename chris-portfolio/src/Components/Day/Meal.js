import {useState, React} from 'react';
import { Button } from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';

import { addMealPlan } from '../../Redux/actionCreators';

export default function Meal(props) {
  const { meal} = props; 
  let [num, setNum] = useState(0);

  const [isAdded, setIsAdded] = useState(false);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  
  const handleAddToCart = (e) => {
    // const product = { ...data, quantity: 1 };
    // addToCart(dispatch, product);
    setIsAdded(true);
    setList([...list, e.target.value]);
    list.map((item) => {
      alert(item + " " + num);
      //dispatch(addMealPlan(item+num))
    });

    
    setTimeout(() => {
      setIsAdded(false);
    }, 2500);
    setNum(0);
  };
  return (
    <div>
      {/* <img className="small" src={meal.image} alt={product.name} /> */}
      <h3>{meal}</h3>
    
      <div>{IncDecCounter(num, setNum)}
                <br /></div>
      <div>
      <Button
                  //className={!isAdded ? "" : "added"}
                  color="success"
                  type="button"
                  value={meal}
                  onClick={handleAddToCart}
                  disabled={num === 0}
                >
                  {!isAdded ? "ADD TO CART" : "✔ ADDED"}
                </Button>
      </div>
    </div>
  );
}


function IncDecCounter(num, setNum) {
    let incNum = () => {
      if (num < 10) {
        setNum(Number(num) + 1);
      }
    };
    let decNum = () => {
      if (num > 0) {
        setNum(num - 1);
      }
    };
    let handleChange = (e) => {
      setNum(e.target.value);
      
    };
  
    return (
      <>
        <div className="col-2">
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-primary"
                type="button"
                value="1"
                onClick={decNum}
              >
                -
              </button>
            </div>
            <input
              type="text"
              class="form-control"
              value={num}
              onChange={handleChange}
            />
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={incNum}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  