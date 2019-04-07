import React from 'react'

import { Table, Header, Pagination } from 'semantic-ui-react'

const Schedule = () => {
  return (
    <div id='Schedule' className='card'>
      <Header as='h1'>Schedule</Header>
      <Header as='h3'>Week of 1/1/2020</Header>
      <Table singleLine textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Job ID</Table.HeaderCell>
            <Table.HeaderCell>Start</Table.HeaderCell>
            <Table.HeaderCell>Stop</Table.HeaderCell>
            <Table.HeaderCell>Total (hours)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1/1/2020</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/2/2020</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/3/2020</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/4/2020</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/5/2020</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/6/2020</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/7/2020</Table.Cell>
            <Table.Cell>7</Table.Cell>
            <Table.Cell>09:00</Table.Cell>
            <Table.Cell>18:00</Table.Cell>
            <Table.Cell>08:00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      />
    </div>
  )
}

export default Schedule
