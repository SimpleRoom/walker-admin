import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import styled from "styled-components"

import routeList from "@src/routes"
import SideBar from "@src/components/SideBar"
import NotFound from "@src/components/NotFound"
import Header from "@src/components/Header"

// HomeBox
const HomeBox = styled.div`
    width:100%;
    height:auto;
    position:relative;
`;
class Home extends React.Component {
    render() {
        console.log(this.props, `home props`)
        return (
            <HomeBox>
                {/* side nav bar */}
                <SideBar />
                {/* top header */}
                <Header />
                <Switch>
                    {/* component list */}
                    {routeList.map((item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            component={item.component} />
                    ))}
                    {/* default No.1 component */}
                    <Route exact path="/" render={() => (
                        <Redirect to="/curry" />
                    )} />
                    <Route exact component={NotFound} />
                </Switch>
            </HomeBox>
        )
    }
}

// export default Home

const mapStateToProps = state => {
    return { ...state }
}

export default connect(
    mapStateToProps,
)(Home)