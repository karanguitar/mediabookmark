import React from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const SignedOutToolbar = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Link to="/">Media Bookmark</Link> 
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item as='a'>Login with Google</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>

    <Container style={{ marginTop: '4rem' }}>
      {props.children}
    </Container>
</div>

)

export default SignedOutToolbar