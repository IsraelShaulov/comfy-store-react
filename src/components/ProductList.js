import React from 'react';
import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();
  if (filteredProducts < 1) {
    return <Wrapper>Sorry, no products matched your search.</Wrapper>;
  }
  if (gridView === false) {
    return <ListView filteredProducts={filteredProducts} />;
  }

  return <GridView filteredProducts={filteredProducts}>product list</GridView>;
};

const Wrapper = styled.h5`
  text-transform: none;
`;

export default ProductList;
