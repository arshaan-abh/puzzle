import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, ObjectSchema, string } from 'yup';
import { Button, TextField } from '@mui/material';
import { RegisterRequest } from '../../../@types/register-request';
// import { useRegister } from '../../../hooks/use-register/use-register';

const schema: ObjectSchema<RegisterRequest> = object({
  email: string().email().required('This field is required.'),
  password: string().min(6).required('This field is required.'),
}).required();

const Register = () => {
  // const registerMutation = useRegister();
  const { control, handleSubmit } = useForm<RegisterRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // registerMutation.mutate(data);
  });

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <form onSubmit={onSubmit} className="flex flex-col w-full max-w-xl space-y-8 text-gray-700 bg-white rounded p-9">
        <h1 className="text-lg text-center">Sign-up Page</h1>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField type="email" id="email" label="Email" variant="outlined" {...field} />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField type="password" id="password" label="Password" variant="outlined" {...field} />
          )}
        />
        <Button type="submit" variant="contained">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Register;
