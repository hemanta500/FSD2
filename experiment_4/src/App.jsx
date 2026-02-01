import "./App.css";
import LocalStateCounter from "./components/CounterLocalState";
import CounterContextParent from "./components/CounterGlobalContextParent";
import CounterReduxParent from "./components/CounterGlobalReduxParent";
import CounterContextProvider from "./components/CounterGlobalContextAPI";

function App() {
  return (
    <div className="app-wrap">
      <h1 className="app-title">State Management Lab</h1>
      <p className="subtitle">Compare Local, Context & Redux counters</p>

      <div className="grid">
        {/* Local State */}
        <div className="panel local">
          <h2>Local State</h2>
          <LocalStateCounter cno="1" />
          <LocalStateCounter cno="2" />
        </div>

        {/* Context API */}
        <CounterContextProvider>
          <div className="panel context">
            <h2>Context API</h2>
            <CounterContextParent cno="1" />
            <CounterContextParent cno="2" />
          </div>
        </CounterContextProvider>

        {/* Redux */}
        <div className="panel redux">
          <h2>Redux</h2>
          <CounterReduxParent cno="1" />
          <CounterReduxParent cno="2" />
        </div>
      </div>
    </div>
  );
}

export default App;
