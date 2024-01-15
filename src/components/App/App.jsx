import React from "react";
import PropTypes from 'prop-types';
import { App as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/App/
 * @uxpindescription TODO
 */

const App = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

App.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

App.defaultProps = {};

export default App;