import React, { useState, useReducer } from 'react';
import { Card, Grid, Text, Row, Button, Input } from '@nextui-org/react';
import { data } from '../data/data';
import { reducer } from '../button_logic/reducer';
import { getSortProduct } from '../button_logic/getSortProduct';

export default function Cards() {
  const [{sortBy}, dispatch] = useReducer(reducer, { sortBy: 'none'});

  const sortedProduct = getSortProduct([...data], sortBy);


  const [query, setQuery] = useState('');

  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={12}>
          <Input
          placeholder='Search ...'
          aria-label='search_bar'
          onChange={(e) => setQuery(e.target.value)}
          />
          <Row justify='flex-end'>
          <Button
          auto
          color="primary"
          rounded
          bordered
          onChange={() => dispatch({ type: "SORT_PRICE", payload: "LOw_TO_HIGH"})}> - </Button>
          <Button
          auto
          color="primary"
          rounded
          bordered
          onChange={() => dispatch({ type: "SORT_PRICE", payload: "HIGHT_TO_LOW"})}> + </Button>
          </Row>
        </Grid>
        {sortedProduct.filter((prod) => {
          return query.toLowerCase() === '' ? prod : prod.title.toLowerCase().includes(query);
        }).map((prod) => (
          <Grid xs={6} sm={3}>
            <Card css={{ maxWidth: '100%', h: "520px" }} key={prod.id}>
              <Card.Image
                showSkeleton={true}
                autoResize={true}
                alt='image'
                src={prod.image}
                objectFit="scale-down"
                width="180px"
                height="190px"
                css={{ marginTop: '7px' }}
              />
              <Card.Body css={{ textAlign: 'center' }}>
                <Text h3 size={15}>
                  {prod.title}
                </Text>
                <Text>{prod.category}</Text>
                <Text>{prod.price} €</Text>
                <Text h5>more colors</Text>
              </Card.Body>
              <Card.Footer>
                <Row justify="center">
                  <Button size='sm' flat auto rounded>
                    Add
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
