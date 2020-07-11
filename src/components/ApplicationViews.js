import { Route, Redirect } from "react-router-dom"
import React from "react"
import Home from "./home/Home"
import OwnerList from "./owner/OwnerList"
import OwnerForm from "./owner/OwnerForm"
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail.js"
import AnimalForm from "./animal/AnimalForm"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"
import LocationList from "./location/LocationList"
import LocationForm from "./location/LocationForm"
import LocationDetail from "./location/LocationDetail"
import Login from "./auth/Login"

const ApplicationViews = () => {

    // Check if credentials are in session storage returns true/false
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    
    return (
        <React.Fragment>

            <Route
                path="/login"
                component={Login}
            />

            <Route
                exact
                path="/"
                render={props => {
                return <Home />;
                }}
            />
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals" 
                render={props => {
                    if (isAuthenticated()) {
                    return <AnimalList {...props} />
                    } else {
                    return <Redirect to="/login" />
                    }
                }}                 
            />

            {/*This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack*/}

            <Route path="/animals/:animalId(\d+)" 
                render={(props) => {
                // Pass the animalId to the AnimalDetailComponent
                    return (
                        <AnimalDetail 
                            animalId={parseInt(props.match.params.animalId)}     
                            {...props}                
                        />                       
                    )
                }} 
            />

            {/* new animal form! */}

            <Route 
                path="/animals/new" 
                render={(props) => {
                return <AnimalForm {...props} />
            }} />

            {/* location routes  */}

            <Route 
                exact path="/locations" 
                render={(props) => {
                    if(isAuthenticated()) {
                        return <LocationList {...props} />
                    } else {
                        return <Redirect to="/login"/>
                    }
                }} 
            />
            <Route path="/locations/:locationId(\d+)" 
                render={(props) => {
                // Pass the locationId to the locationDetail component
                    return (
                        <LocationDetail 
                            locationId={parseInt(props.match.params.locationId)}
                            {...props}
                        />
                    )
                }} 
            />

            <Route path="/locations/new" render={(props) => {
            return <LocationForm {...props} />
            }} />

        {/* Employee ROutes  */}
            <Route
                exact path="/employees"
                render={props => {
                    if (isAuthenticated()) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />

            <Route path="/employees/new" 
                render={(props) => {
                return <EmployeeForm {...props} />
                }} 
            />

            {/* owner routes  */}

            <Route
                exact path="/owners"
                render={props => {
                    if(isAuthenticated()) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />

            <Route 
                path="/owners/new"
                render={(props) => {
                return <OwnerForm {...props} />
                }}
            />

        </React.Fragment>
    );
};

export default ApplicationViews;