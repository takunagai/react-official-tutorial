import React from 'react'
import { createRoot } from 'react-dom/client' // React18 の書き方
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import Frontpage from './Frontpage' // このチュートリアルではない

import App from './App'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import App7 from './App7'
import App8 from './App8'
import App9 from './App9'
import Image from './Image'
import Gallery from './Gallery'
import TestCounter from './TestCounter'
import TrafficLight from './TrafficLight'
import TestCounter2 from './TestCounter2'
import TestCounter3 from './TestCounter3'
import TestCounter4 from './TestCounter4'
import RequestTracker from './RequestTracker'
import MovingDot from './MovingDot'
import Form4 from './Form4'
import Form5 from './Form5'
import Scoreboard from './Scoreboard'
import Canvas from './Canvas'
import List from './List'
import List2 from './List2'
import ShapeEditor from './ShapeEditor'
import CounterList from './CounterList'
import List3 from './List3'
import List4 from './List4'
import BucketList2 from './BucketList2'
import BucketList3 from './BucketList3'
import ShoppingCart from './ShoppingCart'
import ShoppingCart2 from './ShoppingCart2'
import TaskApp from './TaskApp'
import TaskApp2 from './TaskApp2'
import Form6 from './Form6'
import Form7 from './Form7'
import Accordion from './Accordion'
import Messenger from './Messenger'
import TaskApp3 from './TaskApp3'
import Page from './Page'
import TaskApp4 from './TaskApp4'
import Form8 from './Form8'
import Picture from './Picture'
import EditProfile from './EditProfile'
import FeedbackForm2 from './FeedbackForm2'
import Form9 from './Form9'
import Menu from './Menu'
import PlaceTree from './PlaceTree'
// import Clock2 from './Clock2' // ★★うまくいかないので修正
// import TravelPlan from './TravelPlan' // ★★うまくいかないので修正
import FetchAPI from './FetchAPI' // このチュートリアルではない
import FetchAPI2 from './FetchAPI2' // このチュートリアルではない
import Accordion2 from './Accordion2'
import SyncedInputs from './SyncedInputs'
import FilterableList from './FilterableList'
import Counter2 from './Counter2'
import Counter3 from './Counter3'
import Counter4 from './Counter4'
import Counter5 from './Counter5'
import MyComponent from './MyComponent'
import Scoreboard2 from './Scoreboard2'
import App10 from './App10'
import App11 from './App11'
import ContactManager from './ContactManager'
import Gallery2 from './Gallery2'
import ContactList from './ContactList'
import TaskApp5 from './TaskApp5'
import TaskApp5b from './TaskApp5b'
import TaskApp5c from './TaskApp5c'
import Messenger2 from './Messenger2'
import Page2 from './Page2'
import ProfilePage from './ProfilePage'
import ArticleList from './ArticleList'
import TaskApp6 from './TaskApp6'
import Counter6 from './Counter6'
import StopWatch from './StopWatch'
import Counter7 from './Counter7'
import Chat from './Chat'
import Toggle from './Toggle'
import Dashboard from './Dashboard'
import Chat2 from './Chat2'
import Form10 from './Form10'
import CatFriends from './CatFriends'
import CatFriends2 from './CatFriends2'
import MyForm from './MyForm'
import TodoList2 from './TodoList2'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

function NotFound() {
  return <h2>Not Found Page</h2>
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="app" element={<App />} />
        <Route path="app2" element={<App2 />} />
        <Route path="app3" element={<App3 />} />
        <Route path="app4" element={<App4 />} />
        <Route path="app5" element={<App5 />} />
        <Route path="app6" element={<App6 />} />
        <Route path="app7" element={<App7 />} />
        <Route path="app8" element={<App8 />} />
        <Route path="app9" element={<App9 />} />
        <Route path="image" element={<Image />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testCounter" element={<TestCounter />} />
        <Route path="trafficLight" element={<TrafficLight />} />
        <Route path="testCounter2" element={<TestCounter2 />} />
        <Route path="testCounter3" element={<TestCounter3 />} />
        <Route path="testCounter4" element={<TestCounter4 />} />
        <Route path="requestTracker" element={<RequestTracker />} />
        <Route path="movingDot" element={<MovingDot />} />
        <Route path="form4" element={<Form4 />} />
        <Route path="form5" element={<Form5 />} />
        <Route path="scoreboard" element={<Scoreboard />} />
        <Route path="canvas" element={<Canvas />} />
        <Route path="list" element={<List />} />
        <Route path="list2" element={<List2 />} />
        <Route path="shapeEditor" element={<ShapeEditor />} />
        <Route path="counterList" element={<CounterList />} />
        <Route path="list3" element={<List3 />} />
        <Route path="list4" element={<List4 />} />
        <Route path="bucketList2" element={<BucketList2 />} />
        <Route path="bucketList3" element={<BucketList3 />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="shoppingCart2" element={<ShoppingCart2 />} />
        <Route path="taskApp" element={<TaskApp />} />
        <Route path="taskApp2" element={<TaskApp2 />} />
        <Route path="form6" element={<Form6 />} />
        <Route path="form7" element={<Form7 />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="messenger" element={<Messenger />} />
        <Route path="taskApp3" element={<TaskApp3 />} />
        <Route path="page" element={<Page />} />
        <Route path="taskApp4" element={<TaskApp4 />} />
        <Route path="form8" element={<Form8 />} />
        <Route path="picture" element={<Picture />} />
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="feedbackForm2" element={<FeedbackForm2 />} />
        <Route path="form9" element={<Form9 />} />
        <Route path="menu" element={<Menu />} />
        <Route path="placeTree" element={<PlaceTree />} />
        {/*<Route path="clock2" element={<Clock2 />} />*/}
        {/*<Route path="travelPlan" element={<TravelPlan />} />*/}
        <Route path="fetchAPI" element={<FetchAPI />} />
        <Route path="fetchAPI2" element={<FetchAPI2 />} />
        <Route path="accordion2" element={<Accordion2 />} />
        <Route path="syncedInputs" element={<SyncedInputs />} />
        <Route path="filterableList" element={<FilterableList />} />
        <Route path="counter2" element={<Counter2 />} />
        <Route path="counter3" element={<Counter3 />} />
        <Route path="counter4" element={<Counter4 />} />
        <Route path="counter5" element={<Counter5 />} />
        <Route path="myComponent" element={<MyComponent />} />
        <Route path="scoreboard2" element={<Scoreboard2 />} />
        <Route path="app10" element={<App10 />} />
        <Route path="app11" element={<App11 />} />
        <Route path="app11" element={<App11 />} />
        <Route path="contactManager" element={<ContactManager />} />
        <Route path="gallery2" element={<Gallery2 />} />
        <Route path="contactList" element={<ContactList />} />
        <Route path="TaskApp5" element={<TaskApp5 />} />
        <Route path="TaskApp5b" element={<TaskApp5b />} />
        <Route path="TaskApp5c" element={<TaskApp5c />} />
        <Route path="Messenger2" element={<Messenger2 />} />
        <Route path="Page2" element={<Page2 />} />
        <Route path="ProfilePage" element={<ProfilePage />} />
        <Route path="ArticleList" element={<ArticleList />} />
        <Route path="TaskApp6" element={<TaskApp6 />} />
        <Route path="Counter6" element={<Counter6 />} />
        <Route path="StopWatch" element={<StopWatch />} />
        <Route path="Counter7" element={<Counter7 />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Toggle" element={<Toggle />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Chat2" element={<Chat2 />} />
        <Route path="Form10" element={<Form10 />} />
        <Route path="CatFriends" element={<CatFriends />} />
        <Route path="CatFriends2" element={<CatFriends2 />} />
        <Route path="MyForm" element={<MyForm />} />
        <Route path="TodoList2" element={<TodoList2 />} />
        <Route path="*" element={<NotFound />} />{/* Not Found の時*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
