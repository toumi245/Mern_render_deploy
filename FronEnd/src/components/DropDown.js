import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
function DropDown() {
  return (
    <>
    {[ 'primary'  ].map(
      (variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title="List"
        >
          <Link to='/TvList/:id'><Dropdown.Item eventKey="1">Tv</Dropdown.Item></Link>
          <Dropdown.Item eventKey="2">électroménager</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Accessoire
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ),
    )}
  </>
  )
}

export default DropDown