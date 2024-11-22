import React, { useState } from 'react';
import './RoleManagement.css';
import { useNavigate } from 'react-router-dom';

const RoleManagement = () => {
  const navigate = useNavigate();

  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  const [editingRole, setEditingRole] = useState(null);
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handleEdit = (role) => {
    setEditingRole(role.id);
    setRoleName(role.name);
    setPermissions(role.permissions);
  };

  const handleSaveEdit = () => {
    const updatedRoles = roles.map((role) =>
      role.id === editingRole
        ? { ...role, name: roleName, permissions: permissions }
        : role
    );
    setRoles(updatedRoles);
    setEditingRole(null);
  };

  const handleDelete = (id) => {
    const updatedRoles = roles.filter((role) => role.id !== id);
    setRoles(updatedRoles);
  };

  const handleAddRole = () => {
    const newRole = { id: roles.length + 1, name: 'New Role', permissions: [] };
    setRoles([...roles, newRole]);
  };

  const handlePermissionChange = (index, value) => {
    const newPermissions = [...permissions];
    newPermissions[index] = value;
    setPermissions(newPermissions);
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <button onClick={() => navigate('/')}>Back to Home</button>
      <button onClick={handleAddRole}>Add Role</button>
      
      <table className="role-management-table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>
                {editingRole === role.id ? (
                  <input
                    type="text"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                  />
                ) : (
                  role.name
                )}
              </td>
              <td>
                {editingRole === role.id ? (
                  <input
                    type="text"
                    value={permissions.join(', ')}
                    onChange={(e) =>
                      setPermissions(e.target.value.split(',').map((p) => p.trim()))
                    }
                  />
                ) : (
                  role.permissions.join(', ')
                )}
              </td>
              <td>
                {editingRole === role.id ? (
                  <button onClick={handleSaveEdit}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(role)}>Edit</button>
                )}
                <button onClick={() => handleDelete(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
