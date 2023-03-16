import React, { useState } from 'react';
import { Card, Grid, Text, Row, Button } from '@nextui-org/react';
import { data } from '../data/data';

export default function Cards() {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {data.map((prod) => (
          <Grid xs={6} sm={3}>
            <Card key={prod.id}>
              <Card.Image
                showSkeleton={true}
                autoResize={true}
                alt={prod.title}
                src={prod.image}
                objectFit="scale-down"
                width="180px"
                height="180px"
              />
              <Card.Body>
                <Text h3 size={20} css={{textAlign: 'center'}}>{prod.title}</Text>
                <Text>{prod.category}</Text>
                <Text>{prod.price}</Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Button>Add to Card</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}