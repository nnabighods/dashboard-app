import React from "react";
import {IoNotificationsOutline} from 'react-icons/io5'
import {AppBarStyles, AppBarItem, AppBarItems} from './styles';
import {IconButton} from './../../ui/buttons';

function AppBar(props) {
 
  return (
    <AppBarStyles>
      <AppBarItems>
        <AppBarItem>Branding</AppBarItem>
        <AppBarItem>
          <IconButton><IoNotificationsOutline size='1.75rem' color="tomato" /></IconButton>
        </AppBarItem>
      </AppBarItems>
    </AppBarStyles>
  );
}

export default AppBar;

 
 