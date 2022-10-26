import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="w-h h-full">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6 text-[#272827]"
        >
          <div>
            <label htmlFor="fullName" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "You must enter your name",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "ring-2 ring-red-500" : null
              }`}
              placeholder="Full name"
            />
            <span className="text-red-400 text-sm py-2">
              {errors.fullName && (
                <p role="alert">{errors?.fullName?.message}</p>
              )}
            </span>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              name="email"
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter your email address",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "This needs to be a valid email address",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "ring-2 ring-red-500" : null
              }`}
              placeholder="Email"
            />
            <span className="text-red-400 text-sm py-2">
              {errors.email && <p role="alert">{errors.email?.message}</p>}
            </span>
          </div>
          <div>
            <label htmlFor="writtenMessage" className="sr-only">
              Message
            </label>
            <textarea
              name="writtenMessage"
              rows="4"
              {...register("writtenMessage", {
                required: {
                  value: true,
                  message: "You need to enter your message",
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 30,
                  message: "Your message must be longer than this!",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? "ring-2 ring-red-500" : null
              }`}
              placeholder="Message"
            ></textarea>
            <span className="text-red-400 text-sm py-2">
              {errors.writtenMessage && (
                <p role="alert">{errors.writtenMessage?.message}</p>
              )}
            </span>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-end py-3 px-5 border border-transparent shadow text-base font-medium rounded-md  text-[#212121] bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
