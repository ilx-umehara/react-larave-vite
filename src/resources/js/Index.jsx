import React from 'react';
import { createRoot } from 'react-dom/client';

 const Index=()=>{
    return(
        <div>
            Hello World!!!
        </div>
    );
 }

 const container = document.getElementById('index');
 if (container) {
   const root = createRoot(container);
   root.render(<Index />);
 }

