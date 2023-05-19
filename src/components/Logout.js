const Logout = () => {
  const currentUser = localStorage.getItem("currentUser")

  localStorage.clear();

  return (
    <div className="container">
      <h1>Bye {currentUser}!</h1>
    </div>
  );
};