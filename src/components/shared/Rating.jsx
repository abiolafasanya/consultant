import { LuStar } from "react-icons/lu";

export function Rating({ val = 0 }) {
  function generateArray(length) {
    return Array.from({ length }, (_, index) => index + 1);
  }

  const rating = generateArray(val);

  return (
    <div className="rating">
      {rating.map((_, index) => (
        <LuStar key={index} style={{ color: "orange" }} />
      ))}
    </div>
  );
}
