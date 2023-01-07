import Group from "./components/Group";
import Navbar from "./components/Navbar";

function App() {
  return (
      // <section className="text-gray-600 body-font">
      //   <div className="container px-5 py-24 mx-auto">
      //     <div className="flex flex-col text-center w-full mb-20">
      //       <h2 className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">
      //         React Tailwind and Redux
      //       </h2>
      //       <h1 className="text-xs text-gray-900">
      //         <a href="https://github.com/dhiyo7/Starterpack-React-Tailwind-Redux"> to see the repo</a>
      //       </h1>
      //     </div>
      //   </div>
      // </section>
      <>
      <Navbar/>
      <Group/>
      </>
  );
}

export default App;