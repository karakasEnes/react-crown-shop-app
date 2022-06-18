import { createContext } from 'react';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// export const UserProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const { currentUser } = state;

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
