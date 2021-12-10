import {Link, Route, Routes} from 'react-router-dom';
import Parent from './components/component_event_handling/Parent';
import AccessDom from './components/access_dom/AccessDom';
import RepeatComponent from "./components/repeat_component/RepeatComponent";
import Hook from "./components/hook";

const App = () => {
  return (
    <div>
      <div><Link to="/component_event_handling">컴포넌트 & 이벤트 핸들링</Link></div>
      <div><Link to="/access_dom">DOM 접근</Link></div>
      <div><Link to="/repeat_component">컴포넌트 반복</Link></div>
      <div><Link to="/hook">리액트 훅</Link></div>
      <div style={{paddingTop: '100px'}}>
        <Routes>
          <Route path="/component_event_handling" element={<Parent />}/>
          <Route path="/access_dom" element={<AccessDom />}/>
          <Route path="/repeat_component" element={<RepeatComponent />}/>
          <Route path="/hook" element={<Hook />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
