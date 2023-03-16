import React, { useState } from 'react';
import { Card, Grid, Text, Row, Button, Spacer } from '@nextui-org/react';
import { data } from '../data/data';

export default function Cards() {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {data.map((prod) => (
          <Grid xs={6} sm={3}>
            <Card css={{ w: "100%", h: "400px" }} key={prod.id}>
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
                <Text h3 size={20}>
                  {prod.title}
                </Text>
                <Text>{prod.category}</Text>
                <Text>{prod.price} €</Text>
                <Spacer />
                <Text h5>more colors</Text>
              </Card.Body>
              <Card.Footer>
                <Row justify="flex-end">
                  <Button flat auto rounded>
                    Add to Card
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
