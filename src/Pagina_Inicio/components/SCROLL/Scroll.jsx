import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export default function Scroll() 
{
  var location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location]);

  return null;
};