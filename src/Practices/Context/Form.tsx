import Button from "./Button";
import Panel from "./Panel";
import ToggleTheme from "./ToggleTheme";

export default function Form() {
  return (
    <div>
      <Panel title="Welcom">
        <Button>Sign up</Button>
        <Button>Login</Button>
      </Panel>
      <ToggleTheme>Use Dark Mode</ToggleTheme>
    </div>
  );
}
