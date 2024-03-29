import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleclick = () => {
    setCount(0);
  };

  return (
    <button className="reset-btn">
      <ResetIcon onClick={handleclick} className="reset-btn-icon" />
    </button>
  );
}
