import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function NavIconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('Show events:', event);
    setValue(newValue);
  };

  return (
    <nav>
      <Tabs value={value} onChange={handleChange} aria-label="navigation icon label tabs">
        <Tab icon={<HomeIcon />} label="HOME" />
        <Tab icon={<GroupIcon />} label="EMPLOYEES" />
        <Tab icon={<GroupAddIcon />} label="ONBOARDING" />
      </Tabs>
    </nav>
  );
}