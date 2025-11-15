const users = [
	{ id: 1, name: "Mateus", age: 21 },
	{ id: 2, name: "John", age: 22 },
	{ id: 3, name: "Santos", age: 23 },
];

function UserList() {
	return (
    <section>
      <h3>Lista de usuários</h3>

		<ul>
			{users.map((user) => (
        <li key={user.id}>
					{" "}
					{user.name} - {user.age}{" "}
				</li>
			))}
		</ul>
      </section>
	);
}

export default UserList;
