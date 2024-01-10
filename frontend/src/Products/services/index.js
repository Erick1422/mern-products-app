import axios from 'axios';

const baseUrl = 'http://localhost:3000/v1';

export const getProducts = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}/product`,
            method: 'GET'
        });
        return response;

    } catch (error) {
        console.log(error);
    }
}

export const saveProduct = async (productData) => {
    try {
        const formData = new FormData();
        
        for (const key in productData) {
            formData.append(key, productData[key]);
        }

        const response = await axios({
            url: `${baseUrl}/product`,
            method: 'POST',
            data: formData
        });

        return response;

    } catch (error) {
        console.log(error);
    }
}