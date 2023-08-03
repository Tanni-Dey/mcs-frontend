import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useEditTaskMutation,
  useGetSingleTaskQuery,
} from "../../../redux/ApiSlice";

const EditTodo = () => {
  const { id } = useParams();
  const [toast, setToast] = useState(false);
  const [editTask] = useEditTaskMutation();
  const { data: singleTodo } = useGetSingleTaskQuery(id, {
    refetchOnFocus: true,
    pollingInterval: 3000,
  });

  const notification = (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <div>
          <span>Task Edited</span>
        </div>
      </div>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const des = e.target.des.value;
    const status = e.target.status.value;
    const updatedTodo = {
      title: title,
      des: des,
      status: status,
    };

    const editData = await editTask({ data: updatedTodo, id: id });

    if (editData.data.acknowledged) {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card sm:w-96 w-60 glass bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="card-body p-0">
          <h2 className="card-title text-2xl text-white mb-5">
            Edit Your Task
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Enter Task Tittle"
              defaultValue={singleTodo?.title}
              className="input input-bordered input-md w-full max-w-xs mb-3"
            />
            <textarea
              type="text"
              name="des"
              placeholder="Enter Task Description"
              defaultValue={singleTodo?.des}
              className="textarea textarea-bordered textarea-md w-full max-w-xs mb-3"
            />

            <select
              name="status"
              placeholder="Enter Task Status"
              className="select select-bordered select-md w-full max-w-xs mb-3"
            >
              <option
                selected={singleTodo?.status === "pending"}
                value="pending"
              >
                Pending
              </option>

              <option
                selected={singleTodo?.status === "in progress"}
                value="in progress"
              >
                in progress
              </option>
              <option
                selected={singleTodo?.status === "completed"}
                value="completed"
              >
                Completed
              </option>
            </select>

            <input
              type="submit"
              value="Update Task"
              className="btn w-full hover:opacity-70 text-white bg-gradient-to-r from-violet-800 to-fuchsia-800 border-0"
            />
          </form>
        </div>
      </div>

      {toast && notification}
    </div>
  );
};

export default EditTodo;
