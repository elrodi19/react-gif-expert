import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Programming' ]);

  const addCategory = ( value ) => {
    
    // Esta linea es para validar que no se repita una categoría que ya existe.
    if( categories.includes( value ) ) return;

    // setCategories(categories.concat('New Cat'));
    setCategories([... categories, value]);
  }

 
  return (
    <>
        {/*Titutlo*/}
        <h1>GifExpertApp</h1>


        {/*Input*/}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ (event => addCategory( event )) }
        />

        
        { 
        categories.map( category => (
          
            <GifGrid 
              key={ category } 
              category={ category } />
          
          )) 
        }
        
          
    </>
  )
}
