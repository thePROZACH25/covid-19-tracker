import React from "react";
import "../components/InfoBox.css"
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total , ...props}) {
  return (
    <Card 
    onClick={props.onClick}
    className="infoBox">
      <CardContent>
        {/* title */}
        <Typography className='infoBox__title' color="textSecondary">{title}</Typography>
        {/* number of cases */}
        <h2 className='infoBox__cases'>{cases}</h2>
        {/* Total */}
        <Typography className='infoBox__total'>Total: {total}</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
