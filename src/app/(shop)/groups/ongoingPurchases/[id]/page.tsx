import Container from '@/components/common/Container';
import OngoingDetails from './OngoingDetails';

type IOngoing = {
  params: {
    id: string;
  };
};

const Ongoing = ({ params }: IOngoing) => {
  return (
    <Container>
      <OngoingDetails ongoingUid={params.id} />
    </Container>
  );
};

export default Ongoing;
