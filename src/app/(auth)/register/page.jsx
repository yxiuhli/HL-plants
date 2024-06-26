import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-24 w-1/3 bg-[--bgSoft] flex flex-col text-center rounded-lg p-8">
        <RegisterForm/>
      </div>
    </div>
  );
};

export default RegisterPage;
