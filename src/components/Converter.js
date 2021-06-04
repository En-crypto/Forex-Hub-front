import React from 'react';
import ConverterCss from './Converter.css';

 function Converter () {
return (
    <>
    <h2>Currency Convert</h2>
    <div>
    <input type="number"/>
    <select>
        <option value="currency">Currency</option>
    </select>
    </div>
    <span>||</span>
    <div id="second">
    <input type="number"/>
    <select>
        <option value="currency">Currency</option>
    </select>
    </div>
    </>
    )
}
export default Converter;