import styled from 'styled-components';
import createTheme from 'styled-theming';

function textSize(index) {
  return (8 - index) / 4;
}

/**
 * Change color of scroll down and up text based on an injected theme
 * <ThemeProvider theme={{ mode: darkMode ? 'dark' : 'light' }}>
 */
const textColor = createTheme('mode', {
  dark: ({ theme }) => theme.secondary,
  light: ({ theme }) => theme.primary,
});

const HeaderGenerator = index => styled.span`
  color: ${textColor};
  font-size: ${textSize(index) * 2}em;
  margin-top: ${40 * ((6 - index) / 6)}px;
  margin-bottom: ${40 * ((6 - index) / 6)}px;
`;

const TextGenerator = index => styled.span`
  color: ${textColor};
  font-size: ${textSize(index)}rem;
`;

const ParagraphGenerator = index => styled.p`
  color: ${textColor};
  font-size: ${textSize(index)}rem;
`;

const sizes = [1, 2, 3, 4, 5, 6];

export const [S1, S2, S3, S4, S5, S6] = sizes.map(TextGenerator);
export const [H1, H2, H3, H4, H5, H6] = sizes.map(HeaderGenerator);
export const [P1, P2, P3, P4, P5, P6] = sizes.map(ParagraphGenerator);

export default {
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
