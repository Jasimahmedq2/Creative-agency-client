import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddService.css'

const AddService = () => {
  const { register, handleSubmit, formState: { errors },  reset} = useForm();
  const onSubmit = data => {
   
    
    const img = data?.image[0]
    const privateUrl = '44c26384eae4023f6064cf342eee9294'
    const formData = new FormData()
    formData.append('image', img)
    
    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      console.log("result details",result.data.url)

      const serviceData = {
        title: data?.title,
        description: data?.description,
        image: result?.data?.url
      }
      console.log("image here",serviceData.image)
      
      fetch('https://creative-agency-server.vercel.app/service', {
        method: 'POST',
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(serviceData)
      })

      .then(res => res.json())
      .then(inserted => {
        console.log(inserted)
        if(inserted.insertedId){
          toast.success("Successfully Add A Service")
        }
        reset()
        
      })
    })
  };


 

  return (
    <div className='container w-11/12 ml-4 mt-12'>
      <form onSubmit={handleSubmit(onSubmit)} className='text-start px-12 py-12 relative'>
        <div className='input-container flex items-center'>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-bold">title</span>
            </label>
            <input type="text" {...register('title', { required: true })} placeholder="Type here" className="input input-bordered w-full  shadow-xl rounded" />
            {errors.title && errors.title.type === "required" && <span className='text-red-400'>title is required</span>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className='label'>
              <span className="label-text text-xl font-bold">Image</span>
            </label>
            <input type="file" {...register('image', { required: true })} className='input w-1/2  ms-6 type-image label-upload ' />
            {errors.image && errors.image.type === "required" && <span className='text-red-400'>select service image</span>}
          </div>

        

        </div>
        <br />

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl font-bold">description</span>
          </label>
          <textarea {...register('description', { required: true })} className="textarea w-full   style-textarea shadow-xl rounded" placeholder="service details"></textarea>
          {errors.name && errors.name.type === "required" && <span className='text-red-400'>written description</span>}
          <input type="submit" value="Submit" className='absolute -bottom-9 right-0' style={{ background: '#009444', color: '#ffffff', width: '112px', height: '37px', cursor: 'pointer' }} />
        </div>

      </form>
    </div>
  );
};

export default AddService;