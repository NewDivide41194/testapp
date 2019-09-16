import React, { useState } from 'react'
import EditBook from './editBook'
import MapView from './map/map'

const AddBook = (history) => {
    const [books, setBooks] = useState([])
    const [book, setBook] = useState({ book_title: '', book_type: '', author_id: '', img_url: '' })
    const [editMode, setEditMode] = useState(false)

    const GetBooks = () => {
        fetch('http://localhost:4000/books')
            .then(res => res.json())
            .then(result => setBooks(result))
            .catch(err => { alert(err) })
    }

    const AddBook = () => {
        fetch(`http://localhost:4000/books/add?book_title=${book.book_title}&book_type=${book.book_type}&author_id=${book.author_id}&img_url=${book.img_url}`)
            .then(console.log("Add Success"))
    }

    const _handleEdit = (editBook) => {
        setBook(editBook)
        setEditMode(true)
    }

    const _Update = () => {
        fetch(`http://localhost:4000/books/update?book_title=${book.book_title}&book_type=${book.book_type}&author_id=${book.author_id}&book_id=${book.book_id}&img_url=${book.img_url}`)
        alert('Data Updated')
    }

    const _handleDelete = (d) => {
        fetch(`http://localhost:4000/books/delete?book_id=${d}`)
            .then(GetBooks())
            .catch(err => console.log(err))
    }

    const _UploadIMG = (e) => {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setBook({ ...book, img_url: reader.result });
        }
        reader.readAsDataURL(file)
        console.log(file);

    }
    
    return (
        <div className='col-lg-6 col-md-12'>
            <form >
                <h2>Add Book</h2>
                <label>Book Title</label>
                <input className='form-control' onChange={e => setBook({ ...book, book_title: e.target.value })} value={book.book_title} required />
                <label>Book Type</label>
                <input className='form-control' onChange={e => setBook({ ...book, book_type: e.target.value })} value={book.book_type} required />
                <label>Author id</label>
                <input className='form-control' onChange={e => setBook({ ...book, author_id: e.target.value })} value={book.author_id} required />
                <input type='file' onChange={(e) => _UploadIMG(e)} />
                <div><img src={book.img_url} style={{ width: 100, height: 100 }} /></div>
                <button className='btn btn-dark m-2'>Upload Cover Photo</button>
                <button className='btn btn-primary m-2' onClick={editMode ? _Update : AddBook}>{editMode ? 'Update' : 'Add Books'}</button>
            </form>
            <hr />
            <button className='btn btn-success m-2' onClick={GetBooks}>Show Books</button>
            <div className='table-responsive'>
                <table className="table text-light">
                    <thead className='thead-dark'>
                        <th>No.</th>
                        <th>ID</th>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Author</th>
                    </thead>

                    {books.map((v, k) =>
                        <tbody key={k}>
                            <td>{k + 1}</td>
                            <td>{v.book_id}</td>
                            <td><img src={v.img_url} style={{ width: 100, height: 100 }} alt="Cover Photo" /></td>
                            <td>{v.book_title}</td>
                            <td>{v.book_type}</td>
                            <td>{v.author_name}</td>
                            <td>
                                <i onClick={() => _handleEdit(v)} style={{ cursor: 'pointer' }} className='fa fa-edit m-2 text-warning' />
                                <i onClick={() => _handleDelete(v.book_id)} style={{ cursor: 'pointer' }} className='fa fa-trash m-2 text-light' />
                            </td>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}
export default AddBook;