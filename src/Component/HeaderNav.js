import React from "react";
import { Menu, Form, Input, Icon, Image } from "semantic-ui-react";
import "./index.scss";

export class HeaderNav extends React.Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image
            src="https://thumbs.dreamstime.com/z/book-logo-vector-drawing-represents-design-53875554.jpg"
            size="tiny"
          />
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input placeholder="Search" size="small" action="Go" />
              </Form.Field>
            </Form>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          {/*<Menu.Item>*/}
          {/*  <Icon className="header-icon" name="video camera" size="large" />*/}
          {/*</Menu.Item>*/}
          <Menu.Item>
            <Icon className="header-icon" name="grid layout" size="large" />
          </Menu.Item>
          {/*<Menu.Item>*/}
          {/*  <Icon className="header-icon" name="chat" size="large" />*/}
          {/*</Menu.Item>*/}
          <Menu.Item>
            <Icon className="header-icon" name="alarm" size="large" />
          </Menu.Item>
          <Menu.Item name="avatar">
            <Image src="http://via.placeholder.com/80x80" avatar />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;
