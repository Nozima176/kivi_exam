 import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Chart from '../../Chart'
import ChatComponent from '../../components/FirstPage/ChatComponent'

import './Tabs.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // backgroundColor: "black"
  },
}));

export default function ChatTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" className="appbar" style={{backgroundColor:"white", boxShadow:"0 0 0 0"}}>
          <TabList onChange={handleChange} aria-label="simple tabs example"
          className="tablist" style={{color: "red"}}>
            <Tab label="Объявления" value="1" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px" }}/>
            <Tab label="Сообщения" value="2" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            <Tab label="Платежи и счёт" value="3" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            <Tab label="Настройки" value="4" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            <Tab label="Мой бизнес" value="5" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
                                                                                        
            
          </TabList>
        </AppBar>
        <TabPanel value="1"><Chart/></TabPanel>
        <TabPanel value="2"><ChatComponent/></TabPanel>
        <TabPanel value="3">2</TabPanel>
        <TabPanel value="4">3</TabPanel>
        <TabPanel value="5">4</TabPanel>
       
      </TabContext>
    </div>
  );
}