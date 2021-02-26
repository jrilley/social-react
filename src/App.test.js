import { render, screen } from '@testing-library/react';
import React from "react";
import MainApp from "./App";
import * as ReactDom from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDom.render(<MainApp />, div);
  ReactDom.unmountComponentAtNode(div);
});
