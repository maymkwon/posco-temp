function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: pink;\n\tcolor: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
export var BaseButton = styled.button(_templateObject());
export var RoundButton = withStyles(function (theme) {
  return {
    root: {
      borderRadius: '20px',
      padding: '9px 60px'
    }
  };
});