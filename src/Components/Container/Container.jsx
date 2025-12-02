import React from 'react';

const Container = ({ children, className }) => {
  return (
    <section className={`container mx-auto ${className}`}>{children}</section>
  );
};

export default Container;
