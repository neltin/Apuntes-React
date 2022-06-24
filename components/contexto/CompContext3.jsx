import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './Contexts';
//import { ThemeContext } from './CompContext';

export default function CompContext3() {
  const thema = useContext(ThemeContext);
  
  useEffect(() => {
    thema.setTheme({ ...thema.theme, Comp3: 'componete 3' });
  }, []);

  return (
    <div>
      <p>
        Soy el CompContext 3. <br />
        me pasaron la propiedad theme como global.
      </p>
      <p>
        El tema del esta en modo{' '}
        <strong style={{ color: 'red' }}>
          {thema ? 'Activado' : 'Desactivado'}
        </strong>
      </p>
    </div>
  );
}
