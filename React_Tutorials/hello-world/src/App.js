import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreet from './components/UserGreet';
import NameList from './components/NameLists';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import FirstHook from './components/FirstHook';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import MouseHook from './components/MouseHook';
import IntervalHookCounter from './components/IntervalHookCounter';
import Columns from './components/Columns'
function App() {
  return (
    <div className="App">
      <Greet name="Simran">
        <p>I am from Pune</p>
      </Greet>
       <FirstHook/>
      {/* <HookCounter/> */}
      {/* <FragmentDemo/> */}
      {/*<Form/>*/}
      {/*Regular stylesheet example*/}
      {/*<StyleSheet primary={true}/>*/}
      {/*Inline stylesheet example*/}
      {/*<Inline/>*/}
     { /*<Message/>*/}
      {/*<FunctionClick/>*/}
      <ClassClick/>
      {/*<UserGreet/>*/}
      {/*<NameList/>*/}
      {/* <HookCounterTwo/>
      <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <UseEffectOne/> */}
      {/* <MouseHook/> */}
      {/* <IntervalHookCounter/> */}
      <Columns/>
    </div>
  );
}

export default App;
