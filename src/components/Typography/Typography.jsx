import React from "react";
import PropTypes from 'prop-types';
import { Typography as ANTComponent } from "antd";
import Text from './Text/Text';
import Title from './Title/Title';
import Paragraph from './Paragraph/Paragraph'


/**
 * @uxpindocurl https://ant.design/components/Typography/
 * @uxpindescription TODO
 */

const Typography = (props) => {
    // Component logic

    return (
        <ANTComponent{...props}>{props.children}</ANTComponent>
    );
};


Typography.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
};

Typography.defaultProps = {};
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;




