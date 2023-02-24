import { getAllBooks } from '../../Store/Books-actions';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from '../Books-list/Books-list';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: any) => state.books.books);

  useEffect(() => {
    dispatch<any>(getAllBooks());
  }, [dispatch]);
  return (
    <div>
      <BooksList books={books}/>
    </div>
  );
}

export default Home;
