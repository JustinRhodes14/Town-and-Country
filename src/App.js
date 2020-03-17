import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

const imagesPath = {
  img1: "https://www.build-review.com/wp-content/uploads/2019/12/construction-2.jpg",
  img2: "https://www.bgsu.edu/content/dam/BGSU/academics/construction-management/construction-mgmt.jpg"
}
class App extends React.Component {
state = {
  open: true
}

toggleImage = () => {
  this.setState(state => ({open: !state.open}))
}

getImageName = () => this.state.open ? 'img1' : 'img2'

render() {
  const imgName = this.getImageName();
  return (
    <div>
      <NavBar />
    <div className="App">
      <header className="App-header">
        <img style = {{width:800,height:500}} src={imagesPath[imgName]} alt = "Workin'" onClick={this.toggleImage} />
        <p>
          Welcome to Town and Country Construction!
        </p>
        <p>
          Lets get started.
        </p>
      </header>
    </div>
    <div className="App">
      <header className="App-header">
        <p className = "Projects">
          Projects
          <p className = "intro-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </p>
      </header>
    </div>
    <div className="App">
      <header className="App-header">
        <p className = "News">
          News
          <p className = "intro-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </p>
      </header>
    </div>
    <div className="App">
      <header className="App-header">
        <p className = "About">
          About
          <p className = "intro-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </p>
      </header>
    </div>
    <div className="App">
      <header className="App-header">
        <p className = "Contact">
          Contact
          <p className = "intro-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </p>
      </header>
    </div>
    </div>
  );
}
}
export default App;
