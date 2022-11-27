import React from 'react';
import { toast } from 'react-toastify';

const DoneOrder = ({ openDone,  setOpenDone, refetch}) => {

  const {name, service, _id} = openDone;


  const handleUpdate = () => {
    fetch(`https://creative-agency-server.vercel.app/order/${_id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()).then(data => {
      if (data.modifiedCount > 0) {
        toast.success('service done')
      }
      console.log("data update", data)
      refetch()
    })
    setOpenDone(null)



  }
  return (
    <div>
      {
        openDone && (
          <div className="modal" id="updateOrder">
            <div className="modal-box">
              <h3 className="font-bold text-md">done  {name}'s service {service}</h3>

              <div className="modal-action">
                <button className='btn btn-secondary' onClick={() => handleUpdate()}>Yes</button>
                
                <a href="#" className="btn">No</a>
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default DoneOrder;