import { useEffect, useState } from 'react';
import { Modal, Container } from 'react-bulma-components';

import Header from './Header';
import AddButton from './AddButton';
import ListProducts from './ListProducts';
import Form from './Form';
import { saveProduct, getProducts } from '../services';
import Loading from './Loading';

const ProductLayout = () => {

    // Hook -> Función especial que nos permite utilizar caracteristicas de React
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Manejar un estado
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const { data, status } = await getProducts();

        if (status == 201 || status == 200) {
            setProducts(data.products);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const handleSubmit = async (data) => {
        await saveProduct(data);
        loadProducts();
        setIsModalOpen(false);
    }

    return (
        <Container>
            <Header title="Products App" />
            <AddButton onClick={() => setIsModalOpen(true)} />
            {
                isLoading && <Loading />
            }
            {
                !isLoading && !products.length && (
                    <h2 className='title has-text-centered'>
                        No hay productos
                    </h2>
                )
            }
            {
                !isLoading && products.length && <ListProducts products={products} />
            }
            
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header>
                        <Modal.Card.Title>
                            Add Product
                        </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit} />
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
    );
}

export default ProductLayout;