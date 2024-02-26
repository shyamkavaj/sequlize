import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch } from 
import { useDispatch, useSelector } from 'react-redux';
import { make_ice } from './store/slice/iceSlice'
// import indexForm from './login_Context';
import IndexForm from './login_Context/index';
// import  ContextProvider  from './login_Context/authContext';


function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.ice);
  return (
    <div className="App">
      <div style={{ "display": "flex", "justifyContent": "center" }}><h3>Profit : 0 and stock of Ice-cream is : 0</h3></div>
      <div style={{ "display": "flex", "justifyContent": "center" }}>

        <div className="p-3 bg-info bg-opacity-10 border border-info rounded w-45 " >
          <h1>Ice-Cream Shop</h1>
          <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{ "display": "flex", "flexDirection": "column" }}>
              <button type="button" className="btn btn-danger" onClick={() => {
                dispatch(make_ice(document.getElementById('pice').value))
                document.getElementById('pice').value = ''
              }}>Produce</button>
              <input type="number" id='pice'></input>
            </div>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{ "display": "flex", "flexDirection": "column" }}>
              <button type="button" className="btn btn-success" >Sell</button>

              <input type="number" id='sice'></input>
            </div>

          </div>
        </div>

        <div className="p-3 bg-warning bg-opacity-10 border border-warning rounded w-45" >
          <h1>Cake Shop</h1>
          <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
            {/* <div style={{ "display": "flex", "alignItems": "center" }}><h3>Profit : 0</h3></div> */}

            <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{ "display": "flex", "flexDirection": "column" }}>
              <button type="button" className="btn btn-danger" >Produce</button>
              {/* {document.getElementById('pcake').value} */}
              <input type="number" id="pcake"></input>
            </div>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{ "display": "flex", "flexDirection": "column" }}>
              <button type="button" className="btn btn-success" > Sell</button>
              {/* {console.log(document.getElementById('scake').value)} */}
              <input type="number" id="scake"></input>
            </div>

          </div>
        </div>

        {data.icePrice.map((item, index) => (
          <h3>{item}</h3>
        ))}

      </div>
      {/* <ContextProvider> */}
        <IndexForm />
      {/* </ContextProvider> */}

    </div>
  );
}

export default App;
