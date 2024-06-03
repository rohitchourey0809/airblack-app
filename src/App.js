import TopImage from "./TopImage.png";
import ApplyImage from "./Apply.png";
import Image10 from "./10.png";
import Footer from "./Footer.png";

function App() {
  return (
    <div className="App min-h-screen flex items-center justify-center px-4 py-8">
      <div className="bg-custom-background-1 maincontainer flex flex-col items-center justify-center space-y-6 w-full max-w-lg">
        <div className="w-full">
          <img
            src={TopImage}
            alt="TopImage"
            className="w-full h-60 object-cover "
          />
        </div>
        <div className="bg-custom-white shadow-custom-shadow px-4 py-8 text-left space-y-2 text-white">
          <p className="text-xl font-bold">Professional Online Makeup Course</p>
          <p className="text-lg">
            Certification Programme{" "}
            <span className="text-yellow-600 font-bold text-lg">
              ★ Rated 4.85/5{" "}
            </span>
          </p>
          <p className="text-lg">
            <span className="text-white">&#10004;</span>
            <span>India’s No.1 Online Makeup Course </span>
          </p>
          <p className="text-lg">
            <span className="text-white">&#10004;</span>
            <span>Learn by LIVE Do-it-Together Classes </span>
          </p>
          <p className="text-lg">
            <span className="text-white">&#10004;</span>
            <span>Unlimited Practice Session to master skills </span>
          </p>
        </div>
        <div className="w-full max-w-md  border border-gray-300 rounded-lg shadow-md space-y-4 bg-white">
          <p className="text-center  font-semibold rounded-lg text-white bg-pink-600 p-2 ">
            Fill the form below to enquire
          </p>
          <form className="space-y-4 ">
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter your name
              </label>
              <input
                type="text"
                placeholder="Eg. Aneesha Mehra"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter your WhatsApp Number
              </label>
              <input
                type="text"
                placeholder="+91 Eg. 0000000000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">
                Select your profession
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
                <option>Choose the most relevant option</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">
                Select your goal
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
                <option>Choose the most relevant option</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">
                Select your city
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
                <option>Choose the most relevant option</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-pink-600 p-2 text-white py-2 px-4 rounded-md shadow "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full">
          <img
            src={ApplyImage}
            alt="Apply Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src={Image10}
            alt="Image10"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src={Footer}
            alt="Footer"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
