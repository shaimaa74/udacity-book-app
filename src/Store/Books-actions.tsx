import { UIActions } from './UI-slice';
import { BooksActions } from './Books-slice';

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAllBooks = () => {
  return async (dispatch: any) => {
    const getAll = async () => {
      const response = await fetch(`${api}/books`, { headers });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const dataJson = await response.json();
      const data = await dataJson.books;
      
      return data;
    };

    try {
      const allBooks = await getAll();
      dispatch(
        BooksActions.getAllBooks({
          books: allBooks || [],
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showError({
          errorMsg: 'Something went wrong'
        })
      );
    }
  };
};

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://react-http-6b4a6.firebaseio.com/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Sending cart data failed.');
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Sent cart data successfully!',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!',
//         })
//       );
//     }
//   };
// };