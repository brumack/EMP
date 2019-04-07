import React from 'react'
import { Icon, Label, Menu, Table, Header, Pagination } from 'semantic-ui-react'

const Messages = () => (
  <div id='Messages' className='card'>
    <Header as='h1'>Messages</Header>
    <Table singleLine textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>Subject</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1/1/2020</Table.Cell>
          <Table.Cell>eric.cartman@gmail.com</Table.Cell>
          <Table.Cell>Screw You Guys</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1/2/2020</Table.Cell>
          <Table.Cell>chef@yahoo.com</Table.Cell>
          <Table.Cell>Oh Hey Kids</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1/3/2020</Table.Cell>
          <Table.Cell>kenny.McC@library.southpark.gov</Table.Cell>
          <Table.Cell>Mff Mummumumffff Merf</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)

export default Messages
