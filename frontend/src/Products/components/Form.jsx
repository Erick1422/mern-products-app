import { useState, useRef } from 'react';
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm;

const Form = ({ handleSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        unitaryPrice: '',
        size: '',
        description: ''
    });

    const inputFileRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    // _ sirve si se tiene el mismo nombre e indica que es privado
    const _handleSubmit = (e) => {
        e.preventDefault();
        handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
    }

    return (
        <form onSubmit={_handleSubmit}>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input placeholder="" name='name' value={formValues.name} onChange={handleChange} />
                </Control>
            </Field>
            <Field>
                <Label>Size</Label>
                <Control>
                    <Input placeholder="" type='number' name='size' value={formValues.size} onChange={handleChange} />
                </Control>
            </Field>
            <Field>
                <Label>Unitary Price</Label>
                <Control>
                    <Input placeholder="" type='number' name='unitaryPrice' value={formValues.priceUnitary} onChange={handleChange} />
                </Control>
            </Field>
            <Field>
                <Label>Description</Label>
                <Control>
                    <Input placeholder="" name='description' value={formValues.description} onChange={handleChange} />
                </Control>
            </Field>
            <Field>
                <Label>Image</Label>
                <Control>
                    <input type="file" ref={inputFileRef} />
                </Control>
            </Field>
            <Button color="primary" className='' type='submit'>
                Save
            </Button>
        </form>
    )
}

export default Form;