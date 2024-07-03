// import { useForm } from "react-hook-form";
// import CreatableSelect from "react-select/creatable";
// import styles from "../styles.module.css";

// import { useState } from "react";
// const MyJob = () => {
//   const [selectoptin, setselectoption] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   const options = [
//     { value: "Angular", label: "Angular" },
//     { value: "CSS", label: "CSS" },
//     { value: "C++", label: "C++" },
//     { value: "C#", label: "C#" },
//     { value: "Express", label: "Express" },
//     { value: "HTML", label: "HTML" },
//     { value: "Java", label: "Java" },
//     { value: "JavaScript", label: "JavaScript" },
//     { value: "Python", label: "Python" },
//     { value: "MongoDB", label: "MongoDB" },

//     { value: "Node", label: "Node" },
//     { value: "React", label: "React" },
//     { value: "Redux", label: "Redux" },
//   ];
//   return (
//     <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-20 ">
//       {/* form */}
//       <div className="bg-[#FAFAFA] py-10px-4 lg:px-16 p-2">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-5 rounded-sm"
//         >
//           {/* first row */}
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">Job Title</label>
//               <input
//                 type="text"
//                 defaultValue={"Ex: Web Developer"}
//                 {...register("First name", { required: true, maxLength: 80 })}
//                 className="block w-full flex-1 border-1
//                      bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               />
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">
//                 Current Company Name
//               </label>
//               <input
//                 type="text"
//                 defaultValue={"Ex: Google"}
//                 {...register("company name", { required: true, maxLength: 80 })}
//                 className="block w-full flex-1 border-1
//                      bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               />
//             </div>
//           </div>

//           {/* second row */}
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">Minimum Salary</label>
//               <input
//                 type="text"
//                 defaultValue={"Ex: $20k"}
//                 {...register("min sal", { required: true, maxLength: 80 })}
//                 className="block w-full flex-1 border-1
//                      bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               />
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">Maximum Salary</label>
//               <input
//                 type="text"
//                 defaultValue={"Ex: $100k"}
//                 {...register("max sal", { required: true, maxLength: 80 })}
//                 className="block w-full flex-1 border-1
//                      bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               />
//             </div>
//           </div>

//           {/* third row */}
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">Salary Type</label>
//               <select
//                 {...register("saltype")}
//                 className="block w-full flex-1 border-1
//                      bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               >
//                 <option value="">Choose your salary</option>
//                 <option value="hourly">Hourly</option>
//                 <option value="monthly">Monthly</option>
//                 <option value="yearly">Yearly</option>
//               </select>
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">
//                 Current Job Location
//               </label>
//               <input
//                 type="text"
//                 defaultValue={"Ex: Delhi"}
//                 {...register("job loc", { required: true, maxLength: 80 })}
//                 className="block w-full flex-1 border-1
//                      bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               />
//             </div>
//           </div>

//           {/*fourth row*/}
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">
//                 Immediate Joining Date
//               </label>
//               <input
//                 type="date"
//                 placeholder="EX: 2024-09-03"
//                 {...register("job join")}
//                 className="block w-full flex-1 border-1
//                           bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               />
//             </div>

//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg ">Experience Level</label>
//               <select
//                 {...register("saltype")}
//                 className="block w-full flex-1 border-1
//                         bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4 "
//               >
//                 <option value="">Choose your experience level</option>
//                 <option value="hourly">Internship</option>
//                 <option value="hourly">Fresher 0-2 years</option>
//                 <option value="monthly">Experience 2-8 years</option>
//                 <option value="yearly">8+ years</option>
//               </select>
//             </div>
//           </div>
//           {/*fifth row*/}
//           <div>
//             <label className="block mb-2 text-lg ">Skill Set</label>
//             <CreatableSelect
//               defaultValue={selectoptin}
//               onChange={setselectoption}
//               options={options}
//               isMulti
//               className="block w-full flex-1 border-1
//                         bg-white py-1.5 pl-3 text-gray-600 placeholder:text-gray-200 focus:outline-none sm:text-sm sm:left-4"
//             />
//           </div>

//           {/*sixth row*/}
//           <div style={{ marginTop: "20px" }}>
//             <label className="block mb-2 text-lg">Upload Resume (PDF)</label>
//             <input
//               type="file"
//               accept="application/pdf"
//               {...register("resume", { required: true })}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//             {errors.resume && (
//               <span style={{ color: "red" }}>This field is required</span>
//             )}
//           </div>

//           <input
//             type="submit"
//             className="my-5 cursor-pointer text-white font-semibold block mt-12 bg-blue-500 px-8 rounded-sm py-4"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyJob;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import "./job.css"; // Import the new CSS file

const MyJob = () => {
  const [selectoption, setselectoption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const options = [
    { value: "Angular", label: "Angular" },
    { value: "CSS", label: "CSS" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Express", label: "Express" },
    { value: "HTML", label: "HTML" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Node", label: "Node" },
    { value: "React", label: "React" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="container">
      {/* form */}
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue="Ex: Web Developer"
                {...register("First name", { required: true, maxLength: 80 })}
                className="input-field"
              />
            </div>
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Current Company Name</label>
              <input
                type="text"
                defaultValue="Ex: Google"
                {...register("company name", { required: true, maxLength: 80 })}
                className="input-field"
              />
            </div>
          </div>

          {/* second row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                defaultValue="Ex: $20k"
                {...register("min sal", { required: true, maxLength: 80 })}
                className="input-field"
              />
            </div>
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                defaultValue="Ex: $100k"
                {...register("max sal", { required: true, maxLength: 80 })}
                className="input-field"
              />
            </div>
          </div>

          {/* third row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("saltype")} className="input-field">
                <option value="">Choose your salary</option>
                <option value="hourly">Hourly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Current Job Location</label>
              <input
                type="text"
                defaultValue="Ex: Delhi"
                {...register("job loc", { required: true, maxLength: 80 })}
                className="input-field"
              />
            </div>
          </div>

          {/* fourth row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">
                Immediate Joining Date
              </label>
              <input
                type="date"
                placeholder="EX: 2024-09-03"
                {...register("job join")}
                className="input-field"
              />
            </div>

            <div className="lg:w-1-2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("saltype")} className="input-field">
                <option value="">Choose your experience level</option>
                <option value="hourly">Internship</option>
                <option value="hourly">Fresher 0-2 years</option>
                <option value="monthly">Experience 2-8 years</option>
                <option value="yearly">8+ years</option>
              </select>
            </div>
          </div>

          {/* fifth row */}
          <div>
            <label className="block mb-2 text-lg">Skill Set</label>
            <CreatableSelect
              defaultValue={selectoption}
              onChange={setselectoption}
              options={options}
              isMulti
              className="input-field"
            />
          </div>

          {/* sixth row */}
          <div className="mt-20">
            <label className="block mb-2 text-lg">Upload Resume (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              {...register("resume", { required: true })}
              className="input-field"
            />
            {errors.resume && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <input type="submit" className="input-submit" />
        </form>
      </div>
    </div>
  );
};

export default MyJob;
