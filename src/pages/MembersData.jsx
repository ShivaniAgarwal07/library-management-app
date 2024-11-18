import { useState } from "react";

const MembersData = () => {
    const dummyMembers = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", debt: 200 },
        { id: 2, name: "Bob Smith", email: "bob@example.com", debt: 100 },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", debt: 0 },
      ];

  const [membersData, setMembersData] = useState(dummyMembers);
  const [searchQuery, setSearchQuery] = useState("");

  const addBook= ()=> {
    const newBook = {
        id: membersData.length +1,
        name: "a new member",
        email: "khushi@gmail.com",
        debt: 150
    }
    setMembersData([...membersData, newBook])
  }
  const updateBook= (id)=> {
    const updatedMembers= membersData.map((member)=>
        member.id===id? {...member, name: `${member.name} (Updated)`}: member
    )
    setMembersData(updatedMembers);

  }
  const deleteBook= (id)=> {
    const updatedMembers= membersData.filter((member)=>member.id!==id);
    setMembersData(updatedMembers);
  }

  const filteredMembers= membersData.filter((member)=>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
  member.email.toLowerCase().includes(searchQuery.toLowerCase())
)
  

  return (
    <div style={{ padding: "20px" }}>
      <h1>Members Management</h1>

      <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>

      <button onClick={addBook}>Add Member</button>
      <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
        <thead className="table-head">
          <tr>
            <th>Member ID</th>
            <th>Member Name</th>
            <th>Member Email</th>
            <th>Member Debt</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {filteredMembers.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.debt}</td>
              <td>
                <button onClick={() => updateBook(member.id)}>Update Member</button>
                <button onClick={() => deleteBook(member.id)}>Delete Member</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MembersData;
