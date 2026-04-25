## Lab 5.2 – TanStack Query Integration

### What change I wanted to make in my application

For this lab, I wanted to improve how my application manages data from the backend by replacing my manual useEffect and fetch approach with a better server state management solution. Previously, employee and organization data was loaded through custom logic and refreshed manually after adding records. I wanted to refactor this into a cleaner and more scalable solution. I implemented TanStack Query to manage fetching, caching, and updating data while keeping the existing application structure mostly unchanged.

### What tools I used to make this change

The main tool I used was TanStack Query (React Query), which provides query hooks, mutations, caching, and automatic refetching. I used useQuery to load employee department data and organization role data from the backend API. I used useMutation for adding new employees and then invalidated queries to automatically refresh data. I continued using my existing React, TypeScript, Express, and Prisma setup, but TanStack Query improved how the frontend interacts with server data.

### How this change affects user experience

This change improves user experience because data loading is more reliable and responsive. The application now caches previously fetched data, reducing unnecessary repeated requests. When a new employee is added, the employee list updates automatically without manual reload logic. Users experience smoother interactions and more consistent data behavior. This also makes the app feel more like a modern production-style application because server data is managed in a more efficient and predictable way.

### How this change affected my understanding of the application

This lab improved my understanding of the difference between local UI state and server state. Before this, I treated backend data similarly to regular React state and managed updates manually. Using TanStack Query helped me understand how specialized tools can simplify data fetching, caching, and synchronization. It also helped me better conceptualize the frontend and backend relationship, especially how mutations and automatic query invalidation can keep application data consistent.