import { useParams } from 'react-router';

const WithParam = () => {
  const { foo } = useParams();

  return (
    <>
      <h1>Route with param example</h1>
      <p>Your param is: {foo}</p>
    </>
  );
};

export default WithParam;
