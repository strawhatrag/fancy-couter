import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleclick = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button className="reset-btn">
      <ResetIcon onClick={handleclick} className="reset-btn-icon" />
    </button>
  );
}
