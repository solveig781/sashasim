import { identity } from 'ramda';

import styled from 'styled-components';

function addGeneric(propName, cssName = propName, processor = false) {
  return props => {
    if (!props[propName]) {
      return '';
    }

    // Allow custom resolution
    if (processor instanceof Function) {
      return `${cssName}: ${processor(props[propName])};`;
    }

    // Normal css rules
    return `${cssName}: ${props[propName]};`;
  };
}

/**
 * Allows us to simply call a function with propName and return css
 */
function addSpecific(propName, funcToCall) {
  return props => funcToCall(props[propName]);
}

const flexRules = [
  addGeneric('width'),
  addGeneric('height'),

  addGeneric('flexGrow', 'flex-grow'),
  addGeneric('flexWrap', 'flex-wrap'),
  addGeneric('alignSelf', 'align-self'),
  addGeneric('alignItems', 'align-items'),
  addGeneric('justifySelf', 'justify-self'),
  addGeneric('flexDirection', 'flex-direction'),
  addGeneric('justifyContent', 'justify-content'),

  // Expanding to fill width and height
  addGeneric('fullWidth', 'width', shouldExpand => shouldExpand && '100%'),
  addGeneric('fullHeight', 'height', shouldExpand => shouldExpand && '100%'),
  addSpecific(
    'expand',
    shouldExpand => shouldExpand && 'width: 100%; height: 100%;',
  ),
];

function addCustomRules(props) {
  return flexRules
    .map(rule => rule(props))
    .filter(identity)
    .join('\n');
}

// Using a function here means we can add defaultProps to each
function MakeGeneric(defaultProps) {
  const Generic = styled.div`
    display: flex;

    ${addCustomRules}
  `;

  Generic.defaultProps = defaultProps;

  return Generic;
}

export default MakeGeneric;
