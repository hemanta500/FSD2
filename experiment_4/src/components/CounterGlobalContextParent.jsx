import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import Button from "@mui/material/Button";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>{props.cno} : Gloabl State (ContextAPI) Count: {count}</h3>

      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      <Button variant="contained"  onClick={() => setCount(count - 1)}>
        Decrease
      </Button>
    </div>
  );
}