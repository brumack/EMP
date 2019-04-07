import React from 'react'
import { Icon, Label, Menu, Table, Header, Pagination } from 'semantic-ui-react'

const Jobs = () => (
  <div id='Jobs' className='card'>
    <Header as='h1'>Jobs</Header>
    <Table singleLine textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Job ID</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Customer Last Name</Table.HeaderCell>
          <Table.HeaderCell>Customer First Name</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>1/1/2020</Table.Cell>
          <Table.Cell>Griffin</Table.Cell>
          <Table.Cell>Peter</Table.Cell>
          <Table.Cell>31 Spooner Street, Quahog RI</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>1/2/2020</Table.Cell>
          <Table.Cell>Belcher</Table.Cell>
          <Table.Cell>Robert</Table.Cell>
          <Table.Cell>1515 Ocean Ave, Long Island NY</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>1/3/2020</Table.Cell>
          <Table.Cell>Brown</Table.Cell>
          <Table.Cell>Cleveland</Table.Cell>
          <Table.Cell>1265 E 15th St, Stoolbend VA</Table.Cell>
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

export default Jobs
