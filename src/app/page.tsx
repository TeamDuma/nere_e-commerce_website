import Container from "./component/common/Container";
import Hero from "./component/common/Hero";
import ThreeSectionRow from "./component/common/ThreeSectionRow";
import TwoSectionRow from "./component/common/TwoSectionRow";

export default function Home() {
  return (
    <Container>
      <TwoSectionRow />
      <Hero images={[
        {
          id: '1',
          url: 'https://res.cloudinary.com/dshiwa02i/image/upload/v1691404789/b1d1axq63tqihbmvgq7l.png',
        },
        {
          id: '2',
          url: 'https://res.cloudinary.com/dshiwa02i/image/upload/v1691404789/jqako60whhrlvhmdsu0k.png',
        },
        {
          id: '3',
          url: 'https://res.cloudinary.com/dshiwa02i/image/upload/v1691404789/auskeubpqss2wv6qoacp.png',
        },
      ]}/>
      <ThreeSectionRow/>
    </Container>
  );
}
