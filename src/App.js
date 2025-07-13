import './App.css';
import { Routes, Route } from 'react-router-dom';

import NaveBar from './components/NaveBar';
import Home from './components/Home';

import ObjImmer from './components/objects/ObjImmer'
//import TaskApp from './components/reducer/task/TaskApp';
import VideoPlayerApp from './components/Effects/VideoPlayerApp';
import EffectApp from './components/Effects/EffectApp'
import MemoComponent from "./components/memoandcallback/MemoComponent";
import MainContextApp from './components/Context/MainContextApp';
import ReducerComponent from './components/Reducer/ReducerComponent'
import LayoutEffectApp from './components/LayoutEfect/LayoutEffectApp';
import LocalStorageApp from './components/CustomHooks/LocalStorageApp';
import LocalStorageCustomHookApp from './components/CustomHooks/LocalStorageCustomHookApp';
import CrudJsonServer from './components/crud/CrudJsonServer';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
            <div className="col-2">
                <NaveBar/>
            </div>
            <div className="col-10">
              <span>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/object-immer' element={<ObjImmer />} />
                  <Route path='/effects-vplayer' element={<VideoPlayerApp />} />
                  <Route path='/effects' element={<EffectApp />} />
                  <Route path='/memo' element={<MemoComponent />} />
                  <Route path='/main-context-app' element={<MainContextApp />} />
                  <Route path='/reducer' element={<ReducerComponent />} />
                  <Route path='/layout-effect' element={<LayoutEffectApp />} />
                  <Route path='/local-storage' element={<LocalStorageApp />} />
                  <Route path='/custom-hook-local-storage' element={<LocalStorageCustomHookApp />} />
                  <Route path='/crud' element={<CrudJsonServer />} />
              </Routes>
              </span>
            </div>
        </div>
    </div>
  );
}

export default App;
