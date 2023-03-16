import React, { useState } from 'react';
import { Card, Grid, Text, Row, Button, Spacer, Input } from '@nextui-org/react';
import { data } from '../data/data';

export default function Cards() {
  const [query, setQuery] = useState('');
  console.log(query)

  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={12}>
          <Input
          placeholder='Search ...'
          aria-label='search_bar'
          onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        {data.filter((prod) => {
          return query.toLowerCase() === '' ? prod : prod.title.toLowerCase().includes(query);
        }).map((prod) => (
          <Grid xs={6} sm={3}>
            <Card css={{ maxWidth: '100%', h: "520px" }} key={prod.id}>
              <Card.Image
                showSkeleton={true}
                autoResize={true}
                alt={prod.title}
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
