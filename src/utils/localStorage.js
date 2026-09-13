const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login page for the employee management system.",
        date: "2026-09-15",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Fix alignment and responsive issues in the navigation bar.",
        date: "2026-09-12",
        category: "Bug Fix",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update User Profile",
        description: "Add functionality to allow employees to update their profile information.",
        date: "2026-09-10",
        category: "Feature",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write API Documentation",
        description: "Document all authentication and employee-related API endpoints.",
        date: "2026-09-08",
        category: "Documentation",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Create Dashboard",
        description: "Build the main employee dashboard with task statistics.",
        date: "2026-09-16",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Cleanup",
        description: "Remove duplicate and unused records from the database.",
        date: "2026-09-13",
        category: "Database",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Test Authentication",
        description: "Test login and logout functionality for employees and admins.",
        date: "2026-09-09",
        category: "Testing",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Password Validation",
        description: "Fix validation issues in the password field.",
        date: "2026-09-07",
        category: "Bug Fix",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Add Loading Screen",
        description: "Create a loading component for API requests.",
        date: "2026-09-18",
        category: "UI",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Build Employee Card",
        description: "Create reusable employee cards for the dashboard.",
        date: "2026-09-14",
        category: "Frontend",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Implement Search",
        description: "Add employee search functionality to the dashboard.",
        date: "2026-09-12",
        category: "Feature",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Responsive Design",
        description: "Make the dashboard responsive for mobile and tablet screens.",
        date: "2026-09-10",
        category: "UI",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Create Task Form",
        description: "Build a form that allows admins to create new tasks.",
        date: "2026-09-17",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task Filtering",
        description: "Add filters for active, completed, and failed tasks.",
        date: "2026-09-15",
        category: "Feature",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "UI Testing",
        description: "Test all major UI components and fix visual issues.",
        date: "2026-09-11",
        category: "Testing",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress dashboard images to improve page performance.",
        date: "2026-09-06",
        category: "Performance",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create Error Page",
        description: "Create a custom 404 and error page for the application.",
        date: "2026-09-19",
        category: "Frontend",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Documentation",
        description: "Update project documentation with the latest features.",
        date: "2026-09-20",
        category: "Documentation",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Setup Notifications",
        description: "Implement notifications for newly assigned tasks.",
        date: "2026-09-16",
        category: "Feature",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Dashboard Layout",
        description: "Resolve spacing and alignment problems on the dashboard.",
        date: "2026-09-13",
        category: "Bug Fix",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Write unit tests for employee task functionality.",
        date: "2026-09-10",
        category: "Testing",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Improve Performance",
        description: "Optimize unnecessary React renders and API calls.",
        date: "2026-09-08",
        category: "Performance",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Add Logout Feature",
        description: "Implement logout functionality and clear authentication state.",
        date: "2026-09-18",
        category: "Authentication",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      }
    ]
  }
]

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "123"
  }
]

export const setLocalStorage = () =>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))

}
export const getLocalStorage =() =>{
  const employees =  JSON.parse(localStorage.getItem("employees")) 
  const admin =  JSON.parse(localStorage.getItem("admin")) 
   return {employees,admin}


}