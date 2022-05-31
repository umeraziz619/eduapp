import * as yup from "yup";
import React, { useEffect, useRef, useState } from "react";
import {useField ,ErrorMessage} from "formik"
//  export  const userSchema =yup.object().shape({
//     name:yup.string().required("feild is required"),
//     email:yup.string().email().required('feild is required'),
//     password:yup.string().min(4).max(10).required('feild is required'),
// })
// import { Formik , Form ,Field,useField } from "formik";
// import * as yup from "yup";



// const CustomTextInput=({lable,...props})=>{
//     const [field, meta]=useField(props);
    
//     return(
//       <>
//       <lable htmlFor={props.id || props.name}>{lable}</lable>
//       <input className="text-input" {...field} {...props}/>
//       {meta.touched && meta.error ?(
//         <div className="error">{meta.error}</div>
//       ):null}
    
//       </>
//     )
    
//     }
    
    
//     const CustomTextInput1=({children,...props})=>{
//       const [field, meta]=useField(props, 'email');
      
//       return(
//         <>
//         <lable className="input">
//         <input type='email' {...field} {...props}/>
//         {children}</lable>
//         {meta.touched && meta.error ?(
//           <div className="error">{meta.error}</div>
//         ):null}
      
//         </>
//       )
      
//       }
//       const CustomTextInput2=({children,...props})=>{
//         const [field, meta]=useField(props, 'email');
        
//         return(
//           <>
//           <lable className="input">
//           <input type='email' {...field} {...props}/>
//           {children}</lable>
//           {meta.touched && meta.error ?(
//             <div className="error">{meta.error}</div>
//           ):null}
        
//           </>
//         )
        
//         }

//         function Uservalidation() {
           
              
//               return (
//                 <div>
//                  <Formik  initialValues={{
//       name:"",
//       email:'',
//       password:"",
//     }}   validationSchema={yup.object({
//       name:yup.string().min(3,"must be at least 3 characters").max(15,"Must be is characters").required("it required"),
//       email:yup.string().email('invalid email address').required('it is required'),
// password:yup.string().min(3,"must be at least 3 characters").max(15,"Must be is characters").required("it required"),
//     })}
    
//     onSubmit={(values, {setSubmitting, resetForm})=>{
//       setTimeout(()=>{
//         // alart(JSON.stringify(values, null ,2));
//         console.log(values);
//       },1000)
//       resetForm();
//       setSubmitting(false); 
//     }}
    
//     >

// {
//   props=>{
//     <Form>
//       <h2>Sign up form</h2>
//       <CustomTextInput lable="Name" name="name" type='text' placeholder="Azam Ali"/>
//       <CustomTextInput1 lable="Email" name="email" type='email' placeholder="aazamali@gmail.com"/>
//       <CustomTextInput2 lable="Email" name="email" type='email' placeholder="aazamali@gmail.com"/>
//     </Form>
//   }
// }

//     </Formik>
//                 </div>
//               );
//             }
            
//             export default Uservalidation;
function Uservalidation({label, ...props}) {
const [field , meta] = useField(props);


  
    return (
      <div className=" mb-4">
       <input  className="form-control mr-sm-2 shadow-lg bg-transparent text-white " required {...field} {...props} autoComplete='off'   />
    <div className="error " style={{color:'red'}}> <ErrorMessage  name={field.name}/></div>
     
      </div>
    );
  }
  
  export default Uservalidation;