import { useState } from "react";

function ShoppingListForm() {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0,
    });
    const handleUpdateForm = (event) => {
        const changedKey = event.target.name;
        const newValue = event.target.value;
        setFormData((currentFormData) => {
            return {
                ...currentFormData,
                [changedKey]: newValue,
            };
        });
    };
    return (
        <form>
            <h1>Product is: {formData.product}</h1>
            <label htmlFor="product">Product name</label>
            <input
                type="text"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleUpdateForm}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleUpdateForm}
            />
        </form>
    );
}

export default ShoppingListForm;
