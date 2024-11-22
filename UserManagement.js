import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';

Modal.setAppElement('#root');

const UserManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: 'Mohd Faeez Ahmed', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Samyah Khan', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Krish Bansal', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Garvit Mehrotra', role: 'Viewer', status: 'Active' },
    { id: 5, name: 'Aditya Luthra', role: 'Viewer', status: 'Active' },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  const openModal = (user) => {
    setUserToEdit(user);
    setEditedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setUserToEdit(null);
  };

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    closeModal();
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management</h1>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => openModal(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit User"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Edit User</h2>
        <div className="modal-input">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser?.name || ''}
            onChange={handleChange}
          />
        </div>
        <div className="modal-input">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={editedUser?.role || ''}
            onChange={handleChange}
          />
        </div>
        <div className="modal-input">
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={editedUser?.status || ''}
            onChange={handleChange}
          />
        </div>
        <button className="save-btn" onClick={saveChanges}>
          Save
        </button>
        <button className="cancel-btn" onClick={closeModal}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default UserManagement;
