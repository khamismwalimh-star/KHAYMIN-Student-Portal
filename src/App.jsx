
import { useState } from "react";
import "./App.css";

function App() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const menu = [
    "Dashboard",
    "My Profile",
    "My Courses",
    "Timetable",
    "Attendance",
    "Results",
    "Fee Payment",
    "Announcements",
  ];

  const courses = [
    { code: "BIT101", name: "Introduction to IT", lecturer: "Mr. John" },
    { code: "BIT102", name: "Computer Programming", lecturer: "Mrs. Mary" },
    { code: "BIT103", name: "Database Systems", lecturer: "Mr. Peter" },
  ];

  const timetable = [
    { day: "Monday", time: "08:00 - 10:00", course: "Computer Programming" },
    { day: "Tuesday", time: "10:00 - 12:00", course: "Database Systems" },
    { day: "Wednesday", time: "08:00 - 10:00", course: "Introduction to IT" },
  ];

  function handleLogin(e) {
    e.preventDefault();
    if (studentId.trim() && password.trim()) {
      setLoggedIn(true);
    }
  }

  function showContent() {
    switch (activePage) {
      case "My Profile":
        return (
          <div className="portal-card">
            <h2>My Profile</h2>
            <p><b>Student Name:</b> {studentId}</p>
            <p><b>Academic Year:</b> 2026/2027</p>
            <p><b>Email Address:</b> student@khaymin.edu</p>
            <p><b>Student Status:</b> Active</p>
            <p><b>Student ID:</b> {studentId}</p>
            <p><b>Programme:</b> Information Technology</p>
            <p><b>Portal:</b> KHAYMIN Student Portal</p>
          </div>
        );

      case "My Courses":
        return (
          <div className="portal-card">
            <h2>My Courses</h2>
            <table>
              <thead>
                <tr><th>Code</th><th>Course</th><th>Lecturer</th></tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.code}>
                    <td>{c.code}</td>
                    <td>{c.name}</td>
                    <td>{c.lecturer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "Timetable":
        return (
          <div className="portal-card">
            <h2>Class Timetable</h2>
            <table>
              <thead>
                <tr><th>Day</th><th>Time</th><th>Course</th></tr>
              </thead>
              <tbody>
                {timetable.map((t, i) => (
                  <tr key={i}>
                    <td>{t.day}</td>
                    <td>{t.time}</td>
                    <td>{t.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "Attendance":
        return (
          <div className="portal-card">
            <h2>Attendance Record</h2>
            <div className="stat-card">
              <h3>Attendance Percentage</h3>
              <h1>85%</h1>
              <p>Sample attendance information</p>
            </div>
          </div>
        );

      case "Results":
        return (
          <div className="portal-card">
            <h2>Examination Results</h2>
            <table>
              <thead>
                <tr><th>Course</th><th>Marks</th><th>Grade</th></tr>
              </thead>
              <tbody>
                <tr><td>Introduction to IT</td><td>78</td><td>B+</td></tr>
                <tr><td>Programming</td><td>85</td><td>A</td></tr>
                <tr><td>Database Systems</td><td>72</td><td>B</td></tr>
              </tbody>
            </table>
          </div>
        );

      case "Fee Payment":
        return (
          <div className="portal-card">
            <h2>Fee Payment</h2>
            <p>Total Fees: <b>1,500,000</b></p>
            <p>Paid Amount: <b>1,000,000</b></p>
            <p>Balance: <b>500,000</b></p>
            <p className="notice">Sample fee information</p>
          </div>
        );

      case "Announcements":
        return (
          <div className="portal-card">
            <h2>Announcements</h2>
            <p>Welcome to KHAYMIN Student Portal.</p>
            <p>Check your timetable and academic updates regularly.</p>
          </div>
        );

      default:
        return (
          <>
            <div className="welcome">
              <h2>Welcome, {studentId}!</h2>
              <p>Welcome to your student academic portal.</p>
            </div>
            <div className="student-info">
  <h3>Student Information</h3>
  <p><b>Student ID:</b> {studentId}</p>
  <p><b>Academic Year:</b> 2026/2027</p>
  <p><b>Status:</b> Active</p>
</div>

            <div className="dashboard-grid">
              <div className="stat-card">
                <span>📚</span>
                <h3>My Courses</h3>
                <h1>3</h1>
              </div>
              <div className="stat-card">
                <span>📅</span>
                <h3>Attendance</h3>
                <h1>85%</h1>
              </div>
              <div className="stat-card">
                <span>🎓</span>
                <h3>Results</h3>
                <h1>3</h1>
              </div>
              <div className="stat-card">
                <span>💰</span>
                <h3>Fee Balance</h3>
                <h1>500K</h1>
              </div>
            </div>

            <div className="portal-card">
              <h2>Quick Information</h2>
              <p>Student ID: {studentId}</p>
              <p>Programme: Information Technology</p>
              <p>Academic Status: Active (Sample)</p>
            </div>
          </>
        );
    }
  }

  if (!loggedIn) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="logo">🎓</div>
          <h1>KHAYMIN</h1>
          <p className="subtitle">STUDENT PORTAL</p>
          <h2>Welcome Back</h2>
          <p>Login to access your student account</p>

          <form onSubmit={handleLogin}>
            <label>Student ID</label>
            <input
              placeholder="Enter Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">LOGIN</button>
          </form>
          <p className="footer">KHAYMIN STUDENT PORTAL</p>
        </div>
      </div>
    );
  }

  return (
    <div className="student-layout">
      <aside className="student-sidebar">
        <div className="brand">
          <span>🎓</span>
          <h2>KHAYMIN</h2>
          <small>STUDENT PORTAL</small>
        </div>

        <p className="menu-label">MAIN MENU</p>

        {menu.map((item) => (
          <button
            key={item}
            className={activePage === item ? "menu-active" : "menu-button"}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}

        <button
          className="logout-button"
          onClick={() => {
            setLoggedIn(false);
            setPassword("");
            setActivePage("Dashboard");
          }}
        >
          Logout
        </button>
      </aside>

      <main className="student-main">
        <header className="topbar">
          <div>
            <h2>{activePage}</h2>
            <small>KHAYMIN / {activePage}</small>
          </div>
          <div className="student-user">
            <span>👤</span>
            <b>{studentId}</b>
          </div>
        </header>

        <section className="page-content">
          {showContent()}
        </section>

        <footer className="portal-footer">
          KHAYMIN STUDENT PORTAL © 2026
        </footer>
      </main>
    </div>
  );
}

export default App;
