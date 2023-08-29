import IconBolt from '~icons/mdi/lightning-bolt';

const Home = () => {
  return (
    <div className="flex items-center space-x-2">
      <IconBolt className="text-red-500 w-11 h-11" />
      <h1 className="text-2xl">Home Page</h1>
      <IconBolt className="text-red-500 w-11 h-11" />
    </div>
  );
};

export default Home;
