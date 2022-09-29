import React from 'react';
import { useParams , Navigate } from 'react-router-dom';

const withRouter = WrappedComponent => (props)  => {
  const params = useParams();
 
  return (
    <WrappedComponent
      params={params}
      

      nav={<Navigate to="/" />}
    />
  );
};
 
export default withRouter;

