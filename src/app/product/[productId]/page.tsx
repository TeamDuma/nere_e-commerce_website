import Container from "@/app/component/common/Container";
import ProductDetails from "./ProductDetails";

interface Iparams {
  productId?: string;
}

const Product = ({ params }: { params: Iparams }) => {
  console.log("params", params);
  return (
    <Container>
      <ProductDetails productId={0}  />
    </Container>
  );
};

export default Product;
