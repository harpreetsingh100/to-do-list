import { useState } from "react";
import { VscTrash } from "react-icons/vsc";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteItem = (i) => {
    const copyTasks = [...mainTask];
    copyTasks.splice(i, 1);
    setMainTask(copyTasks);
  };

  return (
    <>
      <div className="bg-orange-400 h-16 text-white text-4xl flex justify-center items-center">
        <h1>TO-DO-LIST</h1>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 px-4">
        <input
          type="text"
          placeholder="Enter Title"
          className="border border-slate-800 py-2 px-4 ml-4"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="border border-slate-800 py-2 px-4 ml-4"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="py-2 px-4 bg-orange-400 text-white ml-4 rounded">
          Add Task
        </button>
      </form>
      <hr className="mt-8" />
      <ul className="mt-8 px-4">
        {mainTask.map((elem, i) => {
          return (
            <div>
              <li className="ml-4 font-semibold text-2xl text-orange-500 capitalize ">
                {elem.title}
              </li>
              <li className="ml-4 text-lg">{elem.description}</li>
              {elem.title && (
                <button
                  className="border border-orange-500 text-orange-400 px-2 py-1 text-xl rounded ml-4 mt-2"
                  onClick={() => {
                    deleteItem(i);
                  }}>
                  <VscTrash />
                </button>
              )}
              <hr className="mt-6 mb-4" />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;
