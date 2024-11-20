import React, { useState } from "react";

function RegistrationForm() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [text,setText]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!first || !last || !email || !password || role === "Role") {
            alert("Please fill in all fields!");
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long!");
            return;
        }

        alert(`Registration successful!\nName: ${first} ${last}\nEmail: ${email}\nRole: ${role}`);
    };

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "20px 0", color: "#4b4b4b" }}>Registration Form</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                    padding: "20px",
                    border: "2px solid #4b4b4b",
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <fieldset style={{ border: "none", margin: "0", padding: "0" }}>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="firstName" style={{ display: "block", marginBottom: "5px" }}>
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="lastName" style={{ display: "block", marginBottom: "5px" }}>
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="role" style={{ display: "block", marginBottom: "5px" }}>
                            Role
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
            <form onSubmit={() => alert("Submitting")}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
                <input type="button" value="Submit" />
            </form>
        </>
    );
}

export default RegistrationForm;
