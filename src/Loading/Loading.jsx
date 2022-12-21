import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <>
      <h2 className='text-center my-5 text-success'>L<Spinner animation="grow" variant="warning" />oding...</h2>
    </>
  );
}

export default Loading;