
import { Formik, ErrorMessage, Form, Field } from "formik";
import Uservalidation from "./uservalidation";
import * as Yup from "yup";


const Categories = () => {
  const userSchema = Yup.object({
    name: Yup.string("Must be alphabet").required("User name is required"),
    email: Yup.string()
      .email("Your email format is not correct")
      .required("Email is required"),
    password: Yup.string().min(4).max(10).required("Password is required"),
    phone: Yup.string().min(11).max(11).required("Your tell no is required"),
    discription: Yup.string().required("Your discription is required"),
  });

  return (
    <>
      <div className=" container-md bg-white md-white-200 to-black-200 App mb-5">
        <div
          className="  bottom-image object-fill  "
          style={{
            backgroundImage:
              'url("https://blog.evopry.com/wp-content/uploads/2021/07/Earn-money-online.jpg")',
            backgroundSize: "90rem 45rem",
            backgroundRepeat: "no-repeat",
            backgroundposition: "center",
            boxShadow: "inset 0px -70px 200px 0px #6366F1",
          }}
        >
          <div className="space-y-8 py-8 text-base leading-7 text-gray-600 ">
            <h1 className="font-sans font-semibold tracking-wider font-serif text-center text-white text-4xl  mb-5 relative py-30 mt-5 ">
              COME AND TEACH WITH US
            </h1>

            <h
              className="text-bold  text-xl font-family: ui-monospace, SFMono-Regular, Menlo, container text-center "
              style={{ color: "#fff1f2" }}
            >
              One of the oldest and most trustworthy teaching websites is{" "}
              <a href="#" className="text-white">
                tutor.com.
              </a>{" "}
              This site offers one-to-one learning solutions both for students
              and teachers. Their service includes tutoring, peer coaching,
              professional development, training, career help, etc.
            </h>
          </div>
          <a href="#form">
            <button className="bg-sky-500/75  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-5 mb-5 rounded shadow">
              CHANNEL OF DREAM
            </button>
          </a>
        </div>
      </div>
      {/* 
Reason to start teaching */}

      <h1 className="font-sans font-semibold tracking-wider font-serif text-center  text-4xl  mb-5 relative py-5 mt-5 mb-5 ">
        So many reasons to start
      </h1>
      <div className="columns-1 md:columns-3  container  mx-10">
        {/* first */}
        <div
          className="object-cover  content-center items-center  mb-5 "
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px #6366F1 solid",
            borderRadius: "2px",
          }}
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="col-sm "></div>
            <img
              className=" mt-5 mb-5 "
              alt=""
              width="100"
              height="100"
              src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg"
              srcset="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg 2x"
            />
            <div className="col-sm"></div>
          </div>
          <div style={{ color: "#6366F1", fontSize: "20px" }}>
            Inspire learners
          </div>
          <div className=" mb-5">
            Teach what you know and help learners explore their interests, gain
            new skills, and advance their careers.
          </div>
        </div>
        {/* second */}
        <div
          className="object-cover  content-center items-center mb-5"
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px #6366F1 solid",
            borderRadius: "2px",
          }}
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="col-sm "></div>
            <img
              className=" mt-5 mb-5 "
              alt=""
              width="100"
              height="100"
              src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg"
              srcset="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg 2x"
            />
            <div className="col-sm"></div>
          </div>
          <div style={{ color: "#6366F1", fontSize: "20px" }}>
            Inspire learners
          </div>
          <div className=" mb-5">
            Teach what you know and help learners explore their interests, gain
            new skills, and advance their careers.
          </div>
        </div>
        {/* Third */}
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px #6366F1 solid",
            borderRadius: "2px",
          }}
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="col-sm "></div>
            <img
              className=" mt-5 mb-5 "
              alt=""
              width="100"
              height="100"
              src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg"
              srcset="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg 2x"
            />{" "}
            <div className="col-sm "></div>
          </div>
          <div style={{ color: "#6366F1", fontSize: "20px" }}>Get rewarded</div>
          <div className=" mb-5">
            Expand your professional network, build your expertise, and earn
            money on each paid enrollment.
          </div>
        </div>
      </div>

      {/* Our form at bottom */}

      <div className="col-sm md:container mb-5" Id="form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={userSchema}
          validateOnBlur={true}
        >
          {(formik) => (
            <div>
              {console.log(formik.values)}
              <h1 className="font-sans font-semibold tracking-wider font-serif text-center text-black text-4xl  mb-5 relative py-30 mt-5 ">
                Regestration
              </h1>
              <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Name
                </label>
                <Uservalidation
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="name"
                  value={formik.values.name}
                />

                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  E-mail
                </label>
                <Uservalidation
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <Uservalidation
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <Uservalidation
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phone"
                  type="phone"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your discrption (Degree,insutute you study...)
                </label>
                <Uservalidation
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="discription"
                  type="textarea"
                  rows="10"
                  cols="30"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Channel Name
                </label>
                <Uservalidation
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="channel"
                  type="text"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Header image
                </label>
                <div className="shrink-0">
    <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
                <div className=" mt-4 text-center">
                  <button className="bg-sky-500/75  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-5 mb-5 rounded shadow">
                    START JOURNEY
                  </button>
                </div>

        
              </Form>
            </div>
          )}
        </Formik>
      </div>

      <div className="col-sm"></div>
    </>
  );
};

export default Categories;
