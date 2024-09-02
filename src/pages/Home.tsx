function Home() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <section className="w-full">
      <h1>Home</h1>
      <p>Welcome to the home page. 5</p>
      <button onClick={handleClick}>click</button>
    </section>
  );
}

export default Home;
