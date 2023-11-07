/*import { useState } from "react";*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './MainBody.css';

function MainBody() {
    /*const [findFood, setfindFood] = useState(false);*/
    const locationIcon = <FontAwesomeIcon
                            icon={faLocationDot}
                            style={
                                {
                                 position: 'absolute',
                                 marginLeft: 15,
                                 marginBottom: 0,
                                 fontSize: 14
                                }
                            }
                         />
    const clockIcon = <FontAwesomeIcon
                            icon={faClock}
                            style={
                                {
                                 position: 'absolute',
                                 marginLeft: 15,
                                 marginTop: 10,
                                 fontSize: 12.5,
                                }
                            }
                      />

    return (
        <main className="main">
            <h1>Order food to your doorstep</h1><br/>
            <form className="address">
                <div className="input-icons">
                    {locationIcon}
                    <input className="input-field" type="text" placeholder="Enter delivery address"/>
                </div>
            </form>
            <div className="dt">
                {clockIcon}
                <select  className="dt-options" name="delivery-time" id="delivery-time">
                    <option value="d1">Deliver now</option>
                    <option value="d2">Deliver at noon</option>
                    <option value="d3">Deliver at night</option>
                </select>
            </div>
            <button type="submit">Find Food</button>
            <p><a href="/signin">Sign in</a> for your recent addresses</p>
        </main>
    )
}

export default MainBody;