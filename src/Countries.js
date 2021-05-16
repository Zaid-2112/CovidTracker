import React from "react";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Countries extends React.Component{
    render(){
        const {countries} = this.props;
        return(
            <tr>
            <th scope="col">{countries.Country}</th>
            <th scope="col">{countries.NewConfirmed}</th>
            <th scope="col">{countries.TotalConfirmed}</th>
            <th scope="col">{countries.TotalDeaths}</th>
            <th scope="col">{countries.NewDeaths}</th>
          </tr>
        )
    }
}

export default Countries;