import { Card, Columns, Content, Heading } from 'react-bulma-components'

const ListProducts = ({ products }) => {
    return (
        <>
            <Columns>
                {
                    products.map((product => {
                        const { description, name, size, _id, unitaryPrice, imgUrl } = product;
                        return (
                            <Columns.Column size={4} key={_id}>
                                <Card>
                                    <Card.Image size="16by9" src={imgUrl} />
                                    <Card.Content>
                                        <Content>
                                            <Heading>{name}</Heading>
                                            <Heading subtitle size={6}>Price: {unitaryPrice}</Heading>
                                            <Heading subtitle size={6}>Size: {size}</Heading>
                                            <p>
                                                {description}
                                            </p>
                                        </Content>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>
                        )
                    }))
                }
            </Columns>
        </>
    )
}

export default ListProducts;