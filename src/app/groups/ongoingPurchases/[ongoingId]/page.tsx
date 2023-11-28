import Container from "@/components/common/Container";
import OngoingDetails from "./OngoingDetails";

interface Iparams {
  OngoingUid?: string;
}

const Ongoing = ({ params }: { params: Iparams }) => {
  console.log("params", params);
  return (
    <Container>
      <OngoingDetails OngoingUid={params}  />
    </Container>
  );
};

export default Ongoing;
