import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


  import Coin from "./routes/coin";
  import Coins from "./routes/coins";
  
  
 
function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:coinId/*" element={<Coin />}/>
                Route path={`${process.env.PUBLIC_URL}/`} element={<Coins/>}/>  
            </Routes>
        </BrowserRouter>
    )

    

   
}

export default Router;

