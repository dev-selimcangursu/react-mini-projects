import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./app/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.value);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  // Yapılacak İşlem Notu
  function getTodoName(e) {
    setTodoName(e.target.value);
  }

  // Yapılacak İşlemin Tarihi
  function getTodoDate(e) {
    setTodoDate(e.target.value);
  }

  // Yapılacak İşlemi Kaydet
  function saveTodo() {
    let newTodo = {
      name: todoName,
      date: todoDate,
      status_id: 0, // Başlangıçta `status_id` 0 olacak
    };
    dispatch(addTodo(newTodo));
  }

  // Yapılacak İşlemin Tamamlanması Durumu
  function todoCompleted(index) {
    const updatedTodo = { ...todoList[index], status_id: 1 };
    dispatch(updateTodo(updatedTodo));
  }

  return (
    <>
      <Card>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="task" className="text-sm font-medium text-gray-700">
              Yapılacak İş
            </label>
            <input
              id="task"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition ease-in-out"
              type="text"
              onChange={getTodoName}
              placeholder="Yapılacak İş Giriniz..."
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              İş Tarihi
            </label>
            <input
              id="date"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition ease-in-out"
              type="date"
              onChange={getTodoDate}
            />
          </div>
          <div>
            <Button
              onClick={saveTodo}
              className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
            >
              Görevi Ekle
            </Button>
          </div>
        </div>
      </Card>
      <Card className="shadow-lg rounded-lg p-6 bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Yapılacaklar Listesi
        </h3>
        <div className="flex w-full flex-col gap-6">
          {todoList.map((element, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 ease-in-out"
            >
              <div className="flex flex-col w-full">
                <div className="flex items-center space-x-2 mb-2">
                  {element.status_id == 0 ? (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Beklemede
                    </span>
                  ) : (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Tamamlandı
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {element.name}
                </h4>
                <small className="text-gray-500">{element.date}</small>
              </div>
              <div className="flex justify-end items-center">
                <Button
                  onClick={() => todoCompleted(index)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-sm font-semibold transition-colors duration-300"
                >
                  Tamamlandı
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default App;
