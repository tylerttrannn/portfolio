import myselfPhoto from './assets/IMG_0635.jpg';

function App() {
  return (
    <div className="bg-[#1D1850] min-h-screen">

      {/* header */}
      <div className="flex justify-left space-x-4 pl-10 pt-2 pb-20">
        <button className="text-white">Home</button>
        <button className="text-white">Projects</button>
        <button className="text-white">About</button>
      </div>

      {/* name + photo of me maybe */}
      <div className="grid grid-cols-2 pl-10 pb-40">
        <h1 className="text-white text-8xl pb-12">
          Tyler<br />&nbsp;&nbsp;&nbsp;Tran
        </h1>
        <div className="flex justify-center">
          <img src={myselfPhoto} alt="Tyler Tran" className="w-64 h-auto rounded-lg" />
        </div>
      </div>

      {/* about me page */}
      <div className="pl-10 pr-8 max-w-screen-md">
        <p className="text-white">About /</p>
        <h1 className="text-white text-4xl pb-12">
          Third year Computer Science student at UC Irvine, passionate about software development.
        </h1>
      </div>

      {/* tech stack section */}
      <div className="pl-10 pr-8 max-w-screen-md">
        <p className="text-white">Tech Stack /</p>
        <h1 className="text-white text-4xl pb-12">
          HTML, CSS, JavaScript, React, Python, C++
        </h1>
      </div>

      {/* projects */}
      <div className="pl-10 pr-8 max-w-screen-lg">
        <p className="text-white">Projects /</p>
        <div> 
          <h1 className="text-white text-4xl pb-12">ZotMarketplace</h1>
        </div>
        <div> 
          <h1 className="text-white text-4xl pb-12">Journa</h1>
        </div>
        <div> 
          <h1 className="text-white text-4xl pb-12">Custom Web Crawler</h1>
        </div>
        <div> 
          <h1 className="text-white text-4xl pb-12">Multiplayer Tic Tac Toe</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
