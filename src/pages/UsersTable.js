import { getUsers } from "../utils/localStorageHelper";

const UsersTable = () => {
  const users = getUsers();

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Registered Users</h2>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersTable;