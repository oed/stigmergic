import { useParams } from 'react-router-dom';

export function spaceLoader({ params: { spaceId } }) {
  return null
}

const Space = () => {
  const { spaceId } = useParams();

  return (
    <div>
      space: {spaceId}
    </div>
  )
};

export default Space;


