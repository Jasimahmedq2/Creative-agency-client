import React from 'react';
import './AddService.css'

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='container w-11/12 ml-4 '>
      <form onSubmit={handleSubmit} className='text-start px-12 py-12 relative'>
        <div className='input-container flex items-center'>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">title</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className='label'>
              <span className="label-text">Image</span>
            </label>
            <input  type="file" name="image" id="" className='input w-1/2 max-w-xs ms-6 type-image label-upload' />
          </div>

        

        </div>
        <br />

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea class="textarea w-full  max-w-xs mt-4 style-textarea" placeholder="service details"></textarea>
          <input type="submit" value="Submit" className='absolute -bottom-9 right-0' style={{ background: '#009444', color: '#ffffff', width: '112px', height: '37px', cursor: 'pointer' }} />
        </div>

      </form>
    </div>
  );
};

export default AddService;