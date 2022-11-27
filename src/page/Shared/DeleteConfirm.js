import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ openDelete,  refetch, setOpenDelete}) => {

const {name, service, _id} = openDelete;

  const handleDelete = () => {
    fetch(`https://creative-agency-server.vercel.app/order/${_id}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()).then(data => {
      console.log("delete data", data)
      if (data?.deletedCount > 0) {
        toast.success('delete success')
      }
      refetch()
    })
    setOpenDelete(null)
  }
  return (
    <div>
      {
        openDelete && (
          <div className="modal" id="deleteOrder">
          <div className="modal-box">
            <h3 className="font-bold text-md">you are sure delete {name}'s service {service}</h3>
         
            <div className="modal-action">
              <button className='btn btn-secondary' onClick={() => handleDelete(_id)}>Yes</button>
              <a href="#" className="btn">No</a>
            </div>
          </div>
        </div>
        )
      }
     
    </div>
  );
};

export default DeleteConfirm;