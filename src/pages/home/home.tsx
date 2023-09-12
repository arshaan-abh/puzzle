import toast from 'react-hot-toast';
import { useCreateUser } from '../../hooks/use-create-user/use-create-users';
import { useGetUsers } from '../../hooks/use-get-users/use-get-users';

const Home = () => {
  const usersData = useGetUsers({
    staleTime: 1000 * 30,
  });
  const createUser = useCreateUser({
    onSuccess: (data) => {
      toast.success(data.job);
    },
  });

  const handleCreateUser = () => {
    createUser.mutate({
      job: 'HR',
      name: 'Peyman',
    });
  };

  return (
    <div className="flex flex-col items-center space-x-2 divide-y divide-gray-100">
      {usersData?.data?.data?.map((item) => {
        return (
          <div className="flex items-center justify-center w-full h-11">
            {item.first_name} {item.last_name}
          </div>
        );
      })}
      <button onClick={handleCreateUser} className="mt-12 text-white bg-red-500 h-11 w-80">
        Create User
      </button>
    </div>
  );
};

export default Home;
