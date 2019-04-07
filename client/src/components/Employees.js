import React from 'react'
import { Icon, Label, Menu, Table, Header, Pagination } from 'semantic-ui-react'

const Employees = () => (
  <div id='Employees' className='card'>
    <Header as='h1'>Employees</Header>
    <Table singleLine textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Employee ID</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Hire Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Smith</Table.Cell>
          <Table.Cell>Stan</Table.Cell>
          <Table.Cell>1/1/2020</Table.Cell>

        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>?</Table.Cell>
          <Table.Cell>Roger</Table.Cell>
          <Table.Cell>1/1/2020</Table.Cell>

        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Heissler</Table.Cell>
          <Table.Cell>Klaus</Table.Cell>
          <Table.Cell>1/1/2020</Table.Cell>
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

export default Employees
