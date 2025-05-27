import {useCallback, useState} from 'react';


function App(){

  const [adjectives, includeAdjective] = useState(false);
  const [animals, includeAnimal] =useState(false);
  const [hobbies, includeHobbies] =useState(false);
  const [numbers, includeNumbers] =useState(false);
  const [username, setUsername] = useState('');

  const adjectivesList = ['cool','brave','happy','sad'];
  const animalList=['lion','tiger','cat','dog'];
  const hobbiesList=['gamer','coder','runner'];
  const numberList=[1,2,3,4,5,6,7,8,9,10,12,13,14,15]

  const coolUsername = useCallback(()=>{
    let colUsername='';

    if(adjectives===true){
      colUsername += adjectivesList[Math.floor(Math.random() * adjectivesList.length)];
      
    }
    if(animals===true){
      colUsername+= animalList[Math.floor(Math.random()*animalList.length)]
    }
    if(hobbies === true){
      colUsername+= hobbiesList[Math.floor(Math.random() *hobbiesList.length)]
    }
    if(numbers === true){
      colUsername+= numberList[Math.floor(Math.random()*numberList.length)]
    }

    setUsername(colUsername);

  },[adjectives,animals,hobbies,numbers,setUsername])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
    This is a User Generator
  </h1>

  <div className="flex flex-wrap gap-4 justify-center mb-6">
    <label className="flex items-center gap-2 text-lg font-medium">
      <input
        type="checkbox"
        checked={adjectives}
        onChange={() => includeAdjective(!adjectives)}
        className="accent-blue-500"
      />
      Adjectives
    </label>

    <label className="flex items-center gap-2 text-lg font-medium">
      <input
        type="checkbox"
        checked={animals}
        onChange={() => includeAnimal(!animals)}
        className="accent-green-500"
      />
      Animals
    </label>

    <label className="flex items-center gap-2 text-lg font-medium">
      <input
        type="checkbox"
        checked={hobbies}
        onChange={() => includeHobbies(!hobbies)}
        className="accent-purple-500"
      />
      Hobbies
    </label>

    <label className="flex items-center gap-2 text-lg font-medium">
      <input
        type="checkbox"
        checked={numbers}
        onChange={() => includeNumbers(!numbers)}
        className="accent-red-500"
      />
      Numbers
    </label>
  </div>

  <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
    Generated Username: <span className="text-indigo-600">{username}</span>
  </h2>

  <button
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
    onClick={coolUsername}
  >
    Generate
  </button>
</div>

  )
}
export default App;