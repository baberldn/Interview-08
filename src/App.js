import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length > 20 || password.length > 20) {
      setMessage("Kullanıcı adı ve şifre 20 karakterden fazla olamaz.");
      return;
    }
    if (username.length < 6 || password.length < 6) {
      setMessage("Kullanıcı adı ve şifre en az 6 karakter olmalıdır.");
      return;
    }

  
    const accountExists = accounts.some(
      (account) => account.username === username && account.password === password
    );
   if (accountExists) {
      setMessage(`Hoş geldiniz, ${username}!`);
      setUsername("");
      setPassword("");
    } else {
      setAccounts([...accounts, { username, password }]);
      setMessage("Yeni hesap oluşturuldu.");
      setUsername("");
      setPassword("");
    }
  };

 const handleUsernameChange = (e) => {
    if (e.target.value.length <= 20) {
      setUsername(e.target.value);
    } else {
      setMessage("Kullanıcı adı 20 karakterden fazla olamaz.");
    }
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.length <= 20) {
      setPassword(e.target.value);
    } else {
      setMessage("Şifre 20 karakterden fazla olamaz.");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid 1px #ccc",
        padding: 10,
        maxWidth: "300px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
      onSubmit={onSubmit}
    >
      <h3 style={{ textAlign: "center", marginBottom: 15 }}>Login</h3>
      <input
        value={username}
        type="text"
        onChange={handleUsernameChange}
        placeholder="Kullanıcı Adı"
        style={{
          marginBottom: 10,
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />
      <input
        value={password}
        type="password"
        onChange={handlePasswordChange}
        placeholder="Şifre"
        style={{
          marginBottom: 10,
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />
      <button
        style={{
          alignSelf: "center",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onSubmit}
      >
        Submit
      </button>
      {message && (
        <p
          style={{
            marginTop: 15,
            color: message.includes("Hoş geldiniz") ? "green" : "red",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default App;
