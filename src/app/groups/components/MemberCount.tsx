// components/MemberCount.js
import Icon from "react-native-vector-icons/FontAwesome";

const MemberCount = ({ minQuantity, totalQuantity, unit }) => {
  const remainingQuantity = minQuantity - totalQuantity;

  return (
    <div>
      <h2 >
        {remainingQuantity} left, out of {minQuantity} {unit}
      </h2>
    </div>
  );
};

export default MemberCount;
