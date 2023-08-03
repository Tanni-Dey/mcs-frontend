import React, { useState } from "react";

const TodoAdd = () => {
  const [toast, setToast] = useState(false);

  const notification = (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <div>
          <span>Task Created</span>
        </div>
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const des = e.target.des.value;
    const status = e.target.status.value;
    const addTodo = {
      title: title,
      des: des,
      status: status,
    };

    fetch("https://mcs-backend-96pw.onrender.com/api/add-task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTodo),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json();
          setToast(true);
          setTimeout(() => {
            setToast(false);
          }, 3000);
        }
      })
      .then((data) => console.log(data));

    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center bg-slate-300">
      <div className="card sm:w-96 w-60 glass bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="card-body p-0">
          <h2 className="card-title text-2xl text-white mb-5">Add a Task</h2>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Task Title"
              className="input input-bordered input-md w-full max-w-xs mb-3"
            />
            <textarea
              type="text"
              name="des"
              required
              placeholder="Enter Task Description"
              className="textarea textarea-bordered textarea-md w-full max-w-xs mb-3"
            />
            <select
              name="status"
              placeholder="Enter Task Status"
              className="select select-bordered select-md w-full max-w-xs mb-3"
            >
              <option disabled selected>
                Select Status
              </option>
              <option value="pending">Pending</option>

              <option value="in progress">in progress</option>
              <option value="completed">Completed</option>
            </select>
            <input
              type="submit"
              value="Add Task"
              className="btn w-full hover:opacity-70 text-white bg-gradient-to-r from-violet-800 to-fuchsia-800 border-0"
            />
          </form>
        </div>
      </div>
      {toast && notification}
    </div>
  );
};

export default TodoAdd;
