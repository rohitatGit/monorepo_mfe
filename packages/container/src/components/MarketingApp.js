import {mount} from 'marketing/MarketingApp';
import React,{ useEffect,useRef } from 'react';

//console.log('App');
function MarketingApp() {

    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    },[])

  return (
    <div ref={ref}></div>
  )
}

export default MarketingApp