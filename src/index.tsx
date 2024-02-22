import * as ReactDOMClient from 'react-dom/client';

import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';

import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <ThemeProvider theme={theme}>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </ThemeProvider>
);
