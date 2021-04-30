import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './InputRange.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 1140,
    width: "100%",
    margin: "0 auto",
    paddingLeft: "15px",
    paddingRight:"15px",
    boxSizing: "border-box",
    display:"flex"

  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function InputRange() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom >
        Выберите цену от и до
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}