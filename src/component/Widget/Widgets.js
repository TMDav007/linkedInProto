import React from 'react';
import "./Widgets.scss";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => {
      return <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Yo, I am going live", "Top news - This is me trying stuff")}
            {newsArticle("Coronavirus: UK udates", "Top news - 886 cases")}
            {newsArticle("Coronavirus: UK udates", "Top news - 886 cases")}
            {newsArticle("Coronavirus: UK udates", "Top news - 886 cases")}
            {newsArticle("Coronavirus: UK udates", "Top news - 886 cases")}
        </div>
    )
}

export default Widgets
