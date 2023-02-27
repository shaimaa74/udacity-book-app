import { getAllBooks } from '../../Store/Books-actions';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from '../Books-list/Books-list';
import Error from '../../UI/Error/Error';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: any) => state.books.books);
  const error = useSelector((state:any) => state.ui.errorMsg);

  useEffect(() => {
    dispatch<any>(getAllBooks());
  }, []);
  return (
    <div>
      {error && (
        <Error errorMsg={error}/>
      )}
      {!error && (
        <BooksList books={books}/>
      )}
    </div>
  );
}

export default Home;
