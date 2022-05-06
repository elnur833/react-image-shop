import React, { useContext, useState } from 'react';
import classes from './Checkbox.module.css';
import { ProductContext } from '../../store/ProductsContext';

const Checkbox = props => {
    // const [genre, setGenre] = useState([]);
    // // const { filterByCategory } = useContext(ProductContext)
    // // const checkboxChangeHandler = event => {
    // //     if (event.target.checked) {
    // //         filterByCategory(event.target.value)
    // //     }
    // // }
    // const handleChange = e => {
    //     if (e.target.checked) {
    //         setGenre([...genre, e.target.value]);
    //     } else {
    //         setGenre(genre.filter(id => id !== e.target.value));
    //     }
    // };

    // console.log(genre)

    // const handleCheck = (event) => {
    //     var updatedList = [...checked];
    //     console.log('d', updatedList);
    //     if (event.target.checked) {
    //         updatedList = [...checked, event.target.value];
    //     } else {
    //         updatedList.splice(checked.indexOf(event.target.value), 1);
    //     }
    //     setChecked(updatedList);
    //     console.log(checked);
    //     console.log(updatedList);
    // };

    // console.log(checked)
    return (
        <label className={classes['checkbox-label']}>
            {/* <input type="checkbox" value={props.value} name={props.name} onChange={handleChange} />
            <p>{props.label}</p> */}
        </label>
    )
}

export default Checkbox;