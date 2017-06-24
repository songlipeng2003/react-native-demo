import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import ProductList from './ProductList';
import ProductForm from './ProductForm';

export default SimpleApp = StackNavigator({
  ProductList: { screen: ProductList },
  ProductForm: { screen: ProductForm }
});
