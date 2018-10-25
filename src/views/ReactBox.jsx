import React from 'react'
import ScrollToTopMount from "@src/components/ScrollToTopMount"

class ReactBox extends React.Component {
    render() {
        return (
            <div className="container react-box">
                <ScrollToTopMount />
                <p>Kevin-Durant</p>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
                <h3 className="long-content">Kevin-Durant...</h3>
            </div>
        )
    }
}

export default ReactBox