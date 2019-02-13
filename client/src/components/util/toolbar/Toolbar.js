import React from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'



const FixedMenuLayout = (props) => {

  const toolbarContent = () =>{
    if(props.currentUser){
      return(
        <>
        <Menu.Item>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Dropdown position='right' item simple text='More'>
          <Dropdown.Menu >
          <Dropdown.Item as="a" href="/about">
              About
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/api/logout">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </>
      )
    }else{
      return(
        <>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item> 
        <Menu.Item>
          <a href="/api/auth/google">Login with Google</a>
        </Menu.Item>
        </>
      )
    }
  }

  return(
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Link to={props.currentUser ? "/dashboard" : "/"}>Media Bookmark</Link> 
        </Menu.Item>
        <Menu.Menu position='right'>
          {toolbarContent()}
        </Menu.Menu>
      </Container>
    </Menu>

    <Container style={{ marginTop: '4rem' }}>
      {props.children}
    </Container>
</div>
  )
}

export default FixedMenuLayout