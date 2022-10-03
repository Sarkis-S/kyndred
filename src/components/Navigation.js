import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  
  const handleChange = (event, newValue) => {
    let path = event.target.attributes.path.textContent;
    setValue(newValue);
    navigate(path);
  };
  
  return (
    <nav>
      <Tabs value={value} onChange={handleChange} aria-label="navigation icon label tabs">
        <Tab icon={<HomeIcon />} label="home" path="/" />
        <Tab icon={<GroupIcon />} label="employees" path="/employees" />
        <Tab icon={<GroupAddIcon />} label="onboarding" path="/onboarding" />
      </Tabs>
    </nav>
  );
}