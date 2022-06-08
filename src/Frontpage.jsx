import { Outlet, Link } from "react-router-dom"

export default function Frontpage() {
  return (
    <section>
      <h1>Index</h1>
      <nav>
        <ul className="inline-list">
          <li><Link to="/">Frontpage</Link></li>
          <li><Link to="/app">App</Link></li>
          <li><Link to="/app2">App2</Link></li>
          <li><Link to="/app3">App3</Link></li>
          <li><Link to="/app4">App4</Link></li>
          <li><Link to="/app5">App5</Link></li>
          <li><Link to="/app6">App6</Link></li>
          <li><Link to="/app7">App7</Link></li>
          <li><Link to="/app8">App8</Link></li>
          <li><Link to="/app9">App9</Link></li>
          <li><Link to="/image">Image</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/testCounter">TestCounter</Link></li>
          <li><Link to="/trafficLight">TrafficLight</Link></li>
          <li><Link to="/testCounter2">TestCounter2</Link></li>
          <li><Link to="/testCounter3">TestCounter3</Link></li>
          <li><Link to="/testCounter4">TestCounter4</Link></li>
          <li><Link to="/requestTracker">RequestTracker</Link></li>
          <li><Link to="/movingDot">MovingDot</Link></li>
          <li><Link to="/form4">Form4</Link></li>
          <li><Link to="/form5">Form5</Link></li>
          <li><Link to="/scoreboard">Scoreboard</Link></li>
          <li><Link to="/canvas">Canvas</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/list2">List2</Link></li>
          <li><Link to="/shapeEditor">ShapeEditor</Link></li>
          <li><Link to="/counterList">CounterList</Link></li>
          <li><Link to="/list3">List3</Link></li>
          <li><Link to="/list4">List4</Link></li>
          <li><Link to="/bucketList2">BucketList2</Link></li>
          <li><Link to="/bucketList3">BucketList3</Link></li>
          <li><Link to="/shoppingCart">ShoppingCart</Link></li>
          <li><Link to="/shoppingCart2">ShoppingCart2</Link></li>
          <li><Link to="/taskApp">TaskApp</Link></li>
          <li><Link to="/taskApp2">TaskApp2</Link></li>
          <li><Link to="/form6">Form6</Link></li>
          <li><Link to="/form7">Form7</Link></li>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/messenger">Messenger</Link></li>
          <li><Link to="/taskApp3">TaskApp3</Link></li>
          <li><Link to="/page">Page</Link></li>
          <li><Link to="/taskApp4">TaskApp4</Link></li>
          <li><Link to="/form8">Form8</Link></li>
          <li><Link to="/picture">Picture</Link></li>
          <li><Link to="/editProfile">EditProfile</Link></li>
          <li><Link to="/feedbackForm2">FeedbackForm2</Link></li>
          <li><Link to="/form9">Form9</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/placeTree">PlaceTree</Link></li>
          {/*<li><Link to="/clock2">Clock2</Link>*/}
          {/*<li><Link to="/travelPlan">TravelPlan</Link>*/}
          <li><Link to="/fetchAPI">FetchAPI</Link></li>
          <li><Link to="/fetchAPI2">FetchAPI2</Link></li>
          <li><Link to="/accordion2">Accordion</Link></li>
          <li><Link to="/syncedInputs">SyncedInputs</Link></li>
          <li><Link to="/filterableList">FilterableList</Link></li>
          <li><Link to="/counter2">Counter2</Link></li>
          <li><Link to="/counter3">Counter3</Link></li>
          <li><Link to="/counter4">Counter4</Link></li>
          <li><Link to="/counter5">Counter5</Link></li>
          <li><Link to="/scoreboard2">Scoreboard2</Link></li>
          <li><Link to="/app10">App10</Link></li>
          <li><Link to="/app11">App11</Link></li>
          <li><Link to="/contactManager">ContactManager</Link></li>
          <li><Link to="/gallery2">Gallery2</Link></li>
          <li><Link to="/contactList">ContactList</Link></li>
          <li><Link to="/TaskApp5">TaskApp5</Link></li>
          <li><Link to="/TaskApp5b">TaskApp5b</Link></li>
          <li><Link to="/TaskApp5c">TaskApp5c</Link></li>
          <li><Link to="/Messenger2">Messenger2</Link></li>
          <li><Link to="/Page2">Page2</Link></li>
          <li><Link to="/ProfilePage">ProfilePage</Link></li>
          <li><Link to="/ArticleList">ArticleList</Link></li>
          <li><Link to="/TaskApp6">TaskApp6</Link></li>
          <li><Link to="/Counter6">Counter6</Link></li>
          <li><Link to="/StopWatch">StopWatch</Link></li>
          <li><Link to="/Counter7">Counter7</Link></li>
          <li><Link to="/Chat">Chat</Link></li>
          <li><Link to="/Toggle">Toggle</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Chat2">Chat2</Link></li>
        </ul>
      </nav>
      <Outlet />
    </section>
  )
}
