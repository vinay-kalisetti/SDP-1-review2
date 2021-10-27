import { OrderManagementModule, FreightManagementModule, TransportationModule, ManufacturingModule } from './components/moduledata'
import {useState,useEffect} from "react";
import { Button } from "@material-ui/core";

const s1 = {
border: "3px solid black",
width: "1200px",
boxShadow: "2px 3px 5px black",
color: "black",
margin:"auto",
textAlign: "center",
textShadow: "0px 0px 1px blue",
};
const s2 = {
margin: 50,
};
const SDPReview2 = () => {
const [mod, setMod] = useState(OrderManagementModule);
const changeView = (mod) => {
setMod(mod);
};
return (
<div style={s1}>
  <h1>Enterprise Resource Planning(ERP)</h1>
  <h1>Modules in TMS</h1>
<div>
<Button
style={s2}
variant="contained"
color="primary"
onClick={() => changeView(OrderManagementModule)}
>
{" "}
Order Management{" "}
</Button>
<Button
style={s2}
variant="contained"
color="primary"
onClick={() => changeView(FreightManagementModule)}
>
{" "}
Freight Management{" "}
</Button>
<Button
style={s2}
variant="contained"
color="primary"
onClick={() => changeView(TransportationModule)}
>
{" "}
Transportation{" "}
</Button>
<Button
style={s2}
variant="contained"
color="primary"
onClick={() => changeView(ManufacturingModule)}
>
{" "}
Manufacturing{" "}
</Button>
</div>

<img src={mod[0].imageUrl} alt=" " width="600" />
<p style={{ textAlign:"center" , fontSize:"30px" , fontWeight:"bold" , color:"#ff0000"}}> {mod[0].displayName} </p>
<p style={{ textAlign:"center"}}> {mod[0].description} </p>
<h3 > Module Content: </h3>
<h style={{ textAlign: "left" }}>
<ul>
<li>{mod[0].Modulecontents} </li>
</ul>
</h>
</div>
);
};
export default SDPReview2;