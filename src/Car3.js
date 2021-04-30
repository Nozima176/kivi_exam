import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Carousel from './components/FirstPage/Carousel/Carousel';
import './Car3.scss'
import '../src/components/FirstPage/Tabs.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      // backgroundColor: "black"
    },
  }));
  
const Car3 = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
         <div style={{ maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
               <TabContext value={value}>
        <AppBar position="static" className="appbar" style={{backgroundColor:"white", boxShadow:"0 0 0 0"}}>
          <TabList onChange={handleChange} aria-label="simple tabs example"
          className="tablist" style={{color: "red"}}>
            <Tab label="Похожие объявления" value="1" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            <Tab label="Обьявление автора" value="2" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
           
          </TabList>
        </AppBar>
        <TabPanel value="1">  <Carousel
                show={4}
            >
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vone.png' alt="placeholder" style={{width: '90%'}} />
                        <p className="title">Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span className="title">Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vtwo.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vthree.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vfive.png'alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vsix.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vseven.png'alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/veight.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vtwo.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                 <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vone.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                 <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vtwo.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                 <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vthree.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
            </Carousel></TabPanel>
        <TabPanel value="2">  <Carousel
                show={4}
            >
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vone.png' alt="placeholder" style={{width: '90%'}} />
                        <p className="title">Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span className="title">Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vtwo.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vthree.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vfive.png'alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vsix.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vseven.png'alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/veight.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vtwo.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                 <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vone.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                 <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vtwo.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
                 <div>
                    <div className="card-items" style={{padding: 0}}>
                        <img src='img/vthree.png' alt="placeholder" style={{width: '90%'}} />
                        <p>Овощная компания. Доставка <br/> свежих овощей и фруктов</p>
                        <span>Вчера 22:55</span>
                        <h3>39 000 000 сум</h3>
                    </div>
                </div>
            </Carousel></TabPanel>
        
       
      </TabContext>
          
        </div>
    )
}

export default Car3;