interface IMemberCount {
  minQuantity: number;
  totalQuantity: number;
  unit: number;
}

const MemberCount = ({ minQuantity, totalQuantity, unit }: IMemberCount) => {
  const remainingQuantity = minQuantity - totalQuantity;

  return (
    <div>
      <h2>
        {remainingQuantity} left, out of {minQuantity} {unit}
      </h2>
    </div>
  );
};

export default MemberCount;
