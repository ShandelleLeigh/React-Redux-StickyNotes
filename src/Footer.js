import React from 'react';
import FilterLink from './FilterLink'

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Colors</FilterLink>
    {' '}
    <FilterLink>Active</FilterLink>
  </div>
)

export default Footer
