import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';

//Will add custom font links to the header
const addFont = (link, index) => {
  let newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  newFontLink.id = 'muiCCustomFont' + index;
  document.head.appendChild(newFontLink);
  //console.log("added: ", newFontLink);
};
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 * @uxpindescription Use this component to theme this instance of the Ant Design library. Create a theme here: https://ant.design/theme-editor
 */
function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

  React.useEffect(() => {
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      options.currentTheme = oldTheme.theme;

      let newTheme;

      //if there is a theme object given, it will be the basis for any customizations
      if (props.themeObject && props.themeObject !== '') {
        options.currentTheme = {
          ...JSON.parse(JSON.stringify(props.themeObject)),
        };
      }

      newTheme = options.currentTheme;

      console.log('parsed ', props.themeObject);

      //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION

      var traverse = function (o, fn) {
        for (var i in o) {
          fn.apply(this, [i, o[i]]);
          if (o[i] !== null && typeof o[i] == 'object') {
            traverse(o[i], fn);
          }
        }
      };

      var obj = props.themeObject;
      const fonts = [];

      traverse(obj, function (k, v) {
        console.log(k + ' : ' + v);
        if (k == 'fontFamily') {
          //ADD SOURCING FOR EACH FONT FOUND IN THEME
          let index = 0;
          if (document.querySelectorAll("link[href='" + v + "']").length === 0) {
            addFont('https://fonts.googleapis.com/css?family=' + v, index++);
          }
          fonts.push(v);
        }
      });

      // console.log("fonts", fonts)

      return {
        theme: newTheme,
      };
    });
  }, [props, setThemeOptions, themeOptions.themeCustomizerProps]); //only re-run if any of these change

  return (
    <div //A visual aid for the designer to see in UXPin
      style={{
        width: '160px',
        color: 'white',
        textAlign: 'center',
        background: '#003087',
        borderRadius: 10,
        padding: '20px'
      }}
    >
      <strong>ThemeCustomizer:</strong>
      <br />
      Please move this <br />marker offscreen
    </div>
    // <Portal container={document.querySelector('#workbench-wrapper')}>
    //   <div style={{ position: 'relative' }}>
    //     <Alert
    //       severity="info"
    //       iconMapping={{
    //         info: <ColorLensIcon />,
    //       }}
    //       action={
    //         <Button
    //           variant="outlined"
    //           color="inherit"
    //           size="small"
    //           href="https://jackbehar.github.io/mui-theme-creator/"
    //           target="_blank"
    //         >
    //           MUI theme creator
    //         </Button>
    //       }
    //     >
    //       <p>
    //         <strong>THEME CUSTOMIZER APPLIED:</strong> Please select the <b>ThemeCustomizer</b> layer and edit the
    //         <b>Theme Object</b> property.
    //       </p>
    //     </Alert>
    //   </div>
    // </Portal>
  );
}

ThemeCustomizer.propTypes = {
  themeObject: PropTypes.object,
};

export default ThemeCustomizer;
