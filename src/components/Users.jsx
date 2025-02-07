import { useSelector, useDispatch } from "react-redux";
import { delUser, editUser, addUser } from "../store/features/usersSlice/usersSlice";
import { useState } from "react";

const Users = () => {
    const { data } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [editingId, setEditingId] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");

    const [newUserName, setNewUserName] = useState("");
    const [newUserPhone, setNewUserPhone] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    const handleEdit = (id, name, phone) => {
        setEditingId(id);
        setNewName(name);
        setNewPhone(phone);
    };

    const handleSave = (id) => {
        dispatch(editUser({ id, name: newName, phone: newPhone }));
        setEditingId(null);
    };

    const handleAddUser = () => {
        if (newUserName.trim() && newUserPhone.trim()) {
            dispatch(addUser({ name: newUserName, phone: newUserPhone }));
            setNewUserName("");
            setNewUserPhone("");
            setShowAddForm(false);
        }
    };

    return (
        <div className="users">
            <h2>USERS</h2>
            <ul>
                {
                    data.map(user => {
                        const { id, name, phone } = user;
                        const idToDel = id;

                        return (
                            <li key={id}>
                                {editingId === id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            value={newPhone}
                                            onChange={(e) => setNewPhone(e.target.value)}
                                        />
                                        <button onClick={() => handleSave(id)}>Save</button>
                                        <button onClick={() => setEditingId(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {name} : {phone}
                                        <button onClick={() => handleEdit(id, name, phone)}>Edit</button>
                                        <button onClick={() => dispatch(delUser(id))}>Delete</button>
                                    </>
                                )}
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? "Cancel" : "Add New User"}
            </button>

            {showAddForm && (
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={newUserPhone}
                        onChange={(e) => setNewUserPhone(e.target.value)}
                    />
                    <button onClick={handleAddUser}>Save User</button>
                </div>
            )}
        </div>
    );
}
export default Users;