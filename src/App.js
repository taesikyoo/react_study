import { Link, Route, Routes } from 'react-router-dom';
import Parent from './components/component_event_handling/Parent';
import AccessDom from './components/access_dom/AccessDom';

const App = () => {
  return (
    <div>
      <Link to="/component_event_handling">컴포넌트 & 이벤트 핸들링</Link>
      <Link to="/access_dom">DOM 접근</Link>
      <div style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/component_event_handling" element={<Parent />} />
          <Route path="/access_dom" element={<AccessDom />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
