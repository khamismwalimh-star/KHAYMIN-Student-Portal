import { useState } from "react";
import { supabase } from "./supabase";
import "./App.css";

function App() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [activePage, setActivePage] = useState("Dashboard");

  const menu = ["Dashboard", "My Profile", "My Courses", "Timetable", "Attendance", "Results", "Fee Payment", "Announcements"];

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: studentId.trim(),
      password
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    setLoggedIn(true);
  }

  function showContent() {
    if (activePage === "My Profile") return <div className="portal-card"><h2>My Profile</h2><p>Email: {studentId}</p><p>Academic Year: 2026/2027</p><p>Status: Active</p></div>;
    if (activePage === "My Courses") return <div className="portal-card"><h2>My Courses</h2><p>BIT101 - Introduction to IT</p><p>BIT102 - Computer Programming</p><p>BIT103 - Database Systems</p></div>;
    if (activePage === "Timetable") return <div className="portal-card"><h2>Class Timetable</h2><p>Monday: 08:00 - 10:00</p><p>Tuesday: 10:00 - 12:00</p><p>Wednesday: 08:00 - 10:00</p></div>;
    if (activePage === "Attendance") return <div className="portal-card"><h2>Attendance</h2><h1>85%</h1></div>;
    if (activePage === "Results") return <div className="portal-card"><h2>Results</h2><p>Introduction to IT: B+</p><p>Programming: A</p><p>Database Systems: B</p></div>;
    if (activePage === "Fee Payment") return <div className="portal-card"><h2>Fee Payment</h2><p>Total Fees: 1,500,000</p><p>Paid: 1,000,000</p><p>Balance: 500,000</p></div>;
    if (activePage === "Announcements") return <div className="portal-card"><h2>Announcements</h2><p>Welcome to KHAYMIN Student Portal.</p></div>;

    return <>
      <div className="welcome"><h2>Welcome, {studentId}!</h2><p>Welcome to your student academic portal.</p></div>
      <div className="student-info"><h3>Student Information</h3><p>Student ID: {studentId}</p><p>Academic Year: 2026/2027</p><p>Status: Active</p></div>
      <div className="dashboard-grid">
        <div className="stat-card"><h3>My Courses</h3><h1>3</h1></div>
        <div className="stat-card"><h3>Attendance</h3><h1>85%</h1></div>
        <div className="stat-card"><h3>Results</h3><h1>3</h1></div>
        <div className="stat-card"><h3>Fee Balance</h3><h1>500K</h1></div>
      </div>
    </>;
  }

  if (!loggedIn) return (
    <div className="login-page"><div className="login-card">
      <div className="logo">🎓</div><h1>KHAYMIN</h1><p className="subtitle">STUDENT PORTAL</p>
      <h2>Welcome Back</h2><p>Login to access your student account</p>
      <form onSubmit={handleLogin}>
        <label>Email Address</label>
        <input type="email" placeholder="Enter Email Address" value={studentId} onChange={e => setStudentId(e.target.value)} required />
        <label>Password</label>
        <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">LOGIN</button>
      </form>
      <p className="footer">KHAYMIN STUDENT PORTAL</p>
    </div></div>
  );

  return (
    <div className="student-layout">
      <aside className="student-sidebar">
        <div className="brand"><span>🎓</span><h2>KHAYMIN</h2><small>STUDENT PORTAL</small></div>
        <p className="menu-label">MAIN MENU</p>
        {menu.map(item => <button key={item} className={activePage === item ? "menu-active" : "menu-button"} onClick={() => setActivePage(item)}>{item}</button>)}
        <button className="logout-button" onClick={async () => { await supabase.auth.signOut(); setLoggedIn(false); setPassword(""); setActivePage("Dashboard"); }}>Logout</button>
      </aside>
      <main className="student-main">
        <header className="topbar"><div><h2>{activePage}</h2><small>KHAYMIN / {activePage}</small></div><div className="student-user">👤 <b>{studentId}</b></div></header>
        <section className="page-content">{showContent()}</section>
        <footer className="portal-footer">KHAYMIN STUDENT PORTAL © 2026</footer>
      </main>
    </div>
  );
}

export default App;
