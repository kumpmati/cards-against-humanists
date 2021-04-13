import { FC } from "react";

const TextInput: FC<Props> = ({ id, state, label, onPressEnter }) => {
  const [text, setText] = state;

  return (
    <div className="textbox">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        autoComplete="off"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.code === "Enter" && onPressEnter()}
        id={id}
      />
    </div>
  );
};

export default TextInput;

interface Props {
  id: string;
  state: any;
  label?: string;
  onPressEnter?: () => any;
}
