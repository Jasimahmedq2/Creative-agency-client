import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserService = ({userService, setUserService, refetch}) => {
  const {service, name, _id} = userService;
  console.log(userService)
  
  const handleDeleteUserService = () => {
     fetch(`https://creative-agency-server.vercel.app/order/user/${_id}`, {
      method: 'DELETE',
      headers: {
        "content-type" : "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
     }).then(res => res.json()).then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        toast.success('delete success')
      }
      refetch()
      setUserService(null)
     })
  }
  return (
    <div>
      {
        <div className="modal" id="deleteUserService">
          <div className="modal-box">
            <h3 className="font-bold text-md">delete  {name}'s service {service}</h3>

            <div className="modal-action">
              <button className='btn btn-secondary' onClick={() => handleDeleteUserService(_id)}>Yes</button>

              <a href="#" className="btn">No</a>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default DeleteUserService;