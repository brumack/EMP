import React from 'react'
import { Icon, Label, Menu, Table, Header, Pagination } from 'semantic-ui-react'

const Timecard = () => (
  <div id='Timecard' className='card'>
    <Header as='h1'>Timecard</Header>
    <Header as='h3'>Period beginning 1/1/2020</Header>
    <Table singleLine textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Job ID</Table.HeaderCell>
          <Table.HeaderCell>In</Table.HeaderCell>
          <Table.HeaderCell>Out</Table.HeaderCell>
          <Table.HeaderCell>In</Table.HeaderCell>
          <Table.HeaderCell>Out</Table.HeaderCell>
          <Table.HeaderCell>Total (hours) </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1/1/2020</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>09:00</Table.Cell>
          <Table.Cell>13:00</Table.Cell>
          <Table.Cell>14:00</Table.Cell>
          <Table.Cell>18:00</Table.Cell>
          <Table.Cell>08:00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1/2/2020</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>09:00</Table.Cell>
          <Table.Cell>13:00</Table.Cell>
          <Table.Cell>14:00</Table.Cell>
          <Table.Cell>18:00</Table.Cell>
          <Table.Cell>08:00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1/3/2020</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>09:00</Table.Cell>
          <Table.Cell>13:00</Table.Cell>
          <Table.Cell>14:00</Table.Cell>
          <Table.Cell>18:00</Table.Cell>
          <Table.Cell>08:00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Pagination
      boundaryRange={0}
      defaultActivePage={3}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={3}
    />
  </div>

)

export default Timecard
